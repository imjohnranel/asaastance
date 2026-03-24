import { createHash } from "node:crypto";

export type InquiryPayload = {
  fullName: string;
  email: string;
  company?: string;
  nextStep: string;
  message: string;
  website?: string; // honeypot
  formStartedAt?: string;
  sourcePage?: string;
  sourceUtm?: Record<string, string>;
};

type ValidationResult =
  | { ok: true; data: Required<Pick<InquiryPayload, "fullName" | "email" | "nextStep" | "message">> & InquiryPayload }
  | { ok: false; reason: string; status: number };

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
const MIN_FORM_FILL_MS = 1200;
const MAX_MESSAGE_CHARS = 5000;

export function validateInquiryPayload(raw: unknown): ValidationResult {
  if (!raw || typeof raw !== "object") {
    return { ok: false, reason: "Invalid payload.", status: 400 };
  }

  const payload = raw as Record<string, unknown>;

  const fullName = String(payload.fullName ?? "").trim();
  const email = String(payload.email ?? "").trim().toLowerCase();
  const company = String(payload.company ?? "").trim();
  const nextStep = String(payload.nextStep ?? "").trim();
  const message = String(payload.message ?? "").trim();
  const website = String(payload.website ?? "").trim();
  const formStartedAt = String(payload.formStartedAt ?? "").trim();

  if (website) {
    return { ok: false, reason: "Spam detected.", status: 400 };
  }

  if (formStartedAt) {
    const startedAt = Number.parseInt(formStartedAt, 10);
    if (!Number.isNaN(startedAt)) {
      const elapsed = Date.now() - startedAt;
      if (elapsed < MIN_FORM_FILL_MS) {
        return { ok: false, reason: "Submitted too quickly.", status: 429 };
      }
    }
  }

  if (fullName.length < 2 || fullName.length > 120) {
    return { ok: false, reason: "Full name is required.", status: 400 };
  }

  if (!EMAIL_REGEX.test(email)) {
    return { ok: false, reason: "A valid email is required.", status: 400 };
  }

  if (nextStep.length < 1 || nextStep.length > 120) {
    return { ok: false, reason: "Next step is required.", status: 400 };
  }

  if (message.length < 10 || message.length > MAX_MESSAGE_CHARS) {
    return { ok: false, reason: "Message must be between 10 and 5000 characters.", status: 400 };
  }

  return {
    ok: true,
    data: {
      fullName,
      email,
      company,
      nextStep,
      message,
      website,
      formStartedAt,
      sourcePage: typeof payload.sourcePage === "string" ? payload.sourcePage : "/inquiry",
      sourceUtm: isStringRecord(payload.sourceUtm) ? payload.sourceUtm : undefined,
    },
  };
}

function isStringRecord(value: unknown): value is Record<string, string> {
  if (!value || typeof value !== "object") return false;
  return Object.values(value).every((v) => typeof v === "string");
}

export function hashIpAddress(ip: string | null): string | null {
  if (!ip) return null;
  const salt = process.env.INQUIRY_IP_HASH_SALT || "asaastance-inquiry";
  return createHash("sha256").update(`${salt}:${ip}`).digest("hex");
}

export function getClientIp(requestHeaders: Headers): string | null {
  const forwarded = requestHeaders.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    return first || null;
  }
  return requestHeaders.get("x-real-ip");
}

export function parseInquiryRecipients(): string[] {
  const raw = process.env.INQUIRY_NOTIFY_TO || "daniel@asaastance.com,john@asaastance.com";
  return raw
    .split(",")
    .map((v) => v.trim().toLowerCase())
    .filter(Boolean);
}

