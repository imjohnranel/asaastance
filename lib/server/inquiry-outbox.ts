import { getSupabaseAdmin } from "@/lib/server/supabase-admin";

const OUTBOX_BATCH_SIZE = 20;

type OutboxRow = {
  id: string;
  inquiry_id: string;
  attempts: number;
  payload: { to?: string[] };
};

function nextAttemptAtIso(attempts: number): string {
  const minutes = Math.min(60, 2 ** Math.max(1, attempts));
  return new Date(Date.now() + minutes * 60_000).toISOString();
}

async function sendEmailViaResend(args: {
  to: string[];
  fullName: string;
  workEmail: string;
  company: string | null;
  nextStep: string;
  message: string;
  inquiryId: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.INQUIRY_EMAIL_FROM || "Asaastance Inquiries <noreply@asaastance.com>";
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  const subject = `New Inquiry - ${args.fullName}`;
  const html = `
    <h2>New inquiry received</h2>
    <p><strong>Inquiry ID:</strong> ${args.inquiryId}</p>
    <p><strong>Full name:</strong> ${args.fullName}</p>
    <p><strong>Work email:</strong> ${args.workEmail}</p>
    <p><strong>Company:</strong> ${args.company || "-"}</p>
    <p><strong>Next step:</strong> ${args.nextStep}</p>
    <p><strong>Message:</strong></p>
    <pre style="white-space:pre-wrap;font-family:inherit;">${args.message}</pre>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: args.to,
      subject,
      html,
      reply_to: args.workEmail,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Resend error: ${res.status} ${text}`);
  }
}

export async function processInquiryOutboxBatch() {
  const leadsDb = getSupabaseAdmin().schema("leads");
  const nowIso = new Date().toISOString();
  const { data: pending, error: pendingError } = await leadsDb
    .from("outbox")
    .select("id, inquiry_id, attempts, payload")
    .eq("status", "pending")
    .lte("next_attempt_at", nowIso)
    .order("created_at", { ascending: true })
    .limit(OUTBOX_BATCH_SIZE);

  if (pendingError) {
    throw new Error("Failed to load outbox queue.");
  }

  let processed = 0;
  let sent = 0;
  let failed = 0;

  for (const row of (pending || []) as OutboxRow[]) {
    const { data: claim, error: claimError } = await leadsDb
      .from("outbox")
      .update({ status: "processing" })
      .eq("id", row.id)
      .eq("status", "pending")
      .select("id")
      .maybeSingle();

    if (claimError || !claim) continue;
    processed += 1;

    const { data: inquiry, error: inquiryError } = await leadsDb
      .from("inquiries")
      .select("id, full_name, work_email, company, next_step, message")
      .eq("id", row.inquiry_id)
      .maybeSingle();

    if (inquiryError || !inquiry) {
      failed += 1;
      await leadsDb
        .from("outbox")
        .update({
          status: "failed",
          attempts: row.attempts + 1,
          last_error: "Inquiry record missing for outbox item.",
          next_attempt_at: nextAttemptAtIso(row.attempts + 1),
        })
        .eq("id", row.id);
      continue;
    }

    const recipients = Array.isArray(row.payload?.to) && row.payload.to.length > 0
      ? row.payload.to
      : ["daniel@asaastance.com", "john@asaastance.com"];

    try {
      await sendEmailViaResend({
        to: recipients,
        fullName: inquiry.full_name,
        workEmail: inquiry.work_email,
        company: inquiry.company,
        nextStep: inquiry.next_step,
        message: inquiry.message,
        inquiryId: inquiry.id,
      });

      sent += 1;
      await leadsDb
        .from("outbox")
        .update({
          status: "sent",
          sent_at: new Date().toISOString(),
          attempts: row.attempts + 1,
          last_error: null,
        })
        .eq("id", row.id);
    } catch (err) {
      failed += 1;
      await leadsDb
        .from("outbox")
        .update({
          status: "pending",
          attempts: row.attempts + 1,
          last_error: err instanceof Error ? err.message : "Unknown send failure",
          next_attempt_at: nextAttemptAtIso(row.attempts + 1),
        })
        .eq("id", row.id);
    }
  }

  return { processed, sent, failed };
}

