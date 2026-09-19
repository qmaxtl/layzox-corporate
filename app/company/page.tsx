import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "Company",
  description:
    "Meet LAYZOX. Products, intelligent systems and digital infrastructure built around the way businesses work.",
  alternates: {
    canonical: "https://layzox.com/company",
  },
};

export default function CompanyPage() {
  return (
    <main className="bg-[var(--color-canvas)] text-[var(--color-ink)] min-h-screen">

      {/* Page header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-36 pb-16 border-b border-[var(--color-rule)]">
        <div className="mb-6">
          <span className="section-label">Company</span>
        </div>
        <h1
          className="font-display font-medium text-[var(--color-ink)] leading-[1.02] tracking-[-0.05em] mb-8"
          style={{ fontSize: "clamp(44px, 7vw, 100px)" }}
        >
          Built on curiosity.
          <br />
          <span style={{ color: "var(--color-accent)" }}>Driven by purpose.</span>
        </h1>
        <p className="text-base sm:text-lg text-[var(--color-ink-secondary)] leading-relaxed font-normal max-w-2xl">
          {COMPANY.supportingStatement}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 sm:py-20 space-y-0">

        {/* 01 — Who we are */}
        <section className="py-16 sm:py-20 border-b border-[var(--color-rule)]" aria-labelledby="story-heading">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4 space-y-3">
              <span className="section-label">[01] Who we are</span>
              <h2 id="story-heading" className="font-display text-3xl sm:text-4xl font-black text-[var(--color-ink)] tracking-tight">
                The LAYZOX approach
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6 text-base sm:text-lg font-normal text-[var(--color-ink-secondary)] leading-relaxed lg:border-l lg:border-[var(--color-rule)] lg:pl-12">
              <p>
                LAYZOX is a technology company building products and working with businesses
                on digital product engineering, intelligent systems, and digital infrastructure.
              </p>
              <p>
                Good technology starts with a clear understanding of the work it needs to do.
                We bring product thinking, design, and engineering into the same conversation,
                from the first question through to the details of delivery.
              </p>
              <p>
                Our focus is practical: make everyday work easier, give people useful tools,
                and create a foundation that can evolve as the business grows.
              </p>
              <div className="pt-2 p-5 bg-[var(--color-canvas-subtle)] border-l-2 border-[var(--color-accent)]">
                <p className="font-mono-tech text-[10px] font-bold uppercase tracking-wider text-[var(--color-ink-tertiary)] mb-1">
                  Legal entity
                </p>
                <p className="font-mono-tech text-sm text-[var(--color-ink)] font-bold">
                  {COMPANY.legalName} · {COMPANY.corporateInfo.jurisdiction}
                </p>
                <p className="text-xs text-[var(--color-ink-tertiary)] mt-1">
                  {COMPANY.corporateInfo.registrationNotice}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 02 — Principles */}
        <section id="principles" className="py-16 sm:py-20 border-b border-[var(--color-rule)]" aria-labelledby="principles-heading">
          <div className="mb-12">
            <span className="section-label mb-3 block">[02] How we work</span>
            <h2 id="principles-heading" className="font-display font-medium text-[var(--color-ink)] leading-[1.05] tracking-[-0.04em]" style={{ fontSize: "clamp(36px, 5vw, 68px)" }}>
              A considered approach.
              <br />
              <span style={{ color: "var(--color-accent)" }}>At every step.</span>
            </h2>
          </div>

          <div className="border-t border-[var(--color-rule)] divide-y divide-[var(--color-rule)]">
            {COMPANY.principles.map((pr) => (
              <div
                key={pr.number}
                className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-baseline"
              >
                <div className="lg:col-span-1 font-mono-tech text-[10px] font-bold text-[var(--color-rule-strong)]">
                  [{pr.number}]
                </div>
                <div className="lg:col-span-4">
                  <h3 className="font-mono-tech text-sm font-bold uppercase tracking-wider text-[var(--color-ink)]">
                    {pr.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-[var(--color-accent)] font-medium italic">
                    {pr.statement}
                  </p>
                </div>
                <div className="lg:col-span-7 text-sm text-[var(--color-ink-secondary)] leading-relaxed font-normal lg:border-l lg:border-[var(--color-rule)] lg:pl-8">
                  {pr.detail}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 03 — Company information */}
        <section className="py-16 sm:py-20 border-b border-[var(--color-rule)]" aria-labelledby="governance-heading">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4 space-y-3">
              <span className="section-label">[03] Statutory details</span>
              <h2 id="governance-heading" className="font-display text-3xl sm:text-4xl font-black text-[var(--color-ink)] tracking-tight">
                Company Information
              </h2>
            </div>

            <div className="lg:col-span-8 lg:border-l lg:border-[var(--color-rule)] lg:pl-12">
              <div className="border border-[var(--color-rule)] bg-[var(--color-canvas-subtle)] p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 font-mono-tech text-xs mb-8">
                  {[
                    { label: "Legal Name", value: COMPANY.legalName },
                    { label: "Jurisdiction", value: COMPANY.corporateInfo.jurisdiction },
                    { label: "Registration", value: COMPANY.corporateInfo.registeredState },
                    { label: "Contact", value: COMPANY.contact.general },
                  ].map((item) => (
                    <div key={item.label}>
                      <span className="text-[var(--color-ink-tertiary)] block mb-1 uppercase tracking-widest text-[9px]">
                        {item.label}
                      </span>
                      <span className="text-[var(--color-ink)] font-bold">{item.value}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-[var(--color-rule)] pt-6 text-xs text-[var(--color-ink-tertiary)] leading-relaxed">
                  {COMPANY.corporateInfo.registrationNotice}
                </div>
                <div className="border-t border-[var(--color-rule)] pt-6 mt-4 flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="btn-primary group inline-flex items-center gap-2 text-[11px]"
                  >
                    <span>Contact Layzox</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                  <Link
                    href="/legal/privacy"
                    className="font-mono-tech text-[10px] uppercase tracking-wider text-[var(--color-ink-tertiary)] hover:text-[var(--color-ink)] transition-colors focus-visible:outline-none focus-visible:underline"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/legal/terms"
                    className="font-mono-tech text-[10px] uppercase tracking-wider text-[var(--color-ink-tertiary)] hover:text-[var(--color-ink)] transition-colors focus-visible:outline-none focus-visible:underline"
                  >
                    Terms of Engagement
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 04 — Objectives */}
        <section className="py-16 sm:py-20" aria-labelledby="objectives-heading">
          <div className="mb-12">
            <span className="section-label mb-3 block">[04] What we optimize for</span>
            <h2 id="objectives-heading" className="font-display font-medium text-[var(--color-ink)] leading-[1.05] tracking-[-0.04em]" style={{ fontSize: "clamp(32px, 5vw, 68px)" }}>
              The details that matter.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-rule)]">
            {COMPANY.objectives.map((obj) => (
              <div
                key={obj.number}
                className="bg-[var(--color-canvas)] p-8 space-y-3"
              >
                <div className="font-mono-tech text-[10px] font-bold text-[var(--color-accent)] uppercase tracking-widest">
                  [{obj.number}]
                </div>
                <h3 className="font-mono-tech text-sm font-bold uppercase tracking-wider text-[var(--color-ink)]">
                  {obj.title}
                </h3>
                <p className="text-sm text-[var(--color-ink-secondary)] leading-relaxed font-normal">
                  {obj.definition}
                </p>
                <p className="font-mono-tech text-[10px] uppercase tracking-wider text-[var(--color-ink-tertiary)]">
                  → {obj.metric}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>

    </main>
  );
}
