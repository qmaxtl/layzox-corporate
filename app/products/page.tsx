import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { LAYZOX_PRODUCTS } from "@/data/products";
import styles from "./products.module.css";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Discover LAYZOX GROWTH, LAYZOX REVENUE, and LAYZOX ACCOUNTS. Three focused products, all coming soon.",
  alternates: { canonical: "https://layzox.com/products" },
};

export default function ProductsPage() {
  return (
    <main className={styles.page}>
      <header className={`${styles.container} ${styles.header}`}>
        <div className={styles.eyebrowRow}>
          <span className="section-label">The products</span>
          <span className={styles.quietLabel}>In development</span>
        </div>
        <div className={styles.headerGrid}>
          <h1>More clarity.<br /><span>More possibility.</span></h1>
          <div className={styles.headerIntro}>
            <p>Focused products for the work that moves a business forward. Thoughtfully designed. Carefully being built.</p>
            <a className={styles.textLink} href="#portfolio">Explore what’s next <ArrowDown size={17} aria-hidden="true" /></a>
          </div>
        </div>
      </header>

      <section className={`${styles.container} ${styles.portfolio}`} id="portfolio" aria-label="Upcoming LAYZOX products">
        {LAYZOX_PRODUCTS.map((product, index) => (
          <article
            key={product.id}
            className={styles.productRow}
            style={{ "--product-accent": product.accentColor, "--product-wash": product.accentLight } as CSSProperties}
            aria-labelledby={`${product.id}-title`}
          >
            <div className={styles.productNumber} aria-hidden="true">0{index + 1}</div>
            <div className={styles.productIdentity}>
              <span className={styles.status}><span aria-hidden="true" />{product.status}</span>
              <h2 id={`${product.id}-title`} aria-label={product.name}><span>LAYZOX</span>{product.slug.toUpperCase()}</h2>
              <p className={styles.productTagline}>{product.tagline}</p>
            </div>
            <div className={styles.productCopy}>
              <p>{product.description}</p>
              {product.capabilities.length > 0 ? (
                <p className={styles.focusLine}>{product.capabilities.slice(0, 2).join(" / ")}</p>
              ) : (
                <p className={styles.focusLine}>More details to follow.</p>
              )}
              <Link href={`/products/${product.slug}`} className={styles.textLink} aria-label={`Explore ${product.name}`}>
                Explore {product.slug} <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </article>
        ))}
        <p className={styles.releaseNote}>All products are coming soon. The descriptions above reflect our current direction and may evolve as development progresses.</p>
      </section>

      <section className={`${styles.container} ${styles.contactSection}`} aria-labelledby="custom-work-title">
        <div>
          <span className="section-label">Built around your business</span>
          <h2 id="custom-work-title">Need something<br />of your own?</h2>
        </div>
        <div>
          <p>We also design and engineer custom digital products, platforms, and business systems.</p>
          <Link href="/start-a-project" className="btn-primary">Start a conversation <ArrowUpRight size={16} aria-hidden="true" /></Link>
          <Link href="/solutions" className={styles.textLink}>Explore our capabilities <ArrowUpRight size={16} aria-hidden="true" /></Link>
        </div>
      </section>
    </main>
  );
}
