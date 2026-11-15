import { storageConfigured, storageStatus } from "@/lib/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const status = await storageStatus();
  const connected = storageConfigured();

  return Response.json(
    {
      ok: true,
      storage: status,
      hint: connected
        ? `Enquiries are being stored via: ${status.active}.`
        : "No form storage configured. Set DATABASE_URL or FORM_ENDPOINT, or run on a regular server for file storage.",
    },
    { status: 200 },
  );
}
