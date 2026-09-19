// Fictional sample data used only by the interactive service demonstration.

export interface DemoLead {
  id: string;
  company: string;
  contactName: string;
  email: string;
  phone: string;
  value: number;
  stage: "new" | "qualified" | "proposal" | "negotiation" | "won";
  source: string;
  createdAt: string;
  convertedToCustomer?: boolean;
}

export interface DemoFollowUp {
  id: string;
  leadId: string;
  leadCompany: string;
  type: "call" | "meeting" | "email" | "demo";
  title: string;
  dueDate: string;
  completed: boolean;
}

export interface DemoCustomer {
  id: string;
  company: string;
  contactName: string;
  email: string;
  phone: string;
  convertedFromLeadId?: string;
  joinedAt: string;
  totalBilled: number;
}

export interface DemoQuotationItem {
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

export interface DemoQuotation {
  id: string;
  quoteNumber: string;
  recipientCompany: string;
  recipientName: string;
  recipientEmail: string;
  items: DemoQuotationItem[];
  subtotal: number;
  taxRate: number;
  taxAmount: number;
  total: number;
  status: "draft" | "sent" | "accepted" | "invoiced";
  createdAt: string;
}

export interface DemoInvoice {
  id: string;
  invoiceNumber: string;
  quoteId?: string;
  company: string;
  email: string;
  items: DemoQuotationItem[];
  subtotal: number;
  taxAmount: number;
  total: number;
  paidAmount: number;
  balanceDue: number;
  status: "issued" | "partially_paid" | "paid";
  dueDate: string;
  createdAt: string;
}

export interface DemoPayment {
  id: string;
  invoiceNumber: string;
  company: string;
  amount: number;
  method: "Bank Wire / NEFT" | "UPI / Instant" | "Corporate Card" | "Direct Debit";
  reference: string;
  recordedAt: string;
}

export interface DemoActivity {
  id: string;
  timestamp: string;
  category: "lead" | "followup" | "customer" | "quote" | "invoice" | "payment" | "system";
  title: string;
  description: string;
}

export const INITIAL_DEMO_LEADS: DemoLead[] = [
  {
    id: "lead-01",
    company: "GreenNest Cafe",
    contactName: "Priya Sharma",
    email: "priya@greennestcafe.in",
    phone: "+91 98201 22340",
    value: 180000,
    stage: "proposal",
    source: "Direct Referral",
    createdAt: "2026-09-18T10:30:00Z",
  },
  {
    id: "lead-02",
    company: "CityCare Services",
    contactName: "Rajesh Verma",
    email: "rajesh@citycareservices.com",
    phone: "+91 98100 45678",
    value: 340000,
    stage: "negotiation",
    source: "Local Business Inbound",
    createdAt: "2026-09-17T14:15:00Z",
  },
  {
    id: "lead-03",
    company: "Sharma Home Studio",
    contactName: "Rohit Sharma",
    email: "rohit@sharmahomestudio.in",
    phone: "+91 97112 33455",
    value: 120000,
    stage: "qualified",
    source: "Instagram Inbound",
    createdAt: "2026-09-18T09:00:00Z",
  },
  {
    id: "lead-04",
    company: "Aarav Retail",
    contactName: "Sunita Aarav",
    email: "sunita@aaravretail.in",
    phone: "+91 98450 88912",
    value: 450000,
    stage: "new",
    source: "Website Enquiry",
    createdAt: "2026-09-19T01:20:00Z",
  },
];

export const INITIAL_DEMO_FOLLOWUPS: DemoFollowUp[] = [
  {
    id: "fol-01",
    leadId: "lead-02",
    leadCompany: "CityCare Services",
    type: "meeting",
    title: "Review Commercial Office Maintenance & Fitout Proposal",
    dueDate: "2026-09-20",
    completed: false,
  },
  {
    id: "fol-02",
    leadId: "lead-01",
    leadCompany: "GreenNest Cafe",
    type: "call",
    title: "Confirm Interior Renovation Scope & Milestone Schedule",
    dueDate: "2026-09-19",
    completed: false,
  },
];

export const INITIAL_DEMO_CUSTOMERS: DemoCustomer[] = [
  {
    id: "cust-01",
    company: "Nova Coaching",
    contactName: "Anand Kulkarni",
    email: "anand@novacoaching.org",
    phone: "+91 99002 11234",
    joinedAt: "2026-08-14T08:00:00Z",
    totalBilled: 260000,
  },
];

export const INITIAL_DEMO_QUOTATIONS: DemoQuotation[] = [
  {
    id: "quote-01",
    quoteNumber: "QT-2026-084",
    recipientCompany: "GreenNest Cafe",
    recipientName: "Priya Sharma",
    recipientEmail: "priya@greennestcafe.in",
    items: [
      {
        description: "Cafe Interior Spatial Layout & Custom Acoustic Wall Paneling",
        quantity: 1,
        unitPrice: 120000,
        total: 120000,
      },
      {
        description: "Bespoke Counter Millwork & Energy-Efficient Lighting Fixtures",
        quantity: 1,
        unitPrice: 60000,
        total: 60000,
      },
    ],
    subtotal: 180000,
    taxRate: 18,
    taxAmount: 32400,
    total: 212400,
    status: "sent",
    createdAt: "2026-09-18T11:00:00Z",
  },
];

export const INITIAL_DEMO_INVOICES: DemoInvoice[] = [
  {
    id: "inv-01",
    invoiceNumber: "INV-2026-031",
    quoteId: "quote-01",
    company: "Nova Coaching",
    email: "accounts@novacoaching.org",
    items: [
      {
        description: "Phase 1: Studio Classroom Fit-out & Modular Partitions",
        quantity: 1,
        unitPrice: 160000,
        total: 160000,
      },
      {
        description: "Reception Desk Fabrication & Acoustic Wall Finish",
        quantity: 1,
        unitPrice: 100000,
        total: 100000,
      },
    ],
    subtotal: 260000,
    taxAmount: 46800,
    total: 306800,
    paidAmount: 150000,
    balanceDue: 156800,
    status: "partially_paid",
    dueDate: "2026-09-30",
    createdAt: "2026-09-15T09:30:00Z",
  },
];

export const INITIAL_DEMO_PAYMENTS: DemoPayment[] = [
  {
    id: "pay-01",
    invoiceNumber: "INV-2026-031",
    company: "Nova Coaching",
    amount: 150000,
    method: "Bank Wire / NEFT",
    reference: "UTR-NEFT-99214-HDFC",
    recordedAt: "2026-09-17T16:40:00Z",
  },
];

export const INITIAL_DEMO_ACTIVITIES: DemoActivity[] = [
  {
    id: "act-01",
    timestamp: "2026-09-19T01:20:00Z",
    category: "lead",
    title: "New Demo Lead Received",
    description: "Aarav Retail submitted inquiry for multi-store display fitouts (₹4,50,000 estimated value).",
  },
  {
    id: "act-02",
    timestamp: "2026-09-18T14:30:00Z",
    category: "quote",
    title: "Quotation #QT-2026-084 Dispatched",
    description: "Prepared proposal of ₹2,12,400 for Priya Sharma at GreenNest Cafe.",
  },
  {
    id: "act-03",
    timestamp: "2026-09-17T16:40:00Z",
    category: "payment",
    title: "Payment Received (₹1,50,000)",
    description: "Recorded NEFT bank transfer against Invoice #INV-2026-031 from Nova Coaching.",
  },
  {
    id: "act-04",
    timestamp: "2026-09-17T14:15:00Z",
    category: "lead",
    title: "Pipeline Advancement",
    description: "Moved CityCare Services to Negotiation stage (₹3,40,000 value).",
  },
  {
    id: "act-05",
    timestamp: "2026-09-16T11:00:00Z",
    category: "system",
    title: "Demo System Initialized",
    description: "UrbanSpace Interiors demo workspace loaded with illustrative data.",
  },
];
