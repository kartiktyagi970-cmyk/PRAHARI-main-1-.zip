import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Instagram, Mail, Phone, Pin, Star } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { BusinessCard } from "@/components/business-card";
import { PageHero, SectionHead, SignatureStrip, Arcs } from "@/components/ui";
import { capabilityGroups, principles, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us — A digital studio in Panipat, working globally",
  description:
    "Meet ElevateX Digital, founded by Kartik Tyagi in Panipat, Haryana — a remote, flexible studio for websites, marketing and business systems.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About ElevateX Digital",
    description:
      "A remote, flexible, global digital studio founded by Kartik Tyagi — websites, marketing, business management and automation.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About ElevateX Digital"
        title={
          <>
            A studio for brands that refuse to <span className="gold-text italic">stand still.</span>
          </>
        }
        intro="We are ElevateX Digital — a digital marketing and business management studio built around one belief: a brand should look premium and perform even better."
        aside={
          <div className="flex flex-wrap gap-2">
            {["Founded by Kartik Tyagi", "Panipat, Haryana", "Remote · Flexible · Global"].map((item) => (
              <span key={item} className="border border-gold/25 bg-gold/[0.05] px-3 py-1.5 text-[0.6rem] uppercase tracking-[0.16em] text-gold-soft/90">
                {item}
              </span>
            ))}
          </div>
        }
      />

      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <Reveal>
            <div className="relative">
              <div className="relative overflow-hidden border border-white/10">
                <Image
                  src="/assets/images/studio.jpg"
                  alt="ElevateX Digital's dark, gold-lit workspace with an analytics dashboard on screen"
                  width={1248}
                  height={832}
                  priority
                  sizes="(min-width: 1024px) 520px, 100vw"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/25" />
              </div>
              <div className="mt-5 grid grid-cols-2 gap-px border border-white/[0.08] bg-white/[0.06]">
                {[
                  { k: "Based in", v: "Panipat, Haryana" },
                  { k: "Working", v: "Remotely & globally" },
                  { k: "First service", v: "Website design" },
                  { k: "Founder", v: "Kartik Tyagi" },
                ].map((item) => (
                  <div key={item.k} className="bg-[#09090c] px-4 py-4">
                    <p className="text-[0.54rem] uppercase tracking-[0.22em] text-mist/50">{item.k}</p>
                    <p className="mt-1 text-[0.78rem] text-bone/90">{item.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow">Our story</p>
              <h2 className="display mt-4 text-[clamp(2.1rem,4.5vw,3.3rem)]">
                Good design gets attention. <span className="gold-text italic">Good systems keep it.</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-5 space-y-4 text-[0.95rem] leading-relaxed text-mist">
                <p>
                  ElevateX Digital began with a straightforward first service: website design. Modern websites, stronger
                  brands. From there, clients kept asking for the next thing — social media, ads that convert, a cleaner
                  way to run the business behind the brand.
                </p>
                <p>
                  Today the studio covers the full picture: websites, social media marketing, SEO, Meta ads, video
                  editing, business management and automation. One team, one direction, no gaps between the website and
                  the marketing.
                </p>
                <p>
                  We are based in {site.contact.locationLong} and work remotely, flexibly and globally. That means direct
                  conversations, sensible timelines and work you can see — with the person doing the work.
                </p>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-8 border-l border-gold/40 pl-5">
                <p className="font-display text-[1.6rem] italic leading-tight text-bone">
                  &ldquo;We elevate your brand — without losing what made it yours.&rdquo;
                </p>
                <p className="mt-2 text-[0.62rem] uppercase tracking-[0.22em] text-gold-soft/80">
                  The ElevateX standard
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/team" className="btn btn-gold btn-sm">
                  Meet the founder <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
                <Link href="/portfolio" className="btn btn-line btn-sm">
                  View our work
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section border-t border-white/[0.07] bg-[#070708]">
        <div className="wrap">
          <SectionHead
            eyebrow="Capabilities"
            title={
              <>
                The work behind <span className="gold-text italic">the look.</span>
              </>
            }
            intro="Three connected pillars. Most clients start with one and grow into the rest."
            cta={{ href: "/services", label: "Services in detail" }}
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {capabilityGroups.map((group, index) => (
              <Reveal key={group.title} delay={index * 90}>
                <div className="panel panel-hover h-full p-6 sm:p-7">
                  <div className="flex items-center justify-between">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-gold-soft/80">
                      0{index + 1}
                    </p>
                    <Star className="h-2.5 w-2.5 text-gold/60" />
                  </div>
                  <h3 className="mt-4 font-display text-2xl text-bone">{group.title}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-mist">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-t border-white/[0.07]">
        <div className="wrap">
          <SectionHead
            eyebrow="How we think"
            title={
              <>
                Simple principles. <span className="gold-text italic">Serious work.</span>
              </>
            }
          />
          <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {principles.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <div className="flex gap-5 border-t border-white/10 pt-5">
                  <span className="gold-text font-display text-[2.2rem] leading-none">0{index + 1}</span>
                  <div>
                    <h3 className="text-[0.95rem] font-semibold text-bone">{item.title}</h3>
                    <p className="mt-1.5 text-[0.85rem] leading-relaxed text-mist">{item.copy}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/[0.07] bg-[#070708] py-16 sm:py-20">
        <Arcs className="-left-40 top-1/2 h-[36rem] w-[36rem] -translate-y-1/2 opacity-40" />
        <div className="wrap relative grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <Reveal>
              <p className="eyebrow">The founder</p>
              <h2 className="display mt-4 text-[clamp(2.1rem,4.6vw,3.4rem)]">
                One name behind <span className="gold-text italic">the standard.</span>
              </h2>
              <p className="mt-5 max-w-lg text-[0.95rem] leading-relaxed text-mist">
                {site.contact.founderName} founded ElevateX Digital in {site.contact.locationShort}. The studio is
                founder-led and intentionally lean: you speak to the person accountable for the work, and the work is
                held to a standard that has a name on it.
              </p>
              <p className="mt-4 text-[0.7rem] uppercase tracking-[0.22em] text-gold-soft/80">We build together</p>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <a href={site.contact.phoneHref} className="panel flex items-center gap-3 p-4 transition-colors hover:border-gold/40">
                  <Phone className="h-4 w-4 text-gold" />
                  <span className="text-sm text-bone/90">{site.contact.phoneDisplay}</span>
                </a>
                <a href={`mailto:${site.contact.email}`} className="panel flex items-center gap-3 p-4 transition-colors hover:border-gold/40">
                  <Mail className="h-4 w-4 shrink-0 text-gold" />
                  <span className="truncate text-sm text-bone/90">{site.contact.email}</span>
                </a>
                <div className="panel flex items-center gap-3 p-4">
                  <Pin className="h-4 w-4 text-gold" />
                  <span className="text-sm text-bone/90">{site.contact.locationLong}</span>
                </div>
                <a href={site.contact.instagramUrl} target="_blank" rel="noopener noreferrer" className="panel flex items-center gap-3 p-4 transition-colors hover:border-gold/40">
                  <Instagram className="h-4 w-4 text-gold" />
                  <span className="truncate text-sm text-bone/90">{site.contact.instagramHandle}</span>
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={100}>
            <BusinessCard />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <SignatureStrip />
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-mist">
              We are looking for online creators who can help with website development, business management and
              automation. If you have skills with your creativity and portfolio, we would like to see your work.{" "}
              <Link href="/team#join" className="link-underline text-gold-soft">
                Join the creator network
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
