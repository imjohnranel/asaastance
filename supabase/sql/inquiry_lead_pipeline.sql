-- Inquiry lead pipeline schema for Supabase
-- Run this in the Supabase SQL editor.

create extension if not exists pgcrypto;

create schema if not exists leads;

create table if not exists leads.inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text not null check (char_length(trim(full_name)) between 2 and 120),
  work_email text not null check (position('@' in work_email) > 1),
  company text null,
  next_step text not null,
  message text not null,
  source_page text not null default '/inquiry',
  source_utm jsonb null,
  ip_hash text null,
  user_agent text null,
  status text not null default 'new' check (status in ('new', 'contacted', 'won', 'lost')),
  fingerprint text generated always as (
    encode(digest(lower(work_email) || '|' || coalesce(message, ''), 'sha256'), 'hex')
  ) stored
);

create table if not exists leads.outbox (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  inquiry_id uuid not null references leads.inquiries(id) on delete cascade,
  kind text not null check (kind in ('inquiry_notification')),
  payload jsonb not null,
  status text not null default 'pending' check (status in ('pending', 'processing', 'sent', 'failed')),
  attempts integer not null default 0,
  last_error text null,
  next_attempt_at timestamptz not null default now(),
  sent_at timestamptz null
);

create index if not exists inquiries_created_at_idx on leads.inquiries (created_at desc);
create index if not exists inquiries_status_idx on leads.inquiries (status);
create index if not exists inquiries_work_email_idx on leads.inquiries (lower(work_email));
create index if not exists inquiries_ip_hash_created_at_idx on leads.inquiries (ip_hash, created_at desc);
create unique index if not exists inquiries_fingerprint_unique_idx on leads.inquiries (fingerprint);

create index if not exists outbox_status_next_attempt_idx on leads.outbox (status, next_attempt_at);
create index if not exists outbox_inquiry_id_idx on leads.outbox (inquiry_id);

create or replace function leads.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists leads_outbox_set_updated_at on leads.outbox;
create trigger leads_outbox_set_updated_at
before update on leads.outbox
for each row execute function leads.set_updated_at();

alter table leads.inquiries enable row level security;
alter table leads.outbox enable row level security;

drop policy if exists inquiries_admin_read on leads.inquiries;
create policy inquiries_admin_read
on leads.inquiries
for select
to authenticated
using (
  (auth.jwt() ->> 'app_role') = 'admin'
  or lower(auth.jwt() ->> 'email') in ('daniel@asaastance.com', 'john@asaastance.com')
);

drop policy if exists outbox_admin_read on leads.outbox;
create policy outbox_admin_read
on leads.outbox
for select
to authenticated
using (
  (auth.jwt() ->> 'app_role') = 'admin'
  or lower(auth.jwt() ->> 'email') in ('daniel@asaastance.com', 'john@asaastance.com')
);

create or replace function leads.create_inquiry_and_enqueue(
  p_full_name text,
  p_work_email text,
  p_company text,
  p_next_step text,
  p_message text,
  p_source_page text default '/inquiry',
  p_source_utm jsonb default null,
  p_ip_hash text default null,
  p_user_agent text default null,
  p_notify_to text[] default array['daniel@asaastance.com', 'john@asaastance.com']
)
returns uuid
language plpgsql
security definer
set search_path = public, leads
as $$
declare
  v_id uuid;
begin
  insert into leads.inquiries (
    full_name, work_email, company, next_step, message, source_page, source_utm, ip_hash, user_agent
  ) values (
    p_full_name, lower(trim(p_work_email)), nullif(trim(p_company), ''), p_next_step, p_message, p_source_page, p_source_utm, p_ip_hash, p_user_agent
  )
  returning id into v_id;

  insert into leads.outbox (inquiry_id, kind, payload)
  values (
    v_id,
    'inquiry_notification',
    jsonb_build_object(
      'to', p_notify_to,
      'inquiry_id', v_id
    )
  );

  return v_id;
end;
$$;

revoke all on function leads.create_inquiry_and_enqueue(text, text, text, text, text, text, jsonb, text, text, text[]) from public;
grant execute on function leads.create_inquiry_and_enqueue(text, text, text, text, text, text, jsonb, text, text, text[]) to service_role;

create or replace view leads.inquiries_latest as
select
  i.id,
  i.created_at,
  i.full_name,
  i.work_email,
  i.company,
  i.next_step,
  i.status,
  i.source_page
from leads.inquiries i
order by i.created_at desc;
