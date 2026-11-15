import Link from "next/link";
import { ArrowUpRight, Mail, Phone, WhatsApp } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { site, whatsappLink } from "@/lib/site";

export function CtaBand({
  eyebrow = "Next step",
  title = "Let's build something worth talking about.",
  copy = "Tell us what you are building. We will come back with a clear, honest next step — no pressure, no jargon.",
}: {
  eyebrow?: string;
  title?: string;
  copy?: string;
}) {
  return (
    <section className="section">
      <div className="wrap">
        <Reveal>
          <div className="panel grain relative overflow-hidden px-6 py-14 text-center sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
            <p className="eyebrow justify-center">{eyebrow}</p>
            <h2 className="display mx-auto mt-5 max-w-3xl text-[clamp(2.2rem,5.4vw,4rem)]">{title}</h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-mist sm:text-base">{copy}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn btn-gold">
                Start a project <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-line">
                <WhatsApp className="h-4 w-4" /> WhatsApp
              </a>
            </div>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[0.72rem] uppercase tracking-[0.16em] text-mist/70">
              <a href={site.contact.phoneHref} className="flex items-center gap-2 transition-colors hover:text-gold-soft">
                <Phone className="h-3.5 w-3.5 text-gold/70" /> {site.contact.phoneDisplay}
              </a>
              <a
                href={`mailto:${site.contact.email}`}
                className="flex items-center gap-2 break-all transition-colors hover:text-gold-soft"
              >
                <Mail className="h-3.5 w-3.5 text-gold/70" /> {site.contact.email}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
