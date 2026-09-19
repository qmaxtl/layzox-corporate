import React from "react";
import Link from "next/link";
import Image from "next/image";
import { COMPANY } from "@/data/company";

const FOOTER_LINKS = {
  products: [
    { href: "/products/growth", label: "Layzox Growth" },
    { href: "/products/study", label: "Layzox Study" },
    { href: "/products/accounts", label: "Layzox Accounts" },
  ],
  solutions: [
    { href: "/solutions", label: "Product Engineering" },
    { href: "/solutions", label: "AI & Automation" },
    { href: "/solutions", label: "Business Systems" },
    { href: "/solutions", label: "Digital Infrastructure" },
  ],
  company: [
    { href: "/company", label: "About" },
    { href: "/company#principles", label: "Principles" },
    { href: "/intelligence", label: "Intelligence" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/legal/privacy", label: "Privacy Policy" },
    { href: "/legal/terms", label: "Terms of Engagement" },
    { href: "/legal/cookies", label: "Cookie Policy" },
  ],
};

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative w-full bg-[var(--color-canvas-subtle)] text-[var(--color-ink)] border-t border-[var(--color-rule)]"
      role="contentinfo"
    >
      {/* Upper footer — navigation columns */}
      <div className="mx-auto max-w-7xl px-6 md:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Brand column */}
          <div className="lg:col-span-4 space-y-5">
            {/* Immutable LAYZOX master logo */}
            <Link href="/" className="brand-logo-shell footer-logo" aria-label="Layzox home">
              <Image src="/brand/layzox-master-logo.png" alt="LAYZOX — Technology for a Brighter Tomorrow" width={405} height={101} className="brand-logo-image" />
            </Link>

            <p className="text-sm text-[var(--color-ink-secondary)] leading-relaxed font-normal max-w-xs">
              {COMPANY.supportingStatement}
            </p>

            <div className="space-y-1.5">
              <p className="font-mono-tech text-[10px] uppercase tracking-widest text-[var(--color-ink-tertiary)]">
                Contact
              </p>
              <a
                href={`mailto:${COMPANY.contact.general}`}
                className="font-mono-tech text-xs text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors"
              >
                {COMPANY.contact.general}
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4 pt-1">
              <a
                href={COMPANY.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono-tech text-[10px] uppercase tracking-wider text-[var(--color-ink-tertiary)] hover:text-[var(--color-ink)] transition-colors"
                aria-label="Layzox on LinkedIn"
              >
                LinkedIn
              </a>
              <span className="text-[var(--color-ink-faint)]" aria-hidden="true">·</span>
              <a
                href={COMPANY.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono-tech text-[10px] uppercase tracking-wider text-[var(--color-ink-tertiary)] hover:text-[var(--color-ink)] transition-colors"
                aria-label="Layzox on X (Twitter)"
              >
                X / Twitter
              </a>
              <span className="text-[var(--color-ink-faint)]" aria-hidden="true">·</span>
              <a
                href={COMPANY.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono-tech text-[10px] uppercase tracking-wider text-[var(--color-ink-tertiary)] hover:text-[var(--color-ink)] transition-colors"
                aria-label="Layzox on GitHub"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Products column */}
          <div className="lg:col-span-2 space-y-4">
            <p className="font-mono-tech text-[10px] uppercase tracking-widest text-[var(--color-ink-tertiary)] font-bold">
              Products
            </p>
            <nav aria-label="Product links">
              <ul className="space-y-2.5">
                {FOOTER_LINKS.products.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--color-ink-secondary)] hover:text-[var(--color-ink)] transition-colors focus-visible:outline-none focus-visible:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Solutions column */}
          <div className="lg:col-span-3 space-y-4">
            <p className="font-mono-tech text-[10px] uppercase tracking-widest text-[var(--color-ink-tertiary)] font-bold">
              Solutions
            </p>
            <nav aria-label="Solution links">
              <ul className="space-y-2.5">
                {FOOTER_LINKS.solutions.map((link, i) => (
                  <li key={link.label + i}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--color-ink-secondary)] hover:text-[var(--color-ink)] transition-colors focus-visible:outline-none focus-visible:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Company column */}
          <div className="lg:col-span-3 space-y-4">
            <p className="font-mono-tech text-[10px] uppercase tracking-widest text-[var(--color-ink-tertiary)] font-bold">
              Company
            </p>
            <nav aria-label="Company links">
              <ul className="space-y-2.5">
                {FOOTER_LINKS.company.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--color-ink-secondary)] hover:text-[var(--color-ink)] transition-colors focus-visible:outline-none focus-visible:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

        </div>
      </div>

      {/* Lower footer — legal, jurisdiction, copyright */}
      <div className="border-t border-[var(--color-rule)] mx-auto max-w-7xl px-6 md:px-12 py-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <span className="font-mono-tech text-[10px] text-[var(--color-ink-tertiary)]">
              © {currentYear} {COMPANY.legalName}. All rights reserved.
            </span>
            <nav className="flex items-center gap-4" aria-label="Legal links">
              {FOOTER_LINKS.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-mono-tech text-[10px] text-[var(--color-ink-tertiary)] hover:text-[var(--color-ink)] transition-colors focus-visible:outline-none focus-visible:underline"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="font-mono-tech text-[10px] text-[var(--color-rule-strong)] uppercase tracking-widest">
            {COMPANY.corporateInfo.jurisdiction}
          </div>

        </div>
      </div>
    </footer>
  );
};
