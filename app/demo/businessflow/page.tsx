"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  RotateCcw,
  Plus,
  CheckCircle2,
  Calendar,
  UserCheck,
  FileText,
  CreditCard,
  History,
  Kanban,
  X,
  Building2,
  Receipt,
} from "lucide-react";
import {
  DemoLead,
  DemoFollowUp,
  DemoCustomer,
  DemoQuotation,
  DemoInvoice,
  DemoPayment,
  DemoActivity,
  INITIAL_DEMO_LEADS,
  INITIAL_DEMO_FOLLOWUPS,
  INITIAL_DEMO_CUSTOMERS,
  INITIAL_DEMO_QUOTATIONS,
  INITIAL_DEMO_INVOICES,
  INITIAL_DEMO_PAYMENTS,
  INITIAL_DEMO_ACTIVITIES,
} from "./demo-data";
import { formatINR } from "@/lib/utils";
import { DemoDialog } from "./DemoDialog";
import styles from "./demo.module.css";

const STORAGE_KEY = "layzox_businessflow_demo_state_v2";

type ActiveTab =
  | "pipeline"
  | "followups"
  | "customers"
  | "quotations"
  | "invoices"
  | "payments"
  | "timeline";

const PIPELINE_STAGES: Array<{
  id: DemoLead["stage"];
  label: string;
  badgeBg: string;
  badgeText: string;
}> = [
  { id: "new", label: "New Leads", badgeBg: "bg-[var(--color-canvas-muted)]", badgeText: "text-[var(--color-ink-secondary)]" },
  { id: "qualified", label: "Qualified", badgeBg: "bg-[var(--color-accent-soft)]", badgeText: "text-[var(--color-revenue)]" },
  { id: "proposal", label: "Proposal Sent", badgeBg: "bg-[var(--color-canvas-muted)]", badgeText: "text-[var(--color-ink-secondary)]" },
  { id: "negotiation", label: "Negotiation", badgeBg: "bg-[var(--color-revenue-light)]", badgeText: "text-[var(--color-revenue)]" },
  { id: "won", label: "Closed / Won", badgeBg: "bg-[var(--color-growth-light)]", badgeText: "text-[var(--color-growth)]" },
];

