"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "@/components/icons";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setError("");
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await response.json()) as { ok?: boolean; error?: string };
      if (!response.ok || !data.ok) throw new Error(data.error || "Could not subscribe right now.");
      setState("done");
      setEmail("");
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (state === "done") {
    return (
      <p className="flex items-center gap-2 text-sm text-gold-soft" role="status">
        <Check className="h-4 w-4" /> You&apos;re on the list. Talk soon.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-4">
      <div className="flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] p-1 pl-4 focus-within:border-gold/50">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Your email address"
          className="min-w-0 flex-1 bg-transparent py-2 text-sm text-bone outline-none placeholder:text-mist/50"
        />
        <button
          type="submit"
          disabled={state === "loading"}
          aria-label="Subscribe"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold-soft to-gold text-void transition-transform hover:scale-105 disabled:opacity-60"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
      {state === "error" ? (
        <p className="mt-2 text-xs text-red-300" role="alert">
          {error}
        </p>
      ) : (
        <p className="mt-2 text-[0.68rem] text-mist/60">Occasional growth notes. Unsubscribe anytime.</p>
      )}
    </form>
  );
}
