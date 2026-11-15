# ElevateX Digital — Agency Website

A production-ready marketing site for **ElevateX Digital**, a digital marketing and business
management studio founded by **Kartik Tyagi** in **Panipat, Haryana**, working remotely and globally.

Built with **Next.js (App Router) · TypeScript · Tailwind CSS v4 · PostgreSQL (Drizzle ORM)**.
Design language: black / charcoal surfaces, restrained metallic-gold accents, editorial serif display
type (Cormorant Garamond) paired with Manrope.

---

## 0. Publish it to GitHub

This folder is already a git repository with a clean first commit, `.gitignore`
and a CI workflow. Full step-by-step instructions: **[`GITHUB-SETUP.md`](./GITHUB-SETUP.md)**.
Short version:

```bash
git remote add origin https://github.com/YOUR-USERNAME/elevatex-digital.git
git push -u origin main
```

---

## 1. Pages

| Route | Purpose |
| --- | --- |
| `/` | Home — hero, studio, 8 services, portfolio preview, packages, process, founder, FAQ |
| `/about` | About Us — story, capabilities, principles, founder card |
| `/services` | Services — website, social, SEO, Meta ads, video, graphic design, branding & strategy, business systems; packages & FAQ |
| `/team` | Our Team — founder details + creator-network application form |
| `/portfolio` | Portfolio — LUMIÈRE, The Ember, VELORE |
| `/contact` | Contact — details, enquiry form, WhatsApp/Instagram |
| `/privacy-policy`, `/terms`, `/cookie-policy` | Legal pages |
| `/api/contact`, `/api/apply`, `/api/subscribe`, `/api/health` | Form endpoints + healthcheck |
| `/sitemap.xml`, `/robots.txt` | SEO files |

Legacy `/images/*` references were removed; all photography lives in **`public/assets/images/`**.

## 2. Local development

```bash
npm install
cp .env.example .env        # then set DATABASE_URL
npx drizzle-kit push        # creates inquiries / creator_applications / subscribers
npm run dev                 # http://localhost:3000
```

Useful checks:

```bash
npx next typegen
npm exec tsc -- --noEmit
npm run lint
npm run build
npm run start
```

## 3. Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `DATABASE_URL` | Yes (for forms) | PostgreSQL connection string (Neon / Supabase / local). Stores enquiries, applications and newsletter sign-ups. |
| `RESEND_API_KEY` | Optional | Sends an email notification for each enquiry/application. Forms still save to the database without it. |
| `CONTACT_TO_EMAIL` | Optional | Notification recipient. Defaults to the published business address. |
| `CONTACT_FROM_EMAIL` | Optional | Verified Resend sender. Defaults to `onboarding@resend.dev`. |
| `FORM_ENDPOINT` | Optional | Any webhook that accepts JSON (Formspree, Zapier, Google Apps Script). Lets you receive enquiries with **no database**. |
| `NEXT_PUBLIC_SITE_URL` | Optional | Canonical/sitemap/OG base URL. Defaults to `https://www.elevatex.website`. |
| `DISABLE_FILE_STORAGE` | Optional | `true` turns off the local `.data/*.jsonl` fallback. |

### How form storage works (no more "connection refused")

Submissions are saved through the first available driver:

1. **PostgreSQL** — when `DATABASE_URL` is set and reachable.
2. **Webhook** — when `FORM_ENDPOINT` is set (e.g. a free Formspree endpoint).
3. **Local file** — `.data/inquiries.jsonl` on a normal server (local dev, VPS). Disabled on serverless hosts.

If the database is down, the app automatically falls back to a webhook or file instead of failing. If **no**
driver is available (for example Vercel with no variables set), the APIs return an honest `503` with a clear
message and the forms show WhatsApp / Instagram buttons. Nothing is ever silently discarded or faked.

No secrets are shipped to the browser: only `NEXT_PUBLIC_*` values are exposed, and none of the secrets
above use that prefix.

## 4. Database

Tables are defined in `src/db/schema.ts`:

- `inquiries` — contact-form submissions (with public reference code + status)
- `creator_applications` — creator-network applications
- `subscribers` — newsletter emails (unique)

Apply the schema with:

