import React from "react";
import type { Metadata } from "next";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "Official Privacy Policy of Layzox India Pvt Ltd.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="relative w-full bg-[var(--color-canvas)] text-[var(--color-ink)] pt-36 pb-28">
      <div className="mx-auto max-w-4xl px-6 md:px-12">
        <div className="border-b border-[var(--color-rule)] pb-12 mb-12">
          <span className="section-label">
            Legal & privacy
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-black text-[var(--color-ink)] mt-4">
            Privacy Policy
          </h1>
          <p className="font-mono-tech text-xs text-[var(--color-ink-tertiary)] mt-2">
            : {COMPANY.legalName} · JURISDICTION: {COMPANY.corporateInfo.jurisdiction}
          </p>
        </div>

        <div className="space-y-10 text-sm sm:text-base leading-relaxed text-[var(--color-ink-secondary)] font-normal">
          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold text-[var(--color-ink)]">1. Introduction & Scope</h2>
            <p>
              This notice explains how <strong>{COMPANY.legalName}</strong> (&ldquo;LAYZOX&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) uses information provided through <code>layzox.com</code> and direct correspondence.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold text-[var(--color-ink)]">2. Data We Collect</h2>
            <p>We collect information you directly provide when submitting project enquiries, talent introductions, or correspondence:</p>
            <ul className="list-disc pl-6 space-y-2 text-[var(--color-ink-tertiary)]">
              <li>Contact details you provide: name, email address, company, and country.</li>
              <li>Project details you provide: the type of project, current stage, areas of support, scale, timing, and description.</li>
              <li>Career information you choose to send by email, such as a portfolio link and introduction.</li>
              <li>The enquiry endpoint uses an IP address temporarily to limit repeated submissions. Hosting providers may also process request logs to operate the website.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold text-[var(--color-ink)]">3. Purpose of Processing</h2>
            <p>Information you send is used to:</p>
            <ul className="list-disc pl-6 space-y-2 text-[var(--color-ink-tertiary)]">
              <li>Understand your enquiry and respond to you.</li>
              <li>Discuss project scope, potential collaboration, and next steps.</li>
              <li>Operate the website and limit misuse of its enquiry endpoint.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold text-[var(--color-ink)]">4. Delivery & Browser Storage</h2>
            <p>
              When online enquiry delivery is enabled, your form details are forwarded to the service configured to receive project enquiries. A success message appears only after that service accepts the submission. Email links open your own email app; you review and send the message there. Your chosen email provider also handles that correspondence.
            </p>
            <p>
              Your theme preference and any demonstration state are stored locally in your browser. The demonstration is for sample data; do not enter confidential or sensitive information into it. You can clear local data using your browser settings.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold text-[var(--color-ink)]">5. Privacy Requests & Contact</h2>
            <p>
              For questions about information you have sent, or to request access, correction, or deletion, contact:
            </p>
            <div className="border border-[var(--color-rule)] bg-[var(--color-canvas-subtle)] p-4 font-mono-tech text-xs space-y-1">
              <div>DATA CONTROLLER: {COMPANY.legalName}</div>
              <div>EMAIL: <a href={`mailto:${COMPANY.contact.general}`} className="underline underline-offset-4">{COMPANY.contact.general}</a></div>
              <div>JURISDICTION: {COMPANY.corporateInfo.jurisdiction}</div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
