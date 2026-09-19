import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center bg-[var(--color-canvas)] text-[var(--color-ink)] px-6 py-20">
      <div className="relative max-w-md text-center space-y-8 p-10 sm:p-14 border border-[var(--color-rule)] bg-[var(--color-canvas-subtle)]">
        <div className="space-y-2">
          <span className="font-mono-tech text-[10px] tracking-widest text-[var(--color-accent)] uppercase font-bold">
            Error 404
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-medium tracking-tight text-[var(--color-ink)] leading-tight">
            A different<br />direction.
          </h1>
        </div>

        <p className="text-sm text-[var(--color-ink-tertiary)] leading-relaxed max-w-sm mx-auto">
          The page you are looking for does not exist, has been removed, or has moved to a new address.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="btn-ink inline-flex items-center gap-2"
          >
            <span>Return home</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/products"
            className="btn-secondary inline-flex items-center gap-2 text-[11px]"
          >
            <span>Explore products</span>
            <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>

      </div>
    </main>
  );
}
