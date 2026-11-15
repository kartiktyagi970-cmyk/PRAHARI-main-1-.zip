import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Icon, Mail, Phone, Pin, Star } from "@/components/icons";
import { LogoMark } from "@/components/logo";
import { Reveal } from "@/components/reveal";
import { Marquee, ProjectCard, SectionHead, FaqList, Arcs } from "@/components/ui";
import { OfferCards, WebsiteOfferCard } from "@/components/packages";
import { CtaBand } from "@/components/cta-band";
import { BusinessCard } from "@/components/business-card";
import { faqs, principles, processSteps, projects, services, site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "ElevateX Digital — Digital Marketing & Web Design Agency, Panipat",
  description:
    "ElevateX Digital builds websites, social media, SEO, Meta ads and video for growing brands — backed by business systems and automation. Based in Panipat, Haryana. Working globally.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden pt-12 sm:pt-16 lg:pt-20">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/assets/images/hero-glow.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-[0.32] [mask-image:radial-gradient(115%_95%_at_74%_4%,black,transparent_70%)]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-void/40 via-void/70 to-void" />
        </div>
        <Arcs className="-right-56 -top-40 h-[46rem] w-[46rem] opacity-60" />

        <div className="wrap relative grid items-center gap-14 pb-16 sm:pb-20 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:pb-24">
          <div>
            <Reveal>
              <p className="eyebrow">Digital marketing · Web · Business systems</p>
            </Reveal>
            <Reveal delay={90}>
              <h1 className="display mt-6 text-[clamp(2.8rem,8.2vw,5.9rem)]">
                We build brands
                <br />
                that <span className="gold-text italic">grow.</span>
              </h1>
            </Reveal>
            <Reveal delay={170}>
              <p className="mt-7 max-w-lg text-[0.98rem] leading-relaxed text-mist sm:text-[1.05rem]">
                ElevateX Digital is a digital marketing and business management studio in Panipat, Haryana. We design
                websites that sell, run marketing that converts, and build the systems that keep growth moving.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/contact" className="btn btn-gold">
                  Start a project <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link href="/services" className="btn btn-line">
                  Explore services <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={310}>
              <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-mist/70">
                <span className="flex items-center gap-2">
                  <Pin className="h-3.5 w-3.5 text-gold/80" /> {site.contact.locationLong}
                </span>
                <span className="flex items-center gap-2">
                  <Star className="h-2.5 w-2.5 text-gold" /> Remote · Flexible · Global
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={260} className="relative">
            <div className="relative mx-auto w-full max-w-[31rem] lg:mr-0">

              <div className="relative z-20 ml-auto w-[92%] overflow-hidden border border-white/12 bg-[#08080b] shadow-[0_50px_100px_-40px_rgba(0,0,0,0.95)]">
                <div className="flex items-center gap-1.5 border-b border-white/[0.08] bg-white/[0.02] px-3.5 py-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                  <span className="ml-2 text-[0.5rem] font-semibold uppercase tracking-[0.28em] text-mist/60">
                    {site.contact.websiteLabel}
                  </span>
                </div>
                <div className="relative p-5 sm:p-6">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_100%_0%,rgba(201,160,90,0.18),transparent_60%)]" />
                  <p className="relative text-[0.55rem] font-semibold uppercase tracking-[0.3em] text-gold-soft/70">
                    Growth, designed
                  </p>
                  <p className="relative mt-3 font-display text-[1.9rem] leading-[0.98] text-bone sm:text-[2.2rem]">
                    Better Systems.
                    <br />
                    <span className="gold-text italic">Bigger Dreams.</span>
                  </p>
                  <p className="relative mt-3 max-w-[15rem] text-[0.72rem] leading-relaxed text-mist/80">
                    Smart solutions for sustainable growth — websites, marketing and automation working together.
                  </p>

                  <div className="relative mt-5 flex items-end gap-1.5">
                    {[28, 40, 34, 52, 46, 66, 74, 58, 86].map((height, index) => (
                      <div key={index} className="flex-1">
                        <div
                          className="w-full rounded-t-[2px] bg-gradient-to-t from-gold/20 to-gold-soft/80"
                          style={{ height: `${height * 0.62}px` }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="relative mt-5 flex items-center justify-between gap-3 border-t border-white/[0.08] pt-4">
                    <div>
                      <p className="text-[0.5rem] uppercase tracking-[0.22em] text-mist/50">Services</p>
                      <p className="mt-1 text-[0.72rem] text-bone/85">Web · Social · SEO · Ads</p>
                    </div>
                    <span className="rounded-full bg-gradient-to-r from-gold-soft to-gold px-3 py-1.5 text-[0.52rem] font-bold uppercase tracking-[0.14em] text-black">
                      Let&apos;s build
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative z-30 -mt-10 w-[78%] border border-gold/30 bg-[#0b0b0e]/95 p-4 shadow-[0_30px_60px_-24px_rgba(0,0,0,0.95)] backdrop-blur sm:p-5">
                <div className="flex items-center gap-3">
                  <LogoMark className="h-10 w-10" />
                  <div>
                    <p className="gold-text text-lg font-extrabold leading-none">ElevateX</p>
                    <p className="mt-1 text-[0.46rem] font-semibold uppercase tracking-[0.34em] text-mist/70">
                      Digital
                    </p>
                  </div>
                  <div className="ml-auto h-8 w-px bg-white/10" />
                  <p className="text-[0.5rem] font-semibold uppercase leading-relaxed tracking-[0.16em] text-gold-soft/80">
                    We elevate
                    <br />
                    your brand
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-6 right-0 z-30 border border-white/15 bg-[#0b0b0e]/95 px-3.5 py-2.5 backdrop-blur">
                <p className="text-[0.48rem] font-semibold uppercase tracking-[0.22em] text-mist/60">Website design</p>
                <p className="gold-text mt-0.5 text-sm font-semibold">₹20K – ₹30K</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Marquee
        items={[
          "We build brands that grow",
          "Better systems. Bigger dreams.",
          "Real projects. Real results.",
          "Modern websites. Stronger brands.",
          "Remote · Flexible · Global",
          "Real talent × Real work × Bigger impact",
        ]}
      />

      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <div className="relative">
              <div className="relative overflow-hidden border border-white/10">
                <Image
                  src="/assets/images/studio.jpg"
                  alt="A dark, gold-lit studio desk with a laptop showing an analytics dashboard"
                  width={1200}
                  height={900}
                  sizes="(min-width: 1024px) 520px, 100vw"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
              </div>
              <div className="absolute -bottom-6 left-5 right-5 border border-gold/25 bg-[#0b0b0e]/95 px-5 py-4 backdrop-blur sm:left-8 sm:right-auto sm:max-w-xs">
                <p className="label text-gold/70">Our promise</p>
                <p className="mt-1.5 font-display text-xl leading-tight text-bone">
                  More than a look. <span className="gold-text italic">A working brand.</span>
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow">The studio</p>
              <h2 className="display mt-4 text-[clamp(2.2rem,4.8vw,3.6rem)]">
                Built by a small studio that <span className="gold-text italic">does the work.</span>
              </h2>
              <p className="mt-5 text-[0.95rem] leading-relaxed text-mist">
                ElevateX Digital was founded by {site.contact.founderName} and is based in {site.contact.locationLong}.
                We work remotely, flexibly and globally with founders who want a website and a marketing engine that
                actually pull in the same direction.
              </p>
            </Reveal>
            <div className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {principles.map((item, index) => (
                <Reveal key={item.title} delay={index * 80}>
                  <div className="border-t border-white/10 pt-4">
                    <p className="flex items-baseline gap-2 text-[0.82rem] font-semibold text-bone">
                      <span className="text-[0.58rem] tracking-[0.18em] text-gold/70">0{index + 1}</span>
                      {item.title}
                    </p>
                    <p className="mt-1.5 text-[0.8rem] leading-relaxed text-mist/80">{item.copy}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={160}>
              <Link href="/about" className="btn btn-line mt-9">
                Our story <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section border-t border-white/[0.07] bg-[#070708]">
        <div className="wrap">
          <SectionHead
            eyebrow="What we do"
            title={
              <>
                Everything your brand needs, <span className="gold-text italic">under one roof.</span>
              </>
            }
            intro="One studio for the website, the content, the campaigns and the systems behind them — so you are not stitching together five different freelancers."
            cta={{ href: "/services", label: "All services" }}
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={(index % 4) * 70} className="h-full">
                <Link
                  href={`/services#${service.slug}`}
                  className="panel panel-hover group flex h-full flex-col p-6 sm:p-7"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/25 bg-gold/[0.06] text-gold">
                      <Icon name={service.icon} className="h-5 w-5" />
                    </span>
                    <span className="font-display text-2xl text-white/15 transition-colors group-hover:text-gold/40">
                      {service.number}
                    </span>
                  </div>
                  <h3 className="mt-6 text-[1.02rem] font-semibold tracking-tight text-bone">{service.title}</h3>
                  <p className="mt-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-gold-soft/70">
                    {service.kicker}
                  </p>
                  <p className="mt-3 text-[0.85rem] leading-relaxed text-mist">{service.summary}</p>
                  <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5">
                    {service.deliverables.slice(0, 4).map((item) => (
                      <li key={item} className="flex items-center gap-1.5 text-[0.7rem] text-mist/75">
                        <Check className="h-3 w-3 text-gold/80" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex items-center justify-between pt-6">
                    <span className="text-[0.6rem] uppercase tracking-[0.14em] text-mist/55">{service.meta}</span>
                    <ArrowUpRight className="h-4 w-4 text-gold/70 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-t border-white/[0.07]">
        <div className="wrap">
          <SectionHead
            eyebrow="Our portfolio"
            title={
              <>
                Explore our <span className="gold-text italic">work.</span>
              </>
            }
            intro="From sleek websites to full storefronts, we create digital experiences that make an impact. Here are a few of our latest projects."
            cta={{ href: "/portfolio", label: "View portfolio" }}
          />
          <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 90}>
                <ProjectCard project={project} showPhone={index === 0} priority={index === 0} />
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.08] pt-6">
              <p className="text-[0.7rem] uppercase tracking-[0.24em] text-mist/60">Real projects. Real results.</p>
              <Link href="/portfolio" className="link-underline flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-gold-soft">
                See the full portfolio <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="packages" className="section border-t border-white/[0.07] bg-[#070708]">
        <div className="wrap">
          <SectionHead
            eyebrow="Ways to work with us"
            title={
              <>
                Clear packages. <span className="gold-text italic">Real value.</span>
              </>
            }
            intro="Start with a website, sharpen the marketing, or put both together with the business side. Prices below are the offers we publish — message us to confirm current inclusions."
            cta={{ href: "/contact", label: "Ask a question" }}
          />
          <div className="mt-12 space-y-5">
            <WebsiteOfferCard />
            <OfferCards />
          </div>
          <Reveal>
            <p className="mt-6 text-[0.72rem] leading-relaxed text-mist/55">
              Packages and prices as published by ElevateX Digital. Website design is quoted after scope. The Combo
              Offer is a limited time offer.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section border-t border-white/[0.07]">
        <div className="wrap">
          <SectionHead
            eyebrow="How we work"
            title={
              <>
                A calm process. <span className="gold-text italic">No guesswork.</span>
              </>
            }
            intro="You always know what is happening, what is next and why it matters."
          />
          <div className="mt-12 grid gap-px overflow-hidden border border-white/[0.08] bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.number} className="group relative bg-[#09090c] p-6 transition-colors duration-500 hover:bg-[#0d0d11] sm:p-7">
                <p className="gold-text font-display text-[2.6rem] leading-none">{step.number}</p>
                <h3 className="mt-5 text-[0.92rem] font-semibold uppercase tracking-[0.14em] text-bone">{step.title}</h3>
                <p className="mt-2.5 text-[0.84rem] leading-relaxed text-mist/85">{step.copy}</p>
                <span className="absolute inset-x-6 bottom-0 h-px scale-x-0 bg-gradient-to-r from-gold to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-t border-white/[0.07] bg-[#070708]">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <Reveal>
              <p className="eyebrow">The founder</p>
              <h2 className="display mt-4 text-[clamp(2.2rem,4.8vw,3.5rem)]">
                Real talent. Real work. <span className="gold-text italic">Bigger impact.</span>
              </h2>
              <p className="mt-5 max-w-lg text-[0.95rem] leading-relaxed text-mist">
                We are building an innovative digital agency around skilled online creators — people who can help with
                website development, business management and automation. Remote, flexible and global by design.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-7 space-y-3">
                {[
                  "Work remotely, with flexible hours",
                  "Collaborate globally on real client work",
                  "Grow your skills across web, marketing and systems",
                ].map((line) => (
                  <p key={line} className="flex items-center gap-3 text-sm text-mist">
                    <Check className="h-4 w-4 text-gold" /> {line}
                  </p>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/team" className="btn btn-gold">
                  Meet the team <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a href={whatsappLink("Hi ElevateX Digital, I'd like to join your creator network. Here is my portfolio:")} target="_blank" rel="noopener noreferrer" className="btn btn-line">
                  Join the creator network <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <BusinessCard />
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-[0.7rem] uppercase tracking-[0.16em] text-mist/70">
              <a href={site.contact.phoneHref} className="flex items-center gap-2 transition-colors hover:text-gold-soft">
                <Phone className="h-3.5 w-3.5 text-gold/70" /> {site.contact.phoneDisplay}
              </a>
              <a href={`mailto:${site.contact.email}`} className="flex items-center gap-2 break-all transition-colors hover:text-gold-soft">
                <Mail className="h-3.5 w-3.5 text-gold/70" /> {site.contact.email}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section border-t border-white/[0.07]">
        <div className="wrap grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <p className="eyebrow">Questions</p>
            <h2 className="display mt-4 text-[clamp(2.2rem,4.6vw,3.4rem)]">
              Good answers, <span className="gold-text italic">before you ask.</span>
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-mist">
              Still unsure what fits? Send a message — we will point you in the right direction, even if it is not us.
            </p>
            <Link href="/contact" className="btn btn-line btn-sm mt-6">
              Talk to us <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <FaqList items={faqs} />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
