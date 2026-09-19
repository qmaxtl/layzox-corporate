import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { INSIGHTS } from "@/data/insights";

export const metadata: Metadata = {
  title: "Intelligence",
  description:
    "LAYZOX perspectives on product design, engineering, AI, and the decisions behind useful software.",
  alternates: {
    canonical: "https://layzox.com/intelligence",
  },
};

const CATEGORY_COLORS: Record<string, string> = {
  AI: "var(--color-revenue)",
  Engineering: "var(--color-growth)",
  Products: "var(--color-accent)",
  "Business Systems": "var(--color-accounts)",
  Design: "var(--color-accent)",
  Technology: "var(--color-accounts)",
};

export default function IntelligencePage() {
  return (
    <main className="bg-[var(--color-canvas)] text-[var(--color-ink)] min-h-screen">

      {/* Page header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-36 pb-16 border-b border-[var(--color-rule)]">
        <div className="mb-6">
          <span className="section-label">Layzox Intelligence</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <h1
              className="font-display font-medium text-[var(--color-ink)] leading-[1.02] tracking-[-0.05em]"
              style={{ fontSize: "clamp(44px, 7vw, 100px)" }}
            >
              Thinking beyond
              <br />
              <span className="text-[var(--color-accent)]">the interface.</span>
            </h1>
          </div>
          <div className="lg:col-span-4">
            <p className="text-base sm:text-lg text-[var(--color-ink-secondary)] leading-relaxed font-normal">
              Perspectives on the choices behind useful software. Product, engineering, and the work that connects them.
            </p>
          </div>
        </div>
      </div>

      {/* Articles */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 sm:py-20">
        {INSIGHTS.length > 0 ? (
          <div className="space-y-0 border-t border-[var(--color-rule)]">
            {INSIGHTS.map((article, idx) => {
              const categoryColor = CATEGORY_COLORS[article.category] ?? "var(--color-accent)";
              return (
                <article
                  key={article.slug}
                  className="group py-10 sm:py-14 border-b border-[var(--color-rule)] grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start"
                  aria-labelledby={`article-${idx}-heading`}
                >
                  {/* Number + Category */}
                  <div className="lg:col-span-2 space-y-2">
                    <span className="font-mono-tech text-[10px] font-bold text-[var(--color-rule-strong)]">
                      
                    </span>
                    <div>
                      <span
                        className="font-mono-tech text-[9px] font-bold uppercase tracking-wider px-2 py-0.5"
                        style={{ backgroundColor: `color-mix(in srgb, ${categoryColor} 10%, transparent)`, color: categoryColor }}
                      >
                        {article.category}
                      </span>
                    </div>
                    <p className="font-mono-tech text-[9px] text-[var(--color-rule-strong)]">
                      {new Date(article.publishedAt).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "short",
                      })}
                    </p>
                    <p className="font-mono-tech text-[9px] text-[var(--color-rule-strong)]">
                      {article.readingTime}
                    </p>
                  </div>

                  {/* Title + Summary */}
                  <div className="lg:col-span-7 space-y-3">
                    <h2
                      id={`article-${idx}-heading`}
                      className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[var(--color-ink)] leading-tight group-hover:text-[var(--color-accent)] transition-colors"
                    >
                      {article.title}
                    </h2>
                    <p className="text-base text-[var(--color-ink-secondary)] leading-relaxed font-normal">
                      {article.summary}
                    </p>
                    <p className="text-sm text-[var(--color-ink-tertiary)] leading-relaxed border-l-2 border-[var(--color-rule)] pl-4 mt-2">
                      <strong className="font-semibold text-[var(--color-ink-secondary)]">Key takeaway: </strong>
                      {article.keyTakeaway}
                    </p>
                  </div>

                  {/* Read CTA */}
                  <div className="lg:col-span-3 flex lg:justify-end items-start pt-1">
                    <Link
                      href={`/intelligence/${article.slug}`}
                      className="group/link inline-flex items-center gap-1.5 font-mono-tech text-[10px] font-bold uppercase tracking-wider text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors focus-visible:outline-none focus-visible:underline"
                      aria-label={`Read: ${article.title}`}
                    >
                      <span>Read insight</span>
                      <ArrowUpRight className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </Link>
                  </div>

                </article>
              );
            })}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="font-mono-tech text-[10px] uppercase tracking-widest text-[var(--color-rule-strong)] mb-4">
              Coming soon
            </p>
            <p className="text-base text-[var(--color-ink-tertiary)] max-w-md mx-auto leading-relaxed">
              Layzox Intelligence is being built. Insights will be published as they are
              produced from real work.
            </p>
          </div>
        )}
      </div>

    </main>
  );
}
