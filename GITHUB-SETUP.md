# Push this project to GitHub

You only need to do this once. Commands are for **macOS / Linux / Git Bash**.
(PowerShell works too — skip the `export` lines and set variables with `$env:NAME="value"`.)

---

## 0. What you need

- A GitHub account — https://github.com/join
- Git installed — `git --version` should print a version
- An empty repo created in the browser: https://github.com/new
  - Name: `elevatex-digital`
  - Visibility: **Private** is fine (Vercel can still read it once you connect the account)
  - Do **not** tick "Add a README", `.gitignore` or a licence — this project already has them

---

## 1. Open the project folder

```bash
cd path/to/elevatex-digital
git status        # if this says "not a git repository", run: git init -b main
```

The archive already contains a clean first commit, so `git status` should say
`working tree clean` and `git log --oneline` should show an initial commit.

---

## 2. Confirm no secrets are going up

```bash
git ls-files | grep -E "^\.env$"      # must print NOTHING
git ls-files | grep "\.env\.example"  # must print .env.example
```

`.env` is ignored by `.gitignore`. Never force-add it. The only env file that
belongs in the repo is `.env.example` (placeholder values only).

---

## 3. Connect the repo and push

```bash
git remote add origin https://github.com/YOUR-USERNAME/elevatex-digital.git
git push -u origin main
```

Replace `YOUR-USERNAME`. If asked for a password, GitHub wants a **personal
access token**, not your account password:

1. GitHub → Settings → Developer settings → Personal access tokens → **Tokens (classic)**
2. Generate new token → scope: **repo** → copy it
3. Paste it as the password when Git prompts

Using SSH instead? `git remote set-url origin git@github.com:YOUR-USERNAME/elevatex-digital.git`

---

## 4. Check the repo

- The file list should show `src/`, `public/`, `package.json`, `README.md`, `next.config.ts`
- **Actions** tab should show the `CI` workflow running (install → typecheck → lint → build)
- A green tick means the project builds exactly as it does for me

---

## 5. Connect it to Vercel (free hosting)

1. https://vercel.com → sign in with GitHub
2. **Add New… → Project** → import `elevatex-digital`
3. Framework is detected as **Next.js** — leave build settings untouched
4. Environment variables:
   - `DATABASE_URL` — free Postgres from https://neon.tech (recommended), **or**
   - `FORM_ENDPOINT` — free form endpoint from https://formspree.io
   - optional: `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `NEXT_PUBLIC_SITE_URL`
5. **Deploy**
6. If you used a database, create the tables once from your machine:
   ```bash
   DATABASE_URL="<your-neon-url>" npx drizzle-kit push
   ```
7. Verify: open `https://your-deployment.vercel.app/api/health` →
   `{"ok":true,"storage":{"active":"database"}}`

---

## 6. Later updates

```bash
git add .
git commit -m "Describe the change"
git push
```

Vercel redeploys automatically on every push to `main`.
