import type { Metadata } from "next";
import Link from "next/link";
import { Globe, Instagram, Mail, Phone, Pin, WhatsApp, ArrowUpRight, Check } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/ui";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Let's build together",
  description:
    "Contact ElevateX Digital: WhatsApp +91 8571064108, email kartiktyagi970@gmail.com, or send a project enquiry from Panipat, Haryana. Working globally.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact ElevateX Digital",
    description: "Talk to Kartik Tyagi and the ElevateX Digital studio about your website, marketing or systems project.",
    url: "/contact",
  },
};

const interestMap: Record<string, string> = {
  "website-development": "Website Development",
  "social-media-marketing": "Social Media Marketing",
  seo: "Search Engine Optimisation",
  "meta-ads": "Meta Ads Management",
  "video-editing": "Video Editing",
  "graphic-design": "Graphic Design",
  "branding-digital-strategy": "Branding & Digital Strategy",
  "business-management-automation": "Business Management & Automation",
  "digital-marketing": "Digital Marketing Package",
  "business-management": "Business Management Package",
  "combo-offer": "Combo Offer (Both Packages)",
};

const details = [
  {
    label: "WhatsApp / call",
    value: site.contact.phoneDisplay,
    href: whatsappLink(),
    icon: WhatsApp,
    note: "Fastest route to a reply",
  },
  {
    label: "Email",
    value: site.contact.email,
    href: `mailto:${site.contact.email}`,
    icon: Mail,
    note: "Best for briefs and documents",
  },
  {
    label: "Studio",
    value: site.contact.locationLong,
    href: undefined,
    icon: Pin,
    note: "Working remotely, globally",
  },
  {
    label: "Websites",
    value: `${site.contact.websiteLabel} · ${site.contact.altWebsite}`,
    href: site.contact.website,
    icon: Globe,
    note: "Official websites",
  },
  {
    label: "Instagram",
    value: site.contact.instagramHandle,
    href: site.contact.instagramUrl,
    icon: Instagram,
    note: "DM us today",
  },
];

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ interest?: string }>;
}) {
  const params = await searchParams;
  const defaultService = params.interest ? interestMap[params.interest] ?? "" : "";

  return (
    <>
      <PageHero
        eyebrow="Contact ElevateX Digital"
        title={
          <>
            Let&apos;s build <span className="gold-text italic">together.</span>
          </>
        }
        intro="Whether you need a new website, marketing that converts, or a cleaner way to run the business — tell us what you are building and we will take it from there."
        aside={
          <div className="space-y-2.5 text-sm">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-gold-soft transition-colors hover:text-gold-bright">
              <WhatsApp className="h-4 w-4" /> WhatsApp {site.contact.phoneDisplay}
            </a>
            <a href={`mailto:${site.contact.email}`} className="flex items-center gap-2.5 break-all text-mist transition-colors hover:text-gold-soft">
              <Mail className="h-4 w-4 text-gold/80" /> {site.contact.email}
            </a>
          </div>
        }
      />

      <section className="section">
        <div className="wrap grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12">
          <div>
            <Reveal>
              <p className="eyebrow">Direct lines</p>
              <h2 className="display mt-4 text-[clamp(2rem,4vw,2.9rem)]">
                Talk to a person, <span className="gold-text italic">not a form.</span>
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-mist">
                Every enquiry is read by {site.contact.founderName}, founder of ElevateX Digital. Reach out wherever you
                are most comfortable.
              </p>
            </Reveal>

            <div className="mt-8 space-y-3">
              {details.map((item, index) => {
                const DetailIcon = item.icon;
                const content = (
                  <>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/25 bg-gold/[0.06] text-gold">
                      <DetailIcon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[0.55rem] font-semibold uppercase tracking-[0.22em] text-mist/50">
                        {item.label}
                      </span>
                      <span className="mt-0.5 block break-words text-[0.88rem] text-bone/90">{item.value}</span>
                      <span className="mt-0.5 block text-[0.66rem] text-mist/55">{item.note}</span>
                    </span>
                    {item.href ? <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-gold/50" /> : null}
                  </>
                );
                return (
                  <Reveal key={item.label} delay={index * 60}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="panel flex items-center gap-4 p-4 transition-colors hover:border-gold/40"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="panel flex items-center gap-4 p-4">{content}</div>
                    )}
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={220}>
              <div className="mt-8 border border-gold/20 bg-gold/[0.04] p-5">
                <p className="label text-gold/80">What happens next</p>
                <ol className="mt-4 space-y-3">
                  {[
                    "You share the project and the goal.",
                    "We reply with questions and an honest scope.",
                    "If it fits, we agree the plan and begin.",
                  ].map((step, index) => (
                    <li key={step} className="flex gap-3 text-[0.84rem] text-mist">
                      <span className="text-[0.6rem] font-bold tracking-[0.14em] text-gold/70">0{index + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>

          <div>
            <ContactForm defaultService={defaultService} />
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="panel flex items-start gap-3 p-4">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <p className="text-[0.76rem] leading-relaxed text-mist">
                  Your details are only used to respond to this enquiry.
                </p>
              </div>
              <Link href="/services#packages" className="panel flex items-start gap-3 p-4 transition-colors hover:border-gold/40">
                <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <p className="text-[0.76rem] leading-relaxed text-mist">
                  Not sure about scope? Look at the packages and prices first.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.07] bg-[#070708] py-12">
        <div className="wrap flex flex-wrap items-center justify-between gap-5">
          <div>
            <p className="text-[0.6rem] uppercase tracking-[0.22em] text-gold-soft/80">Prefer a quick message?</p>
            <p className="mt-1 font-display text-2xl text-bone">DM us today. Let&apos;s scale your brand.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-sm">
              <WhatsApp className="h-4 w-4" /> WhatsApp now
            </a>
            <a href={site.contact.instagramUrl} target="_blank" rel="noopener noreferrer" className="btn btn-line btn-sm">
              <Instagram className="h-4 w-4" /> Instagram DM
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
