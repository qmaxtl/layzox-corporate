import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { LAYZOX_PRODUCTS } from "@/data/products";
import styles from "../products.module.css";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

function isRetiredProduct(slug: string) {
  return ["study", "studlly"].includes(slug);
}

export function generateStaticParams() {
  return LAYZOX_PRODUCTS.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  if (isRetiredProduct(slug)) redirect("/products");
  const product = LAYZOX_PRODUCTS.find((entry) => entry.slug === slug);
  if (!product) notFound();
  return {
    title: `${product.name} — Coming Soon`,
    description: `${product.name} is coming soon. ${product.description}`,
    alternates: { canonical: `https://layzox.com/products/${product.slug}` },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  if (isRetiredProduct(slug)) redirect("/products");
  const product = LAYZOX_PRODUCTS.find((entry) => entry.slug === slug);
  if (!product) notFound();

  const index = LAYZOX_PRODUCTS.indexOf(product);
  const otherProducts = LAYZOX_PRODUCTS.filter((entry) => entry.id !== product.id);

  return (
    <main
      className={styles.page}
      style={{ "--product-accent": product.accentColor, "--product-wash": product.accentLight } as CSSProperties}
    >
      <header className={styles.detailHero}>
        <div className={styles.container}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/products"><ArrowLeft size={15} aria-hidden="true" /> All products</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{product.name}</span>
          </nav>
          <div className={styles.detailIdentity}>
            <div>
              <span className={styles.status}><span aria-hidden="true" />{product.status}</span>
              <h1 aria-label={product.name}><span>LAYZOX</span>{product.slug.toUpperCase()}</h1>
              <p>{product.tagline}</p>
            </div>
            <span className={styles.detailNumber} aria-hidden="true">0{index + 1}</span>
          </div>
        </div>
      </header>

      <section className={`${styles.container} ${styles.detailBody}`} aria-labelledby="direction-heading">
        <div className={styles.detailNarrative}>
          <span className="section-label" id="direction-heading">The direction</span>
          <h2>{product.description}</h2>
          <p>{product.direction}</p>
          {product.capabilities.length > 0 && (
            <div className={styles.audience}>
              <span className={styles.quietLabel}>Designed with you in mind</span>
              <p>{product.audience}</p>
            </div>
          )}
        </div>
        <aside className={styles.detailAside}>
          {product.capabilities.length > 0 ? (
            <>
              <h3>Areas we’re exploring</h3>
              <ol className={styles.capabilities}>
                {product.capabilities.map((capability, capabilityIndex) => (
                  <li key={capability}><span aria-hidden="true">0{capabilityIndex + 1}</span>{capability}</li>
                ))}
              </ol>
            </>
          ) : (
            <>
              <h3>More to come</h3>
              <p>We’ll share a closer look at LAYZOX REVENUE and its capabilities as development progresses.</p>
            </>
          )}
          <div className={styles.availability}>
            <span className={styles.status}><span aria-hidden="true" />Coming Soon</span>
            <p>This product is not yet available. Features and release details will be shared as they are confirmed.</p>
          </div>
          <Link href={`/contact?product=${product.slug}`} className={styles.textLink}>Talk to us about {product.slug} <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </aside>
      </section>

      <section className={`${styles.container} ${styles.related}`} aria-labelledby="related-heading">
        <div className={styles.eyebrowRow}><h2 className="section-label" id="related-heading">Keep exploring</h2><Link href="/products" className={styles.textLink}>All products <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
        {otherProducts.map((other) => (
          <Link
            key={other.id}
            href={`/products/${other.slug}`}
            className={styles.relatedLink}
            style={{ "--product-accent": other.accentColor } as CSSProperties}
          >
            <span>{other.name}</span>
            <span className={styles.relatedStatus}>Coming Soon</span>
            <ArrowUpRight size={25} aria-hidden="true" />
          </Link>
        ))}
      </section>
    </main>
  );
}
