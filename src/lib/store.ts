import { promises as fs } from "node:fs";
import { eq, sql } from "drizzle-orm";
import os from "node:os";
import path from "node:path";
import { databaseConfigured, getDb } from "@/db";
import { creatorApplications, inquiries, subscribers } from "@/db/schema";

/**
 * Storage for website forms.
 *
 * Priority: PostgreSQL (DATABASE_URL) → webhook (FORM_ENDPOINT) → local file.
 * The file driver is only enabled on a normal long-running server, never on
 * ephemeral serverless filesystems, so a submission is never silently lost.
 */

export class StorageUnavailableError extends Error {
  constructor(message = "No form storage is configured") {
    super(message);
    this.name = "StorageUnavailableError";
  }
}

export type InquiryRecord = {
  reference: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  service: string;
  budget: string | null;
  message: string;
  source: string;
};

export type ApplicationRecord = {
  name: string;
  email: string;
  phone: string | null;
  role: string;
  portfolioUrl: string | null;
  message: string;
};

const isServerless = () =>
  Boolean(
    process.env.VERCEL ||
      process.env.NETLIFY ||
      process.env.AWS_LAMBDA_FUNCTION_NAME ||
      process.env.CF_PAGES,
  );

export const endpointConfigured = () => Boolean(process.env.FORM_ENDPOINT);
export const fileConfigured = () => !isServerless() && process.env.DISABLE_FILE_STORAGE !== "true";

export function storageConfigured() {
  return databaseConfigured() || endpointConfigured() || fileConfigured();
}

async function dataDir() {
  const candidates = [path.join(process.cwd(), ".data"), path.join(os.tmpdir(), "elevatex-data")];
  for (const dir of candidates) {
    try {
      await fs.mkdir(dir, { recursive: true });
      await fs.access(dir);
      return dir;
    } catch {
      /* try next location */
    }
  }
  return null;
}

async function appendToFile(bucket: string, record: Record<string, unknown>) {
  const dir = await dataDir();
  if (!dir) return false;
  try {
    const line = `${JSON.stringify({ ...record, receivedAt: new Date().toISOString() })}\n`;
    await fs.appendFile(path.join(dir, `${bucket}.jsonl`), line, "utf8");
    return true;
  } catch (error) {
    console.error("file storage failed", error);
    return false;
  }
}

async function readFile(bucket: string) {
  const dir = await dataDir();
  if (!dir) return [] as Record<string, unknown>[];
  try {
    const raw = await fs.readFile(path.join(dir, `${bucket}.jsonl`), "utf8");
    return raw
      .split("\n")
      .filter(Boolean)
      .map((line) => JSON.parse(line) as Record<string, unknown>);
  } catch {
    return [] as Record<string, unknown>[];
  }
}

async function postToEndpoint(payload: Record<string, unknown>) {
  const url = process.env.FORM_ENDPOINT;
  if (!url) return false;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ ...payload, site: "elevatex-digital" }),
    });
    return response.ok;
  } catch (error) {
    console.error("form endpoint failed", error);
    return false;
  }
}

export type SaveResult = { driver: "database" | "endpoint" | "file" };

async function save(bucket: string, payload: Record<string, unknown>, writeDb: () => Promise<void>): Promise<SaveResult> {
  let databaseError: unknown = null;

  if (databaseConfigured()) {
    try {
      await writeDb();
      return { driver: "database" };
    } catch (error) {
      databaseError = error;
      console.error("database storage failed", error);
    }
  }

  if (endpointConfigured() && (await postToEndpoint(payload))) {
    return { driver: "endpoint" };
  }

  if (fileConfigured() && (await appendToFile(bucket, payload))) {
    return { driver: "file" };
  }

  if (databaseError) {
    throw new StorageUnavailableError("Database is unreachable and no fallback storage responded");
  }
  throw new StorageUnavailableError();
}

export function saveInquiry(record: InquiryRecord) {
  return save("inquiries", { type: "inquiry", ...record }, async () => {
    await getDb().insert(inquiries).values(record);
  });
}

export function saveApplication(record: ApplicationRecord) {
  return save("creator-applications", { type: "creator-application", ...record }, async () => {
    await getDb().insert(creatorApplications).values(record);
  });
}

export async function saveSubscriber(email: string): Promise<SaveResult> {
  return save("subscribers", { type: "subscriber", email }, async () => {
    await getDb().insert(subscribers).values({ email }).onConflictDoNothing({ target: subscribers.email });
  });
}

export async function subscriberExists(email: string) {
  if (databaseConfigured()) {
    try {
      const rows = await getDb()
        .select({ id: subscribers.id })
        .from(subscribers)
        .where(eq(subscribers.email, email))
        .limit(1);
      return rows.length > 0;
    } catch {
      /* fall through to file check */
    }
  }
  const rows = await readFile("subscribers");
  return rows.some((row) => row.email === email);
}

export async function storageStatus() {
  const status: {
    database: "not-configured" | "connected" | "unreachable";
    endpoint: "configured" | "not-configured";
    file: "enabled" | "disabled";
    active?: "database" | "endpoint" | "file" | "none";
  } = {
    database: "not-configured",
    endpoint: endpointConfigured() ? "configured" : "not-configured",
    file: fileConfigured() ? "enabled" : "disabled",
  };

  if (databaseConfigured()) {
    try {
      await getDb().execute(sql`select 1`);
      status.database = "connected";
    } catch {
      status.database = "unreachable";
    }
  }

  const active =
    status.database === "connected"
      ? "database"
      : status.endpoint === "configured"
        ? "endpoint"
        : status.file === "enabled"
          ? "file"
          : "none";

  return { ...status, active };
}
