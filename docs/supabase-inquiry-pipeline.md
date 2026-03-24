# Supabase Inquiry Lead Pipeline Runbook

This runbook configures `/inquiry` to:

1. Save inquiries in Supabase (`leads.inquiries`)
2. Queue email jobs (`leads.outbox`)
3. Process email notifications to `daniel@asaastance.com` and `john@asaastance.com`

## 1) Apply database schema and RLS

Run the SQL file in Supabase SQL Editor:

- `supabase/sql/inquiry_lead_pipeline.sql`

This creates:

- `leads.inquiries`
- `leads.outbox`
- `leads.inquiries_latest` view
- RLS policies
- RPC function `leads.create_inquiry_and_enqueue(...)`

## 2) Configure environment variables

Set these in Vercel (and local `.env.local`):

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (server only)
- `INQUIRY_NOTIFY_TO` (optional; default is Daniel + John)
- `INQUIRY_IP_HASH_SALT` (recommended random value)
- `INQUIRY_CRON_SECRET` (optional; only needed for manual/secured worker endpoint calls)
- `RESEND_API_KEY` (for actual email delivery)
- `INQUIRY_EMAIL_FROM` (optional; default fallback is used)

## 3) Endpoint behavior

- `POST /api/inquiries`
  - Validates payload
  - Honeypot + minimum fill-time anti-spam
  - IP-hash rate limiting
  - Transactional insert via Supabase RPC (inquiry + outbox)
  - Best-effort, non-blocking outbox drain after enqueue

- `GET/POST /api/inquiries/process-outbox`
  - Auth: `Authorization: Bearer <INQUIRY_CRON_SECRET>` or `x-inquiry-cron-secret`
  - Claims pending outbox jobs
  - Sends via Resend API
  - Retries with exponential backoff

## 4) No-cron mode (Hobby-compatible)

Vercel Cron is intentionally removed. Outbox processing runs opportunistically when users submit inquiries.

- Lead capture remains primary and reliable: inquiry rows are written before any email send attempt.
- If email provider is unavailable, `leads.outbox` keeps pending jobs for retries.
- You can still run manual drains by calling `/api/inquiries/process-outbox` with `INQUIRY_CRON_SECRET`.

## 5) Manual smoke test

1. Submit `/inquiry` form.
2. Confirm a new row appears in `leads.inquiries`.
3. Confirm a matching `pending` row appears in `leads.outbox`.
4. Trigger worker manually (optional but recommended for validation):
   - `curl -H "Authorization: Bearer $INQUIRY_CRON_SECRET" https://<your-domain>/api/inquiries/process-outbox`
5. Confirm `leads.outbox.status = sent` and both recipient inboxes receive notification.

## 6) Deployment readiness checklist

- [ ] `npm run lint` passes
- [ ] `npm run build` passes
- [ ] Supabase SQL applied successfully
- [ ] All required env vars set in Vercel (`INQUIRY_CRON_SECRET` optional in no-cron mode)
- [ ] `/api/inquiries` returns success for valid payload
- [ ] Spam trap works (`website` honeypot gets rejected)
- [ ] Rate limit returns `429` after threshold
- [ ] Outbox retries when provider fails
- [ ] No secrets exposed client-side

