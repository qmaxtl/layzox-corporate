export interface CaseStudy {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  clientContext: string;
  summary: string;
  problem: {
    headline: string;
    description: string;
    keyPoints: string[];
  };
  system: {
    headline: string;
    description: string;
    architectureHighlights: string[];
    diagramLabel: string;
  };
  experience: {
    headline: string;
    description: string;
    designDecisions: string[];
  };
  technology: {
    headline: string;
    stack: string[];
    performanceHighlights: string[];
  };
  outcome: {
    headline: string;
    verifiedResults: string[];
    quoteAuthor?: string;
    quoteRole?: string;
    quoteText?: string;
  };
  featured: boolean;
  accentColor: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "businessflow",
    number: "01",
    title: "BusinessFlow",
    tagline: "An exploration of connected commercial workflows",
    category: "Engineering demonstration",
    year: "2025",
    clientContext: "Interactive prototype · Sample data",
    summary: "A browser-based demonstration connecting leads, quotations, invoices, and payment records. Explore the workflow with sample data; this is an engineering example, not a released LAYZOX product.",
    problem: {
      headline: "Scattered spreadsheets, delayed quotations, and manual payment tracking.",
      description: "When leads, estimates, and invoices live in separate tools, each handoff needs attention. This demonstration explores how a shared workflow could make the next action and its context easier to see.",
      keyPoints: [
        "Disconnected pipeline stages causing lead drop-off and slow response times.",
        "Manual quotation creation leading to pricing errors and inconsistent branding.",
        "Delayed invoice issuance and lack of automated payment reminders.",
        "Zero real-time visibility into overall pipeline health and cash velocity.",
      ],
    },
    system: {
      headline: "A unified reactive state engine driving operations from first enquiry to cleared receipt.",
      description: "The prototype carries sample customer and deal details into quotations and invoices. Tax inputs illustrate calculation behavior, while payment entries show how an outstanding balance changes. It does not process real payments or provide accounting or tax compliance.",
      architectureHighlights: [
        "Connected interface states for leads, quotations, invoices, and payment records.",
        "Editable line items and tax inputs with calculated document totals.",
        "Sample payment records with bank, UPI, and card method labels.",
        "Browser-local state for exploring the demonstration.",
      ],
      diagramLabel: "Lead Intake → Stage Progression → Smart Quotation → Invoice Generation → Multi-Rail Payment → Reconciled Ledger",
    },
    experience: {
      headline: "Keep the current task and the next step in view.",
      description: "The demonstration combines a pipeline overview with focused forms and document previews. The goal is to carry context forward as a piece of work moves from enquiry to payment record.",
      designDecisions: [
        "A clear, focused interface for exploring an operational workflow.",
        "Focused dialogs for creating quotations without leaving the workflow.",
        "Pipeline totals derived from the current sample records.",
        "Quotation previews and invoice records within the same workflow.",
      ],
    },
    technology: {
      headline: "A working interface built with the same web stack as this site.",
      stack: [
        "Next.js App Router",
        "TypeScript",
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "Browser local storage",
      ],
      performanceHighlights: [
        "Client-side interactions across the demonstration workflow",
        "Document previews generated from sample record state",
        "Local browser persistence; no shared production database",
      ],
    },
    outcome: {
      headline: "A workflow you can inspect for yourself.",
      verifiedResults: [
        "Follow sample records from enquiry through to invoice and payment entry.",
        "Explore quotation forms and inspect their calculated totals.",
        "Review document previews within the workflow.",
        "Use the demonstration as a starting point for a discussion about your own systems.",
      ],
    },
    featured: true,
    accentColor: "#2563eb",
  },
];
