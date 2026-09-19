import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";
import { CASE_STUDIES } from "@/data/work";

export const metadata: Metadata = {
  title: "Work — Engineering explorations",
  description:
    "Explore a working LAYZOX engineering demonstration and the thinking behind its workflow.",
  alternates: {
    canonical: "https://layzox.com/work",
  },
};

export default function WorkIndexPage() {
  return (
    <main className="relative w-full bg-[var(--color-canvas)] text-[var(--color-ink)] pt-36 pb-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Header */}
        <div className="border-b border-[var(--color-rule)] pb-16">
          <span className="section-label">
            Engineering in practice
          </span>
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[100px] font-medium tracking-[-0.05em] text-[var(--color-ink)] mt-4 leading-[1.02]">
            Ideas, made
            <br />
            <span className="text-[var(--color-accent)]">tangible.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg sm:text-xl font-normal text-[var(--color-ink-secondary)] leading-relaxed">
            A closer look at how a business workflow becomes a digital experience. Explore the prototype, then the decisions behind it.
          </p>
        </div>

        {/* Case Study Chapters */}
        <div className="divide-y divide-[var(--color-rule)]">
          {CASE_STUDIES.map((project) => (
            <div
              key={project.slug}
              className="py-16 group transition-colors duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-baseline">
                {/* Meta Column */}
                <div className="lg:col-span-3 font-mono-tech text-xs text-[var(--color-ink-tertiary)] space-y-1.5">
                  <div className="text-[var(--color-accent)] font-bold text-sm">
                    {project.number} {"//"} {project.year}
                  </div>
                  <div className="uppercase tracking-wider font-semibold text-[var(--color-ink)]">
                    {project.category}
                  </div>
                  <div className="text-[var(--color-ink-tertiary)] pt-1">{project.clientContext}</div>
                </div>

                {/* Title and Summary */}
                <div className="lg:col-span-6 space-y-4">
                  <Link
                    href={`/work/${project.slug}`}
                    className="block group-hover:text-[var(--color-accent)] transition-colors"
                  >
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">
                      {project.title}
                    </h2>
                    <p className="font-mono-tech text-xs sm:text-sm text-[var(--color-accent)] mt-2 font-bold uppercase tracking-wider">
                      {project.tagline}
                    </p>
                  </Link>

                  <p className="text-base text-[var(--color-ink-secondary)] leading-relaxed font-normal">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technology.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="font-mono-tech text-xs text-[var(--color-ink-secondary)] bg-[var(--color-canvas-subtle)] border border-[var(--color-rule)] px-2.5 py-1 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions Column */}
                <div className="lg:col-span-3 flex flex-col gap-3 lg:items-end">
                  <Link
                    href={`/work/${project.slug}`}
                    className="btn-primary text-xs px-6 py-3"
                  >
                    <span>Explore the approach</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>

                  <Link
                    href="/demo/businessflow"
                    className="btn-secondary text-xs px-5 py-2.5 inline-flex items-center gap-2"
                  >
                    <Play size={12} className="fill-current text-[var(--color-accent)]" />
                    <span>Open demonstration</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Roadmap Horizon */}
        <div className="mt-12 p-8 sm:p-12 border border-[var(--color-rule)] bg-[var(--color-canvas-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <span className="font-mono-tech text-xs font-bold text-[var(--color-ink)] uppercase tracking-wider block">
              Products taking shape
            </span>
            <span className="text-xs sm:text-sm text-[var(--color-ink-tertiary)] font-normal mt-1 block max-w-xl">
              LAYZOX GROWTH, LAYZOX REVENUE, and LAYZOX ACCOUNTS are coming soon. We also design and engineer bespoke systems for businesses.
            </span>
          </div>

          <Link
            href="/contact"
            className="btn-ink text-xs px-6 py-3 whitespace-nowrap"
          >
            <span>WORK WITH LAYZOX</span>
            <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>
    </main>
  );
}
