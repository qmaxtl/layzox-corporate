import React from "react";

interface ProductBrowserMockupProps {
  title?: string;
  url?: string;
  badge?: string;
  type?: "businessflow" | "telemetry" | "rag" | "cloud" | "commerce" | "health";
  variant?: "businessflow" | "telemetry" | "rag" | "cloud" | "commerce" | "health";
  className?: string;
}

export const ProductBrowserMockup: React.FC<ProductBrowserMockupProps> = ({
  title = "BusinessFlow — Sample interface",
  url = "layzox.com/demo/businessflow",
  badge = "Illustrative interface",
  type,
  variant,
  className = "",
}) => {
  const activeType = variant || type || "businessflow";
  return (
    <div
      className={`w-full rounded-2xl border border-slate-200/90 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.06)] overflow-hidden transition-all duration-500 ${className}`}
    >
      {/* Browser Chrome Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/80 bg-[#F8FAFC] px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#EF4444]/80" />
          <span className="h-3 w-3 rounded-full bg-[#F59E0B]/80" />
          <span className="h-3 w-3 rounded-full bg-[#10B981]/80" />
          <span className="ml-3 font-mono-tech text-[11px] text-slate-500 hidden sm:inline-block font-medium">
            {title}
          </span>
        </div>

        {/* URL Pill */}
        <div className="flex min-w-0 items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1 font-mono-tech text-[11px] text-slate-600 max-w-full sm:max-w-md truncate shadow-2xs">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
          <span className="truncate">{url}</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-mono-tech text-[10px] tracking-wider uppercase font-semibold text-blue-800 bg-blue-50 px-2.5 py-1 rounded border border-blue-200/70">
            {badge}
          </span>
        </div>
      </div>
      <p className="px-4 sm:px-8 py-3 text-xs leading-relaxed text-slate-600 bg-blue-50 border-b border-blue-100">
        Illustrative interface with fictional records and sample values.
      </p>

      {/* Main Software Interface Display */}
      {activeType === "businessflow" && (
        <div className="p-4 sm:p-8 bg-[#FAFBFD] space-y-6">
          {/* Top Operational Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-xl border border-slate-200/90 bg-white p-4 shadow-2xs">
              <span className="font-mono-tech text-[10px] tracking-wider text-slate-500 uppercase block mb-1">
                DEMO PIPELINE VALUE
              </span>
              <div className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
                ₹10.9L
              </div>
              <span className="font-mono-tech text-[11px] text-blue-600 font-medium">
                4 active opportunities
              </span>
            </div>

            <div className="rounded-xl border border-slate-200/90 bg-white p-4 shadow-2xs">
              <span className="font-mono-tech text-[10px] tracking-wider text-slate-500 uppercase block mb-1">
                BILLED INVOICES
              </span>
              <div className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
                ₹3.07L
              </div>
              <span className="font-mono-tech text-[11px] text-emerald-600 font-medium">
                Sample tax calculation
              </span>
            </div>

            <div className="rounded-xl border border-slate-200/90 bg-white p-4 shadow-2xs">
              <span className="font-mono-tech text-[10px] tracking-wider text-slate-500 uppercase block mb-1">
                SETTLED RECEIPTS
              </span>
              <div className="font-display text-2xl sm:text-3xl font-bold text-emerald-600">
                ₹1.5L
              </div>
              <span className="font-mono-tech text-[11px] text-slate-500">
                NEFT / UPI Wire
              </span>
            </div>

            <div className="rounded-xl border border-slate-200/90 bg-white p-4 shadow-2xs">
              <span className="font-mono-tech text-[10px] tracking-wider text-slate-500 uppercase block mb-1">
                DEMO WORKSPACE
              </span>
              <div className="font-display text-lg sm:text-xl font-bold text-blue-600 truncate">
                UrbanSpace Interiors
              </div>
              <span className="font-mono-tech text-[11px] text-slate-500">
                Fictional demo data
              </span>
            </div>
          </div>

          {/* Deal Pipeline Visual Rails */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
            {/* Stage 1 */}
            <div className="rounded-xl border border-slate-200/90 bg-white p-4 space-y-3">
              <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                <span className="font-mono-tech text-xs font-semibold text-blue-700">
                  NEW LEADS (1)
                </span>
                <span className="font-mono-tech text-[11px] text-slate-500 font-medium">
                  ₹4,50,000
                </span>
              </div>
              <div className="rounded-lg border border-slate-100 bg-slate-50/80 p-3 space-y-1">
                <div className="flex justify-between text-xs font-semibold text-slate-800">
                  <span>Aarav Retail</span>
                  <span className="text-blue-600">₹4,50,000</span>
                </div>
                <div className="text-[11px] text-slate-500 font-mono-tech">
                  Sunita Aarav · Web Enquiry
                </div>
              </div>
            </div>

            {/* Stage 2 */}
            <div className="rounded-xl border border-slate-200/90 bg-white p-4 space-y-3">
              <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                <span className="font-mono-tech text-xs font-semibold text-indigo-700">
                  QUALIFIED (1)
                </span>
                <span className="font-mono-tech text-[11px] text-slate-500 font-medium">
                  ₹1,20,000
                </span>
              </div>
              <div className="rounded-lg border border-slate-100 bg-slate-50/80 p-3 space-y-1">
                <div className="flex justify-between text-xs font-semibold text-slate-800">
                  <span>Sharma Home Studio</span>
                  <span className="text-indigo-600">₹1,20,000</span>
                </div>
                <div className="text-[11px] text-slate-500 font-mono-tech">
                  Rohit Sharma · Direct Refer
                </div>
              </div>
            </div>

            {/* Stage 3 */}
            <div className="rounded-xl border border-slate-200/90 bg-white p-4 space-y-3">
              <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                <span className="font-mono-tech text-xs font-semibold text-amber-700">
                  PROPOSAL SENT (1)
                </span>
                <span className="font-mono-tech text-[11px] text-slate-500 font-medium">
                  ₹1,80,000
                </span>
              </div>
              <div className="rounded-lg border border-slate-100 bg-slate-50/80 p-3 space-y-1">
                <div className="flex justify-between text-xs font-semibold text-slate-800">
                  <span>GreenNest Cafe</span>
                  <span className="text-amber-600">₹1,80,000</span>
                </div>
                <div className="text-[11px] text-slate-500 font-mono-tech">
                  QT-2026-084 · Priya Sharma
                </div>
              </div>
            </div>

            {/* Stage 4 */}
            <div className="rounded-xl border border-slate-200/90 bg-white p-4 space-y-3">
              <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                <span className="font-mono-tech text-xs font-semibold text-emerald-700">
                  CONVERTED (1)
                </span>
                <span className="font-mono-tech text-[11px] text-slate-500 font-medium">
                  ₹2,60,000
                </span>
              </div>
              <div className="rounded-lg border border-slate-100 bg-slate-50/80 p-3 space-y-1">
                <div className="flex justify-between text-xs font-semibold text-slate-800">
                  <span>Nova Coaching</span>
                  <span className="text-emerald-600">₹2,60,000</span>
                </div>
                <div className="text-[11px] text-slate-500 font-mono-tech">
                  Converted to Customer ✔
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeType === "telemetry" && (
        <div className="p-4 sm:p-8 bg-[#FAFBFD] space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-xl border border-slate-200/90 bg-white p-4 shadow-2xs">
              <span className="font-mono-tech text-[11px] text-slate-500 uppercase tracking-wider block mb-1">STREAM BENCHMARK</span>
              <div className="font-display text-2xl sm:text-3xl font-bold text-slate-900">High-Throughput</div>
              <span className="font-mono-tech text-[11px] text-emerald-600 font-medium">Demonstration Ingestion Pipeline</span>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-white p-4 shadow-2xs">
              <span className="font-mono-tech text-[11px] text-slate-500 uppercase tracking-wider block mb-1">BENCHMARK LATENCY</span>
              <div className="font-display text-2xl sm:text-3xl font-bold text-blue-600">Sample stream</div>
              <span className="font-mono-tech text-[11px] text-slate-500">Edge protocol decoders</span>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-white p-4 shadow-2xs">
              <span className="font-mono-tech text-[11px] text-slate-500 uppercase tracking-wider block mb-1">SIMULATED SENSORS</span>
              <div className="font-display text-2xl sm:text-3xl font-bold text-slate-900">Virtual Fleet</div>
              <span className="font-mono-tech text-[11px] text-emerald-600 font-medium">Synthetic telemetry load</span>
            </div>
          </div>
          <div className="rounded-xl border border-slate-200/90 bg-white p-4 sm:p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="font-mono-tech text-xs font-semibold text-slate-800">SPATIAL FLEET DISPATCH LAB</span>
              </div>
              <span className="font-mono-tech text-xs text-slate-500">Concept Lab Topology</span>
            </div>
            <div className="h-32 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center font-mono-tech text-xs text-slate-500">
              [WebGL Fleet Node Ingestion Topology: Virtual Asset Stream Demonstration]
            </div>
          </div>
        </div>
      )}

      {activeType === "rag" && (
        <div className="p-4 sm:p-8 bg-[#FAFBFD] space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-xl border border-slate-200/90 bg-white p-4 shadow-2xs">
              <span className="font-mono-tech text-[11px] text-slate-500 uppercase tracking-wider block mb-1">INDEXED DOCUMENTS</span>
              <div className="font-display text-2xl sm:text-3xl font-bold text-slate-900">Sample Corpus</div>
              <span className="font-mono-tech text-[11px] text-blue-600 font-medium">Hybrid Vector + Lexical</span>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-white p-4 shadow-2xs">
              <span className="font-mono-tech text-[11px] text-slate-500 uppercase tracking-wider block mb-1">FACTUAL GROUNDING</span>
              <div className="font-display text-2xl sm:text-3xl font-bold text-emerald-600">Cited Results</div>
              <span className="font-mono-tech text-[11px] text-slate-500">Mandatory source linkages</span>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-white p-4 shadow-2xs">
              <span className="font-mono-tech text-[11px] text-slate-500 uppercase tracking-wider block mb-1">SYNTHESIS SPEED</span>
              <div className="font-display text-2xl sm:text-3xl font-bold text-blue-600">Example query</div>
              <span className="font-mono-tech text-[11px] text-emerald-600 font-medium">Cross-encoder reranked</span>
            </div>
          </div>
          <div className="rounded-xl border border-slate-200/90 bg-white p-4 sm:p-6 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="font-mono-tech text-xs font-semibold text-slate-800">DUAL-PANE CITATION VERIFIER</span>
              <span className="font-mono-tech text-[11px] text-blue-600">Auditable Source Linked</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 font-mono-tech text-slate-700">
                <span className="text-blue-700 font-bold">[Citation #01]</span> A sample excerpt linked to a reference document.
              </div>
              <div className="p-3 bg-blue-50/50 rounded-lg border border-blue-100 font-mono-tech text-blue-900">
                <span className="text-emerald-700 font-bold">[Source Match]</span> Example Reference Document, p. 12, para 3.
              </div>
            </div>
          </div>
        </div>
      )}

      {activeType === "cloud" && (
        <div className="p-4 sm:p-8 bg-[#FAFBFD] space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-xl border border-slate-200/90 bg-white p-4 shadow-2xs">
              <span className="font-mono-tech text-[11px] text-slate-500 uppercase tracking-wider block mb-1">TENANT ISOLATION</span>
              <div className="font-display text-2xl sm:text-3xl font-bold text-slate-900">Dedicated Cells</div>
              <span className="font-mono-tech text-[11px] text-emerald-600 font-medium">Row-Level & Schema Isolation</span>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-white p-4 shadow-2xs">
              <span className="font-mono-tech text-[11px] text-slate-500 uppercase tracking-wider block mb-1">ARCHITECTURE</span>
              <div className="font-display text-2xl sm:text-3xl font-bold text-blue-600">Cell-Based</div>
              <span className="font-mono-tech text-[11px] text-slate-500">Illustrated cell boundaries</span>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-white p-4 shadow-2xs">
              <span className="font-mono-tech text-[11px] text-slate-500 uppercase tracking-wider block mb-1">DEPLOYMENT</span>
              <div className="font-display text-2xl sm:text-3xl font-bold text-slate-900">Automated</div>
              <span className="font-mono-tech text-[11px] text-emerald-600 font-medium">Declarative infrastructure</span>
            </div>
          </div>
        </div>
      )}

      {activeType === "health" && (
        <div className="p-4 sm:p-8 bg-[#FAFBFD] space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-xl border border-slate-200/90 bg-white p-4 shadow-2xs">
              <span className="font-mono-tech text-[11px] text-slate-500 uppercase tracking-wider block mb-1">TELEHEALTH PROTOCOL</span>
              <div className="font-display text-2xl sm:text-3xl font-bold text-slate-900">WebRTC Audio/Video</div>
              <span className="font-mono-tech text-[11px] text-emerald-600 font-medium">Encrypted consultations</span>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-white p-4 shadow-2xs">
              <span className="font-mono-tech text-[11px] text-slate-500 uppercase tracking-wider block mb-1">DEVICE SYNC</span>
              <div className="font-display text-2xl sm:text-3xl font-bold text-emerald-600">BLE Integration</div>
              <span className="font-mono-tech text-[11px] text-slate-500">Direct sensor sync</span>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-white p-4 shadow-2xs">
              <span className="font-mono-tech text-[11px] text-slate-500 uppercase tracking-wider block mb-1">DATA RESIDENCY</span>
              <div className="font-display text-2xl sm:text-3xl font-bold text-blue-600">Encrypted Vault</div>
              <span className="font-mono-tech text-[11px] text-slate-500">Secure record storage layout</span>
            </div>
          </div>
        </div>
      )}

      {activeType === "commerce" && (
        <div className="p-4 sm:p-8 bg-[#FAFBFD] space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-xl border border-slate-200/90 bg-white p-4 shadow-2xs">
              <span className="font-mono-tech text-[11px] text-slate-500 uppercase tracking-wider block mb-1">EDGE PERFORMANCE</span>
              <div className="font-display text-2xl sm:text-3xl font-bold text-slate-900">High-Speed</div>
              <span className="font-mono-tech text-[11px] text-emerald-600 font-medium">Edge SSR & Instant Cart</span>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-white p-4 shadow-2xs">
              <span className="font-mono-tech text-[11px] text-slate-500 uppercase tracking-wider block mb-1">PERFORMANCE TARGET</span>
              <div className="font-display text-2xl sm:text-3xl font-bold text-emerald-600">Optimized</div>
              <span className="font-mono-tech text-[11px] text-slate-500">Mobile-first performance target</span>
            </div>
            <div className="rounded-xl border border-slate-200/90 bg-white p-4 shadow-2xs">
              <span className="font-mono-tech text-[11px] text-slate-500 uppercase tracking-wider block mb-1">INTERACTIVITY</span>
              <div className="font-display text-2xl sm:text-3xl font-bold text-blue-600">3D WebGL</div>
              <span className="font-mono-tech text-[11px] text-emerald-600 font-medium">Real-time product inspector</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
