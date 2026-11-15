import Link from "next/link";
import { ArrowUpRight, Check, Star } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { packages, websitePackage } from "@/lib/site";

export function OfferCards() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {packages.map((item, index) => (
        <Reveal key={item.slug} delay={index * 90} as="article" className="h-full">
          <div
            className={`panel panel-hover relative flex h-full flex-col p-6 sm:p-7 ${
              item.featured ? "border-gold/40 bg-[linear-gradient(180deg,rgba(201,160,90,0.12),rgba(255,255,255,0.015))]" : ""
            }`}
          >
            {item.featured ? (
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-soft to-transparent" />
            ) : null}
            <div className="flex items-start justify-between gap-3">
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-gold-soft/80">{item.kicker}</p>
              {item.badge ? (
                <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-gold/40 bg-gold/10 px-2.5 py-1 text-[0.5rem] font-bold uppercase tracking-[0.16em] text-gold-bright">
                  <Star className="h-2 w-2" /> {item.badge}
                </span>
              ) : null}
            </div>
            <h3 className="mt-4 font-display text-[1.75rem] leading-tight text-bone">{item.title}</h3>
            <div className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              {item.compareAt ? (
                <span className="text-sm text-mist/60 line-through">{item.compareAt}</span>
              ) : null}
              <span className="gold-text text-[2.4rem] font-semibold leading-none tracking-tight">
                {item.price}
              </span>
              <span className="text-[0.6rem] uppercase tracking-[0.18em] text-mist/70">one-time</span>
            </div>
            <p className="mt-1 text-[0.62rem] uppercase tracking-[0.16em] text-mist/50">Package price</p>
            <div className="rule my-5" />
            <ul className="space-y-2.5">
              {item.includes.map((include) => (
                <li key={include} className="flex items-start gap-2.5 text-[0.85rem] text-mist">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
                  {include}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-7">
              <p className="mb-3 font-display text-[1.05rem] italic text-bone/80">&ldquo;{item.close}&rdquo;</p>
              <Link
                href={`/contact?interest=${item.slug}`}
                className={`btn w-full ${item.featured ? "btn-gold" : "btn-line"}`}
              >
                Enquire now
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function WebsiteOfferCard() {
  return (
    <Reveal>
      <div className="panel relative overflow-hidden p-7 sm:p-10">
                <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="eyebrow">{websitePackage.kicker}</p>
            <h3 className="display mt-4 text-[clamp(2rem,4vw,3.1rem)]">
              Website <span className="gold-text italic">Design</span>
            </h3>
            <p className="mt-3 text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-gold-soft/80">
              {websitePackage.promise}
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-x-6">
              {websitePackage.includes.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-mist">
                  <Check className="h-3.5 w-3.5 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-gold/30 bg-black/40 px-6 py-7 text-center">
            <p className="label text-gold/70">Investment</p>
            <p className="gold-text mt-2 text-[clamp(2.1rem,4.4vw,3rem)] font-semibold leading-none">
              {websitePackage.price}
            </p>
            <p className="mt-2 inline-flex border border-white/15 px-3 py-1 text-[0.58rem] uppercase tracking-[0.2em] text-mist">
              {websitePackage.note}
            </p>
            <Link href="/contact?interest=website-development" className="btn btn-gold mt-5 w-full">
              Get a website quote
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <p className="mt-3 text-[0.62rem] uppercase tracking-[0.16em] text-mist/50">Our first service</p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