```bash
npx drizzle-kit push
```

The database client is created lazily (`src/db/index.ts`), so a missing `DATABASE_URL` never crashes the
build or the site.

## 5. Deploy free on Vercel (no database needed to start)

1. Push this project to a GitHub repository (do **not** commit `.env`).
2. Pick how enquiries should be stored:
   - **Database:** free PostgreSQL at [neon.tech](https://neon.tech) (or Supabase) → copy the pooled string.
   - **No database:** free form endpoint at [formspree.io](https://formspree.io) → copy the endpoint URL and
     use it as `FORM_ENDPOINT`. You can start with neither and add one later; the form will say so honestly.
3. Go to [vercel.com](https://vercel.com) → **Add New → Project** → import the repository.
   Framework is auto-detected as **Next.js**; keep the default build command (`npm run build`).
4. Add environment variables (Project → Settings → Environment Variables):
   - `DATABASE_URL` — required for the forms
   - `RESEND_API_KEY` *(optional)*, `CONTACT_TO_EMAIL` *(optional)*, `CONTACT_FROM_EMAIL` *(optional)*
   - `NEXT_PUBLIC_SITE_URL` — e.g. `https://www.elevatex.website`
5. Click **Deploy**. Then run the schema push once from your machine against the same database:
   ```bash
   DATABASE_URL="<your-neon-connection-string>" npx drizzle-kit push
   ```
6. In Vercel → Domains, add `elevatex.website` / `www.elevatex.website` and point your domain registrar's
   DNS records as instructed.

Other free hosts that run Next.js App Router: Netlify (Next runtime), Render (free web service, sleeps when
idle), or Cloudflare Pages with the Next adapter. Vercel needs no extra configuration.

## 6. Troubleshooting "refusing to connect"

| Symptom | Cause | Fix |
| --- | --- | --- |
| `connect ECONNREFUSED 127.0.0.1:5432` in the terminal | `DATABASE_URL` points at a local Postgres that is not running | Create a free Neon/Supabase database and paste its URL, or delete `DATABASE_URL` and rely on the file fallback (local) / `FORM_ENDPOINT` |
| `connect ECONNREFUSED` for a remote database | Wrong host/port, a stopped database, or missing `?sslmode=require` | Copy the **pooled** connection string from your provider, keep `sslmode=require` |
| The preview/host URL does not open | A sleeping sandbox or a stopped dev server | Run `npm run dev` locally, or deploy to Vercel for a permanent URL |
| `Port 3000 is in use` | Another server is running | `npm run dev -- -p 3001` or stop the other process |
| Form says "not connected yet" | No storage configured in that environment | Set `DATABASE_URL` or `FORM_ENDPOINT` in the host dashboard and redeploy |
| Initial build error about `pg` or Node | Node older than 20.9 | Install Node 20 LTS or newer (`node -v`) |

Check what the deployment is using at any time: **`/api/health`** returns
`{storage: {database, endpoint, file, active}}`.

## 7. Security & spam protection

- Server-side validation and length limits on every field (`src/lib/api.ts`).
- Honeypot field on all public forms; bots receive a harmless success response.
- In-memory rate limiting per IP: 6 enquiries / 5 applications / 8 subscriptions per hour.
- Parameterised queries through Drizzle ORM (no SQL string concatenation).
- Security headers in `next.config.ts` (nosniff, frame options, referrer policy, HSTS, permissions policy).
- Secrets read only from `process.env` inside route handlers.

## 8. What still needs your input

1. **Database** — create a free Neon/Supabase project and set `DATABASE_URL` (forms are wired and tested,
   but delivery needs a database or Resend key in the deployment environment).
2. **Email delivery (optional)** — verify a sending domain in Resend if you want notified by email.
3. **Domain** — point `elevatex.website` DNS to the host when ready.
4. **Portfolio imagery** — the three projects use licensed stock photography in `public/assets/images/`.
   Replace with your own client screenshots when available.
5. **Legal review** — the privacy, cookie and terms pages are written as clear, honest drafts for this
   business. Have them reviewed for your jurisdiction before publishing.
6. **Fonts** — Cormorant Garamond + Manrope are self-hosted by `next/font` (no external font requests).
