import Link from "next/link";
import { LogoMark } from "@/components/logo";
import { NewsletterForm } from "@/components/newsletter-form";
import { CookieReset } from "@/components/cookie-reset";
import { ArrowUpRight, Instagram, Mail, Phone, Pin, Globe, WhatsApp } from "@/components/icons";
import { nav, services, site, whatsappLink } from "@/lib/site";

const legal = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/cookie-policy", label: "Cookie Policy" },
];

export function SiteFooter() {
  return (
    <footer className="relative z-10 overflow-hidden border-t border-white/[0.07] bg-[#060607]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

      <div className="wrap relative">
        <div className="grid gap-10 border-b border-white/[0.07] py-14 md:grid-cols-[1.25fr_0.75fr_0.75fr] md:items-end md:py-16">
          <div>
            <p className="eyebrow">Let&apos;s build together</p>
            <h2 className="display mt-4 text-[clamp(2.4rem,5.2vw,4.1rem)]">
              Your next chapter,
              <br />
              <span className="gold-text italic">beautifully built.</span>
            </h2>
          </div>
          <div className="md:col-span-2 md:pb-2 md:justify-self-end">
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-gold">
                Start a project <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-line"
              >
                <WhatsApp className="h-4 w-4" /> WhatsApp us
              </a>
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-mist/60">
              {site.contact.locationShort} · Working worldwide
            </p>
          </div>
        </div>

        <div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.9fr_0.9fr]">
          <div>
            <div className="flex items-center gap-3">
              <LogoMark className="h-11 w-11" />
              <div className="flex flex-col leading-none">
                <span className="gold-text text-[1.5rem] font-extrabold">ElevateX</span>
                <span className="mt-1.5 text-[0.55rem] font-semibold uppercase tracking-[0.44em] text-mist">
                  Digital
                </span>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-mist">
              A digital marketing and business management studio. Modern websites, marketing that converts and systems
              that keep growing.
            </p>
            <p className="mt-5 text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-gold-soft/80">
              We elevate your brand
            </p>
            <div className="mt-5">
              <p className="label">Growth notes</p>
              <NewsletterForm />
            </div>
          </div>

          <nav aria-label="Company" className="lg:pl-4">
            <p className="label">Company</p>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-mist transition-colors hover:text-gold-soft">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services#packages" className="text-sm text-gold-soft/90 transition-colors hover:text-gold-bright">
                  Offers &amp; packages
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Services" className="lg:pl-4">
            <p className="label">Services</p>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="text-sm text-mist transition-colors hover:text-gold-soft"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="label">Contact</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={`mailto:${site.contact.email}`} className="flex items-start gap-2.5 text-mist transition-colors hover:text-gold-soft">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold/70" />
                  <span className="break-all">{site.contact.email}</span>
                </a>
              </li>
              <li>
                <a href={site.contact.phoneHref} className="flex items-start gap-2.5 text-mist transition-colors hover:text-gold-soft">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold/70" />
                  {site.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-mist">
                <Pin className="mt-0.5 h-4 w-4 shrink-0 text-gold/70" />
                {site.contact.locationLong}
              </li>
              <li>
                <a
                  href={site.contact.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-mist transition-colors hover:text-gold-soft"
                >
                  <Globe className="mt-0.5 h-4 w-4 shrink-0 text-gold/70" />
                  <span>
                    {site.contact.websiteLabel}
                    <span className="mt-0.5 block text-[0.7rem] text-mist/50">{site.contact.altWebsite}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={site.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-mist transition-colors hover:text-gold-soft"
                >
                  <Instagram className="mt-0.5 h-4 w-4 shrink-0 text-gold/70" />
                  {site.contact.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/[0.07] py-6 text-[0.7rem] text-mist/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-gold-soft">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <CookieReset />
            </li>
          </ul>
          <p className="uppercase tracking-[0.2em]">Real talent × real work × bigger impact</p>
        </div>
      </div>
    </footer>
  );
}
