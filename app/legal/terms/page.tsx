import React from "react";
import type { Metadata } from "next";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "Terms of use",
  description: "Official Terms of Use of Layzox India Pvt Ltd.",
};

export default function TermsOfUsePage() {
  return (
    <main className="relative w-full bg-[var(--color-canvas)] text-[var(--color-ink)] pt-36 pb-28">
      <div className="mx-auto max-w-4xl px-6 md:px-12">
        <div className="border-b border-[var(--color-rule)] pb-12 mb-12">
          <span className="section-label">
            Statutory Terms
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-black text-[var(--color-ink)] mt-4">
            Terms of Use
          </h1>
          <p className="font-mono-tech text-xs text-[var(--color-ink-tertiary)] mt-2">
            : {COMPANY.legalName} · JURISDICTION: {COMPANY.corporateInfo.jurisdiction}
          </p>
        </div>

        <div className="space-y-10 text-sm sm:text-base leading-relaxed text-[var(--color-ink-secondary)] font-normal">
          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold text-[var(--color-ink)]">1. Agreement to Terms</h2>
            <p>
              By accessing or using the website of <strong>{COMPANY.legalName}</strong> (accessible at <code>layzox.com</code>), you agree to be bound by these Terms of Use and all applicable laws and regulations of the and relevant international jurisdictions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold text-[var(--color-ink)]">2. Intellectual Property Rights</h2>
            <p>
              All visual graphics, proprietary typography, system shaders, code samples, editorial essays, and brand assets displayed on this website are the exclusive intellectual property of Layzox India Pvt Ltd or its licensors. Unauthorized reproduction, scraping, reverse-engineering, or mirroring is strictly prohibited.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold text-[var(--color-ink)]">3. Disclaimer of Warranties</h2>
            <p>
              Information on this website is provided for informational and demonstration purposes. Web content is provided &ldquo;as is&rdquo; without warranties of any kind, express or implied. Engineering demonstrations use sample data and are separate from the LAYZOX products marked coming soon.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold text-[var(--color-ink)]">4. Limitation of Liability</h2>
            <p>
              In no event shall Layzox India Pvt Ltd, its directors, or its engineering team be liable for any indirect, incidental, special, consequential, or punitive damages arising from the use or inability to use this website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold text-[var(--color-ink)]">5. Governing Law & Jurisdiction</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the competent courts in India.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
