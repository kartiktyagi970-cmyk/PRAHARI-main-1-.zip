import "dotenv/config";
import { defineConfig } from "drizzle-kit";

const url = process.env.DATABASE_URL;

if (!url) {
  throw new Error(
    "DATABASE_URL is required to run drizzle-kit. Add it to .env or pass it inline:\n" +
      '  DATABASE_URL="postgresql://..." npx drizzle-kit push',
  );
}

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dbCredentials: { url },
  strict: false,
  verbose: true,
});
