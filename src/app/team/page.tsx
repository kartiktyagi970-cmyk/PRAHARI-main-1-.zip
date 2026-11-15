import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check, Icon, Instagram, Mail, Phone, Pin, Star } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { BusinessCard } from "@/components/business-card";
import { ApplicationForm } from "@/components/application-form";
import { PageHero, SectionHead, SignatureStrip, Arcs } from "@/components/ui";
import { capabilityGroups, site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Team — Founder-led, creator-powered",
  description:
    "Meet Kartik Tyagi, founder of ElevateX Digital, and the remote, flexible, global creator network behind website development, business management and automation.",
  alternates: { canonical: "/team" },
  openGraph: {
    title: "The ElevateX Digital team",
    description: "Founder-led. Remote, flexible and global. Meet the people behind the work.",
    url: "/team",
  },
};

const benefits = [
  { title: "Work remotely", copy: "Where you are is not the point. The work is." },
  { title: "Flexible hours", copy: "A schedule that fits around real life, not the other way round." },
  { title: "Collaborate globally", copy: "Clients and creators across time zones, one shared standard." },
  { title: "Grow your skills", copy: "Web, marketing and systems work — a place to keep getting better." },
];

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our team"
        title={
          <>
            Real talent. Real work. <span className="gold-text italic">Bigger impact.</span>
          </>
        }
        intro="ElevateX Digital is founder-led and built with a remote, flexible, global creator network. We keep the team small and the accountability clear."
        aside={
          <div className="space-y-2 text-[0.68rem] uppercase tracking-[0.16em] text-mist/70">
            <p className="flex items-center gap-2"><Pin className="h-3.5 w-3.5 text-gold/70" /> Panipat, Haryana</p>
            <p className="flex items-center gap-2"><Star className="h-2.5 w-2.5 text-gold" /> Remote · Flexible · Global</p>
            <p className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-gold/70" /> Always looking for online creators</p>
          </div>
        }
      />

      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <div className="relative flex h-24 w-24 shrink-0 items-center justify-center rounded-full border border-gold/35 bg-[radial-gradient(circle_at_30%_20%,rgba(201,160,90,0.25),rgba(10,10,12,1))]">
                <span className="gold-text font-display text-3xl">KT</span>
                <span className="absolute -bottom-1 right-0 rounded-full border border-gold/40 bg-[#0b0b0e] px-2 py-0.5 text-[0.45rem] uppercase tracking-[0.18em] text-gold-soft">
                  Founder
                </span>
              </div>
              <div>
                <p className="eyebrow">The founder</p>
                <h2 className="display mt-2 text-[clamp(2.1rem,4.4vw,3.2rem)]">{site.contact.founderName}</h2>
                <p className="mt-1 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-gold-soft/80">
                  {site.contact.founderRole} · {site.name}
                </p>
              </div>
            </div>

            <p className="mt-7 max-w-lg text-[0.95rem] leading-relaxed text-mist">
              Kartik leads every engagement personally — from the first conversation to the final handover. The studio
              started with website design and grew into a full digital and business-management offer because clients
              kept needing the next piece of the puzzle.
            </p>
            <p className="mt-4 max-w-lg text-[0.95rem] leading-relaxed text-mist">
              The promise is simple: better systems, bigger dreams. You get straight answers, considered design and work
              that is held to one standard, whoever contributes to it.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <a href={site.contact.phoneHref} className="panel flex items-center gap-3 p-4 transition-colors hover:border-gold/40">
                <Phone className="h-4 w-4 text-gold" />
                <span className="text-sm text-bone/90">{site.contact.phoneDisplay}</span>
              </a>
              <a href={`mailto:${site.contact.email}`} className="panel flex items-center gap-3 p-4 transition-colors hover:border-gold/40">
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                <span className="truncate text-sm text-bone/90">{site.contact.email}</span>
              </a>
              <a href={site.contact.instagramUrl} target="_blank" rel="noopener noreferrer" className="panel flex items-center gap-3 p-4 transition-colors hover:border-gold/40">
                <Instagram className="h-4 w-4 text-gold" />
                <span className="truncate text-sm text-bone/90">{site.contact.instagramHandle}</span>
              </a>
              <div className="panel flex items-center gap-3 p-4">
                <Pin className="h-4 w-4 text-gold" />
                <span className="text-sm text-bone/90">{site.contact.locationShort}</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <BusinessCard />
            <p className="mt-5 text-[0.68rem] uppercase tracking-[0.2em] text-mist/55">
              Let&apos;s build together · {site.contact.websiteLabel}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section border-y border-white/[0.07] bg-[#070708]">
        <div className="wrap">
          <SectionHead
            eyebrow="The way we work"
            title={
              <>
                Remote. Flexible. <span className="gold-text italic">Global.</span>
              </>
            }
            intro="A modern studio should be judged by the work, not the postcode. This is the model behind ElevateX Digital."
          />
          <div className="mt-12 grid gap-px overflow-hidden border border-white/[0.08] bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-[#09090c] p-6">
                <Check className="h-4 w-4 text-gold" />
                <h3 className="mt-4 text-[0.9rem] font-semibold text-bone">{benefit.title}</h3>
                <p className="mt-1.5 text-[0.82rem] leading-relaxed text-mist/85">{benefit.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 sm:py-20">
        <Arcs className="-left-48 top-1/2 h-[34rem] w-[34rem] -translate-y-1/2 opacity-30" />
        <div className="wrap relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Reveal>
              <p className="eyebrow">The creator network</p>
              <h2 className="display mt-4 text-[clamp(2.1rem,4.4vw,3.2rem)]">
                We are looking for <span className="gold-text italic">online creators.</span>
              </h2>
              <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-mist">
                We are building an innovative digital agency and need skilled online talent to help with website
                development, business management and automation. If you have skills with your creativity and portfolio,
                DM us.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={whatsappLink("Hi ElevateX Digital, I'd like to join your creator network. Here is my portfolio:")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold btn-sm"
                >
                  DM us on WhatsApp <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <a
                  href={site.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-line btn-sm"
                >
                  <Instagram className="h-3.5 w-3.5" /> {site.contact.instagramHandle}
                </a>
              </div>
            </Reveal>
            <div className="mt-9 space-y-3">
              {capabilityGroups.map((group) => (
                <Reveal key={group.title}>
                  <div className="flex items-start gap-4 border-t border-white/10 pt-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/25 bg-gold/[0.06] text-gold">
                      <Icon name={group.icon} className="h-4 w-4" />
                    </span>
                    <div>
                      <h3 className="text-[0.86rem] font-semibold uppercase tracking-[0.12em] text-bone">{group.title}</h3>
                      <p className="mt-1 text-[0.8rem] leading-relaxed text-mist/80">{group.items.join(" · ")}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div id="join" className="scroll-mt-28">
            <Reveal delay={100}>
              <ApplicationForm />
            </Reveal>
            <p className="mt-4 text-[0.68rem] leading-relaxed text-mist/55">
              Applications are reviewed personally. No fee, no placement charge — just a portfolio conversation.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.07] py-14">
        <div className="wrap grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal>
            <SignatureStrip />
          </Reveal>
          <Reveal delay={100}>
            <p className="font-display text-[clamp(1.6rem,3vw,2.2rem)] italic leading-tight text-bone">
              &ldquo;Real talent × real work × bigger impact. If you care about the craft, we should talk.&rdquo;
            </p>
            <Link href="/contact" className="link-underline mt-4 inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold-soft">
              Start a conversation <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Work with us"
        title="A small team with a high standard. Let's see if we fit."
        copy="Tell us about your brand. You will speak to the founder, not a sales script."
      />
    </>
  );
}
