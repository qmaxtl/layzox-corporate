import { COMPANY } from "@/data/company";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY.name,
    legalName: COMPANY.legalName,
    url: "https://layzox.com",
    logo: "https://layzox.com/brand/layzox-master-logo.png",
    description: COMPANY.corePositioning,
    slogan: COMPANY.brandStatement,
    address: {
      "@type": "PostalAddress",
      addressCountry: COMPANY.corporateInfo.country,
      addressRegion: COMPANY.corporateInfo.registeredState,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: COMPANY.contact.projects,
    },
    sameAs: [
      COMPANY.social.linkedin,
      COMPANY.social.github,
      COMPANY.social.twitter,
    ],
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "LAYZOX",
    alternateName: "Layzox India Pvt Ltd",
    url: "https://layzox.com",
  };
}

export function generateServiceSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    provider: {
      "@type": "Organization",
      name: COMPANY.name,
    },
    description,
    url,
  };
}

export function generateArticleSchema(article: {
  title: string;
  summary: string;
  publishedAt: string;
  slug: string;
  authorName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: article.title,
    description: article.summary,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    mainEntityOfPage: `https://layzox.com/intelligence/${article.slug}`,
    author: {
      "@type": "Organization",
      name: article.authorName,
    },
    publisher: {
      "@type": "Organization",
      name: COMPANY.name,
    },
  };
}
