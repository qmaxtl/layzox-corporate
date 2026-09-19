import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { INSIGHTS } from "@/data/insights";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return INSIGHTS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = INSIGHTS.find((a) => a.slug === slug);
  if (!article) return { title: "Not Found" };
  return {
    title: `${article.title} — Intelligence`,
    description: article.summary,
    alternates: {
      canonical: `https://layzox.com/intelligence/${article.slug}`,
    },
  };
}

const CATEGORY_COLORS: Record<string, string> = {
  AI: "var(--color-revenue)",
  Engineering: "var(--color-growth)",
  Products: "var(--color-accent)",
  "Business Systems": "var(--color-accounts)",
  Design: "var(--color-accent)",
  Technology: "var(--color-accounts)",
};

export default async function IntelligenceArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = INSIGHTS.find((a) => a.slug === slug);
  if (!article) notFound();

  const categoryColor = CATEGORY_COLORS[article.category] ?? "var(--color-accent)";

  return (
    <main className="bg-[var(--color-canvas)] text-[var(--color-ink)] min-h-screen">

      {/* Article header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-12 border-b border-[var(--color-rule)]">
        <nav className="mb-8 flex items-center gap-2 font-mono-tech text-[10px] uppercase tracking-widest text-[var(--color-ink-tertiary)]" aria-label="Breadcrumb">
          <Link
            href="/intelligence"
            className="inline-flex items-center gap-1 hover:text-[var(--color-ink)] transition-colors focus-visible:outline-none focus-visible:underline"
          >
            <ArrowLeft className="w-3 h-3" aria-hidden="true" />
            Intelligence
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-[var(--color-ink)] truncate max-w-xs">{article.category}</span>
        </nav>

        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span
            className="font-mono-tech text-[9px] font-bold uppercase tracking-wider px-2.5 py-1"
            style={{ backgroundColor: `color-mix(in srgb, ${categoryColor} 10%, transparent)`, color: categoryColor }}
          >
            {article.category}
          </span>
          <span className="font-mono-tech text-[10px] text-[var(--color-rule-strong)]">{article.readingTime}</span>
          <span className="font-mono-tech text-[10px] text-[var(--color-rule-strong)]">
            {new Date(article.publishedAt).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
          </span>
        </div>

        <h1
          className="font-display font-medium text-[var(--color-ink)] leading-[1.04] tracking-[-0.04em] mb-6"
          style={{ fontSize: "clamp(32px, 5.5vw, 72px)" }}
        >
          {article.title}
        </h1>

        <p className="text-lg sm:text-xl text-[var(--color-ink-secondary)] leading-relaxed font-normal max-w-3xl mb-6">
          {article.summary}
        </p>

        <div className="p-4 border-l-2 border-[var(--color-accent)] bg-[var(--color-canvas-subtle)] max-w-3xl">
          <p className="font-mono-tech text-[10px] uppercase tracking-wider text-[var(--color-ink-tertiary)] mb-1">Key takeaway</p>
          <p className="text-sm text-[var(--color-ink)] font-medium leading-relaxed">{article.keyTakeaway}</p>
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Table of contents */}
          <aside className="lg:col-span-3 order-2 lg:order-1">
            <div className="lg:sticky lg:top-28 space-y-3">
              <p className="section-label mb-4">Contents</p>
              <nav aria-label="Article table of contents">
                <ul className="space-y-2">
                  {article.tableOfContents.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="font-mono-tech text-[10px] uppercase tracking-wider text-[var(--color-ink-tertiary)] hover:text-[var(--color-ink)] transition-colors focus-visible:outline-none focus-visible:underline"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="pt-8 space-y-2">
                <p className="section-label">Published by</p>
                <p className="font-mono-tech text-[10px] text-[var(--color-ink)] font-bold">{article.author.name}</p>
                <p className="font-mono-tech text-[10px] text-[var(--color-ink-tertiary)]">{article.author.role}</p>
              </div>
            </div>
          </aside>

          {/* Article content */}
          <article
            className="lg:col-span-9 order-1 lg:order-2 space-y-12 lg:border-l lg:border-[var(--color-rule)] lg:pl-12"
            aria-label={article.title}
          >
            {article.sections.map((section) => (
              <section key={section.id} id={section.id} aria-labelledby={`heading-${section.id}`}>
                <h2
                  id={`heading-${section.id}`}
                  className="font-display text-2xl sm:text-3xl font-black text-[var(--color-ink)] tracking-tight leading-tight mb-6"
                >
                  {section.heading}
                </h2>
                <div className="space-y-4">
                  {section.content.map((para, i) => (
                    <p key={i} className="text-base sm:text-lg text-[var(--color-ink-secondary)] leading-relaxed font-normal">
                      {para}
                    </p>
                  ))}
                </div>
              </section>
            ))}

            {/* Back to intelligence */}
            <div className="pt-8 border-t border-[var(--color-rule)]">
              <Link
                href="/intelligence"
                className="group inline-flex items-center gap-2 font-mono-tech text-[11px] font-bold uppercase tracking-wider text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors focus-visible:outline-none focus-visible:underline"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Intelligence</span>
              </Link>
            </div>
          </article>

        </div>
      </div>

    </main>
  );
}
