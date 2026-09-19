"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { COMPANY } from "@/data/company";

export default function CareersPage() {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    profileUrl: "",
    discipline: "Engineering",
    statement: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Introduction — ${formData.discipline} — ${formData.name}`;
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Portfolio: ${formData.profileUrl}`,
      `Discipline: ${formData.discipline}`,
      "",
      formData.statement,
    ].join("\n");
    window.location.href = `mailto:${COMPANY.contact.careers}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <main className="relative w-full bg-[var(--color-canvas)] text-[var(--color-ink)] pt-36 pb-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Header */}
        <div className="border-b border-[var(--color-rule)] pb-16">
          <span className="section-label">
            Careers & collaboration
          </span>
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[100px] font-medium tracking-[-0.05em] text-[var(--color-ink)] mt-4 leading-[1.02]">
            Make meaningful
            <br />
            <span className="text-[var(--color-accent)]">work with us.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg sm:text-xl font-normal text-[var(--color-ink-secondary)] leading-relaxed">
            We work with self-directed software builders, product designers, and systems engineers who care deeply about production quality.
          </p>
        </div>

        {/* Vacancy Status */}
        <div className="py-16 border-b border-[var(--color-rule)]">
          <div className="border border-[var(--color-rule)] bg-[var(--color-canvas-subtle)] p-8 md:p-12 space-y-4">
            <div className="flex items-center gap-3 font-mono-tech text-xs text-[var(--color-ink-tertiary)] font-semibold">
              <span className="h-2 w-2 rounded-full bg-[var(--color-rule-strong)]" />
              <span>CURRENT ADVERTISED OPENINGS: NONE</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-ink)]">
              We don&apos;t have an open role right now, but we&apos;re always interested in exceptional people.
            </h2>

            <p className="text-sm sm:text-base text-[var(--color-ink-secondary)] leading-relaxed max-w-3xl font-normal">
              When we recruit, we look for individuals with deep foundations in distributed systems, web architectures, ergonomic product interfaces, or machine intelligence.
            </p>
          </div>
        </div>

        {/* General Interest Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-16">
          <div className="lg:col-span-5 space-y-6">
            <span className="section-label">
              General Interest
            </span>
            <h2 className="font-display text-3xl font-bold text-[var(--color-ink)]">
              Introduce Your Work
            </h2>
            <p className="text-sm text-[var(--color-ink-secondary)] leading-relaxed font-normal">
              Share your GitHub, portfolio, or an example of work you care about. This form prepares an email for you to review and send from your email app.
            </p>

            <div className="border-t border-[var(--color-rule)] pt-6 font-mono-tech text-xs text-[var(--color-ink-tertiary)] space-y-1">
              <div>DIRECT CAREERS EMAIL:</div>
              <a href={`mailto:${COMPANY.contact.careers}`} className="text-[var(--color-ink)] font-bold underline underline-offset-4">{COMPANY.contact.careers}</a>
            </div>
          </div>

          <div className="lg:col-span-7">
            {submitted ? (
              <div className="border border-[var(--color-rule)] bg-[var(--color-canvas-subtle)] p-8 md:p-10 space-y-4">
                <div className="flex items-center gap-2 text-[var(--color-growth)] font-mono-tech text-xs uppercase font-bold">
                  <CheckCircle2 size={18} />
                  <span>Email draft prepared</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-[var(--color-ink)]">
                  One more step in your email app.
                </h3>
                <p className="text-sm text-[var(--color-ink-secondary)] font-normal leading-relaxed">
                  Review the draft and press send in your email app to deliver your introduction. If your email app did not open, write directly to {COMPANY.contact.careers}.
                </p>
                <button type="button" className="btn-secondary" onClick={() => setSubmitted(false)}>Edit introduction</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="career-name" className="font-mono-tech text-xs text-[var(--color-ink)] uppercase block mb-2 font-semibold">
                      Full Name *
                    </label>
                    <input
                      id="career-name"
                      type="text"
                      autoComplete="name"
                      maxLength={100}
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full bg-[var(--color-canvas-subtle)] border border-[var(--color-rule)] px-4 py-3 text-sm text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-accent)] font-mono-tech"
                    />
                  </div>

                  <div>
                    <label htmlFor="career-email" className="font-mono-tech text-xs text-[var(--color-ink)] uppercase block mb-2 font-semibold">
                      Email Address *
                    </label>
                    <input
                      id="career-email"
                      type="email"
                      autoComplete="email"
                      maxLength={254}
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@domain.com"
                      className="w-full bg-[var(--color-canvas-subtle)] border border-[var(--color-rule)] px-4 py-3 text-sm text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-accent)] font-mono-tech"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="career-portfolio" className="font-mono-tech text-xs text-[var(--color-ink)] uppercase block mb-2 font-semibold">
                      GitHub / Portfolio URL *
                    </label>
                    <input
                      id="career-portfolio"
                      type="url"
                      autoComplete="url"
                      maxLength={500}
                      required
                      value={formData.profileUrl}
                      onChange={(e) => setFormData({ ...formData, profileUrl: e.target.value })}
                      placeholder="https://github.com/username"
                      className="w-full bg-[var(--color-canvas-subtle)] border border-[var(--color-rule)] px-4 py-3 text-sm text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-accent)] font-mono-tech"
                    />
                  </div>

                  <div>
                    <label htmlFor="career-discipline" className="font-mono-tech text-xs text-[var(--color-ink)] uppercase block mb-2 font-semibold">
                      Core Discipline
                    </label>
                    <select
                      id="career-discipline"
                      value={formData.discipline}
                      onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                      className="w-full bg-[var(--color-canvas-subtle)] border border-[var(--color-rule)] px-4 py-3 text-sm text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-accent)] font-mono-tech"
                    >
                      <option value="Engineering">Distributed Systems / Backend</option>
                      <option value="AI">AI & Machine Intelligence</option>
                      <option value="Frontend">Frontend & Web Applications</option>
                      <option value="Mobile">Mobile Engineering</option>
                      <option value="Design">Product & UX Design</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="career-statement" className="font-mono-tech text-xs text-[var(--color-ink)] uppercase block mb-2 font-semibold">
                    What have you built that you are proud of?
                  </label>
                  <textarea
                    id="career-statement"
                    rows={4}
                    maxLength={2000}
                    required
                    value={formData.statement}
                    onChange={(e) => setFormData({ ...formData, statement: e.target.value })}
                    placeholder="Describe a technical project, architecture, or problem you solved..."
                    className="w-full bg-[var(--color-canvas-subtle)] border border-[var(--color-rule)] px-4 py-3 text-sm text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-accent)] font-mono-tech resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                >
                  <span>Prepare email introduction</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
