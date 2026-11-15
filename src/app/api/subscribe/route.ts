import { clean, clientKey, isEmail, jsonError, notConfiguredMessage, rateLimited } from "@/lib/api";
import { saveSubscriber, storageConfigured, subscriberExists, StorageUnavailableError } from "@/lib/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const email = clean(body.email, 180).toLowerCase();

    if (!isEmail(email)) return jsonError("Please enter a valid email address.");
    if (!storageConfigured()) return jsonError(notConfiguredMessage, 503);
    if (rateLimited(clientKey(request), 8)) return jsonError("Please try again later.", 429);

    if (await subscriberExists(email)) {
      return Response.json({ ok: true });
    }

    await saveSubscriber(email);
    return Response.json({ ok: true });
  } catch (error) {
    console.error("subscribe error", error);
    if (error instanceof StorageUnavailableError) {
      return jsonError(notConfiguredMessage, 503);
    }
    return jsonError("Subscription is temporarily unavailable.", 500);
  }
}
