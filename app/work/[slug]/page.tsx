import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Play } from "lucide-react";
import { CASE_STUDIES } from "@/data/work";
import { ProductBrowserMockup } from "@/components/ui/ProductBrowserMockup";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = CASE_STUDIES.find((c) => c.slug === slug);
  if (!project) return { title: "Work not found" };

  return {
    title: `${project.title} — Engineering demonstration`,
    description: project.summary,
    alternates: {
      canonical: `https://layzox.com/work/${project.slug}`,
    },
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const projectIndex = CASE_STUDIES.findIndex((c) => c.slug === slug);
  if (projectIndex === -1) notFound();

  const project = CASE_STUDIES[projectIndex];
  const nextProject = CASE_STUDIES.length > 1 ? CASE_STUDIES[(projectIndex + 1) % CASE_STUDIES.length] : null;

  const getMockupType = (): "businessflow" | "telemetry" | "rag" | "cloud" | "commerce" | "health" => {
    return "businessflow";
  };

  return (
    <main className="relative w-full bg-[var(--color-canvas)] text-[var(--color-ink)] pt-36 pb-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Back Navigation */}
        <div className="mb-10">
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 font-mono-tech text-xs tracking-widest text-[var(--color-ink-tertiary)] uppercase hover:text-[var(--color-ink)] transition-colors font-semibold"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
            <span>ALL WORK ARCHIVE</span>
          </Link>
        </div>

        {/* Case Study Hero */}
        <div className="border-b border-[var(--color-rule)] pb-16">
          <div className="flex flex-wrap items-center gap-4 font-mono-tech text-xs text-[var(--color-ink-tertiary)] mb-4">
            <span className="text-[var(--color-accent)] font-bold">{project.number}</span>
            <span>{"//"} {project.category.toUpperCase()}</span>
            <span>{"//"} {project.year}</span>
            <span className="text-[var(--color-ink-secondary)] font-medium">[{project.clientContext}]</span>
          </div>

          <h1 className="font-display text-[clamp(2.4rem,7vw,6rem)] font-medium tracking-[-0.05em] text-[var(--color-ink)] leading-[1.03] break-words">
            {project.title}<span className="text-[var(--color-accent)]">.</span>
          </h1>

          <p className="font-mono-tech text-sm sm:text-base text-[var(--color-accent)] mt-4 max-w-3xl font-bold uppercase tracking-wider">
            {project.tagline}
          </p>

          <p className="mt-8 max-w-4xl text-lg sm:text-xl font-normal text-[var(--color-ink-secondary)] leading-relaxed">
            {project.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/demo/businessflow"
              className="btn-primary text-xs px-6 py-3.5 inline-flex items-center gap-2"
            >
              <Play size={12} className="fill-current" />
              <span>Open demonstration</span>
            </Link>
            <Link
              href="/contact"
              className="btn-secondary text-xs px-6 py-3.5 inline-flex items-center gap-2"
            >
              <span>TALK TO LAYZOX</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        {/* Mockup Visual */}
        <div className="pt-12 pb-6">
          <ProductBrowserMockup
            type={getMockupType()}
            title={`${project.title} — Sample interface`}
            url="layzox.com/demo/businessflow"
            badge="DEMO RUNTIME"
            className="w-full"
          />
        </div>

        {/* System Pipeline Bar */}
        <div className="my-8 border border-[var(--color-rule)] bg-[var(--color-canvas-subtle)] p-6 font-mono-tech text-xs">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
              <span className="text-[var(--color-ink-tertiary)] uppercase tracking-widest font-semibold">
                SYSTEM PIPELINE TOPOLOGY:
              </span>
            </div>
            <div className="text-[var(--color-ink)] font-semibold text-sm">
              {project.system.diagramLabel}
            </div>
          </div>
        </div>

        {/* Narrative Flow: 01 Problem & Challenge */}
        <section className="py-16 border-b border-[var(--color-rule)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="font-mono-tech text-xs text-[var(--color-accent)] uppercase tracking-widest block mb-2 font-semibold">
                01 // THE CHALLENGE
              </span>
              <h2 className="font-display text-3xl font-bold text-[var(--color-ink)]">
                The Problem
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-6">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--color-ink)]">
                {project.problem.headline}
              </h3>
              <p className="text-base sm:text-lg leading-relaxed text-[var(--color-ink-secondary)] font-normal">
                {project.problem.description}
              </p>

              <div className="border-t border-[var(--color-rule)] pt-6 space-y-3">
                <span className="font-mono-tech text-xs text-[var(--color-ink-tertiary)] uppercase font-semibold">
                  OPERATIONAL BOTTLENECKS:
                </span>
                <ul className="space-y-2">
                  {project.problem.keyPoints.map((pt, i) => (
                    <li key={i} className="text-sm text-[var(--color-ink-secondary)] flex items-start gap-2.5">
                      <span className="text-[var(--color-accent)] font-bold mt-0.5">✕</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Narrative Flow: 02 The System */}
        <section className="py-16 border-b border-[var(--color-rule)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="font-mono-tech text-xs text-[var(--color-accent)] uppercase tracking-widest block mb-2 font-semibold">
                02 // ARCHITECTURE
              </span>
              <h2 className="font-display text-3xl font-bold text-[var(--color-ink)]">
                The System
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-6">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--color-ink)]">
                {project.system.headline}
              </h3>
              <p className="text-base sm:text-lg leading-relaxed text-[var(--color-ink-secondary)] font-normal">
                {project.system.description}
              </p>

              <div className="border-t border-[var(--color-rule)] pt-6 space-y-3">
                <span className="font-mono-tech text-xs text-[var(--color-ink-tertiary)] uppercase font-semibold">
                  KEY ARCHITECTURAL DECISIONS:
                </span>
                <ul className="space-y-2">
                  {project.system.architectureHighlights.map((pt, i) => (
                    <li key={i} className="text-sm text-[var(--color-ink-secondary)] flex items-start gap-2.5">
                      <span className="text-[var(--color-accent)] font-bold mt-0.5">→</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Narrative Flow: 03 Experience */}
        <section className="py-16 border-b border-[var(--color-rule)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="font-mono-tech text-xs text-[var(--color-accent)] uppercase tracking-widest block mb-2 font-semibold">
                03 // USER ERGONOMICS
              </span>
              <h2 className="font-display text-3xl font-bold text-[var(--color-ink)]">
                The Experience
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-6">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--color-ink)]">
                {project.experience.headline}
              </h3>
              <p className="text-base sm:text-lg leading-relaxed text-[var(--color-ink-secondary)] font-normal">
                {project.experience.description}
              </p>

              <div className="border-t border-[var(--color-rule)] pt-6 space-y-3">
                <span className="font-mono-tech text-xs text-[var(--color-ink-tertiary)] uppercase font-semibold">
                  DESIGN PRINCIPLES ENFORCED:
                </span>
                <ul className="space-y-2">
                  {project.experience.designDecisions.map((pt, i) => (
                    <li key={i} className="text-sm text-[var(--color-ink-secondary)] flex items-start gap-2.5">
                      <span className="text-[var(--color-accent)] font-bold mt-0.5">■</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Narrative Flow: 04 Technology */}
        <section className="py-16 border-b border-[var(--color-rule)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="font-mono-tech text-xs text-[var(--color-accent)] uppercase tracking-widest block mb-2 font-semibold">
                04 // STACK
              </span>
              <h2 className="font-display text-3xl font-bold text-[var(--color-ink)]">
                Technology
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-6">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--color-ink)]">
                {project.technology.headline}
              </h3>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.technology.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="font-mono-tech text-xs text-[var(--color-ink-secondary)] bg-[var(--color-canvas-subtle)] border border-[var(--color-rule)] px-3 py-1.5 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="border-t border-[var(--color-rule)] pt-6 space-y-2">
                <span className="font-mono-tech text-xs text-[var(--color-ink-tertiary)] uppercase font-semibold">
                  ENGINEERING HIGHLIGHTS:
                </span>
                <ul className="space-y-2">
                  {project.technology.performanceHighlights.map((perf, i) => (
                    <li key={i} className="font-mono-tech text-xs text-[var(--color-ink-secondary)] flex items-start gap-2">
                      <span className="text-[var(--color-accent)]">●</span>
                      <span>{perf}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Narrative Flow: 05 Outcome */}
        <section className="py-16 border-b border-[var(--color-rule)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="font-mono-tech text-xs text-[var(--color-growth)] uppercase tracking-widest block mb-2 font-semibold">
                05 // EXPLORE
              </span>
              <h2 className="font-display text-3xl font-bold text-[var(--color-ink)]">
                What to explore
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-6">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--color-ink)]">
                {project.outcome.headline}
              </h3>

              <ul className="space-y-3">
                {project.outcome.verifiedResults.map((res, i) => (
                  <li key={i} className="text-base text-[var(--color-ink-secondary)] flex items-start gap-3">
                    <span className="text-[var(--color-growth)] font-bold mt-0.5">✔</span>
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Next Case Study Navigation */}
        <div className="pt-20 flex flex-col sm:flex-row sm:items-center justify-between gap-8">
          {nextProject ? <div>
            <span className="font-mono-tech text-xs text-[var(--color-ink-tertiary)] uppercase font-semibold">
              Next exploration
            </span>
            <Link
              href={`/work/${nextProject.slug}`}
              className="group block mt-2"
            >
              <h3 className="font-display text-3xl sm:text-4xl font-bold text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">
                {nextProject.title} →
              </h3>
              <p className="font-mono-tech text-xs text-[var(--color-ink-tertiary)] mt-1 font-medium">
                {nextProject.tagline}
              </p>
            </Link>
          </div> : <Link href="/work" className="text-[var(--color-ink)] hover:text-[var(--color-accent)] inline-flex items-center gap-2"><ArrowLeft size={16} />Back to work</Link>}

          <Link
            href="/contact"
            className="btn-primary text-xs px-6 py-3.5 inline-flex items-center gap-2"
          >
            <span>DISCUSS SIMILAR ARCHITECTURE</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
