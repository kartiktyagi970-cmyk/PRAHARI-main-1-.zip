import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Star } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import type { Project } from "@/lib/site";

export function Arcs({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 600"
      aria-hidden="true"
      className={`pointer-events-none absolute ${className}`}
      fill="none"
    >
      <defs>
        <linearGradient id="arcGold" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#c9a05a" stopOpacity="0" />
          <stop offset="45%" stopColor="#e6c98d" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#f7e7c4" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <circle cx="300" cy="300" r="290" stroke="url(#arcGold)" strokeWidth="1" />
      <circle cx="300" cy="300" r="220" stroke="url(#arcGold)" strokeWidth="0.7" />
      <circle cx="300" cy="300" r="150" stroke="url(#arcGold)" strokeWidth="0.5" />
    </svg>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  aside,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  aside?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.07] pt-16 pb-14 sm:pt-20 sm:pb-20">
      <Arcs className="-right-40 -top-52 h-[38rem] w-[38rem] opacity-50 sm:-right-24" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="wrap relative grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
        <div>
          <Reveal>
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="display mt-5 text-[clamp(3rem,7vw,5.6rem)]">{title}</h1>
          </Reveal>
        </div>
        <Reveal delay={120}>
          <p className="max-w-md text-[0.98rem] leading-relaxed text-mist lg:ml-auto">{intro}</p>
          {aside ? <div className="mt-6 lg:ml-auto lg:max-w-sm">{aside}</div> : null}
        </Reveal>
      </div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  intro,
  cta,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  cta?: { href: string; label: string };
  align?: "left" | "center";
}) {
  return (
    <div
      className={`flex flex-col gap-6 ${
        align === "center" ? "items-center text-center" : "md:flex-row md:items-end md:justify-between"
      }`}
    >
      <Reveal className={align === "center" ? "max-w-2xl" : "max-w-2xl"}>
        <p className={`eyebrow ${align === "center" ? "justify-center" : ""}`}>{eyebrow}</p>
        <h2 className="display mt-4 text-[clamp(2.2rem,4.8vw,3.7rem)]">{title}</h2>
        {intro ? <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-mist">{intro}</p> : null}
      </Reveal>
      {cta ? (
        <Reveal delay={120}>
          <Link href={cta.href} className="btn btn-line btn-sm">
            {cta.label}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </Reveal>
      ) : null}
    </div>
  );
}

export function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-2.5 text-sm text-mist">
      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
      <span>{children}</span>
    </li>
  );
}

export function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];
  return (
    <div className="marquee relative overflow-hidden border-y border-white/[0.08] bg-[#08080a] py-4">
      <div className="marquee-track items-center gap-10 pr-10">
        {loop.map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center gap-10">
            <span className="text-[0.66rem] font-semibold uppercase tracking-[0.3em] text-bone/70 sm:text-[0.72rem]">
              {item}
            </span>
            <Star className="h-2.5 w-2.5 text-gold/70" />
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#08080a] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#08080a] to-transparent" />
    </div>
  );
}

export function ProjectCard({
  project,
  showPhone = false,
  priority = false,
}: {
  project: Project;
  showPhone?: boolean;
  priority?: boolean;
}) {
  return (
    <article id={project.slug} className="group scroll-mt-28">
      <div className="relative">
        <div className="relative overflow-hidden border border-white/12 bg-[#09090c] shadow-[0_40px_90px_-50px_rgba(0,0,0,0.9)] transition-colors duration-500 group-hover:border-gold/35">
          <div className="flex items-center gap-1.5 border-b border-white/[0.08] bg-white/[0.02] px-3 py-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
            <span className="mx-auto text-[0.54rem] font-semibold uppercase tracking-[0.3em] text-mist/60">
              {project.client}
            </span>
            <span className="w-6" />
          </div>
          <div className="relative aspect-[16/11] overflow-hidden">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              priority={priority}
              sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-black/10" />
            <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5">
              <p className="text-[0.52rem] font-semibold uppercase tracking-[0.3em] text-white/55">
                {project.client}
              </p>
              <h3 className="mt-1.5 font-display text-[1.45rem] leading-[1.02] text-bone sm:text-[1.7rem]">
                {project.headline}
              </h3>
              <p className="mt-1 max-w-[16rem] text-[0.68rem] leading-snug text-white/60">{project.subline}</p>
              <Link
                href={`/portfolio#${project.slug}`}
                className="mt-3 inline-flex w-fit items-center gap-1.5 border border-white/25 px-2.5 py-1 text-[0.5rem] font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur transition-colors hover:border-gold/60 hover:text-gold-bright"
              >
                View project <ArrowUpRight className="h-2.5 w-2.5" />
              </Link>
            </div>
          </div>
        </div>

        {showPhone ? (
          <div className="absolute bottom-3 right-3 w-[24%] min-w-[82px] rounded-[1.2rem] border border-white/20 bg-[#0a0a0c] p-1.5 shadow-[0_24px_50px_-18px_rgba(0,0,0,0.95)] transition-transform duration-700 group-hover:-translate-y-1">
            <div className="relative aspect-[9/17] overflow-hidden rounded-[0.9rem]">
              <Image
                src={project.detailImage}
                alt={`${project.client} mobile experience`}
                fill
                sizes="120px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-2">
                <p className="font-display text-[0.62rem] leading-tight text-bone">{project.headline}</p>
                <span className="mt-1 block border border-gold/50 bg-gold/90 px-1.5 py-0.5 text-center text-[0.32rem] font-bold uppercase tracking-widest text-black">
                  Shop now
                </span>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      <div className="mt-5 flex items-start justify-between gap-4 pr-1">
        <div>
          <h3 className="text-[0.85rem] font-bold uppercase tracking-[0.16em] text-bone">{project.client}</h3>
          <p className="mt-1.5 inline-flex border border-white/15 px-2.5 py-1 text-[0.6rem] uppercase tracking-[0.14em] text-mist">
            {project.category}
          </p>
        </div>
        <ArrowRight className="mt-1 h-5 w-5 text-gold/70 transition-transform duration-500 group-hover:translate-x-1" />
      </div>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-mist/80">{project.summary}</p>
    </article>
  );
}

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
      {items.map((item) => (
        <details key={item.q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left">
            <span className="text-[0.98rem] font-medium text-bone transition-colors group-hover:text-gold-soft">
              {item.q}
            </span>
            <span className="relative mt-1 flex h-5 w-5 shrink-0 items-center justify-center text-gold">
              <span className="absolute h-px w-3.5 bg-current" />
              <span className="absolute h-3.5 w-px bg-current transition-transform duration-300 group-open:rotate-90 group-open:opacity-0" />
            </span>
          </summary>
          <p className="mt-3 max-w-3xl pr-8 text-sm leading-relaxed text-mist">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export function SignatureStrip() {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden border border-white/[0.08] bg-white/[0.06] sm:grid-cols-4">
      {[
        { k: "Remote", v: "Work from anywhere" },
        { k: "Flexible", v: "Hours that fit" },
        { k: "Global", v: "Clients worldwide" },
        { k: "Real work", v: "Bigger impact" },
      ].map((item) => (
        <div key={item.k} className="bg-[#09090c] px-5 py-6">
          <p className="gold-text text-[1.15rem] font-semibold">{item.k}</p>
          <p className="mt-1 text-[0.68rem] uppercase tracking-[0.16em] text-mist/60">{item.v}</p>
        </div>
      ))}
    </div>
  );
}
