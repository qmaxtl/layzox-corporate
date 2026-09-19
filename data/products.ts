export type ProductStatus = "Coming Soon";

export interface LayzoxProduct {
  id: string;
  name: string;
  slug: string;
  accentColor: string;
  accentLight: string;
  tagline: string;
  description: string;
  direction: string;
  status: ProductStatus;
  domain: string;
  capabilities: string[];
  audience: string;
}

// The public portfolio. Features describe intended direction, not released software.
export const LAYZOX_PRODUCTS: LayzoxProduct[] = [
  {
    id: "growth",
    name: "LAYZOX GROWTH",
    slug: "growth",
    accentColor: "var(--color-growth)",
    accentLight: "var(--color-growth-light)",
    tagline: "Clarity for your next move.",
    description:
      "A more connected approach to business growth. Being built around the work between first interest, a qualified opportunity, and the next decision.",
    direction:
      "Our focus is on making acquisition, pipeline activity, and commercial operations easier to understand and manage.",
    status: "Coming Soon",
    domain: "growth.layzox.com",
    capabilities: [
      "Lead and pipeline management",
      "Commercial operations tracking",
      "Business visibility and reporting",
      "Operational automation",
    ],
    audience: "Businesses and commercial teams",
  },
  {
    id: "revenue",
    name: "LAYZOX REVENUE",
    slug: "revenue",
    accentColor: "var(--color-revenue)",
    accentLight: "var(--color-revenue-light)",
    tagline: "The next chapter is taking shape.",
    description:
      "Introducing LAYZOX REVENUE. A new product in development, with more to share as it takes shape.",
    direction:
      "Product scope and capabilities will be announced here as development progresses.",
    status: "Coming Soon",
    domain: "",
    capabilities: [],
    audience: "To be announced",
  },
  {
    id: "accounts",
    name: "LAYZOX ACCOUNTS",
    slug: "accounts",
    accentColor: "var(--color-accounts)",
    accentLight: "var(--color-accounts-light)",
    tagline: "Make room for financial clarity.",
    description:
      "Accounting and business finance, brought into focus. Being designed to give everyday financial work a clearer, more manageable structure.",
    direction:
      "An accounting and business finance product with an India-oriented focus, shaped around the needs of small businesses and independent professionals.",
    status: "Coming Soon",
    domain: "accounts.layzox.com",
    capabilities: [
      "Invoicing and billing",
      "Income and expense tracking",
      "Business finance overview",
      "Reports and financial visibility",
    ],
    audience: "Small businesses, freelancers, and entrepreneurs",
  },
];
