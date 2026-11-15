import { index, pgTable, serial, text, timestamp, uniqueIndex, varchar } from "drizzle-orm/pg-core";

export const inquiries = pgTable(
  "inquiries",
  {
    id: serial("id").primaryKey(),
    reference: varchar("reference", { length: 20 }).notNull(),
    name: varchar("name", { length: 120 }).notNull(),
    email: varchar("email", { length: 180 }).notNull(),
    phone: varchar("phone", { length: 40 }),
    company: varchar("company", { length: 160 }),
    service: varchar("service", { length: 120 }).notNull(),
    budget: varchar("budget", { length: 80 }),
    message: text("message").notNull(),
    source: varchar("source", { length: 60 }).notNull().default("website"),
    status: varchar("status", { length: 30 }).notNull().default("new"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [index("inquiries_created_at_idx").on(table.createdAt)],
);

export const creatorApplications = pgTable(
  "creator_applications",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 120 }).notNull(),
    email: varchar("email", { length: 180 }).notNull(),
    phone: varchar("phone", { length: 40 }),
    role: varchar("role", { length: 80 }).notNull(),
    portfolioUrl: varchar("portfolio_url", { length: 300 }),
    message: text("message").notNull(),
    status: varchar("status", { length: 30 }).notNull().default("new"),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [index("creator_applications_created_at_idx").on(table.createdAt)],
);

export const subscribers = pgTable(
  "subscribers",
  {
    id: serial("id").primaryKey(),
    email: varchar("email", { length: 180 }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [uniqueIndex("subscribers_email_unique").on(table.email)],
);

export type Inquiry = typeof inquiries.$inferSelect;
export type CreatorApplication = typeof creatorApplications.$inferSelect;
export type Subscriber = typeof subscribers.$inferSelect;
