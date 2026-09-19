"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LAYZOX_PRODUCTS } from "@/data/products";
import "./navigation.css";

const NAV_LINKS = [
  { href: "/solutions", label: "Solutions" },
  { href: "/intelligence", label: "Intelligence" },
  { href: "/company", label: "Company" },
];

function BrandLogo({ preload = false }: { preload?: boolean }) {
  return (
    <Image
      src="/brand/layzox-master-logo.png"
      alt="LAYZOX — Technology for a Brighter Tomorrow"
      width={1620}
      height={402}
      sizes="(max-width: 900px) 180px, 370px"
      preload={preload}
      className="navigation-logo-image"
    />
  );
}

export function Navigation() {
  const pathname = usePathname();
  return <NavigationContent key={pathname} pathname={pathname} />;
}

function NavigationContent({ pathname }: { pathname: string }) {
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const productDisclosureRef = useRef<HTMLDivElement>(null);
  const productTriggerRef = useRef<HTMLButtonElement>(null);
  const productPanelRef = useRef<HTMLDivElement>(null);
  const productCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const productOpenedByHover = useRef(false);
  const mobileTriggerRef = useRef<HTMLButtonElement>(null);
  const mobileDialogRef = useRef<HTMLDialogElement>(null);
  const mobileCloseRef = useRef<HTMLButtonElement>(null);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    if (!productsOpen) return;
    const closeOnOutsidePress = (event: PointerEvent) => {
      if (!productDisclosureRef.current?.contains(event.target as Node)) setProductsOpen(false);
    };
    document.addEventListener("pointerdown", closeOnOutsidePress);
    return () => document.removeEventListener("pointerdown", closeOnOutsidePress);
  }, [productsOpen]);

  useEffect(() => () => {
    if (productCloseTimer.current) clearTimeout(productCloseTimer.current);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const dialog = mobileDialogRef.current;
    const trigger = mobileTriggerRef.current;
    if (!dialog) return;

    // A native modal dialog provides the focus trap and makes the page inert.
    dialog.showModal();
    mobileCloseRef.current?.focus({ preventScroll: true });
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const desktopQuery = window.matchMedia("(min-width: 901px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setMobileOpen(false);
    };
    desktopQuery.addEventListener("change", closeOnDesktop);
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      desktopQuery.removeEventListener("change", closeOnDesktop);
      if (trigger?.isConnected) trigger.focus({ preventScroll: true });
    };
  }, [mobileOpen]);

  const closeNavigation = () => {
    setMobileOpen(false);
    setProductsOpen(false);
  };
  const openProducts = () => {
    if (productCloseTimer.current) clearTimeout(productCloseTimer.current);
    if (!productsOpen) productOpenedByHover.current = true;
    setProductsOpen(true);
  };
  const leaveProducts = () => {
    productCloseTimer.current = setTimeout(() => {
      if (!productPanelRef.current?.contains(document.activeElement)) setProductsOpen(false);
    }, 140);
  };
  const handleProductKeys = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      setProductsOpen(false);
      productTriggerRef.current?.focus();
      return;
    }
    if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    setProductsOpen(true);
    requestAnimationFrame(() => {
      const links = Array.from(productPanelRef.current?.querySelectorAll<HTMLAnchorElement>("a") ?? []);
      if (!links.length) return;
      const index = links.indexOf(document.activeElement as HTMLAnchorElement);
      const next = event.key === "Home" ? 0
        : event.key === "End" ? links.length - 1
        : event.key === "ArrowUp" ? (index <= 0 ? links.length - 1 : index - 1)
        : (index + 1) % links.length;
      links[next]?.focus();
    });
  };

  return (
    <>
      <header className="site-navigation">
        <div className="navigation-inner">
          <Link href="/" className="navigation-logo" aria-label="LAYZOX home"><BrandLogo preload /></Link>
          <nav className="desktop-navigation" aria-label="Main navigation">
            <div
              className="product-disclosure"
              ref={productDisclosureRef}
              onPointerEnter={(event) => { if (event.pointerType === "mouse") openProducts(); }}
              onPointerLeave={(event) => { if (event.pointerType === "mouse") leaveProducts(); }}
              onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setProductsOpen(false); }}
              onKeyDown={handleProductKeys}
            >
              <button
                ref={productTriggerRef}
                className="navigation-link product-disclosure-trigger"
                data-active={isActive("/products") || undefined}
                type="button"
                aria-expanded={productsOpen}
                aria-controls="navigation-products"
                onClick={(event) => {
                  // A pointer click following hover should keep the disclosure open.
                  if (event.detail > 0 && productOpenedByHover.current) {
                    productOpenedByHover.current = false;
                    setProductsOpen(true);
                  } else {
                    setProductsOpen(!productsOpen);
                  }
                }}
              >
                Products <ChevronDown size={13} aria-hidden="true" />
              </button>
              <div ref={productPanelRef} id="navigation-products" className="product-disclosure-panel" hidden={!productsOpen}>
                <p className="navigation-eyebrow">In development. Built for what’s next.</p>
                <ul className="navigation-products-list">
                  {LAYZOX_PRODUCTS.map((product, index) => (
                    <li key={product.slug}>
                      <Link
                        href={`/products/${product.slug}`}
                        className="navigation-product"
                        onClick={closeNavigation}
                        aria-current={pathname === `/products/${product.slug}` ? "page" : undefined}
                      >
                        <span className="navigation-product-number" style={{ color: product.accentColor }}>0{index + 1}</span>
                        <span className="navigation-product-copy">
                          <span>{product.name}</span>
                          <span className="navigation-product-status">Coming soon</span>
                        </span>
                        <ArrowUpRight size={16} aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href="/products" className="navigation-product-overview" onClick={closeNavigation}>
                  Explore our products <ArrowUpRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </div>
            {NAV_LINKS.map((item) => (
              <Link key={item.href} href={item.href} className="navigation-link" data-active={isActive(item.href) || undefined} aria-current={isActive(item.href) ? "page" : undefined}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="navigation-actions">
            <Link href="/contact" className="navigation-contact">Let’s talk <ArrowUpRight size={15} aria-hidden="true" /></Link>
            <ThemeToggle />
            <button ref={mobileTriggerRef} type="button" className="mobile-menu-trigger" aria-label="Open navigation menu" aria-expanded={mobileOpen} aria-controls="mobile-navigation-dialog" onClick={() => setMobileOpen(true)}>
              <Menu size={21} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>
      <dialog
        ref={mobileDialogRef}
        id="mobile-navigation-dialog"
        className="mobile-navigation-dialog"
        aria-label="Navigation menu"
        onCancel={(event) => { event.preventDefault(); setMobileOpen(false); }}
      >
        <div className="mobile-navigation-header">
          <Link href="/" className="navigation-logo" aria-label="LAYZOX home" onClick={closeNavigation}><BrandLogo /></Link>
          <div className="navigation-actions">
            <ThemeToggle />
            <button ref={mobileCloseRef} className="mobile-menu-close" type="button" aria-label="Close navigation menu" onClick={() => setMobileOpen(false)}><X size={21} aria-hidden="true" /></button>
          </div>
        </div>
        <div className="mobile-navigation-body">
          <p className="navigation-eyebrow">Discover LAYZOX</p>
          <nav aria-label="Mobile navigation">
            <div className="mobile-navigation-item">
              <button className="mobile-navigation-link" type="button" aria-expanded={mobileProductsOpen} aria-controls="mobile-navigation-products" onClick={() => setMobileProductsOpen(!mobileProductsOpen)}>
                <span>Products</span><ChevronDown size={22} aria-hidden="true" />
              </button>
              <div id="mobile-navigation-products" className="mobile-navigation-products" hidden={!mobileProductsOpen}>
                {LAYZOX_PRODUCTS.map((product, index) => (
                  <Link key={product.slug} href={`/products/${product.slug}`} onClick={closeNavigation} className="navigation-product">
                    <span className="navigation-product-number" style={{ color: product.accentColor }}>0{index + 1}</span>
                    <span className="navigation-product-copy"><span>{product.name}</span><span className="navigation-product-status">Coming soon</span></span>
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </Link>
                ))}
                <Link href="/products" className="navigation-product-overview" onClick={closeNavigation}>All products <ArrowUpRight size={14} aria-hidden="true" /></Link>
              </div>
            </div>
            {NAV_LINKS.map((item) => (
              <div key={item.href} className="mobile-navigation-item">
                <Link href={item.href} className="mobile-navigation-link" aria-current={isActive(item.href) ? "page" : undefined} onClick={closeNavigation}>
                  <span>{item.label}</span><ArrowUpRight size={22} aria-hidden="true" />
                </Link>
              </div>
            ))}
          </nav>
          <Link href="/contact" className="mobile-navigation-contact" onClick={closeNavigation}>Let’s build what’s next. <ArrowUpRight size={22} aria-hidden="true" /></Link>
        </div>
      </dialog>
    </>
  );
}
