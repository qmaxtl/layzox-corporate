"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { LAYZOX_PRODUCTS } from "@/data/products";

const STATUS_STYLES: Record<string, { bg: string; text: string; dot: string }> = {
  "Available": { bg: "bg-[var(--color-growth-light)]", text: "text-[var(--color-growth)]", dot: "bg-[var(--color-growth)]" },
  "In Development": { bg: "bg-[#FEF3E8]", text: "text-[var(--color-accounts)]", dot: "bg-[var(--color-accounts)]" },
  "Planned": { bg: "bg-[#E8EDF8]", text: "text-[var(--color-study)]", dot: "bg-[var(--color-study)]" },
  "Coming Later": { bg: "bg-[var(--color-canvas-subtle)]", text: "text-[var(--color-ink-tertiary)]", dot: "bg-[var(--color-ink-tertiary)]" },
};

export const ProductFamilySection: React.FC = () => {
  return (
    <section
      id="products"
      className="relative w-full bg-[var(--color-canvas-subtle)] text-[var(--color-ink)] py-24 sm:py-32 lg:py-40 overflow-hidden border-b border-[var(--color-rule)]"
      aria-labelledby="products-heading"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">

        {/* Section header */}
        <div className="flex items-center justify-between border-b border-[var(--color-rule)] pb-4 mb-16 sm:mb-20">
          <span className="section-label">Built by Layzox</span>
          <span className="section-label">The Product Family</span>
        </div>

        {/* Headline */}
        <div className="mb-16 sm:mb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <h2
              id="products-heading"
              className="font-display font-black text-[var(--color-ink)] leading-[0.88] tracking-[-0.04em]"
              style={{ fontSize: "clamp(40px, 7vw, 104px)" }}
            >
              THREE PRODUCTS.
              <br />
              <span className="text-[var(--color-ink-secondary)]/50">ONE FAMILY.</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-base sm:text-lg text-[var(--color-ink-secondary)] leading-relaxed font-normal">
              Layzox is building a connected family of products around real problems in growth, learning and finance.
            </p>
          </div>
        </div>

        {/* Product grid — editorial, not card-first */}
        <div className="space-y-0 border-t border-[var(--color-rule)]">
          {LAYZOX_PRODUCTS.map((product, idx) => {
            const statusStyle = STATUS_STYLES[product.status] ?? STATUS_STYLES["Planned"];
            return (
              <div
                key={product.id}
                className="group py-10 sm:py-14 border-b border-[var(--color-rule)] grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start"
              >
                {/* Number */}
                <div className="lg:col-span-1 font-mono-tech text-xs font-bold text-[var(--color-rule-strong)]">
                  [{String(idx + 1).padStart(2, "0")}]
                </div>

                {/* Product identity */}
                <div className="lg:col-span-4">
                  {/* Product accent bar */}
                  <div
                    className="w-8 h-1 mb-4"
                    style={{ backgroundColor: product.accentColor }}
                    aria-hidden="true"
                  />
                  <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[var(--color-ink)] leading-tight mb-3">
                    {product.name}
                  </h3>
                  <p className="font-mono-tech text-xs font-bold uppercase tracking-wider mb-4" style={{ color: product.accentColor }}>
                    {product.tagline}
                  </p>
                  {/* Status badge */}
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono-tech font-bold uppercase tracking-wider ${statusStyle.bg} ${statusStyle.text}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${statusStyle.dot}`} aria-hidden="true" />
                    {product.status}
                  </span>
                </div>

                {/* Description + capabilities */}
                <div className="lg:col-span-5">
                  <p className="text-base sm:text-lg text-[var(--color-ink-secondary)] leading-relaxed font-normal mb-6">
                    {product.description}
                  </p>
                  <ul className="space-y-1.5" aria-label={`${product.name} capabilities`}>
                    {product.capabilities.slice(0, 4).map((cap) => (
                      <li key={cap} className="flex items-start gap-2 text-sm text-[var(--color-ink-tertiary)]">
                        <span
                          className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                          style={{ backgroundColor: product.accentColor }}
                          aria-hidden="true"
                        />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="lg:col-span-2 flex lg:justify-end items-start pt-1">
                  <Link
                    href={`/products/${product.slug}`}
                    className="group/link inline-flex items-center gap-1.5 font-mono-tech text-[10px] font-bold uppercase tracking-wider text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors focus-visible:outline-none focus-visible:underline"
                    aria-label={`Learn more about ${product.name}`}
                  >
                    <span>Learn more</span>
                    <ArrowUpRight className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-12 pt-6 border-t border-[var(--color-rule)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="font-mono-tech text-[10px] uppercase tracking-widest text-[var(--color-rule-strong)]">
            More products in development — each solving a real-world problem
          </p>
          <Link
            href="/products"
            className="font-mono-tech text-[10px] font-bold uppercase tracking-widest text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors inline-flex items-center gap-1 focus-visible:outline-none focus-visible:underline"
          >
            <span>View all products</span>
            <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>

      </div>
    </section>
  );
};
