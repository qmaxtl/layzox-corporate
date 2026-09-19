"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import Image from "next/image";

export const HeroSection: React.FC = () => {
  return (
    <section
      className="relative min-h-[96vh] lg:min-h-screen w-full flex flex-col justify-between bg-[var(--color-canvas)] text-[var(--color-ink)] pt-28 pb-10 overflow-hidden select-none"
      aria-labelledby="hero-headline"
    >
      {/* Structural top calibration line */}
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
        <div className="flex items-center justify-between border-b border-[var(--color-rule)] pb-3 font-mono-tech text-[10px] text-[var(--color-ink-tertiary)]">
          <div className="flex items-center gap-2.5">
<span className="brand-signal-dot" aria-hidden="true" />
            <span className="font-bold tracking-widest uppercase text-[var(--color-ink)]">
              LAYZOX INDIA PVT LTD
            </span>
          </div>
          <span className="tracking-wider uppercase hidden sm:block">
            PRODUCTS · SYSTEMS · INFRASTRUCTURE
          </span>
        </div>
      </div>

      {/* Main composition */}
      <div className="mx-auto my-auto w-full max-w-7xl px-6 md:px-12 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* Left: Headline — 7 cols */}
          <div className="lg:col-span-7 flex flex-col min-w-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="font-mono-tech text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-accent)] mb-6"
            >
              India-born technology company
            </motion.div>

            <h1
              id="hero-headline"
              aria-label="Technology that moves business forward"
              className="font-display font-black text-[var(--color-ink)] leading-[0.87] tracking-[-0.04em]"
              style={{ fontSize: "clamp(44px, 8vw, 118px)" }}
            >
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              >
                TECHNOLOGY
              </motion.span>
              <motion.span
                className="block text-[var(--color-ink-secondary)]/60"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.24 }}
              >
                THAT MOVES
              </motion.span>
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.33 }}
              >
                BUSINESS
              </motion.span>
              <motion.span
                className="block text-[var(--color-accent)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.42 }}
              >
                FORWARD.
              </motion.span>
            </h1>
          </div>

          {/* Right: approved master-brand spectrum */}
          <motion.div
            className="lg:col-span-5 hero-brand-spectrum"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hero-spectrum-orbit" aria-hidden="true" />
            <div className="hero-logo-stage">
              <Image src="/brand/layzox-master-logo.png" alt="LAYZOX — Technology for a Brighter Tomorrow" width={810} height={201} priority className="w-full h-auto" />
            </div>
            <div className="hero-spectrum-rail" aria-hidden="true"><i/><i/><i/><i/></div>
            <p className="font-mono-tech text-[10px] tracking-[0.2em] uppercase text-[var(--color-ink-tertiary)]"></p>
          </motion.div>

        </div>

        {/* Lower band: description + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
          className="mt-14 lg:mt-16 pt-8 border-t border-[var(--color-rule)] grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
        >
          <div className="md:col-span-7">
            <p className="text-lg sm:text-xl md:text-2xl font-normal text-[var(--color-ink-secondary)] max-w-2xl leading-[1.45]">
              We build products, intelligent systems and digital infrastructure
              designed around real-world outcomes.
            </p>
          </div>

          <div className="md:col-span-5 flex flex-wrap items-center gap-4 md:justify-end">
            <Link
              href="/products"
              className="btn-primary group inline-flex items-center gap-2"
            >
              <span>Explore Products</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="/contact"
              className="btn-secondary group inline-flex items-center gap-2"
            >
              <span>Work With Layzox</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 mt-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono-tech text-[10px] text-[var(--color-rule-strong)]">
          <div className="flex items-center gap-2">
            <div className="system-line-h w-12" />
            <span className="uppercase tracking-widest">Products · Solutions · Intelligence</span>
          </div>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            aria-hidden="true"
          >
            <ArrowDown className="w-3.5 h-3.5 text-[var(--color-accent)]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

