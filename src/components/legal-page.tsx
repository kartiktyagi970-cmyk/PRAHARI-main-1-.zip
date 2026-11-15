import Link from "next/link";
import { Mail, Phone, ArrowUpRight } from "@/components/icons";
import { PageHero } from "@/components/ui";
import { site } from "@/lib/site";

export type LegalSection = {
  heading: string;
  body?: string[];
  list?: string[];
};

export function LegalPage({
  eyebrow,
  title,
  intro,
  updated,
  sections,
  current,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
  current: string;
}) {
  const links = [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/cookie-policy", label: "Cookie Policy" },
  ];

  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        intro={intro}
        aside={
          <div className="border border-white/12 bg-white/[0.02] px-4 py-3 text-[0.7rem] uppercase tracking-[0.16em] text-mist/70">
            Last updated · {updated}
          </div>
        }
      />

      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-[0.28fr_0.72fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="label">Policies</p>
            <nav aria-label="Legal pages" className="mt-4 space-y-1">
              {links.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between border-l py-2 pl-4 text-[0.8rem] transition-colors ${
                    current === item.href
                      ? "border-gold text-gold-soft"
                      : "border-white/10 text-mist hover:border-gold/50 hover:text-bone"
                  }`}
                >
                  {item.label}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-50" />
                </Link>
              ))}
            </nav>

            <div className="panel mt-8 p-5">
              <p className="label text-gold/80">Questions</p>
              <p className="mt-2 text-[0.8rem] leading-relaxed text-mist">
                Contact {site.contact.founderName} about anything on this page.
              </p>
              <a href={`mailto:${site.contact.email}`} className="mt-4 flex items-start gap-2.5 break-all text-[0.8rem] text-bone/90 transition-colors hover:text-gold-soft">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {site.contact.email}
              </a>
              <a href={site.contact.phoneHref} className="mt-2 flex items-center gap-2.5 text-[0.8rem] text-bone/90 transition-colors hover:text-gold-soft">
                <Phone className="h-4 w-4 shrink-0 text-gold" /> {site.contact.phoneDisplay}
              </a>
              <p className="mt-4 text-[0.68rem] text-mist/55">{site.contact.locationLong}</p>
            </div>
          </aside>

          <div className="max-w-3xl">
            {sections.map((section, index) => (
              <div key={section.heading} className="border-t border-white/[0.08] py-7 first:border-t-0 first:pt-0">
                <p className="text-[0.56rem] font-semibold uppercase tracking-[0.24em] text-gold/60">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-2 font-display text-[1.7rem] leading-tight text-bone">{section.heading}</h2>
                {section.body?.map((paragraph) => (
                  <p key={paragraph} className="mt-3 text-[0.92rem] leading-relaxed text-mist">
                    {paragraph}
                  </p>
                ))}
                {section.list ? (
                  <ul className="mt-4 space-y-2">
                    {section.list.map((item) => (
                      <li key={item} className="flex gap-3 text-[0.9rem] leading-relaxed text-mist">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}

            <p className="mt-8 border-t border-white/[0.08] pt-6 text-[0.75rem] leading-relaxed text-mist/55">
              {site.name} · {site.contact.locationLong} · {site.contact.email} · {site.contact.phoneDisplay} ·{" "}
              {site.contact.websiteLabel}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
