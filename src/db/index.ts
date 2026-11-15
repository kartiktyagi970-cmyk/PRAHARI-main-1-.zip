import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

type Database = ReturnType<typeof drizzle>;

type DbGlobal = typeof globalThis & {
  __elevatexPool?: Pool;
  __elevatexDb?: Database;
};

const globalForDb = globalThis as DbGlobal;

/** True when a database connection string is present in the environment. */
export function databaseConfigured() {
  return Boolean(process.env.DATABASE_URL);
}

/**
 * Lazily creates the PostgreSQL connection.
 * Importing this module never throws, so the app still builds and renders
 * even when DATABASE_URL is not set (for example before hosting is configured).
 */
export function getDb(): Database {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    throw new Error("DATABASE_URL is not configured");
  }

  if (!globalForDb.__elevatexDb) {
    const pool =
      globalForDb.__elevatexPool ??
      new Pool({
        connectionString: databaseUrl,
        max: 5,
        idleTimeoutMillis: 30_000,
        connectionTimeoutMillis: 10_000,
      });
    globalForDb.__elevatexPool = pool;
    globalForDb.__elevatexDb = drizzle(pool);
  }

  return globalForDb.__elevatexDb;
}
