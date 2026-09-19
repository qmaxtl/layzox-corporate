"use client";

import { useState, type CSSProperties } from "react";
import Link from "next/link";
import { ArrowUpRight, Minus, Plus } from "lucide-react";
import { LAYZOX_PRODUCTS } from "@/data/products";

const productStories: Record<string, { line: string; description: string; steps: string[] }> = {
  growth: { line: "Give opportunity a direction.", description: "A clearer way to approach growth. Bringing focus to the opportunities, relationships, and decisions that move business forward.", steps: ["Opportunity", "Connection", "Momentum"] },
  revenue: { line: "Bring the bigger picture into focus.", description: "A considered approach to revenue operations. Being developed to help businesses make sense of their commercial activity.", steps: ["Activity", "Perspective", "Progress"] },
  accounts: { line: "Make room for financial clarity.", description: "Business finance, made more approachable. Accounting tools being developed around the everyday work of managing your books.", steps: ["Records", "Organisation", "Clarity"] },
};

export function ProductShowcase() {
  const [active, setActive] = useState<string | null>("growth");
  return (
    <section className="product-section section-space" id="products" aria-labelledby="products-heading"><div className="site-container">
      <div className="section-topline"><span className="eyebrow">01 / Our products</span><span className="section-aside">A new perspective on everyday work</span></div>
      <div className="section-intro"><h2 id="products-heading">Less friction.<br /><span>More possibility.</span></h2><p>We’re building focused products for the work that keeps business moving. Three areas of focus. A more considered way forward.</p></div>
      <div className="product-discovery">{LAYZOX_PRODUCTS.map((product, index) => {
        const expanded = active === product.slug;
        const story = productStories[product.slug];
        if (!story) return null;
        return <article className={`product-chapter ${expanded ? "is-open" : ""}`} key={product.slug} style={{ "--product-color": `var(--color-${product.slug})`, "--product-tint": `var(--color-${product.slug}-light)` } as CSSProperties}>
          <h3><button className="product-trigger" aria-expanded={expanded} aria-controls={`product-panel-${product.slug}`} id={`product-trigger-${product.slug}`} onClick={() => setActive(expanded ? null : product.slug)}><span className="product-number">0{index + 1}</span><span className="product-name">{product.name}</span><span className="coming-soon"><i />Coming soon</span><span className="product-toggle">{expanded ? <Minus size={20} /> : <Plus size={20} />}</span></button></h3>
          <div id={`product-panel-${product.slug}`} role="region" aria-labelledby={`product-trigger-${product.slug}`} hidden={!expanded}><div className="product-content"><div className="product-story"><h4>{story.line}</h4><p>{story.description}</p><Link href={`/products/${product.slug}`} className="text-link">Explore {product.name.replace(/^LAYZOX /i, "")} <ArrowUpRight size={17} /></Link></div><div className={`product-visual product-visual-${product.slug}`} aria-hidden="true"><div className="product-visual-label">{product.name.replace(/^LAYZOX /i, "")} / A work in progress</div><div className="product-paths">{Array.from({ length: 9 }, (_, line) => <i key={line} style={{ "--line": line } as CSSProperties} />)}</div><div className="product-steps">{story.steps.map((step) => <span key={step}>{step}</span>)}</div></div></div></div>
        </article>;
      })}</div>
      <div className="product-footnote"><span>All products are in development. Launch details will follow.</span><Link className="text-link" href="/products">View all products <ArrowUpRight size={16} /></Link></div>
    </div></section>
  );
}
