"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

interface NavItem {
  href: string;
  label: string;
  dropdown?: { href: string; label: string; description: string }[];
}

const NAV_ITEMS: NavItem[] = [
  {
    href: "/products",
    label: "Products",
    dropdown: [
      {
        href: "/products/growth",
        label: "Layzox Growth",
        description: "Intelligent growth operations",
      },
      {
        href: "/products/study",
        label: "Layzox Study",
        description: "Learning through mastery and play",
      },
      {
        href: "/products/accounts",
        label: "Layzox Accounts",
        description: "Business finance, simplified",
      },
    ],
  },
  {
    href: "/solutions",
    label: "Solutions",
  },
  {
    href: "/intelligence",
    label: "Intelligence",
  },
  {
    href: "/company",
    label: "Company",
  },
];

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 120);
  };

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-200 ${
          scrolled
            ? "bg-[var(--color-canvas)]/96 border-b border-[var(--color-rule)] py-3 backdrop-blur-md shadow-[0_1px_0_0_rgba(15,14,12,0.06)]"
            : "bg-transparent py-5 border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
          {/* Immutable LAYZOX master logo — never redraw or substitute */}
          <Link href="/" className="brand-logo-shell" aria-label="Layzox home">
            <Image
              src="/brand/layzox-master-logo.png"
              alt="LAYZOX — Technology for a Brighter Tomorrow"
              width={405}
              height={101}
              priority
              className="brand-logo-image"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label="Main navigation"
          >
            {NAV_ITEMS.map((item) => {
              const isActive =
                pathname === item.href ||
                pathname.startsWith(`${item.href}/`);
              const hasDropdown = item.dropdown && item.dropdown.length > 0;
              const isDropdownOpen = activeDropdown === item.label;

              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => hasDropdown && handleDropdownEnter(item.label)}
                  onMouseLeave={() => hasDropdown && handleDropdownLeave()}
                >
                  {hasDropdown ? (
                    <button
                      type="button"
                      className={`inline-flex items-center gap-1 font-mono-tech text-[11px] tracking-[0.12em] uppercase px-3 py-2 rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-1 ${
                        isActive || isDropdownOpen
                          ? "text-[var(--color-accent)] font-bold"
                          : "text-[var(--color-ink-secondary)]/80 hover:text-[var(--color-ink)] font-semibold"
                      }`}
                      aria-haspopup="true"
                      aria-expanded={isDropdownOpen}
                      onClick={() =>
                        setActiveDropdown(isDropdownOpen ? null : item.label)
                      }
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-3 h-3 transition-transform ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`inline-flex items-center font-mono-tech text-[11px] tracking-[0.12em] uppercase px-3 py-2 rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-1 ${
                        isActive
                          ? "text-[var(--color-accent)] font-bold"
                          : "text-[var(--color-ink-secondary)]/80 hover:text-[var(--color-ink)] font-semibold"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Dropdown Panel */}
                  <AnimatePresence>
                    {hasDropdown && isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-2 w-64 bg-[var(--color-canvas)] border border-[var(--color-rule)] shadow-lg shadow-black/8 py-2"
                        role="menu"
                        onMouseEnter={() => handleDropdownEnter(item.label)}
                        onMouseLeave={handleDropdownLeave}
                      >
                        {item.dropdown!.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-3 hover:bg-[var(--color-canvas-subtle)] transition-colors group focus-visible:outline-none focus-visible:bg-[var(--color-canvas-subtle)]"
                            role="menuitem"
                          >
                            <div className="font-mono-tech text-[11px] font-bold tracking-wider uppercase text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">
                              {child.label}
                            </div>
                            <div className="text-xs text-[var(--color-ink-tertiary)] mt-0.5 font-normal">
                              {child.description}
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* Right Action */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/contact"
              className="btn-primary text-[11px] px-5 py-2.5 inline-flex items-center gap-1.5"
            >
              <span>Talk to Layzox</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="ml-auto mr-2 md:ml-3 md:mr-0"><ThemeToggle /></div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center text-[var(--color-ink)] hover:text-[var(--color-accent)] md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] border border-[var(--color-rule)] bg-[var(--color-canvas)] rounded-sm transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-40 flex flex-col bg-[var(--color-canvas)] text-[var(--color-ink)] px-6 pt-20 pb-8 md:hidden overflow-y-auto"
            role="dialog"
            aria-label="Navigation menu"
            aria-modal="true"
          >
            <div className="border-t border-[var(--color-rule)] pt-8 flex-1">
              <nav className="flex flex-col" aria-label="Mobile navigation">
                {NAV_ITEMS.map((item) => (
                  <div key={item.href} className="border-b border-[var(--color-canvas-muted)]">
                    {item.dropdown ? (
                      <>
                        <button
                          type="button"
                          className="flex items-baseline justify-between w-full py-5 group focus-visible:outline-none"
                          onClick={() =>
                            setMobileExpanded(
                              mobileExpanded === item.label ? null : item.label
                            )
                          }
                          aria-expanded={mobileExpanded === item.label}
                        >
                          <span className="font-display text-3xl font-black tracking-tight text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">
                            {item.label}
                          </span>
                          <ChevronDown
                            className={`w-5 h-5 text-[var(--color-ink-tertiary)] transition-transform ${
                              mobileExpanded === item.label ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileExpanded === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden pb-4"
                            >
                              {item.dropdown.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className="flex flex-col pl-4 py-2.5 border-l-2 border-[var(--color-accent)] mb-2 hover:bg-[var(--color-canvas-subtle)] transition-colors rounded-r-sm focus-visible:outline-none focus-visible:bg-[var(--color-canvas-subtle)]"
                                >
                                  <span className="font-mono-tech text-xs font-bold uppercase tracking-wider text-[var(--color-ink)]">
                                    {child.label}
                                  </span>
                                  <span className="text-xs text-[var(--color-ink-tertiary)] mt-0.5">
                                    {child.description}
                                  </span>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="flex items-baseline justify-between py-5 group focus-visible:outline-none"
                      >
                        <span className="font-display text-3xl font-black tracking-tight text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">
                          {item.label}
                        </span>
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            <div className="pt-6 mt-4 space-y-3">
              <Link
                href="/contact"
                className="btn-primary w-full justify-between text-sm px-6 py-4"
              >
                <span>Talk to Layzox</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <div className="flex items-center justify-between font-mono-tech text-[10px] text-[var(--color-ink-tertiary)] uppercase tracking-widest px-1">
                <span>LAYZOX INDIA PVT LTD</span>
                <span>PRODUCTS & SYSTEMS</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
