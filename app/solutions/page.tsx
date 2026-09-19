import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Layzox builds digital products, AI systems, business software and digital infrastructure for ambitious businesses. Outcomes first, technology second.",
  alternates: {
    canonical: "https://layzox.com/solutions",
  },
};

const SOLUTIONS = [
  {
    slug: "product-engineering",
    num: "01",
    title: "Product Engineering",
    subtitle: "Web Applications · SaaS Platforms · Enterprise Systems",
    description:
      "We design and build digital products from ground-truth requirements to production. Engineered for real conditions, clean domain isolation, and long-term maintainability.",
    whatWeDeliver: [
      "Multi-tenant SaaS platforms with access control and tenancy isolation",
      "Enterprise software replacing legacy manual workflows",
      "High-performance customer portals and billing infrastructure",
      "Internal operational dashboards and analytics tools",
    ],
    approach: "Architecture first. Requirements verified. Build iterative. Ship verified.",
  },
  {
    slug: "ai-automation",
    num: "02",
    title: "AI & Automation",
    subtitle: "AI Workflows · Knowledge Retrieval · Automation",
    description:
      "AI systems designed around specific tasks: finding useful information, processing documents, and reducing repetitive work. Evaluation and human review are part of the workflow.",
    whatWeDeliver: [
      "Multi-agent autonomous systems for end-to-end task execution",
      "Retrieval-Augmented Generation (RAG) over proprietary document libraries",
      "Automated document processing, entity extraction, and synthesis",
      "Intelligent workflow automation reducing manual operational load",
    ],
    approach: "Ground truth benchmarking → retrieval architecture → agent orchestration → production.",
  },
  {
    slug: "business-systems",
    num: "03",
    title: "Business Systems",
    subtitle: "Custom CRM · ERP · Operations Platforms · Workflow Engines",
    description:
      "Custom operational software that eliminates manual friction, harmonizes siloed data, and gives leadership real-time visibility over business operations.",
    whatWeDeliver: [
      "Custom CRM and commercial operations platforms",
      "Quote-to-cash, invoicing, and reconciliation engines",
      "Staff scheduling, resource allocation, and dispatch platforms",
      "Inventory tracking and supplier management systems",
    ],
    approach: "Process mapping → unified data model → staged rollout → operational enablement.",
  },
  {
    slug: "digital-infrastructure",
    num: "04",
    title: "Digital Infrastructure",
    subtitle: "Distributed Systems · API Architecture · Cloud · Edge",
    description:
      "Cloud infrastructure planned around your workload, with deliberate choices about access, scaling, monitoring, and recovery.",
    whatWeDeliver: [
      "Infrastructure-as-Code for repeatable, immutable environments",
      "High-throughput API gateways with rate limiting and token validation",
      "Fault-tolerant distributed database architecture",
      "Comprehensive observability: monitoring, alerting, and incident response",
    ],
    approach: "Well-architected review → blueprint modeling → phased migration → operations handover.",
  },
];

export default function SolutionsPage() {
  return (
    <main className="bg-[var(--color-canvas)] text-[var(--color-ink)] min-h-screen">

      {/* Page header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-36 pb-16 border-b border-[var(--color-rule)]">
        <div className="mb-6">
          <span className="section-label">Solutions</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <h1
              className="font-display font-medium text-[var(--color-ink)] leading-[1.02] tracking-[-0.05em]"
              style={{ fontSize: "clamp(44px, 7vw, 100px)" }}
            >
              From ambition
              <br />
              <span className="text-[var(--color-accent)]">to what works.</span>
            </h1>
          </div>
          <div className="lg:col-span-4">
            <p className="text-base sm:text-lg text-[var(--color-ink-secondary)] leading-relaxed font-normal">
              Product thinking, careful design, and engineering that connects the details. We work with you to turn a business need into a useful digital system.
            </p>
          </div>
        </div>
      </div>

      {/* Solutions list */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 sm:py-20">
        <div className="space-y-0 border-t border-[var(--color-rule)]">
          {SOLUTIONS.map((sol) => (
            <article
              key={sol.slug}
              className="py-12 sm:py-16 border-b border-[var(--color-rule)]"
              aria-labelledby={`sol-${sol.slug}-heading`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                {/* Identity */}
                <div className="lg:col-span-4 space-y-3">
                  <span className="font-mono-tech text-[10px] font-bold text-[var(--color-rule-strong)]">[{sol.num}]</span>
                  <h2
                    id={`sol-${sol.slug}-heading`}
                    className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[var(--color-ink)] leading-tight"
                  >
                    {sol.title}
                  </h2>
                  <p className="font-mono-tech text-[10px] uppercase tracking-wider text-[var(--color-ink-tertiary)]">
                    {sol.subtitle}
                  </p>
                </div>

                {/* Detail */}
                <div className="lg:col-span-8 space-y-8 lg:border-l lg:border-[var(--color-rule)] lg:pl-12">
                  <p className="text-base sm:text-lg text-[var(--color-ink-secondary)] leading-relaxed font-normal">
                    {sol.description}
                  </p>

                  <div>
                    <p className="font-mono-tech text-[10px] font-bold uppercase tracking-widest text-[var(--color-ink-tertiary)] mb-4">
                      What we deliver
                    </p>
                    <ul className="space-y-2.5" aria-label={`${sol.title} deliverables`}>
                      {sol.whatWeDeliver.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-[var(--color-ink-secondary)]">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] flex-shrink-0" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-[var(--color-canvas-subtle)] border-l-2 border-[var(--color-accent)]">
                    <p className="font-mono-tech text-[10px] font-bold uppercase tracking-wider text-[var(--color-ink-tertiary)] mb-1">
                      Our approach
                    </p>
                    <p className="text-sm text-[var(--color-ink-secondary)] font-medium">{sol.approach}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 pt-12 border-t border-[var(--color-rule)] flex flex-col sm:flex-row sm:items-center justify-between gap-8">
          <div className="max-w-lg">
            <h3 className="font-display text-2xl sm:text-3xl font-black tracking-tight text-[var(--color-ink)] mb-2">
              Ready to start?
            </h3>
            <p className="text-sm text-[var(--color-ink-tertiary)] leading-relaxed">
              Bring us the problem, the ambition, or the first rough idea. We can work through the next step together.
            </p>
          </div>
          <Link href="/contact" className="btn-primary group inline-flex items-center gap-2 flex-shrink-0">
            <span>Talk to Layzox</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>

    </main>
  );
}
