"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Instagram } from "@/components/icons";
import { creatorRoles, site } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

export function ApplicationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("loading");
    setError("");

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          role: data.get("role"),
          portfolioUrl: data.get("portfolioUrl"),
          message: data.get("message"),
          website: data.get("website"),
        }),
      });
      const result = (await response.json()) as { ok?: boolean; error?: string };
      if (!response.ok || !result.ok) throw new Error(result.error || "Please try again.");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="panel p-7 sm:p-9">
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold">
          <Check className="h-6 w-6" />
        </span>
        <h3 className="mt-5 font-display text-3xl text-bone">Application received.</h3>
        <p className="mt-3 text-sm leading-relaxed text-mist">
          Thank you for your interest in creating with ElevateX Digital. Your application is saved and we will review
          your portfolio. If you have skills with your creativity and portfolio, we will reach out.
        </p>
        <button type="button" onClick={() => setStatus("idle")} className="btn btn-line btn-sm mt-6">
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="panel p-6 sm:p-8">
      <p className="eyebrow">Join the creator network</p>
      <h2 className="mt-3 font-display text-[2rem] leading-tight text-bone">If you have skills, show us your work.</h2>
      <p className="mt-2 text-sm text-mist">
        Remote · Flexible · Global. We are looking for online creators in website development, business management and
        automation.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="applicant-name">
            Name *
          </label>
          <input id="applicant-name" name="name" required autoComplete="name" className="field" placeholder="Your name" />
        </div>
        <div>
          <label className="field-label" htmlFor="applicant-email">
            Email *
          </label>
          <input id="applicant-email" name="email" type="email" required autoComplete="email" className="field" placeholder="you@email.com" />
        </div>
        <div>
          <label className="field-label" htmlFor="applicant-phone">
            Phone / WhatsApp
          </label>
          <input id="applicant-phone" name="phone" autoComplete="tel" className="field" placeholder="+91" />
        </div>
        <div>
          <label className="field-label" htmlFor="applicant-role">
            Your area *
          </label>
          <select id="applicant-role" name="role" required defaultValue="" className="field appearance-none bg-[#0d0d11]">
            <option value="" disabled>
              Select an area
            </option>
            {creatorRoles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="field-label" htmlFor="applicant-portfolio">
            Portfolio link
          </label>
          <input
            id="applicant-portfolio"
            name="portfolioUrl"
            className="field"
            placeholder="https:// or your Instagram / Behance / GitHub"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="field-label" htmlFor="applicant-message">
            About your skills *
          </label>
          <textarea
            id="applicant-message"
            name="message"
            required
            rows={4}
            minLength={10}
            className="field resize-y"
            placeholder="What do you do best? Share a little about your experience."
          />
        </div>
        <div className="hidden" aria-hidden="true">
          <label htmlFor="applicant-website">Website</label>
          <input id="applicant-website" name="website" tabIndex={-1} autoComplete="off" />
        </div>
      </div>

      {status === "error" ? (
        <div className="mt-4 border border-red-400/30 bg-red-500/10 px-4 py-3" role="alert">
          <p className="text-sm text-red-200">{error}</p>
          <a
            href={site.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-gold-soft hover:text-gold-bright"
          >
            <Instagram className="h-3.5 w-3.5" /> DM {site.contact.instagramHandle} instead
          </a>
        </div>
      ) : null}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button type="submit" disabled={status === "loading"} className="btn btn-gold">
          {status === "loading" ? "Sending…" : "Send application"}
          <ArrowUpRight className="h-4 w-4" />
        </button>
        <a
          href={site.contact.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-mist transition-colors hover:text-gold-soft"
        >
          <Instagram className="h-4 w-4" /> Or DM {site.contact.instagramHandle}
        </a>
      </div>
    </form>
  );
}
