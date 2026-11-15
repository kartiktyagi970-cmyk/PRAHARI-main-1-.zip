import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "@/components/icons";
import { LogoMark } from "@/components/logo";
import { Arcs } from "@/components/ui";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <Arcs className="-right-40 -top-40 h-[40rem] w-[40rem] opacity-40" />
      <div className="wrap relative max-w-2xl text-center">
        <LogoMark className="mx-auto h-14 w-14" />
        <p className="eyebrow mt-8 justify-center">404</p>
        <h1 className="display mt-4 text-[clamp(2.6rem,7vw,4.5rem)]">
          This page is <span className="gold-text italic">off the map.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-mist">
          The link may have moved. Everything worth seeing is a click away — start with our services or portfolio.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn btn-gold">
            Back home <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link href="/services" className="btn btn-line">
            View services
          </Link>
        </div>
      </div>
    </section>
  );
}
