"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface BrandDeviceProps {
  variant?: "hero" | "structural" | "mark" | "system-line";
  className?: string;
  accentColor?: string;
  inkColor?: string;
}

/**
 * LayzoxBrandDevice
 *
 * The Layzox signature visual mechanism — an architectural L-form
 * derived from the brand letterform, used as a visual anchor.
 *
 * Variants:
 * - hero: Large animated version for hero sections
 * - mark: Small icon mark version
 * - structural: Inline wordmark mark
 * - system-line: The Layzox product relationship diagram
 */
export const LayzoxBrandDevice: React.FC<BrandDeviceProps> = ({
  variant = "hero",
  className = "",
  accentColor = "var(--color-accent)",
  inkColor = "var(--color-ink)",
}) => {
  // Official brand mark usage: always the approved master asset, never a redraw.
  if (variant === "mark") {
    return (
      <span className={`brand-logo-shell ${className}`} aria-hidden="true">
        <Image src="/brand/layzox-master-logo.png" alt="" width={405} height={101} className="brand-logo-image" />
      </span>
    );
  }

  if (variant === "structural") {
    return (
      <span className={`brand-logo-shell ${className}`} aria-hidden="true">
        <Image src="/brand/layzox-master-logo.png" alt="" width={405} height={101} className="brand-logo-image" />
      </span>
    );
  }

  // System Line variant — shows product ecosystem relationships
  if (variant === "system-line") {
    return (
      <div className={`select-none ${className}`} aria-hidden="true">
        <svg
          viewBox="0 0 480 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          {/* LAYZOX root node */}
          <rect x="0" y="80" width="90" height="40" fill={inkColor} />
          <text
            x="45"
            y="105"
            fill="var(--color-canvas)"
            fontFamily="monospace"
            fontSize="11"
            fontWeight="900"
            letterSpacing="0.08em"
            textAnchor="middle"
          >
            LAYZOX
          </text>

          {/* Trunk line */}
          <rect x="90" y="99" width="60" height="2" fill={accentColor} />

          {/* Branch vertical */}
          <rect x="148" y="41" width="2" height="120" fill="var(--color-rule)" />

          {/* Branch horizontal lines */}
          <rect x="148" y="41" width="24" height="2" fill="var(--color-rule)" />
          <rect x="148" y="100" width="24" height="2" fill="var(--color-rule)" />
          <rect x="148" y="159" width="24" height="2" fill="var(--color-rule)" />

          {/* GROWTH node */}
          <rect x="172" y="26" width="90" height="32" fill="var(--color-growth)" />
          <text
            x="217"
            y="46"
            fill="var(--color-canvas)"
            fontFamily="monospace"
            fontSize="9"
            fontWeight="800"
            letterSpacing="0.1em"
            textAnchor="middle"
          >
            GROWTH
          </text>

          {/* ACCOUNTS node */}
          <rect x="172" y="84" width="90" height="32" fill="var(--color-accounts)" />
          <text
            x="217"
            y="104"
            fill="var(--color-canvas)"
            fontFamily="monospace"
            fontSize="9"
            fontWeight="800"
            letterSpacing="0.1em"
            textAnchor="middle"
          >
            ACCOUNTS
          </text>

          {/* STUDY node */}
          <rect x="172" y="143" width="90" height="32" fill="var(--color-study)" />
          <text
            x="217"
            y="163"
            fill="var(--color-canvas)"
            fontFamily="monospace"
            fontSize="9"
            fontWeight="800"
            letterSpacing="0.1em"
            textAnchor="middle"
          >
            STUDY
          </text>

          {/* Connector to outcomes */}
          <rect x="262" y="41" width="24" height="2" fill="var(--color-rule)" />
          <rect x="262" y="100" width="24" height="2" fill="var(--color-rule)" />
          <rect x="262" y="159" width="24" height="2" fill="var(--color-rule)" />

          {/* Outcome labels */}
          <text x="292" y="46" fill="var(--color-ink-tertiary)" fontFamily="monospace" fontSize="9" fontWeight="600" letterSpacing="0.06em">
            GROWTH OPS
          </text>
          <text x="292" y="104" fill="var(--color-ink-tertiary)" fontFamily="monospace" fontSize="9" fontWeight="600" letterSpacing="0.06em">
            FINANCE
          </text>
          <text x="292" y="164" fill="var(--color-ink-tertiary)" fontFamily="monospace" fontSize="9" fontWeight="600" letterSpacing="0.06em">
            KNOWLEDGE
          </text>
        </svg>
      </div>
    );
  }

  // Hero brand usage: exact approved master asset.
  return (
    <motion.div className={`brand-logo-shell ${className}`} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
      <Image src="/brand/layzox-master-logo.png" alt="LAYZOX — Technology for a Brighter Tomorrow" width={810} height={201} className="w-full h-auto" />
    </motion.div>
  );
};
