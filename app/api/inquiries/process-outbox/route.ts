import { NextResponse } from "next/server";
import { processInquiryOutboxBatch } from "@/lib/server/inquiry-outbox";

function isAuthorized(headers: Headers): boolean {
  const secret = process.env.INQUIRY_CRON_SECRET;
  if (!secret) return false;
  const bearer = headers.get("authorization");
  const headerSecret = headers.get("x-inquiry-cron-secret");
  return bearer === `Bearer ${secret}` || headerSecret === secret;
}

async function processOutbox(req: Request) {
  if (!isAuthorized(req.headers)) {
    return NextResponse.json(
      { ok: false, error: "Unauthorized. Configure INQUIRY_CRON_SECRET to use this endpoint." },
      { status: 401 }
    );
  }
  const result = await processInquiryOutboxBatch();
  return NextResponse.json({ ok: true, ...result });
}

export async function GET(req: Request) {
  return processOutbox(req);
}

export async function POST(req: Request) {
  return processOutbox(req);
}

