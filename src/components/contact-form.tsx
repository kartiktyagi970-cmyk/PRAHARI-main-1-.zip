"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, WhatsApp } from "@/components/icons";
import { budgetOptions, serviceOptions, whatsappLink } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm({ defaultService = "" }: { defaultService?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [reference, setReference] = useState("");
  const [service, setService] = useState(defaultService);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("loading");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          company: data.get("company"),
          service: data.get("service"),
          budget: data.get("budget"),
          message: data.get("message"),
          website: data.get("website"),
          source: "website-contact",
        }),
      });
      const result = (await response.json()) as { ok?: boolean; reference?: string; error?: string };
      if (!response.ok || !result.ok) throw new Error(result.error || "Please try again.");
      setReference(result.reference ?? "");
      setStatus("success");
      form.reset();
      setService("");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="panel relative overflow-hidden p-7 sm:p-9">
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold">
          <Check className="h-6 w-6" />
        </span>
        <h3 className="mt-5 font-display text-3xl text-bone">Message received.</h3>
        <p className="mt-3 text-sm leading-relaxed text-mist">
          Thank you for reaching out to ElevateX Digital. Your enquiry is saved and we will get back to you personally.
          If it is urgent, WhatsApp is the fastest route.
        </p>
        {reference ? (
          <p className="mt-5 inline-flex border border-white/15 px-3 py-2 text-[0.66rem] uppercase tracking-[0.2em] text-gold-soft">
            Reference · {reference}
          </p>
        ) : null}
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={whatsappLink(
              `Hi ElevateX Digital, I just sent an enquiry on your website${reference ? ` (${reference})` : ""}. I'd like to talk.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold btn-sm"
          >
            <WhatsApp className="h-4 w-4" /> Continue on WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="btn btn-line btn-sm"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="panel relative p-6 sm:p-8" noValidate={false}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow">Project enquiry</p>
          <h2 className="mt-3 font-display text-[2rem] leading-tight text-bone">Tell us what you are building.</h2>
        </div>
        <span className="hidden rounded-full border border-gold/30 px-3 py-1 text-[0.5rem] font-bold uppercase tracking-[0.18em] text-gold-soft sm:inline">
          We reply personally
        </span>
      </div>

      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="name">
            Your name *
          </label>
          <input id="name" name="name" required autoComplete="name" className="field" placeholder="Full name" />
        </div>
        <div>
          <label className="field-label" htmlFor="email">
            Email *
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className="field" placeholder="you@company.com" />
        </div>
        <div>
          <label className="field-label" htmlFor="phone">
            Phone / WhatsApp
          </label>
          <input id="phone" name="phone" autoComplete="tel" className="field" placeholder="+91" />
        </div>
        <div>
          <label className="field-label" htmlFor="company">
            Business / brand
          </label>
          <input id="company" name="company" autoComplete="organization" className="field" placeholder="Optional" />
        </div>
        <div>
          <label className="field-label" htmlFor="service">
            Interested in *
          </label>
          <select
            id="service"
            name="service"
            required
            value={service}
            onChange={(event) => setService(event.target.value)}
            className="field appearance-none bg-[#0d0d11]"
          >
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
            <option value="Something else">Something else</option>
          </select>
        </div>
        <div>
          <label className="field-label" htmlFor="budget">
            Budget range
          </label>
          <select id="budget" name="budget" defaultValue="" className="field appearance-none bg-[#0d0d11]">
            <option value="">Not decided yet</option>
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="field-label" htmlFor="message">
            Project details *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            minLength={10}
            className="field resize-y"
            placeholder="What are you building, and what would success look like?"
          />
        </div>
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>
      </div>

      <label className="mt-5 flex items-start gap-3 text-[0.74rem] leading-relaxed text-mist/80">
        <input
          type="checkbox"
          required
          name="consent"
          className="mt-0.5 h-4 w-4 shrink-0 accent-[#c9a05a]"
        />
        <span>
          I agree to be contacted about this enquiry, as described in the{" "}
          <Link href="/privacy-policy" className="text-gold-soft underline decoration-gold/40 underline-offset-4">
            Privacy Policy
          </Link>
          .
        </span>
      </label>

      {status === "error" ? (
        <div className="mt-4 border border-red-400/30 bg-red-500/10 px-4 py-3" role="alert">
          <p className="text-sm text-red-200">{error}</p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-gold-soft hover:text-gold-bright"
          >
            <WhatsApp className="h-3.5 w-3.5" /> Message us on WhatsApp instead
          </a>
        </div>
      ) : null}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button type="submit" disabled={status === "loading"} className="btn btn-gold w-full sm:w-auto">
          {status === "loading" ? "Sending…" : "Send enquiry"}
          <ArrowUpRight className="h-4 w-4" />
        </button>
        <p className="text-[0.68rem] leading-relaxed text-mist/60">
          Prefer to talk? WhatsApp{" "}
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="text-gold-soft underline decoration-gold/40 underline-offset-2">
            +91 8571064108
          </a>
        </p>
      </div>
    </form>
  );
}
