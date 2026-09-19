import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Layzox about products, project enquiries, or partnerships. Direct contact with the people who build.",
  alternates: {
    canonical: "https://layzox.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="bg-[var(--color-canvas)] text-[var(--color-ink)] min-h-screen">

      {/* Page header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-36 pb-16 border-b border-[var(--color-rule)]">
        <div className="mb-6">
          <span className="section-label">Contact</span>
        </div>
        <h1
          className="font-display font-medium text-[var(--color-ink)] leading-[1.02] tracking-[-0.05em] mb-8"
          style={{ fontSize: "clamp(44px, 7vw, 100px)" }}
        >
          A conversation
          <br />
          <span style={{ color: "var(--color-accent)" }}>worth starting.</span>
        </h1>
        <p className="text-base sm:text-lg text-[var(--color-ink-secondary)] leading-relaxed font-normal max-w-2xl">
          Tell us what you have in mind. A product, a difficult workflow, or a better way to build.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left: Contact channels */}
          <div className="lg:col-span-7 space-y-0 border-t border-[var(--color-rule)]">

            {/* Project enquiry */}
            <div className="py-10 border-b border-[var(--color-rule)] space-y-4">
              <span className="section-label">[01] Project Enquiry</span>
              <h2 className="font-display text-2xl sm:text-3xl font-black text-[var(--color-ink)] tracking-tight">
                Build something with LAYZOX
              </h2>
              <p className="text-sm sm:text-base text-[var(--color-ink-secondary)] leading-relaxed font-normal max-w-lg">
                For businesses planning a new product, system, or digital infrastructure engagement. Tell us what you are building and we will respond directly.
              </p>
              <Link
                href="/start-a-project"
                className="btn-primary group inline-flex items-center gap-2"
              >
                <span>Start a project enquiry</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* General contact */}
            <div className="py-10 border-b border-[var(--color-rule)] space-y-4">
              <span className="section-label">[02] General & Direct</span>
              <h2 className="font-display text-2xl sm:text-3xl font-black text-[var(--color-ink)] tracking-tight">
                Direct correspondence
              </h2>
              <p className="text-sm sm:text-base text-[var(--color-ink-secondary)] leading-relaxed font-normal max-w-lg">
                For general enquiries, media requests, or statutory correspondence.
              </p>
              <div className="flex items-center gap-2.5 font-mono-tech text-sm text-[var(--color-ink)]">
                <Mail className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${COMPANY.contact.general}`}
                  className="hover:text-[var(--color-accent)] transition-colors focus-visible:outline-none focus-visible:underline"
                  aria-label={`Send email to ${COMPANY.contact.general}`}
                >
                  {COMPANY.contact.general}
                </a>
              </div>
            </div>

            {/* Careers */}
            <div className="py-10 space-y-4">
              <span className="section-label">[03] Careers & Collaborations</span>
              <h2 className="font-display text-2xl sm:text-3xl font-black text-[var(--color-ink)] tracking-tight">
                Work with LAYZOX
              </h2>
              <p className="text-sm sm:text-base text-[var(--color-ink-secondary)] leading-relaxed font-normal max-w-lg">
                For roles, contract arrangements, or collaboration proposals.
              </p>
              <div className="flex items-center gap-2.5 font-mono-tech text-sm text-[var(--color-ink)]">
                <Mail className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${COMPANY.contact.careers}`}
                  className="hover:text-[var(--color-accent)] transition-colors focus-visible:outline-none focus-visible:underline"
                  aria-label={`Send email to ${COMPANY.contact.careers}`}
                >
                  {COMPANY.contact.careers}
                </a>
              </div>
            </div>

          </div>

          {/* Right: Company reference */}
          <div className="lg:col-span-5 lg:border-l lg:border-[var(--color-rule)] lg:pl-12 space-y-8">

            {/* Company details card */}
            <div className="border border-[var(--color-rule)] bg-[var(--color-canvas-subtle)] p-8 space-y-6">
              <p className="section-label">Company details</p>
              <div className="space-y-4 font-mono-tech text-xs">
                {[
                  { label: "Legal entity", value: COMPANY.legalName },
                  { label: "Jurisdiction", value: COMPANY.corporateInfo.jurisdiction },
                  { label: "Contact", value: COMPANY.contact.general },
                  { label: "Model", value: COMPANY.contact.operatingModel },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col gap-0.5">
                    <span className="text-[9px] uppercase tracking-widest text-[var(--color-ink-tertiary)]">
                      {item.label}
                    </span>
                    <span className="text-[var(--color-ink)] font-bold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="space-y-3">
              <p className="section-label">Online presence</p>
              <div className="flex flex-col gap-2">
                {[
                  { href: COMPANY.social.linkedin, label: "LinkedIn" },
                  { href: COMPANY.social.twitter, label: "X / Twitter" },
                  { href: COMPANY.social.github, label: "GitHub" },
                ].map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 font-mono-tech text-[11px] font-bold uppercase tracking-wider text-[var(--color-ink-secondary)] hover:text-[var(--color-ink)] transition-colors focus-visible:outline-none focus-visible:underline"
                    aria-label={`Layzox on ${social.label}`}
                  >
                    <span>{social.label}</span>
                    <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>

    </main>
  );
}
