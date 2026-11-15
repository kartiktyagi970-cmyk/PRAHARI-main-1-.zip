import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check, Globe, Mail } from "@/components/icons";
import { LogoMark } from "@/components/logo";
import { Arcs } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Download source",
  description: "Download the complete ElevateX Digital website source code.",
  robots: { index: false, follow: false },
};

const steps = [
  {
    title: "Download the ZIP",
    copy: "One file, about 760 KB. It contains the full source — no node_modules or build output, so it unpacks fast.",
  },
  {
    title: "Install and run",
    copy: "Unzip it, run npm install, then npm run dev. The site opens at http://localhost:3000 and works with no configuration.",
  },
  {
    title: "Connect the forms (optional)",
    copy: "Add DATABASE_URL (free Neon Postgres) or FORM_ENDPOINT (free Formspree) to .env, then restart. Without either, submissions are saved to a local .data file.",
  },
  {
    title: "Host it free",
    copy: "Push the folder to GitHub, import it at vercel.com, add the same environment variables and deploy.",
  },
];

export default function DownloadPage() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <Arcs className="-right-40 -top-40 h-[38rem] w-[38rem] opacity-40" />
      <div className="wrap relative max-w-3xl">
        <div className="flex items-center gap-3">
          <LogoMark className="h-10 w-10" />
          <div className="leading-none">
            <p className="gold-text text-lg font-extrabold">ElevateX</p>
            <p className="mt-1 text-[0.5rem] font-semibold uppercase tracking-[0.4em] text-mist">Digital</p>
          </div>
        </div>

        <p className="eyebrow mt-10">Project delivery</p>
        <h1 className="display mt-4 text-[clamp(2.4rem,6vw,4rem)]">
          Download the complete <span className="gold-text italic">source code.</span>
        </h1>
        <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-mist">
          Everything needed to run and host this website yourself. Keep this page bookmarked — the download path
          stays the same even if the preview address changes.
        </p>

        <div className="panel mt-8 p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-gold/70">Archives</p>
              <p className="mt-1 font-display text-2xl text-bone">elevatex-digital-website.zip</p>
              <p className="mt-1 text-[0.72rem] text-mist/60">Next.js · TypeScript · Tailwind · Drizzle ORM</p>
            </div>
            <a href="/elevatex-digital-website.zip" download className="btn btn-gold shrink-0">
              Download ZIP <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <div className="rule my-6" />
          <ul className="grid gap-2.5 sm:grid-cols-2">
            {[
              "All pages and components",
              "public/assets/images photography",
              "package.json + package-lock.json",
              "drizzle.config.ts + schema",
              ".env.example with every key",
              "README with hosting guide",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[0.82rem] text-mist">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" /> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden border border-white/[0.08] bg-white/[0.06] sm:grid-cols-2">
          {steps.map((step, index) => (
            <div key={step.title} className="bg-[#09090c] p-5">
              <p className="gold-text font-display text-2xl leading-none">0{index + 1}</p>
              <h2 className="mt-3 text-[0.82rem] font-semibold uppercase tracking-[0.12em] text-bone">{step.title}</h2>
              <p className="mt-1.5 text-[0.8rem] leading-relaxed text-mist/85">{step.copy}</p>
            </div>
          ))}
        </div>

        <div className="panel mt-6 p-5">
          <p className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-gold/70">If the button does nothing</p>
          <p className="mt-2 text-[0.85rem] leading-relaxed text-mist">
            Add <code className="rounded bg-white/[0.06] px-1.5 py-0.5 text-[0.8rem] text-gold-soft">/elevatex-digital-website.zip</code>{" "}
            to the address at the top of your browser, or open{" "}
            <code className="rounded bg-white/[0.06] px-1.5 py-0.5 text-[0.8rem] text-gold-soft">/download</code> on the
            same address. Both routes are served by this deployment.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[0.7rem] uppercase tracking-[0.16em] text-mist/60">
          <a href={`mailto:${site.contact.email}`} className="flex items-center gap-2 hover:text-gold-soft">
            <Mail className="h-3.5 w-3.5 text-gold/70" /> {site.contact.email}
          </a>
          <a href={site.contact.website} className="flex items-center gap-2 hover:text-gold-soft">
            <Globe className="h-3.5 w-3.5 text-gold/70" /> {site.contact.websiteLabel}
          </a>
          <Link href="/" className="hover:text-gold-soft">
            Back to the website
          </Link>
        </div>
      </div>
    </section>
  );
}
