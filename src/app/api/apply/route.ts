import { clean, cleanMultiline, clientKey, isEmail, isUrl, jsonError, notConfiguredMessage, rateLimited, sendNotification } from "@/lib/api";
import { saveApplication, storageConfigured, StorageUnavailableError } from "@/lib/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;

    if (clean(body.website, 100)) {
      return Response.json({ ok: true });
    }

    if (rateLimited(clientKey(request), 5)) {
      return jsonError("Too many applications from this connection. Please try again later.", 429);
    }

    const name = clean(body.name, 120);
    const email = clean(body.email, 180).toLowerCase();
    const phone = clean(body.phone, 40);
    const role = clean(body.role, 80);
    const portfolioUrl = clean(body.portfolioUrl, 300);
    const message = cleanMultiline(body.message, 3000);

    if (name.length < 2) return jsonError("Please share your name.");
    if (!isEmail(email)) return jsonError("Please enter a valid email address.");
    if (!role) return jsonError("Please choose the area you work in.");
    if (!isUrl(portfolioUrl)) return jsonError("Please enter a valid portfolio link.");
    if (message.length < 10) return jsonError("Tell us a little about your skills and experience.");

    if (!storageConfigured()) return jsonError(notConfiguredMessage, 503);

    const record = {
      name,
      email,
      phone: phone || null,
      role,
      portfolioUrl: portfolioUrl || null,
      message,
    };

    const { driver } = await saveApplication(record);

    await sendNotification(`New creator application — ${role}`, [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "—"}`,
      `Area: ${role}`,
      `Portfolio: ${portfolioUrl || "—"}`,
      `Stored in: ${driver}`,
      "",
      message,
    ]);

    return Response.json({ ok: true });
  } catch (error) {
    console.error("creator application error", error);
    if (error instanceof StorageUnavailableError) {
      return jsonError(notConfiguredMessage, 503);
    }
    return jsonError("We could not submit your application right now. Please DM us on Instagram.", 500);
  }
}
