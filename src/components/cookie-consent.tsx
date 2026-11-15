"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const KEY = "elevatex-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(KEY);
    } catch {
      stored = null;
    }
    if (!stored) {
      const timer = window.setTimeout(() => setVisible(true), 1400);
      return () => window.clearTimeout(timer);
    }
  }, []);

  function choose(value: "all" | "essential") {
    try {
      window.localStorage.setItem(KEY, JSON.stringify({ value, at: new Date().toISOString() }));
    } catch {
      /* storage unavailable */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      className="fixed bottom-[5.5rem] left-4 right-4 z-[60] border border-gold/25 bg-[#0b0b0e]/95 p-5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:bottom-5 sm:left-5 sm:right-auto sm:max-w-sm"
    >
      <p className="text-[0.62rem] font-bold uppercase tracking-[0.24em] text-gold-soft">Cookies</p>
      <p className="mt-2 text-sm leading-relaxed text-mist">
        We use essential cookies to run this site and optional ones to understand what is useful. Read our{" "}
        <Link href="/cookie-policy" className="text-gold-soft underline decoration-gold/40 underline-offset-4">
          Cookie Policy
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button type="button" onClick={() => choose("all")} className="btn btn-gold btn-sm">
          Accept all
        </button>
        <button type="button" onClick={() => choose("essential")} className="btn btn-line btn-sm">
          Essential only
        </button>
      </div>
    </div>
  );
}
