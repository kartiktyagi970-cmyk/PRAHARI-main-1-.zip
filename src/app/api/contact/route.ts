import { clean, cleanMultiline, clientKey, isEmail, jsonError, notConfiguredMessage, rateLimited, reference, sendNotification } from "@/lib/api";
import { saveInquiry, storageConfigured, StorageUnavailableError } from "@/lib/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;

    // Honeypot — bots fill the hidden field and get a harmless success.
    if (clean(body.website, 100)) {
      return Response.json({ ok: true, reference: reference("EX") });
    }

    if (rateLimited(clientKey(request))) {
      return jsonError("Too many messages from this connection. Please try again shortly.", 429);
    }

    const name = clean(body.name, 120);
    const email = clean(body.email, 180).toLowerCase();
    const phone = clean(body.phone, 40);
    const company = clean(body.company, 160);
    const service = clean(body.service, 120);
    const budget = clean(body.budget, 80);
    const message = cleanMultiline(body.message, 4000);

    if (name.length < 2) return jsonError("Please share your name.");
    if (!isEmail(email)) return jsonError("Please enter a valid email address.");
    if (!service) return jsonError("Please select a service.");
    if (message.length < 10) return jsonError("Please tell us a little more about your project.");

    if (!storageConfigured()) return jsonError(notConfiguredMessage, 503);

    const ref = reference("EX");
    const record = {
      reference: ref,
      name,
      email,
      phone: phone || null,
      company: company || null,
      service,
      budget: budget || null,
      message,
      source: clean(body.source, 60) || "website",
    };

    const { driver } = await saveInquiry(record);

    await sendNotification(`New enquiry ${ref} — ${service}`, [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "—"}`,
      `Business: ${company || "—"}`,
      `Service: ${service}`,
      `Budget: ${budget || "—"}`,
      `Reference: ${ref}`,
      `Stored in: ${driver}`,
      "",
      message,
    ]);

    return Response.json({ ok: true, reference: ref });
  } catch (error) {
    console.error("contact error", error);
    if (error instanceof StorageUnavailableError) {
      return jsonError(notConfiguredMessage, 503);
    }
    return jsonError("We could not send your message right now. Please try WhatsApp or email us directly.", 500);
  }
}
