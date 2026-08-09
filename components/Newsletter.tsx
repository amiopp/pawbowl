"use client";

import type { FormEvent } from "react";
import { Mail, PawPrint } from "lucide-react";

const SUBSCRIPTION_EMAIL = "pawbowl2026@gmail.com";

export function Newsletter() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "").trim();

    if (!email) return;

    const subject = encodeURIComponent("PawBowl offers & updates");
    const body = encodeURIComponent(
      `Hello PawBowl,\n\nPlease subscribe ${email} to PawBowl offers and updates.`,
    );

    window.location.href = `mailto:${SUBSCRIPTION_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <section aria-labelledby="newsletter-title" className="bg-paper pb-16 sm:pb-22 lg:pb-26">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-navy px-5 py-10 shadow-[0_24px_70px_rgba(8,41,74,0.2)] sm:rounded-[2.5rem] sm:px-10 sm:py-12 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14 lg:px-14">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_12%_15%,rgba(242,106,22,0.28),transparent_30%),radial-gradient(circle_at_92%_100%,rgba(85,122,53,0.3),transparent_34%)]"
          />
          <PawPrint
            aria-hidden="true"
            className="absolute -top-8 -right-5 -z-10 size-36 rotate-12 text-white/6 sm:size-48"
            fill="currentColor"
          />

          <div>
            <p className="text-xs font-extrabold tracking-[0.18em] text-orange-soft uppercase">
              The PawBowl Club
            </p>
            <h2
              id="newsletter-title"
              className="mt-3 max-w-xl font-display text-3xl leading-tight font-bold tracking-[-0.035em] text-white sm:text-4xl"
            >
              Get PawBowl offers &amp; updates 🐾
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 lg:mt-0">
            <label htmlFor="newsletter-email" className="text-sm font-extrabold text-white">
              Email
            </label>
            <div className="mt-2.5 flex flex-col gap-3 sm:flex-row sm:rounded-2xl sm:border sm:border-white/15 sm:bg-white/10 sm:p-2 sm:backdrop-blur">
              <div className="relative min-w-0 flex-1">
                <Mail
                  aria-hidden="true"
                  className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-green"
                />
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  inputMode="email"
                  placeholder="you@example.com"
                  aria-describedby="newsletter-help"
                  className="h-14 w-full rounded-xl border border-white/15 bg-white pr-4 pl-12 text-base font-semibold text-navy outline-none transition placeholder:text-ink-muted/55 focus:border-orange focus:ring-4 focus:ring-orange/20 sm:border-0"
                />
              </div>
              <button
                type="submit"
                className="inline-flex h-14 shrink-0 cursor-pointer items-center justify-center rounded-xl bg-orange-cta px-7 text-sm font-extrabold text-white shadow-[0_12px_28px_rgba(200,76,0,0.3)] transition hover:-translate-y-0.5 hover:bg-orange focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white"
              >
                Subscribe
              </button>
            </div>
            <p id="newsletter-help" className="mt-3 text-xs leading-5 text-white/62">
              Your email app will open to confirm your subscription.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
