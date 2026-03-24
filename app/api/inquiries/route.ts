import { NextResponse } from "next/server";
import { hashIpAddress, getClientIp, parseInquiryRecipients, validateInquiryPayload } from "@/lib/inquiry";
import { getSupabaseAdmin } from "@/lib/server/supabase-admin";
import { processInquiryOutboxBatch } from "@/lib/server/inquiry-outbox";

const RATE_LIMIT_WINDOW_MINUTES = 15;
const RATE_LIMIT_MAX_ATTEMPTS = 5;

function minutesAgoIso(minutes: number): string {
  return new Date(Date.now() - minutes * 60_000).toISOString();
}

export async function POST(req: Request) {
  try {
    const leadsDb = getSupabaseAdmin().schema("leads");
    const payload = await req.json();
    const validation = validateInquiryPayload(payload);
    if (!validation.ok) {
      return NextResponse.json({ ok: false, error: validation.reason }, { status: validation.status });
    }

    const headers = req.headers;
    const ipHash = hashIpAddress(getClientIp(headers));
    const userAgent = headers.get("user-agent");

    if (ipHash) {
      const since = minutesAgoIso(RATE_LIMIT_WINDOW_MINUTES);
      const { count, error: countError } = await leadsDb
        .from("inquiries")
        .select("id", { count: "exact", head: true })
        .eq("ip_hash", ipHash)
        .gte("created_at", since);

      if (countError) {
        return NextResponse.json({ ok: false, error: "Failed rate limit check." }, { status: 500 });
      }

      if ((count ?? 0) >= RATE_LIMIT_MAX_ATTEMPTS) {
        return NextResponse.json({ ok: false, error: "Too many requests. Try again later." }, { status: 429 });
      }
    }

    const notifyTo = parseInquiryRecipients();
    const { data, error } = await leadsDb.rpc("create_inquiry_and_enqueue", {
      p_full_name: validation.data.fullName,
      p_work_email: validation.data.email,
      p_company: validation.data.company || null,
      p_next_step: validation.data.nextStep,
      p_message: validation.data.message,
      p_source_page: validation.data.sourcePage || "/inquiry",
      p_source_utm: validation.data.sourceUtm || null,
      p_ip_hash: ipHash,
      p_user_agent: userAgent,
      p_notify_to: notifyTo,
    });

    if (error) {
      // Unique fingerprint duplicate insert.
      if (error.code === "23505") {
        return NextResponse.json({ ok: true, duplicate: true });
      }
      return NextResponse.json({ ok: false, error: "Failed to save inquiry." }, { status: 500 });
    }

    // Best-effort async outbox drain without blocking user response.
    void processInquiryOutboxBatch().catch(() => {});

    return NextResponse.json({ ok: true, inquiryId: data });
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }
}