export default function BusinessFlowDemoPage() {
  const reduceMotion = useReducedMotion();
  // Demo State
  const [leads, setLeads] = useState<DemoLead[]>(INITIAL_DEMO_LEADS);
  const [followUps, setFollowUps] = useState<DemoFollowUp[]>(INITIAL_DEMO_FOLLOWUPS);
  const [customers, setCustomers] = useState<DemoCustomer[]>(INITIAL_DEMO_CUSTOMERS);
  const [quotations, setQuotations] = useState<DemoQuotation[]>(INITIAL_DEMO_QUOTATIONS);
  const [invoices, setInvoices] = useState<DemoInvoice[]>(INITIAL_DEMO_INVOICES);
  const [payments, setPayments] = useState<DemoPayment[]>(INITIAL_DEMO_PAYMENTS);
  const [activities, setActivities] = useState<DemoActivity[]>(INITIAL_DEMO_ACTIVITIES);
  const [storageLoaded, setStorageLoaded] = useState(false);

  // Active View Tab
  const [activeTab, setActiveTab] = useState<ActiveTab>("pipeline");

  // Modal States
  const [showNewLeadModal, setShowNewLeadModal] = useState<boolean>(false);
  const [showNewFollowUpModal, setShowNewFollowUpModal] = useState<boolean>(false);
  const [showNewQuoteModal, setShowNewQuoteModal] = useState<boolean>(false);
  const [showRecordPaymentModal, setShowRecordPaymentModal] = useState<boolean>(false);
  const [previewQuotation, setPreviewQuotation] = useState<DemoQuotation | null>(null);

  // Form Temp States
  const [newLeadForm, setNewLeadForm] = useState({
    company: "",
    contactName: "",
    email: "",
    phone: "",
    value: 250000,
    stage: "new" as DemoLead["stage"],
    source: "Direct Web Inbound",
  });

  const [newFollowUpForm, setNewFollowUpForm] = useState({
    leadId: "",
    type: "meeting" as DemoFollowUp["type"],
    title: "",
    dueDate: new Date().toISOString().split("T")[0],
  });

  const [newQuoteForm, setNewQuoteForm] = useState({
    recipientCompany: "",
    recipientName: "",
    recipientEmail: "",
    itemDesc: "Interior planning and custom furniture design",
    unitPrice: 350000,
    quantity: 1,
    taxRate: 18,
  });

  const [paymentForm, setPaymentForm] = useState({
    invoiceNumber: "",
    amount: 100000,
    method: "Bank Wire / NEFT" as DemoPayment["method"],
    reference: "UTR-2026-990142",
  });

  // Action Flash Toast
  const [flashMessage, setFlashMessage] = useState<string>("");

  const triggerToast = (msg: string) => {
    setFlashMessage(msg);
    setTimeout(() => setFlashMessage(""), 3500);
  };

  // Helper to log activities
  const logActivity = (
    category: DemoActivity["category"],
    title: string,
    description: string
  ) => {
    const newAct: DemoActivity = {
      id: `act-${Date.now()}`,
      timestamp: new Date().toISOString(),
      category,
      title,
      description,
    };
    setActivities((prev) => [newAct, ...prev]);
  };

  // Load from local storage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed.leads)) setLeads(parsed.leads);
        if (Array.isArray(parsed.followUps)) setFollowUps(parsed.followUps);
        if (Array.isArray(parsed.customers)) setCustomers(parsed.customers);
        if (Array.isArray(parsed.quotations)) setQuotations(parsed.quotations);
        if (Array.isArray(parsed.invoices)) setInvoices(parsed.invoices);
        if (Array.isArray(parsed.payments)) setPayments(parsed.payments);
        if (Array.isArray(parsed.activities)) setActivities(parsed.activities);
      }
    } catch {
      // fallback to initial
    }
    setStorageLoaded(true);
  }, []);

  // Save to local storage
  useEffect(() => {
    if (!storageLoaded) return;
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          leads,
          followUps,
          customers,
          quotations,
          invoices,
          payments,
          activities,
        })
      );
    } catch {
      // ignore
    }
  }, [storageLoaded, leads, followUps, customers, quotations, invoices, payments, activities]);

  // RESET DEMO ACTION
  const handleResetDemo = () => {
    try { localStorage.removeItem(STORAGE_KEY); } catch { /* Storage may be unavailable. */ }
    setLeads(INITIAL_DEMO_LEADS);
    setFollowUps(INITIAL_DEMO_FOLLOWUPS);
    setCustomers(INITIAL_DEMO_CUSTOMERS);
    setQuotations(INITIAL_DEMO_QUOTATIONS);
    setInvoices(INITIAL_DEMO_INVOICES);
    setPayments(INITIAL_DEMO_PAYMENTS);
    setActivities(INITIAL_DEMO_ACTIVITIES);
    triggerToast("Demo state reset to initial baseline.");
  };

  // 1. LEAD CREATION
  const handleCreateLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLeadForm.company.trim() || !newLeadForm.contactName.trim()) return;

    const newLead: DemoLead = {
      id: `lead-${Date.now()}`,
      company: newLeadForm.company.trim(),
      contactName: newLeadForm.contactName.trim(),
      email:
        newLeadForm.email.trim() ||
        "contact@" +
          newLeadForm.company.toLowerCase().replace(/[^a-z0-9]/g, "") +
          ".com",
      phone: newLeadForm.phone.trim() || "+91 98200 12345",
      value: Number(newLeadForm.value) || 250000,
      stage: newLeadForm.stage,
      source: newLeadForm.source,
      createdAt: new Date().toISOString(),
    };

    setLeads((prev) => [newLead, ...prev]);
    logActivity(
      "lead",
      "New Demo Lead Created",
      `${newLead.company} added to ${newLead.stage} stage (${formatINR(newLead.value)}).`
    );
    setShowNewLeadModal(false);
    setNewLeadForm({
      company: "",
      contactName: "",
      email: "",
      phone: "",
      value: 250000,
      stage: "new",
      source: "Direct Web Inbound",
    });
    triggerToast(`Lead "${newLead.company}" created successfully.`);
  };

  // 2. STAGE MOVEMENT
  const handleMoveStage = (leadId: string, nextStage: DemoLead["stage"]) => {
    setLeads((prev) =>
      prev.map((l) => {
        if (l.id === leadId) {
          logActivity(
            "lead",
            "Lead Stage Transition",
            `${l.company} advanced from ${l.stage.toUpperCase()} to ${nextStage.toUpperCase()}.`
          );
          return { ...l, stage: nextStage };
        }
        return l;
      })
    );
    triggerToast(`Lead stage updated to ${nextStage.toUpperCase()}.`);
  };

  // 3. CONVERT TO CUSTOMER
  const handleConvertToCustomer = (lead: DemoLead) => {
    if (lead.convertedToCustomer) return;

    const newCustomer: DemoCustomer = {
      id: `cust-${Date.now()}`,
      company: lead.company,
      contactName: lead.contactName,
      email: lead.email,
      phone: lead.phone,
      convertedFromLeadId: lead.id,
      joinedAt: new Date().toISOString(),
      totalBilled: 0,
    };

    setCustomers((prev) => [newCustomer, ...prev]);
    setLeads((prev) =>
      prev.map((l) =>
        l.id === lead.id ? { ...l, convertedToCustomer: true, stage: "won" } : l
      )
    );
    logActivity(
      "customer",
      "Lead Converted to Customer",
      `${lead.company} successfully onboarded as an active institutional account.`
    );
    triggerToast(`${lead.company} converted to Customer account.`);
  };

  // 4. CREATE FOLLOW-UP
  const handleCreateFollowUp = (e: React.FormEvent) => {
    e.preventDefault();
    const targetLead =
      leads.find((l) => l.id === newFollowUpForm.leadId) || leads[0];
    if (!targetLead) return;

    const newFol: DemoFollowUp = {
      id: `fol-${Date.now()}`,
      leadId: targetLead.id,
      leadCompany: targetLead.company,
      type: newFollowUpForm.type,
      title:
        newFollowUpForm.title.trim() ||
        `Follow-up with ${targetLead.contactName}`,
      dueDate: newFollowUpForm.dueDate,
      completed: false,
    };

    setFollowUps((prev) => [newFol, ...prev]);
    logActivity(
      "followup",
      "Follow-up Task Scheduled",
      `${newFol.type.toUpperCase()}: "${newFol.title}" for ${targetLead.company}.`
    );
    setShowNewFollowUpModal(false);
    triggerToast("Follow-up task scheduled.");
  };

  // Toggle follow up complete
  const handleToggleFollowUp = (id: string) => {
    setFollowUps((prev) =>
      prev.map((f) => {
        if (f.id === id) {
          const nextState = !f.completed;
          logActivity(
            "followup",
            nextState ? "Follow-up Task Completed" : "Follow-up Reopened",
            `${f.title} (${f.leadCompany}).`
          );
          return { ...f, completed: nextState };
        }
        return f;
      })
    );
  };

  // 5. CREATE QUOTATION
  const handleCreateQuotation = (e: React.FormEvent) => {
    e.preventDefault();
    const subtotal =
      Number(newQuoteForm.unitPrice) * Number(newQuoteForm.quantity);
    const taxAmount = (subtotal * Number(newQuoteForm.taxRate)) / 100;
    const total = subtotal + taxAmount;
    const quoteNum = `QT-2026-${Math.floor(100 + Math.random() * 900)}`;

    const newQuote: DemoQuotation = {
      id: `quote-${Date.now()}`,
      quoteNumber: quoteNum,
      recipientCompany: newQuoteForm.recipientCompany.trim() || "GreenNest Cafe",
      recipientName: newQuoteForm.recipientName.trim() || "Executive Lead",
      recipientEmail: newQuoteForm.recipientEmail.trim() || "billing@company.com",
      items: [
        {
          description: newQuoteForm.itemDesc,
          quantity: Number(newQuoteForm.quantity),
          unitPrice: Number(newQuoteForm.unitPrice),
          total: subtotal,
        },
      ],
      subtotal,
      taxRate: Number(newQuoteForm.taxRate),
      taxAmount,
      total,
      status: "sent",
      createdAt: new Date().toISOString(),
    };

    setQuotations((prev) => [newQuote, ...prev]);
    logActivity(
      "quote",
      "New Quotation Generated",
      `${quoteNum} issued to ${newQuote.recipientCompany} (${formatINR(total)}).`
    );
    setShowNewQuoteModal(false);
    setPreviewQuotation(newQuote);
    triggerToast(`Quotation ${quoteNum} generated.`);
  };

  // 6. CONVERT QUOTE TO INVOICE
  const handleConvertQuoteToInvoice = (quote: DemoQuotation) => {
    const invNum = `INV-2026-${Math.floor(100 + Math.random() * 900)}`;
    const newInv: DemoInvoice = {
      id: `inv-${Date.now()}`,
      invoiceNumber: invNum,
      quoteId: quote.id,
      company: quote.recipientCompany,
      email: quote.recipientEmail,
      items: quote.items,
      subtotal: quote.subtotal,
      taxAmount: quote.taxAmount,
      total: quote.total,
      paidAmount: 0,
      balanceDue: quote.total,
      status: "issued",
      dueDate: new Date(Date.now() + 14 * 86400000).toISOString().split("T")[0],
      createdAt: new Date().toISOString(),
    };

    setInvoices((prev) => [newInv, ...prev]);
    setQuotations((prev) =>
      prev.map((q) => (q.id === quote.id ? { ...q, status: "invoiced" } : q))
    );
    logActivity(
      "invoice",
      "Invoice Generated from Quote",
      `${invNum} issued to ${quote.recipientCompany} for ${formatINR(quote.total)}.`
    );
    triggerToast(`Invoice ${invNum} created from Quote ${quote.quoteNumber}.`);
    setActiveTab("invoices");
  };

  // 7. RECORD PAYMENT
  const handleRecordPayment = (e: React.FormEvent) => {
    e.preventDefault();
    const targetInv = invoices.find(
      (inv) => inv.invoiceNumber === paymentForm.invoiceNumber
    );
    if (!targetInv) return;

    const amount = Number(paymentForm.amount);
    if (!Number.isFinite(amount) || amount <= 0 || amount > targetInv.balanceDue) {
      triggerToast("Enter a payment greater than zero and no more than the outstanding balance.");
      return;
    }
    const newPaid = targetInv.paidAmount + amount;
    const newBalance = Math.max(targetInv.total - newPaid, 0);
    const nextStatus: DemoInvoice["status"] =
      newBalance === 0 ? "paid" : "partially_paid";

    setInvoices((prev) =>
      prev.map((inv) =>
        inv.id === targetInv.id
          ? {
              ...inv,
              paidAmount: newPaid,
              balanceDue: newBalance,
              status: nextStatus,
            }
          : inv
      )
    );

    const newPayment: DemoPayment = {
      id: `pay-${Date.now()}`,
      invoiceNumber: targetInv.invoiceNumber,
      company: targetInv.company,
      amount,
      method: paymentForm.method,
      reference:
        paymentForm.reference.trim() || `UTR-${Date.now().toString().slice(-6)}`,
      recordedAt: new Date().toISOString(),
    };

    setPayments((prev) => [newPayment, ...prev]);
    logActivity(
      "payment",
      "Payment Recorded",
      `Received ${formatINR(amount)} via ${paymentForm.method} from ${targetInv.company} against ${targetInv.invoiceNumber}.`
    );
    setShowRecordPaymentModal(false);
    triggerToast(`Payment of ${formatINR(amount)} recorded.`);
  };

  // Aggregated Pipeline Values
  const totalPipelineValue = leads.reduce((acc, l) => acc + l.value, 0);
  const totalBilled = invoices.reduce((acc, inv) => acc + inv.total, 0);
  const totalCollected = payments.reduce((acc, p) => acc + p.amount, 0);
  const activeLeadsCount = leads.filter((l) => l.stage !== "won").length;

  return (
    <div className={`${styles.workspace} relative min-h-screen w-full bg-[var(--color-canvas-subtle)] pt-28 pb-24 text-[var(--color-ink)] font-sans`}>
      {/* Toast Notification */}
      <AnimatePresence>
        {flashMessage && (
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduceMotion ? 0 : -20 }}
            role="status" aria-live="polite" className="fixed top-24 right-4 max-w-[calc(100vw-32px)] z-50 flex items-center gap-3 border border-[var(--color-rule)] bg-[var(--color-canvas)] px-5 py-3 font-mono-tech text-xs text-[var(--color-revenue)] rounded-xl shadow-lg"
          >
            <CheckCircle2 size={16} className="text-[var(--color-revenue)] shrink-0" />
            <span className="font-medium">{flashMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
        {/* Top Operational Bar */}
        <div className="border-b border-[var(--color-rule)] pb-6 mb-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="flex flex-wrap items-center gap-3 font-mono-tech text-xs text-[var(--color-ink-tertiary)] mb-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-growth-light)]0 animate-pulse" />
              <span className="text-[var(--color-revenue)] uppercase font-bold tracking-wider">
                DEMO WORKSPACE: URBANSPACE INTERIORS
              </span>
              <span>{"//"}</span>
              <span className="text-[var(--color-ink-secondary)] font-bold bg-[var(--color-canvas-muted)] border border-[var(--color-rule)] px-2 py-0.5 rounded">
                DEMO DATA
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-ink)]">
              BusinessFlow demonstration
            </h1>
            <p className="font-mono-tech text-xs text-[var(--color-ink-tertiary)] mt-1">
              An interactive example of our business systems work. All companies and financial data are fictional; changes are saved only in this browser.
            </p>
          </div>

          {/* Quick Action Control Strip */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleResetDemo}
              data-cursor="RESET"
              className="inline-flex items-center gap-2 font-mono-tech text-xs tracking-wider uppercase border border-[var(--color-rule-strong)] text-[var(--color-ink-secondary)] hover:text-[var(--color-ink)] hover:bg-[var(--color-canvas-muted)] px-4 py-2.5 rounded-lg transition-colors bg-[var(--color-canvas)] shadow-2xs font-semibold"
            >
              <RotateCcw size={14} />
              <span>RESET DEMO</span>
            </button>

            <Link
              href="/start-a-project?service=business-systems&source=demo"
              data-cursor="CUSTOM"
              className="inline-flex items-center gap-2 font-mono-tech text-xs tracking-widest text-white bg-[#175ac7] hover:bg-[#164aaa] font-bold uppercase px-5 py-2.5 rounded-lg transition-all shadow-sm"
            >
              <span>BUILD THIS FOR MY BUSINESS</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Illustrative workspace totals */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 rounded-2xl border border-[var(--color-rule)] bg-[var(--color-canvas)] p-6 mb-8 font-mono-tech text-xs shadow-2xs">
          <div className="space-y-1">
            <span className="text-[var(--color-ink-tertiary)] block uppercase font-semibold">
              TOTAL PIPELINE VALUE:
            </span>
            <div className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-ink)]">
              {formatINR(totalPipelineValue)}
            </div>
            <span className="text-[11px] text-[var(--color-revenue)] font-medium">
              {activeLeadsCount} active opportunities
            </span>
          </div>

          <div className="space-y-1 border-t sm:border-t-0 sm:border-l border-[var(--color-rule)] sm:pl-6 pt-4 sm:pt-0">
            <span className="text-[var(--color-ink-tertiary)] block uppercase font-semibold">
              BILLED TO DATE:
            </span>
            <div className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-ink)]">
              {formatINR(totalBilled)}
            </div>
            <span className="text-[11px] text-[var(--color-ink-tertiary)]">
              {invoices.length} total invoices
            </span>
          </div>

          <div className="space-y-1 border-t lg:border-t-0 lg:border-l border-[var(--color-rule)] lg:pl-6 pt-4 lg:pt-0">
            <span className="text-[var(--color-ink-tertiary)] block uppercase font-semibold">
              CASH COLLECTED:
            </span>
            <div className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-growth)]">
              {formatINR(totalCollected)}
            </div>
            <span className="text-[11px] text-[var(--color-growth)] font-medium">
              {payments.length} settled receipts
            </span>
          </div>

          <div className="space-y-1 border-t lg:border-t-0 lg:border-l border-[var(--color-rule)] lg:pl-6 pt-4 lg:pt-0">
            <span className="text-[var(--color-ink-tertiary)] block uppercase font-semibold">
              WORKSPACE:
            </span>
            <div className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-revenue)]">
              DEMO
            </div>
            <span className="text-[11px] text-[var(--color-ink-tertiary)]">
              Changes stay in this browser
            </span>
          </div>
        </div>

        {/* Navigation Tabs Rail */}
        <div className="border-b border-[var(--color-rule)] mb-8 overflow-x-auto no-scrollbar" role="group" aria-label="Demo workspace sections">
          <div className="flex items-center gap-6 min-w-max">
            <button
              onClick={() => setActiveTab("pipeline")} aria-pressed={activeTab === "pipeline"}
              className={`flex items-center gap-2 py-3 font-mono-tech text-xs tracking-wider uppercase border-b-2 transition-all ${
                activeTab === "pipeline"
                  ? "border-[var(--color-accent)] text-[var(--color-revenue)] font-bold"
                  : "border-transparent text-[var(--color-ink-tertiary)] hover:text-[var(--color-ink)] font-medium"
              }`}
            >
              <Kanban size={14} />
              <span>Pipeline ({leads.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("followups")} aria-pressed={activeTab === "followups"}
              className={`flex items-center gap-2 py-3 font-mono-tech text-xs tracking-wider uppercase border-b-2 transition-all ${
                activeTab === "followups"
                  ? "border-[var(--color-accent)] text-[var(--color-revenue)] font-bold"
                  : "border-transparent text-[var(--color-ink-tertiary)] hover:text-[var(--color-ink)] font-medium"
              }`}
            >
              <Calendar size={14} />
              <span>Follow-ups ({followUps.filter((f) => !f.completed).length})</span>
            </button>

            <button
              onClick={() => setActiveTab("customers")} aria-pressed={activeTab === "customers"}
              className={`flex items-center gap-2 py-3 font-mono-tech text-xs tracking-wider uppercase border-b-2 transition-all ${
                activeTab === "customers"
                  ? "border-[var(--color-accent)] text-[var(--color-revenue)] font-bold"
                  : "border-transparent text-[var(--color-ink-tertiary)] hover:text-[var(--color-ink)] font-medium"
              }`}
            >
              <UserCheck size={14} />
              <span>Customers ({customers.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("quotations")} aria-pressed={activeTab === "quotations"}
              className={`flex items-center gap-2 py-3 font-mono-tech text-xs tracking-wider uppercase border-b-2 transition-all ${
                activeTab === "quotations"
                  ? "border-[var(--color-accent)] text-[var(--color-revenue)] font-bold"
                  : "border-transparent text-[var(--color-ink-tertiary)] hover:text-[var(--color-ink)] font-medium"
              }`}
            >
              <FileText size={14} />
              <span>Quotations ({quotations.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("invoices")} aria-pressed={activeTab === "invoices"}
              className={`flex items-center gap-2 py-3 font-mono-tech text-xs tracking-wider uppercase border-b-2 transition-all ${
                activeTab === "invoices"
                  ? "border-[var(--color-accent)] text-[var(--color-revenue)] font-bold"
                  : "border-transparent text-[var(--color-ink-tertiary)] hover:text-[var(--color-ink)] font-medium"
              }`}
            >
              <Receipt size={14} />
              <span>Invoices ({invoices.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("payments")} aria-pressed={activeTab === "payments"}
              className={`flex items-center gap-2 py-3 font-mono-tech text-xs tracking-wider uppercase border-b-2 transition-all ${
                activeTab === "payments"
                  ? "border-[var(--color-accent)] text-[var(--color-revenue)] font-bold"
                  : "border-transparent text-[var(--color-ink-tertiary)] hover:text-[var(--color-ink)] font-medium"
              }`}
            >
              <CreditCard size={14} />
              <span>Payments ({payments.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("timeline")} aria-pressed={activeTab === "timeline"}
              className={`flex items-center gap-2 py-3 font-mono-tech text-xs tracking-wider uppercase border-b-2 transition-all ${
                activeTab === "timeline"
                  ? "border-[var(--color-accent)] text-[var(--color-revenue)] font-bold"
                  : "border-transparent text-[var(--color-ink-tertiary)] hover:text-[var(--color-ink)] font-medium"
              }`}
            >
              <History size={14} />
              <span>Activity</span>
            </button>
          </div>
        </div>

        {/* TAB 1: PIPELINE */}
        {activeTab === "pipeline" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="font-mono-tech text-xs text-[var(--color-ink-tertiary)] uppercase font-semibold">
                Deal pipeline
              </span>

              <button
                onClick={() => setShowNewLeadModal(true)}
                data-cursor="ADD"
                className="inline-flex items-center gap-2 font-mono-tech text-xs tracking-wider text-[var(--color-revenue)] border border-[var(--color-rule-strong)] bg-[var(--color-canvas)] px-3.5 py-2 rounded-lg hover:bg-[var(--color-accent-soft)] transition-colors uppercase font-bold shadow-2xs"
              >
                <Plus size={14} />
                <span>NEW LEAD</span>
              </button>
            </div>

            {/* Kanban Column View */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {PIPELINE_STAGES.map((col) => {
                const stageLeads = leads.filter((l) => l.stage === col.id);
                const colValue = stageLeads.reduce((acc, l) => acc + l.value, 0);

                return (
                  <div
                    key={col.id}
                    className="rounded-xl border border-[var(--color-rule)] bg-[var(--color-canvas)] p-4 flex flex-col justify-between min-h-[180px] md:min-h-[460px] shadow-2xs"
                  >
                    <div>
                      {/* Column Header */}
                      <div className="border-b border-[var(--color-rule)] pb-3 mb-4">
                        <div className="flex items-center justify-between font-mono-tech text-xs">
                          <span
                            className={`font-bold uppercase px-2 py-0.5 rounded ${col.badgeBg} ${col.badgeText}`}
                          >
                            {col.label}
                          </span>
                          <span className="text-[var(--color-ink-tertiary)] font-semibold">
                            {stageLeads.length}
                          </span>
                        </div>
                        <div className="font-mono-tech text-xs text-[var(--color-ink-secondary)] font-bold mt-2">
                          {formatINR(colValue)}
                        </div>
                      </div>

                      {/* Deals in Stage */}
                      <div className="space-y-3">
                        {stageLeads.map((lead) => (
                          <div
                            key={lead.id}
                            className="rounded-lg border border-[var(--color-rule)] bg-[var(--color-canvas-subtle)] p-3.5 space-y-2 hover:border-[var(--color-rule-strong)] hover:bg-[var(--color-accent-soft)] transition-all shadow-2xs"
                          >
                            <div className="flex items-start justify-between gap-2">
                              <h4 className="font-display text-sm font-bold text-[var(--color-ink)] line-clamp-1">
                                {lead.company}
                              </h4>
                              <span className="font-mono-tech text-xs text-[var(--color-revenue)] font-bold shrink-0">
                                {formatINR(lead.value)}
                              </span>
                            </div>

                            <div className="font-mono-tech text-[11px] text-[var(--color-ink-secondary)]">
                              <div>{lead.contactName}</div>
                              <div className="text-[var(--color-ink-tertiary)] text-[10px]">
                                {lead.source}
                              </div>
                            </div>

                            {/* Stage Move Controls */}
                            <div className="border-t border-[var(--color-rule)] pt-2 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono-tech">
                              {/* Stage Selector */}
                              <select
                                aria-label={`Stage for ${lead.company}`}
                                value={lead.stage}
                                onChange={(e) =>
                                  handleMoveStage(
                                    lead.id,
                                    e.target.value as DemoLead["stage"]
                                  )
                                }
                                className="bg-[var(--color-canvas)] border border-[var(--color-rule-strong)] text-[var(--color-ink)] rounded px-1.5 py-1 focus:outline-none focus:border-[var(--color-accent)] font-medium"
                              >
                                <option value="new">New</option>
                                <option value="qualified">Qualified</option>
                                <option value="proposal">Proposal</option>
                                <option value="negotiation">Negotiate</option>
                                <option value="won">Won</option>
                              </select>

                              {/* Customer Conversion if Won */}
                              {lead.stage === "won" &&
                                !lead.convertedToCustomer && (
                                  <button
                                    onClick={() => handleConvertToCustomer(lead)}
                                    className="text-[var(--color-growth)] hover:text-[var(--color-growth)] font-bold uppercase bg-[var(--color-growth-light)] px-2 py-0.5 rounded border border-[var(--color-rule)]"
                                  >
                                    + CONVERT
                                  </button>
                                )}
                              {lead.convertedToCustomer && (
                                <span className="text-[var(--color-growth)] font-semibold">
                                  CONVERTED ✔
                                </span>
                              )}
                            </div>
                          </div>
                        ))}

                        {stageLeads.length === 0 && (
                          <div className="py-8 text-center font-mono-tech text-xs text-[var(--color-ink-tertiary)]">
                            No deals in this stage
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 2: FOLLOW-UPS */}
        {activeTab === "followups" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="font-mono-tech text-xs text-[var(--color-ink-tertiary)] uppercase font-semibold">
                SCHEDULED ACTIONS & CONVERSATION QUEUE
              </span>

              <button
                onClick={() => setShowNewFollowUpModal(true)}
                className="inline-flex items-center gap-2 font-mono-tech text-xs tracking-wider text-[var(--color-revenue)] border border-[var(--color-rule-strong)] bg-[var(--color-canvas)] px-3.5 py-2 rounded-lg hover:bg-[var(--color-accent-soft)] transition-colors uppercase font-bold shadow-2xs"
              >
                <Plus size={14} />
                <span>SCHEDULE FOLLOW-UP</span>
              </button>
            </div>

            <div className="rounded-xl border border-[var(--color-rule)] bg-[var(--color-canvas)] divide-y divide-[var(--color-rule)] overflow-hidden shadow-2xs">
              {followUps.map((fol) => (
                <div
                  key={fol.id}
                  className={`p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors ${
                    fol.completed ? "opacity-60 bg-[var(--color-canvas-subtle)]" : "bg-[var(--color-canvas)]"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <button
                      onClick={() => handleToggleFollowUp(fol.id)}
                      className={`h-5 w-5 rounded-full border mt-0.5 flex items-center justify-center transition-colors ${
                        fol.completed
                          ? "border-[var(--color-growth)] bg-[var(--color-growth-light)] text-[var(--color-growth)] font-bold"
                          : "border-[var(--color-rule-strong)] text-transparent hover:border-[var(--color-accent)]"
                      }`}
                    >
                      ✓
                    </button>
                    <div>
                      <div className="flex flex-wrap items-center gap-3 font-mono-tech text-xs">
                        <span className="text-[var(--color-revenue)] uppercase font-bold">
                          [{fol.type}]
                        </span>
                        <span className="text-[var(--color-ink)] font-bold">
                          {fol.leadCompany}
                        </span>
                      </div>
                      <h4 className="font-display text-base font-semibold text-[var(--color-ink)] mt-1">
                        {fol.title}
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 font-mono-tech text-xs">
                    <span className="text-[var(--color-ink-tertiary)] font-medium">
                      DUE: {fol.dueDate}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded font-semibold text-[11px] ${
                        fol.completed
                          ? "bg-[var(--color-growth-light)] text-[var(--color-growth)]"
                          : "bg-[var(--color-canvas-muted)] text-[var(--color-ink-secondary)]"
                      }`}
                    >
                      {fol.completed ? "COMPLETED" : "PENDING"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: CUSTOMERS */}
        {activeTab === "customers" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="font-mono-tech text-xs text-[var(--color-ink-tertiary)] uppercase font-semibold">
                CONVERTED INSTITUTIONAL ACCOUNTS
              </span>
            </div>

            <div className="rounded-xl border border-[var(--color-rule)] bg-[var(--color-canvas)] divide-y divide-[var(--color-rule)] overflow-hidden shadow-2xs">
              {customers.map((cust) => (
                <div
                  key={cust.id}
                  className="p-6 bg-[var(--color-canvas)] flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[var(--color-canvas-subtle)] transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Building2 size={15} className="text-[var(--color-revenue)]" />
                      <span className="font-mono-tech text-xs text-[var(--color-revenue)] font-bold">
                        ACTIVE ACCOUNT
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-[var(--color-ink)]">
                      {cust.company}
                    </h3>
                    <p className="font-mono-tech text-xs text-[var(--color-ink-secondary)]">
                      Primary Contact: {cust.contactName} ({cust.email} ·{" "}
                      {cust.phone})
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => {
                        setNewQuoteForm((prev) => ({
                          ...prev,
                          recipientCompany: cust.company,
                          recipientName: cust.contactName,
                          recipientEmail: cust.email,
                        }));
                        setShowNewQuoteModal(true);
                      }}
                      className="font-mono-tech text-xs text-[var(--color-revenue)] border border-[var(--color-rule-strong)] bg-[var(--color-accent-soft)] rounded-lg px-4 py-2 hover:bg-[var(--color-accent-soft)] uppercase font-bold transition-colors"
                    >
                      + GENERATE QUOTE
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: QUOTATIONS */}
        {activeTab === "quotations" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="font-mono-tech text-xs text-[var(--color-ink-tertiary)] uppercase font-semibold">
                COMMERCIAL PROPOSALS & ESTIMATES
              </span>

              <button
                onClick={() => setShowNewQuoteModal(true)}
                className="inline-flex items-center gap-2 font-mono-tech text-xs tracking-wider text-[var(--color-revenue)] border border-[var(--color-rule-strong)] bg-[var(--color-canvas)] px-3.5 py-2 rounded-lg hover:bg-[var(--color-accent-soft)] transition-colors uppercase font-bold shadow-2xs"
              >
                <Plus size={14} />
                <span>NEW QUOTATION</span>
              </button>
            </div>

            <div className="rounded-xl border border-[var(--color-rule)] bg-[var(--color-canvas)] divide-y divide-[var(--color-rule)] overflow-hidden shadow-2xs">
              {quotations.map((quote) => (
                <div
                  key={quote.id}
                  className="p-6 bg-[var(--color-canvas)] flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-[var(--color-canvas-subtle)] transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-3 font-mono-tech text-xs">
                      <span className="text-[var(--color-revenue)] font-bold">
                        {quote.quoteNumber}
                      </span>
                      <span className="text-[var(--color-ink-tertiary)] font-semibold uppercase bg-[var(--color-canvas-muted)] px-2 py-0.5 rounded text-[10px]">
                        {quote.status}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-[var(--color-ink)]">
                      {quote.recipientCompany}
                    </h3>
                    <p className="font-mono-tech text-xs text-[var(--color-ink-secondary)]">
                      Total Value:{" "}
                      <span className="font-bold text-[var(--color-ink)]">
                        {formatINR(quote.total)}
                      </span>{" "}
                      (Subtotal: {formatINR(quote.subtotal)} + Tax:{" "}
                      {formatINR(quote.taxAmount)})
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 font-mono-tech text-xs">
                    <button
                      onClick={() => setPreviewQuotation(quote)}
                      className="text-[var(--color-ink-secondary)] border border-[var(--color-rule-strong)] bg-[var(--color-canvas)] px-4 py-2 rounded-lg hover:bg-[var(--color-canvas-subtle)] uppercase font-semibold shadow-2xs"
                    >
                      PREVIEW SHEET
                    </button>

                    {quote.status !== "invoiced" && (
                      <button
                        onClick={() => handleConvertQuoteToInvoice(quote)}
                        className="text-white bg-[#1762d8] hover:bg-[#175ac7] px-4 py-2 rounded-lg uppercase font-bold transition-colors shadow-2xs"
                      >
                        CONVERT TO INVOICE →
                      </button>
                    )}
                    {quote.status === "invoiced" && (
                      <span className="text-[var(--color-growth)] bg-[var(--color-growth-light)] border border-[var(--color-rule)] font-bold px-3 py-1.5 rounded-lg">
                        INVOICED ✔
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: INVOICES */}
        {activeTab === "invoices" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="font-mono-tech text-xs text-[var(--color-ink-tertiary)] uppercase font-semibold">
                ACCOUNTS RECEIVABLES & INVOICING
              </span>

              <button
                onClick={() => {
                  if (invoices.length > 0) {
                    setPaymentForm((prev) => ({
                      ...prev,
                      invoiceNumber: invoices[0].invoiceNumber,
                      amount: invoices[0].balanceDue || 100000,
                    }));
                  }
                  setShowRecordPaymentModal(true);
                }}
                className="inline-flex items-center gap-2 font-mono-tech text-xs tracking-wider text-[var(--color-growth)] border border-[var(--color-growth)] bg-[var(--color-growth-light)] px-3.5 py-2 rounded-lg hover:bg-[var(--color-growth-light)] transition-colors uppercase font-bold shadow-2xs"
              >
                <Receipt size={14} />
                <span>RECORD PAYMENT</span>
              </button>
            </div>

            <div className="rounded-xl border border-[var(--color-rule)] bg-[var(--color-canvas)] divide-y divide-[var(--color-rule)] overflow-hidden shadow-2xs">
              {invoices.map((inv) => (
                <div
                  key={inv.id}
                  className="p-6 bg-[var(--color-canvas)] flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-[var(--color-canvas-subtle)] transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-3 font-mono-tech text-xs">
                      <span className="text-[var(--color-ink)] font-bold">
                        {inv.invoiceNumber}
                      </span>
                      <span
                        className={`font-semibold px-2 py-0.5 rounded text-[10px] uppercase ${
                          inv.status === "paid"
                            ? "bg-[var(--color-growth-light)] text-[var(--color-growth)] border border-[var(--color-rule)]"
                            : inv.status === "partially_paid"
                            ? "bg-[var(--color-canvas-muted)] text-[var(--color-ink-secondary)] border border-[var(--color-rule)]"
                            : "bg-[var(--color-canvas-muted)] text-[var(--color-ink-secondary)]"
                        }`}
                      >
                        {inv.status}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-[var(--color-ink)]">
                      {inv.company}
                    </h3>
                    <p className="font-mono-tech text-xs text-[var(--color-ink-secondary)]">
                      Total: {formatINR(inv.total)} · Paid:{" "}
                      <span className="text-[var(--color-growth)] font-semibold">
                        {formatINR(inv.paidAmount)}
                      </span>{" "}
                      · Balance Due:{" "}
                      <span className="text-rose-600 font-semibold">
                        {formatINR(inv.balanceDue)}
                      </span>
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 font-mono-tech text-xs">
                    <span className="text-[var(--color-ink-tertiary)] font-medium">
                      DUE: {inv.dueDate}
                    </span>
                    {inv.balanceDue > 0 && (
                      <button
                        onClick={() => {
                          setPaymentForm({
                            invoiceNumber: inv.invoiceNumber,
                            amount: inv.balanceDue,
                            method: "Bank Wire / NEFT",
                            reference: `UTR-${Date.now().toString().slice(-6)}`,
                          });
                          setShowRecordPaymentModal(true);
                        }}
                        className="text-white bg-[#08794f] hover:bg-[#066744] px-3.5 py-1.5 rounded-lg uppercase font-bold shadow-2xs transition-colors"
                      >
                        RECORD RECEIPT
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 6: PAYMENTS */}
        {activeTab === "payments" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="font-mono-tech text-xs text-[var(--color-ink-tertiary)] uppercase font-semibold">
                SETTLEMENT & WIRE RECEIPT LEDGER
              </span>

              <button
                onClick={() => setShowRecordPaymentModal(true)}
                className="inline-flex items-center gap-2 font-mono-tech text-xs tracking-wider text-[var(--color-growth)] border border-[var(--color-growth)] bg-[var(--color-growth-light)] px-3.5 py-2 rounded-lg hover:bg-[var(--color-growth-light)] transition-colors uppercase font-bold shadow-2xs"
              >
                <Plus size={14} />
                <span>RECORD RECEIPT</span>
              </button>
            </div>

            <div className="rounded-xl border border-[var(--color-rule)] bg-[var(--color-canvas)] divide-y divide-[var(--color-rule)] overflow-hidden shadow-2xs">
              {payments.map((p) => (
                <div
                  key={p.id}
                  className="p-5 bg-[var(--color-canvas)] flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono-tech text-xs hover:bg-[var(--color-canvas-subtle)] transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="text-[var(--color-growth)] font-bold text-sm">
                        +{formatINR(p.amount)}
                      </span>
                      <span className="text-[var(--color-ink-tertiary)] bg-[var(--color-canvas-muted)] px-2 py-0.5 rounded text-[11px] font-medium">
                        {p.method}
                      </span>
                    </div>
                    <div className="text-[var(--color-ink)] font-bold">{p.company}</div>
                    <div className="text-[var(--color-ink-tertiary)] text-[11px]">
                      Invoice: {p.invoiceNumber} · Ref: {p.reference}
                    </div>
                  </div>

                  <div className="text-[var(--color-ink-tertiary)] text-[11px] font-medium">
                    {new Date(p.recordedAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 7: ACTIVITY TIMELINE */}
        {activeTab === "timeline" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="font-mono-tech text-xs text-[var(--color-ink-tertiary)] uppercase font-semibold">
                Activity history
              </span>
            </div>

            <div className="relative border-l border-[var(--color-rule)] ml-4 pl-6 space-y-6">
              {activities.map((act) => (
                <div key={act.id} className="relative">
                  <div className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-[#1762d8] border border-[var(--color-canvas)] shadow-xs" />
                  <div className="font-mono-tech text-[11px] text-[var(--color-ink-tertiary)]">
                    {new Date(act.timestamp).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} {"//"} [
                    <span className="font-bold text-[var(--color-revenue)] uppercase">
                      {act.category}
                    </span>
                    ]
                  </div>
                  <h4 className="font-display text-sm font-bold text-[var(--color-ink)] mt-0.5">
                    {act.title}
                  </h4>
                  <p className="text-xs text-[var(--color-ink-secondary)] font-normal mt-0.5">
                    {act.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* MODAL 1: NEW LEAD */}
      <AnimatePresence>
        {showNewLeadModal && (
          <DemoDialog title="Create a demo lead" onClose={() => setShowNewLeadModal(false)}>
              <div className="flex items-center justify-between border-b border-[var(--color-rule)] pb-4">
                <span className="font-mono-tech text-xs text-[var(--color-revenue)] uppercase font-bold">
                  CREATE DEMO LEAD
                </span>
                <button
                  aria-label="Close dialog"
                  onClick={() => setShowNewLeadModal(false)}
                  className="text-[var(--color-ink-tertiary)] hover:text-[var(--color-ink-secondary)]"
                >
                  <X size={18} />
                </button>
              </div>

              <form onSubmit={handleCreateLead} className="space-y-4 font-mono-tech text-xs">
                <div>
                  <label htmlFor="demo-field-1" className="block text-[var(--color-ink-secondary)] uppercase mb-1 font-semibold">
                    Company Name *
                  </label>
                  <input id="demo-field-1"
                    type="text"
                    required
                    value={newLeadForm.company}
                    onChange={(e) =>
                      setNewLeadForm({ ...newLeadForm, company: e.target.value })
                    }
                    placeholder="e.g. Zenith Autonomous Labs"
                    className="w-full bg-[var(--color-canvas-subtle)] border border-[var(--color-rule)] rounded-lg px-3 py-2 text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-accent)] focus:bg-[var(--color-canvas)]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="demo-field-2" className="block text-[var(--color-ink-secondary)] uppercase mb-1 font-semibold">
                      Contact Name *
                    </label>
                  <input id="demo-field-2"
                      type="text"
                      required
                      value={newLeadForm.contactName}
                      onChange={(e) =>
                        setNewLeadForm({
                          ...newLeadForm,
                          contactName: e.target.value,
                        })
                      }
                      placeholder="e.g. Marcus Reid"
                      className="w-full bg-[var(--color-canvas-subtle)] border border-[var(--color-rule)] rounded-lg px-3 py-2 text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-accent)] focus:bg-[var(--color-canvas)]"
                    />
                  </div>
                  <div>
                    <label htmlFor="demo-field-3" className="block text-[var(--color-ink-secondary)] uppercase mb-1 font-semibold">
                      Expected Value (₹) *
                    </label>
                  <input id="demo-field-3"
                      type="number" min="0" step="0.01"
                      required
                      value={newLeadForm.value}
                      onChange={(e) =>
                        setNewLeadForm({
                          ...newLeadForm,
                          value: Number(e.target.value),
                        })
                      }
                      className="w-full bg-[var(--color-canvas-subtle)] border border-[var(--color-rule)] rounded-lg px-3 py-2 text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-accent)] focus:bg-[var(--color-canvas)]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="demo-field-4" className="block text-[var(--color-ink-secondary)] uppercase mb-1 font-semibold">
                      Stage
                    </label>
                  <select id="demo-field-4"
                      value={newLeadForm.stage}
                      onChange={(e) =>
                        setNewLeadForm({
                          ...newLeadForm,
                          stage: e.target.value as DemoLead["stage"],
                        })
                      }
                      className="w-full bg-[var(--color-canvas-subtle)] border border-[var(--color-rule)] rounded-lg px-3 py-2 text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-accent)] focus:bg-[var(--color-canvas)]"
                    >
                      <option value="new">New Lead</option>
                      <option value="qualified">Qualified</option>
                      <option value="proposal">Proposal Sent</option>
                      <option value="negotiation">Negotiation</option>
                      <option value="won">Closed / Won</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="demo-field-5" className="block text-[var(--color-ink-secondary)] uppercase mb-1 font-semibold">
                      Source
                    </label>
                  <input id="demo-field-5"
                      type="text"
                      value={newLeadForm.source}
                      onChange={(e) =>
                        setNewLeadForm({ ...newLeadForm, source: e.target.value })
                      }
                      className="w-full bg-[var(--color-canvas-subtle)] border border-[var(--color-rule)] rounded-lg px-3 py-2 text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-accent)] focus:bg-[var(--color-canvas)]"
                    />
                  </div>
                </div>

                <div className="pt-4 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowNewLeadModal(false)}
                    className="px-4 py-2 border border-[var(--color-rule-strong)] rounded-lg text-[var(--color-ink-secondary)] hover:text-[var(--color-ink)] uppercase font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-[#1762d8] hover:bg-[#175ac7] text-white rounded-lg font-bold uppercase transition-colors"
                  >
                    Create Lead
                  </button>
                </div>
              </form>
            </DemoDialog>
        )}
      </AnimatePresence>

      {/* MODAL 2: SCHEDULE FOLLOW-UP */}
      <AnimatePresence>
        {showNewFollowUpModal && (
          <DemoDialog title="Schedule a follow-up" onClose={() => setShowNewFollowUpModal(false)}>
              <div className="flex items-center justify-between border-b border-[var(--color-rule)] pb-4">
                <span className="font-mono-tech text-xs text-[var(--color-revenue)] uppercase font-bold">
                  SCHEDULE FOLLOW-UP TASK
                </span>
                <button
                  aria-label="Close dialog"
                  onClick={() => setShowNewFollowUpModal(false)}
                  className="text-[var(--color-ink-tertiary)] hover:text-[var(--color-ink-secondary)]"
                >
                  <X size={18} />
                </button>
              </div>

              <form onSubmit={handleCreateFollowUp} className="space-y-4 font-mono-tech text-xs">
                <div>
                  <label htmlFor="demo-field-6" className="block text-[var(--color-ink-secondary)] uppercase mb-1 font-semibold">
                    Target Lead / Company *
                  </label>
                  <select id="demo-field-6"
                    value={newFollowUpForm.leadId}
                    onChange={(e) =>
                      setNewFollowUpForm({
                        ...newFollowUpForm,
                        leadId: e.target.value,
                      })
                    }
                    required
                    className="w-full bg-[var(--color-canvas-subtle)] border border-[var(--color-rule)] rounded-lg px-3 py-2 text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-accent)] focus:bg-[var(--color-canvas)]"
                  >
                    <option value="">Select Opportunity...</option>
                    {leads.map((l) => (
                      <option key={l.id} value={l.id}>
                        {l.company} ({l.contactName})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="demo-field-7" className="block text-[var(--color-ink-secondary)] uppercase mb-1 font-semibold">
                      Activity Type
                    </label>
                  <select id="demo-field-7"
                      value={newFollowUpForm.type}
                      onChange={(e) =>
                        setNewFollowUpForm({
                          ...newFollowUpForm,
                          type: e.target.value as DemoFollowUp["type"],
                        })
                      }
                      className="w-full bg-[var(--color-canvas-subtle)] border border-[var(--color-rule)] rounded-lg px-3 py-2 text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-accent)] focus:bg-[var(--color-canvas)]"
                    >
                      <option value="meeting">Executive Meeting</option>
                      <option value="call">Discovery Call</option>
                      <option value="demo">Platform Demo</option>
                      <option value="email">Email Touchpoint</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="demo-field-8" className="block text-[var(--color-ink-secondary)] uppercase mb-1 font-semibold">
                      Due Date
                    </label>
                  <input id="demo-field-8"
                      type="date"
                      required
                      value={newFollowUpForm.dueDate}
                      onChange={(e) =>
                        setNewFollowUpForm({
                          ...newFollowUpForm,
                          dueDate: e.target.value,
                        })
                      }
                      className="w-full bg-[var(--color-canvas-subtle)] border border-[var(--color-rule)] rounded-lg px-3 py-2 text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-accent)] focus:bg-[var(--color-canvas)]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="demo-field-9" className="block text-[var(--color-ink-secondary)] uppercase mb-1 font-semibold">
                    Task Title *
                  </label>
                  <input id="demo-field-9"
                    type="text"
                    required
                    value={newFollowUpForm.title}
                    onChange={(e) =>
                      setNewFollowUpForm({
                        ...newFollowUpForm,
                        title: e.target.value,
                      })
                    }
                    placeholder="e.g. Milestone review & scope discussion"
                    className="w-full bg-[var(--color-canvas-subtle)] border border-[var(--color-rule)] rounded-lg px-3 py-2 text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-accent)] focus:bg-[var(--color-canvas)]"
                  />
                </div>

                <div className="pt-4 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowNewFollowUpModal(false)}
                    className="px-4 py-2 border border-[var(--color-rule-strong)] rounded-lg text-[var(--color-ink-secondary)] hover:text-[var(--color-ink)] uppercase font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-[#1762d8] hover:bg-[#175ac7] text-white rounded-lg font-bold uppercase transition-colors"
                  >
                    Save Follow-up
                  </button>
                </div>
              </form>
            </DemoDialog>
        )}
      </AnimatePresence>

      {/* MODAL 3: NEW QUOTATION */}
      <AnimatePresence>
        {showNewQuoteModal && (
          <DemoDialog title="Create a quotation" onClose={() => setShowNewQuoteModal(false)}>
              <div className="flex items-center justify-between border-b border-[var(--color-rule)] pb-4">
                <span className="font-mono-tech text-xs text-[var(--color-revenue)] uppercase font-bold">
                  BUILD SMART QUOTATION
                </span>
                <button
                  aria-label="Close dialog"
                  onClick={() => setShowNewQuoteModal(false)}
                  className="text-[var(--color-ink-tertiary)] hover:text-[var(--color-ink-secondary)]"
                >
                  <X size={18} />
                </button>
              </div>

              <form onSubmit={handleCreateQuotation} className="space-y-4 font-mono-tech text-xs">
                <div>
                  <label htmlFor="demo-field-10" className="block text-[var(--color-ink-secondary)] uppercase mb-1 font-semibold">
                    Recipient Company *
                  </label>
                  <input id="demo-field-10"
                    type="text"
                    required
                    value={newQuoteForm.recipientCompany}
                    onChange={(e) =>
                      setNewQuoteForm({
                        ...newQuoteForm,
                        recipientCompany: e.target.value,
                      })
                    }
                    placeholder="e.g. GreenNest Cafe"
                    className="w-full bg-[var(--color-canvas-subtle)] border border-[var(--color-rule)] rounded-lg px-3 py-2 text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-accent)] focus:bg-[var(--color-canvas)]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="demo-field-11" className="block text-[var(--color-ink-secondary)] uppercase mb-1 font-semibold">
                      Attention / Name
                    </label>
                  <input id="demo-field-11"
                      type="text"
                      value={newQuoteForm.recipientName}
                      onChange={(e) =>
                        setNewQuoteForm({
                          ...newQuoteForm,
                          recipientName: e.target.value,
                        })
                      }
                      placeholder="e.g. Vikram Malhotra"
                      className="w-full bg-[var(--color-canvas-subtle)] border border-[var(--color-rule)] rounded-lg px-3 py-2 text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-accent)] focus:bg-[var(--color-canvas)]"
                    />
                  </div>

                  <div>
                    <label htmlFor="demo-field-12" className="block text-[var(--color-ink-secondary)] uppercase mb-1 font-semibold">
                      Email
                    </label>
                  <input id="demo-field-12"
                      type="email"
                      value={newQuoteForm.recipientEmail}
                      onChange={(e) =>
                        setNewQuoteForm({
                          ...newQuoteForm,
                          recipientEmail: e.target.value,
                        })
                      }
                      placeholder="e.g. contact@greennest.in"
                      className="w-full bg-[var(--color-canvas-subtle)] border border-[var(--color-rule)] rounded-lg px-3 py-2 text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-accent)] focus:bg-[var(--color-canvas)]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="demo-field-13" className="block text-[var(--color-ink-secondary)] uppercase mb-1 font-semibold">
                    Primary Scope / Line Item *
                  </label>
                  <input id="demo-field-13"
                    type="text"
                    required
                    value={newQuoteForm.itemDesc}
                    onChange={(e) =>
                      setNewQuoteForm({
                        ...newQuoteForm,
                        itemDesc: e.target.value,
                      })
                    }
                    className="w-full bg-[var(--color-canvas-subtle)] border border-[var(--color-rule)] rounded-lg px-3 py-2 text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-accent)] focus:bg-[var(--color-canvas)]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="demo-field-14" className="block text-[var(--color-ink-secondary)] uppercase mb-1 font-semibold">
                      Unit Price (₹) *
                    </label>
                  <input id="demo-field-14"
                      type="number" min="0" step="0.01"
                      required
                      value={newQuoteForm.unitPrice}
                      onChange={(e) =>
                        setNewQuoteForm({
                          ...newQuoteForm,
                          unitPrice: Number(e.target.value),
                        })
                      }
                      className="w-full bg-[var(--color-canvas-subtle)] border border-[var(--color-rule)] rounded-lg px-3 py-2 text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-accent)] focus:bg-[var(--color-canvas)]"
                    />
                  </div>

                  <div>
                    <label htmlFor="demo-field-15" className="block text-[var(--color-ink-secondary)] uppercase mb-1 font-semibold">
                      Tax Rate (% GST)
                    </label>
                  <input id="demo-field-15"
                      type="number" min="0" step="0.01"
                      value={newQuoteForm.taxRate}
                      onChange={(e) =>
                        setNewQuoteForm({
                          ...newQuoteForm,
                          taxRate: Number(e.target.value),
                        })
                      }
                      className="w-full bg-[var(--color-canvas-subtle)] border border-[var(--color-rule)] rounded-lg px-3 py-2 text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-accent)] focus:bg-[var(--color-canvas)]"
                    />
                  </div>
                </div>

                <div className="border-t border-[var(--color-rule)] pt-3 text-right">
                  <span className="text-[var(--color-ink-tertiary)]">ESTIMATED TOTAL: </span>
                  <span className="text-[var(--color-revenue)] font-bold text-sm">
                    {formatINR(
                      newQuoteForm.unitPrice *
                        newQuoteForm.quantity *
                        (1 + newQuoteForm.taxRate / 100)
                    )}
                  </span>
                </div>

                <div className="pt-4 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowNewQuoteModal(false)}
                    className="px-4 py-2 border border-[var(--color-rule-strong)] rounded-lg text-[var(--color-ink-secondary)] hover:text-[var(--color-ink)] uppercase font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-[#1762d8] hover:bg-[#175ac7] text-white rounded-lg font-bold uppercase transition-colors"
                  >
                    Generate Quote
                  </button>
                </div>
              </form>
            </DemoDialog>
        )}
      </AnimatePresence>

      {/* MODAL 4: RECORD PAYMENT */}
      <AnimatePresence>
        {showRecordPaymentModal && (
          <DemoDialog title="Record a demo payment" onClose={() => setShowRecordPaymentModal(false)}>
              <div className="flex items-center justify-between border-b border-[var(--color-rule)] pb-4">
                <span className="font-mono-tech text-xs text-[var(--color-growth)] uppercase font-bold">
                  RECORD PAYMENT SETTLEMENT
                </span>
                <button
                  aria-label="Close dialog"
                  onClick={() => setShowRecordPaymentModal(false)}
                  className="text-[var(--color-ink-tertiary)] hover:text-[var(--color-ink-secondary)]"
                >
                  <X size={18} />
                </button>
              </div>

              <form onSubmit={handleRecordPayment} className="space-y-4 font-mono-tech text-xs">
                <div>
                  <label htmlFor="demo-field-16" className="block text-[var(--color-ink-secondary)] uppercase mb-1 font-semibold">
                    Target Invoice *
                  </label>
                  <select id="demo-field-16"
                    value={paymentForm.invoiceNumber}
                    onChange={(e) =>
                      setPaymentForm({
                        ...paymentForm,
                        invoiceNumber: e.target.value,
                      })
                    }
                    required
                    className="w-full bg-[var(--color-canvas-subtle)] border border-[var(--color-rule)] rounded-lg px-3 py-2 text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-accent)] focus:bg-[var(--color-canvas)]"
                  >
                    <option value="">Select Invoice...</option>
                    {invoices.map((inv) => (
                      <option key={inv.id} value={inv.invoiceNumber}>
                        {inv.invoiceNumber} — {inv.company} (Balance:{" "}
                        {formatINR(inv.balanceDue)})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="demo-field-17" className="block text-[var(--color-ink-secondary)] uppercase mb-1 font-semibold">
                      Amount Received (₹) *
                    </label>
                  <input id="demo-field-17"
                      type="number" min="0.01" step="0.01"
                      max={invoices.find((invoice) => invoice.invoiceNumber === paymentForm.invoiceNumber)?.balanceDue}
                      required
                      value={paymentForm.amount}
                      onChange={(e) =>
                        setPaymentForm({
                          ...paymentForm,
                          amount: Number(e.target.value),
                        })
                      }
                      className="w-full bg-[var(--color-canvas-subtle)] border border-[var(--color-rule)] rounded-lg px-3 py-2 text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-accent)] focus:bg-[var(--color-canvas)]"
                    />
                  </div>

                  <div>
                    <label htmlFor="demo-field-18" className="block text-[var(--color-ink-secondary)] uppercase mb-1 font-semibold">
                      Payment Rail
                    </label>
                  <select id="demo-field-18"
                      value={paymentForm.method}
                      onChange={(e) =>
                        setPaymentForm({
                          ...paymentForm,
                          method: e.target.value as DemoPayment["method"],
                        })
                      }
                      className="w-full bg-[var(--color-canvas-subtle)] border border-[var(--color-rule)] rounded-lg px-3 py-2 text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-accent)] focus:bg-[var(--color-canvas)]"
                    >
                      <option value="Bank Wire / NEFT">Bank Wire / NEFT</option>
                      <option value="UPI / Instant">UPI / Instant</option>
                      <option value="Corporate Card">Corporate Card</option>
                      <option value="Direct Debit">Direct Debit</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="demo-field-19" className="block text-[var(--color-ink-secondary)] uppercase mb-1 font-semibold">
                    Bank Reference / UTR *
                  </label>
                  <input id="demo-field-19"
                    type="text"
                    required
                    value={paymentForm.reference}
                    onChange={(e) =>
                      setPaymentForm({
                        ...paymentForm,
                        reference: e.target.value,
                      })
                    }
                    placeholder="e.g. UTR-091248-HDFC"
                    className="w-full bg-[var(--color-canvas-subtle)] border border-[var(--color-rule)] rounded-lg px-3 py-2 text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-accent)] focus:bg-[var(--color-canvas)]"
                  />
                </div>

                <div className="pt-4 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowRecordPaymentModal(false)}
                    className="px-4 py-2 border border-[var(--color-rule-strong)] rounded-lg text-[var(--color-ink-secondary)] hover:text-[var(--color-ink)] uppercase font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-[#08794f] hover:bg-[#066744] text-white rounded-lg font-bold uppercase transition-colors"
                  >
                    Record Receipt
                  </button>
                </div>
              </form>
            </DemoDialog>
        )}
      </AnimatePresence>

      {/* MODAL 5: QUOTATION PREVIEW SHEET */}
      <AnimatePresence>
        {previewQuotation && (
          <DemoDialog title="Preview quotation" onClose={() => setPreviewQuotation(null)} wide>
              <div className="flex items-center justify-between border-b border-[var(--color-rule)] pb-4">
                <span className="font-mono-tech text-xs text-[var(--color-revenue)] uppercase font-bold">
                  QUOTATION PREVIEW // {previewQuotation.quoteNumber}
                </span>
                <button
                  aria-label="Close dialog"
                  onClick={() => setPreviewQuotation(null)}
                  className="text-[var(--color-ink-tertiary)] hover:text-[var(--color-ink-secondary)]"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Printable-style Preview Document */}
              <div className="rounded-xl border border-[var(--color-rule)] bg-[var(--color-canvas-subtle)] p-6 sm:p-8 space-y-6 font-mono-tech text-xs">
                <div className="flex justify-between items-start border-b border-[var(--color-rule)] pb-6">
                  <div>
                    <div className="font-display text-2xl font-bold tracking-wider text-[var(--color-ink)]">UrbanSpace Interiors</div>
                    <div className="text-[11px] text-[var(--color-ink-tertiary)] mt-1">
                      Fictional business · Demonstration only
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[var(--color-revenue)] font-bold">
                      {previewQuotation.quoteNumber}
                    </div>
                    <div className="text-[var(--color-ink-tertiary)]">
                      {new Date(previewQuotation.createdAt).toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata" })}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <span className="text-[var(--color-ink-tertiary)] block mb-1 font-semibold">
                      PROPOSAL PREPARED FOR:
                    </span>
                    <div className="text-[var(--color-ink)] font-bold">
                      {previewQuotation.recipientCompany}
                    </div>
                    <div className="text-[var(--color-ink-secondary)]">
                      {previewQuotation.recipientName}
                    </div>
                    <div className="text-[var(--color-ink-tertiary)]">
                      {previewQuotation.recipientEmail}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[var(--color-ink-tertiary)] block mb-1 font-semibold">
                      CURRENCY / TERMS:
                    </span>
                    <div className="text-[var(--color-ink)] font-bold">INR (₹)</div>
                    <div className="text-[var(--color-ink-secondary)]">
                      Net 14 Days from Invoice Date
                    </div>
                  </div>
                </div>

                <table className="w-full text-left border-t border-b border-[var(--color-rule)] py-2">
                  <thead>
                    <tr className="text-[var(--color-ink-tertiary)] border-b border-[var(--color-rule)] font-semibold">
                      <th className="py-2">Description</th>
                      <th className="py-2 text-right">Qty</th>
                      <th className="py-2 text-right">Rate</th>
                      <th className="py-2 text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--color-rule)]">
                    {previewQuotation.items.map((item, i) => (
                      <tr key={i} className="text-[var(--color-ink)]">
                        <td className="py-3 pr-4">{item.description}</td>
                        <td className="py-3 text-right">{item.quantity}</td>
                        <td className="py-3 text-right">
                          {formatINR(item.unitPrice)}
                        </td>
                        <td className="py-3 text-right text-[var(--color-ink)] font-bold">
                          {formatINR(item.total)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="flex flex-col items-end space-y-1 text-xs">
                  <div>
                    <span className="text-[var(--color-ink-tertiary)] mr-4 font-semibold">
                      SUBTOTAL:
                    </span>
                    <span className="text-[var(--color-ink)]">
                      {formatINR(previewQuotation.subtotal)}
                    </span>
                  </div>
                  <div>
                    <span className="text-[var(--color-ink-tertiary)] mr-4 font-semibold">
                      TAX ({previewQuotation.taxRate}% GST):
                    </span>
                    <span className="text-[var(--color-ink)]">
                      {formatINR(previewQuotation.taxAmount)}
                    </span>
                  </div>
                  <div className="border-t border-[var(--color-rule)] pt-2 font-bold text-sm">
                    <span className="text-[var(--color-ink)] mr-4">TOTAL PAYABLE:</span>
                    <span className="text-[var(--color-revenue)]">
                      {formatINR(previewQuotation.total)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2 font-mono-tech text-xs">
                <button
                  aria-label="Close dialog"
                  onClick={() => setPreviewQuotation(null)}
                  className="px-4 py-2 border border-[var(--color-rule-strong)] rounded-lg text-[var(--color-ink-secondary)] hover:text-[var(--color-ink)] uppercase font-semibold"
                >
                  Close Preview
                </button>

                {previewQuotation.status !== "invoiced" && (
                  <button
                    onClick={() => {
                      handleConvertQuoteToInvoice(previewQuotation);
                      setPreviewQuotation(null);
                    }}
                    className="px-5 py-2.5 bg-[#1762d8] hover:bg-[#175ac7] text-white font-bold rounded-lg uppercase flex items-center gap-2 transition-colors shadow-sm"
                  >
                    <span>CONVERT TO INVOICE</span>
                    <ArrowRight size={14} />
                  </button>
                )}
              </div>
            </DemoDialog>
        )}
      </AnimatePresence>
    </div>
  );
}
