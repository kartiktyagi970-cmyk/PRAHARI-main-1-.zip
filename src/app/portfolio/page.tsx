import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check, Globe, Layout, Palette, Cart } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { Arcs, PageHero, ProjectCard, SectionHead } from "@/components/ui";
import { projects, site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portfolio — Websites, UI/UX and E-Commerce Projects",
  description:
    "Explore ElevateX Digital's work: LUMIÈRE jewellery store, The Ember restaurant website and VELORE fashion e-commerce. Real projects, real results.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "ElevateX Digital portfolio",
    description: "Websites, UI/UX design, branding and e-commerce projects built by ElevateX Digital.",
    url: "/portfolio",
  },
};

const categories = [
  { label: "Websites", icon: Globe },
  { label: "UI/UX Design", icon: Layout },
  { label: "Branding", icon: Palette },
  { label: "E-Commerce", icon: Cart },
];

export default function PortfolioPage() {
  const [featured, ...rest] = projects;

  return (
    <>
      <PageHero
        eyebrow="Our portfolio"
        title={
          <>
            Explore our <span className="gold-text italic">work.</span>
          </>
        }
        intro="From sleek websites to powerful brand identities, we create digital experiences that make an impact. Take a look at some of our latest projects."
        aside={
          <div className="border border-white/12 bg-white/[0.02] px-4 py-3">
            <p className="text-[0.56rem] uppercase tracking-[0.22em] text-mist/60">We build brands that grow</p>
            <p className="mt-1 font-display text-xl italic text-bone">Real projects. Real results.</p>
          </div>
        }
      />

      <section className="border-b border-white/[0.07] bg-[#070708]">
        <div className="wrap flex flex-wrap items-center gap-x-10 gap-y-4 py-5">
          {categories.map(({ label, icon: CatIcon }) => (
            <span key={label} className="flex items-center gap-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-mist/70">
              <CatIcon className="h-4 w-4 text-gold/70" /> {label}
            </span>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Featured build</p>
          </Reveal>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <Reveal>
              <ProjectCard project={featured} showPhone priority />
            </Reveal>
            <Reveal delay={120}>
              <h2 className="display text-[clamp(2.2rem,4.6vw,3.5rem)]">
                {featured.client} — <span className="gold-text italic">{featured.headline}</span>
              </h2>
              <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-mist">{featured.summary}</p>
              <ul className="mt-6 space-y-2.5">
                {featured.deliverables.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-mist">
                    <Check className="h-4 w-4 text-gold" /> {item}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/contact?interest=website-development" className="btn btn-gold btn-sm">
                  Build something like this <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
                <a
                  href={whatsappLink(`Hi ElevateX Digital, I saw the ${featured.client} project on your portfolio and I'd like something similar.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-line btn-sm"
                >
                  Discuss on WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/[0.07] bg-[#070708] py-12 sm:py-16">
        <Arcs className="-right-40 -top-24 h-[30rem] w-[30rem] opacity-30" />
        <div className="wrap relative">
          <SectionHead
            eyebrow="More work"
            title={
              <>
                Different industries. <span className="gold-text italic">Same standard.</span>
              </>
            }
            intro="Restaurant or retail, the goal is the same: make the brand feel premium and make the next step obvious."
          />
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {rest.map((project, index) => (
              <Reveal key={project.slug} delay={index * 100}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead
            eyebrow="Project notes"
            title={
              <>
                What we actually <span className="gold-text italic">delivered.</span>
              </>
            }
          />
          <div className="mt-10 divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {projects.map((project, index) => (
              <Reveal key={project.slug}>
                <div className="grid gap-5 py-7 sm:grid-cols-[0.3fr_0.4fr_0.3fr] sm:items-center">
                  <div>
                    <p className="text-[0.56rem] uppercase tracking-[0.22em] text-gold/60">0{index + 1}</p>
                    <h3 className="mt-1 font-display text-2xl text-bone">{project.client}</h3>
                    <p className="text-[0.6rem] uppercase tracking-[0.16em] text-mist/60">{project.category}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.deliverables.map((item) => (
                      <span key={item} className="border border-white/12 px-2.5 py-1 text-[0.58rem] uppercase tracking-[0.12em] text-mist">
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="text-[0.8rem] leading-relaxed text-mist/75 sm:text-right">
                    &ldquo;{project.subline}&rdquo;
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-10 flex flex-col gap-4 border border-gold/20 bg-gold/[0.04] px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[0.6rem] uppercase tracking-[0.22em] text-gold-soft/80">Your project next</p>
                <p className="mt-1 font-display text-2xl text-bone">We build brands that grow.</p>
              </div>
              <Link href="/contact" className="btn btn-gold btn-sm">
                Start your project <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
          <p className="mt-5 text-[0.68rem] text-mist/50">
            Project names and creative direction shown as published by {site.name}. Want references or a closer look?
            Ask us directly.
          </p>
        </div>
      </section>

      <CtaBand
        eyebrow="Your turn"
        title="A portfolio is only proof. The next project could be yours."
        copy="Tell us what you are launching, and we will show you how we would approach it — website, content and campaigns included."
      />
    </>
  );
}
