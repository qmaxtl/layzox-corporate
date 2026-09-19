import React from "react";
import type { Metadata } from "next";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "Cookies & browser storage",
  description: "How the LAYZOX website uses browser storage for theme preferences and its interactive demonstration.",
};

export default function CookiePolicyPage() {
  return (
    <main className="relative w-full bg-[var(--color-canvas)] text-[var(--color-ink)] pt-36 pb-28">
      <div className="mx-auto max-w-4xl px-6 md:px-12">
        <div className="border-b border-[var(--color-rule)] pb-12 mb-12">
          <span className="section-label">
            Browser storage
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-black text-[var(--color-ink)] mt-4">
            Cookies & browser storage
          </h1>
          <p className="font-mono-tech text-xs text-[var(--color-ink-tertiary)] mt-2">
            : {COMPANY.legalName} · JURISDICTION: {COMPANY.corporateInfo.jurisdiction}
          </p>
        </div>

        <div className="space-y-10 text-sm sm:text-base leading-relaxed text-[var(--color-ink-secondary)] font-normal">
          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold text-[var(--color-ink)]">1. What Are Cookies?</h2>
            <p>
              Cookies and local storage let websites remember information in your browser. They are different technologies: cookies can accompany requests to a server, while local storage is read by the website in your browser.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold text-[var(--color-ink)]">2. Tracking</h2>
            <p>
              This website does not include advertising pixels or third-party behavioral analytics in its application code.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold text-[var(--color-ink)]">3. What the Website Remembers</h2>
            <p>The website uses local browser storage for:</p>
            <ul className="list-disc pl-6 space-y-2 text-[var(--color-ink-tertiary)]">
              <li>Your light or dark theme preference.</li>
              <li>Interactive demonstration state in the BusinessFlow example, so sample changes can persist between visits.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold text-[var(--color-ink)]">4. Managing Stored Data</h2>
            <p>
              You can clear or block site storage in your browser settings. Clearing it resets the saved theme preference and any stored demonstration data. The website may be unable to remember these choices when storage is blocked.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
