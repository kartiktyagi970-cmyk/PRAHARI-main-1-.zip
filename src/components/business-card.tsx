import { LogoMark } from "@/components/logo";
import { Globe, Instagram, Mail, Phone, Pin } from "@/components/icons";
import { site } from "@/lib/site";

export function BusinessCard() {
  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-xl border border-white/15 bg-[linear-gradient(140deg,#16161a_0%,#0b0b0e_45%,#101014_100%)] p-6 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.95)] sm:p-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_100%_0%,rgba(201,160,90,0.16),transparent_55%)]" />
        <div className="relative">
          <div className="flex items-center gap-3">
            <LogoMark className="h-10 w-10" />
            <span className="gold-text text-[1.35rem] font-extrabold tracking-tight">ElevateX Digital</span>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="font-display text-2xl text-bone">{site.contact.founderName}</p>
              <p className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-gold-soft/80">
                {site.contact.founderRole}
              </p>
              <p className="mt-5 text-[0.66rem] uppercase tracking-[0.14em] text-mist/60">
                We elevate your brand
              </p>
            </div>
            <ul className="space-y-2.5 text-[0.8rem]">
              <li>
                <a href={site.contact.phoneHref} className="flex items-center gap-2.5 text-mist transition-colors hover:text-gold-soft">
                  <Phone className="h-3.5 w-3.5 shrink-0 text-gold/80" />
                  {site.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="flex items-center gap-2.5 break-all text-mist transition-colors hover:text-gold-soft"
                >
                  <Mail className="h-3.5 w-3.5 shrink-0 text-gold/80" />
                  {site.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={site.contact.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-mist transition-colors hover:text-gold-soft"
                >
                  <Globe className="h-3.5 w-3.5 shrink-0 text-gold/80" />
                  {site.contact.websiteLabel}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-mist">
                <Pin className="h-3.5 w-3.5 shrink-0 text-gold/80" />
                {site.contact.locationShort}
              </li>
              <li>
                <a
                  href={site.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-mist transition-colors hover:text-gold-soft"
                >
                  <Instagram className="h-3.5 w-3.5 shrink-0 text-gold/80" />
                  {site.contact.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
