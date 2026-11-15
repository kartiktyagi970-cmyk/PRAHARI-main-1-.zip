import { site } from "@/lib/site";

/** Shared helpers for the public API routes. */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const hits = new Map<string, number[]>();

export function clientKey(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  return (forwarded ? forwarded.split(",")[0] : request.headers.get("x-real-ip")) ?? "local";
}

export function rateLimited(key: string, limit = 6, windowMs = 60 * 60 * 1000) {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((time) => now - time < windowMs);
  if (recent.length >= limit) {
    hits.set(key, recent);
    return true;
  }
  recent.push(now);
  hits.set(key, recent);
  return false;
}

export function clean(value: unknown, max = 300) {
  if (typeof value !== "string") return "";
  return value.replace(/\s+/g, " ").trim().slice(0, max);
}

export function cleanMultiline(value: unknown, max = 4000) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

export function isEmail(value: string) {
  return EMAIL_RE.test(value);
}

export function isUrl(value: string) {
  if (!value) return true;
  try {
    const url = new URL(value.startsWith("http") ? value : `https://${value}`);
    return Boolean(url.hostname.includes("."));
  } catch {
    return false;
  }
}

export function reference(prefix: string) {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 5; i += 1) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return `${prefix}-${code}`;
}

export function jsonError(message: string, status = 400) {
  return Response.json({ ok: false, error: message }, { status });
}

export const notConfiguredMessage =
  "Online forms are not connected yet on this deployment. Please message us on WhatsApp or email us directly.";

/**
 * Optional email notification through Resend (https://resend.com).
 * Only runs when RESEND_API_KEY is configured; failures never break the request.
 */
export async function sendNotification(subject: string, lines: string[]) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;

  const to = process.env.CONTACT_TO_EMAIL || site.contact.email;
  const from = process.env.CONTACT_FROM_EMAIL || "ElevateX Website <onboarding@resend.dev>";

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject,
        text: lines.join("\n"),
      }),
    });
    return response.ok;
  } catch (error) {
    console.error("notification failed", error);
    return false;
  }
}
