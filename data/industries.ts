export interface IndustrySolution {
  id: string;
  name: string;
  tagline: string;
  context: string;
  operationalProblems: string[];
  softwareSystems: string[];
  automationOpportunities: string[];
  productPossibilities: string[];
  keyArchitecture: string;
}

export const INDUSTRIES: IndustrySolution[] = [
  {
    id: "fintech",
    name: "FinTech & Banking",
    tagline: "High-throughput transaction backbones, regulatory audit trails, and automated settlement.",
    context: "Financial workflows need careful data integrity, access controls, reconciliation, and review of the requirements that apply to each market.",
    operationalProblems: [
      "Reconciliation discrepancies across payment gateways and ledger databases.",
      "Latency bottlenecks during peak trading or salary disbursement windows.",
      "Complex compliance reporting requirements across multi-jurisdiction frameworks.",
      "Vulnerability to sophisticated identity theft and synthetic fraud vectors.",
    ],
    softwareSystems: [
      "Double-entry immutable distributed ledger engines.",
      "Real-time fraud scoring systems utilizing low-latency neural classifiers.",
      "Automated multi-currency treasury and FX settlement platforms.",
      "Unified compliance and regulatory reporting automation dashboards.",
    ],
    automationOpportunities: [
      "Automated KYC document verification with OCR and biometric liveness checks.",
      "Automated dispute handling and chargeback processing workflows.",
      "Algorithmic credit risk scoring based on alternate transaction telemetry.",
    ],
    productPossibilities: [
      "Embedded finance modules for non-financial SaaS platforms.",
      "Enterprise multi-tier corporate card and expense management platforms.",
      "Cross-border supplier payment engines with programmatic escrow.",
    ],
    keyArchitecture: "High-reliability transactional ledgers with encrypted data persistence and automated audit logging.",
  },
  {
    id: "healthtech",
    name: "HealthTech & Life Sciences",
    tagline: "Secure clinical portals, telecare pipelines, and electronic health records.",
    context: "Healthcare software needs careful handling of sensitive data, appropriate integration standards, and clear workflows for people working under pressure.",
    operationalProblems: [
      "Fragmented diagnostic reports stored in unsearchable siloed hospital systems.",
      "High clinician burnout caused by cumbersome, click-heavy EHR software.",
      "Appointment scheduling mismatches causing idle specialist time and long patient queues.",
      "Strict data privacy regulations making cross-institutional data sharing difficult.",
    ],
    softwareSystems: [
      "FHIR-native clinical workflow platforms with real-time vitals telemetry.",
      "WebRTC-powered secure telehealth consultation suites with automated transcription.",
      "Multi-specialty patient queue, triage, and smart appointment scheduling engines.",
      "Centralized diagnostic image archiving (PACS) with DICOM web viewers.",
    ],
    automationOpportunities: [
      "Ambient AI clinical notes generation converting doctor-patient audio into structured EHR notes.",
      "Automated prescription refill and lab result follow-up messaging.",
      "Predictive bed-occupancy and emergency room surge planning.",
    ],
    productPossibilities: [
      "Specialized remote patient monitoring (RPM) platforms for chronic disease care.",
      "Clinical trial participant recruitment and decentralized compliance portals.",
      "AI-assisted diagnostic triage apps for frontline rural medical workers.",
    ],
    keyArchitecture: "Zero-trust enclave computing, FHIR standard REST APIs, WebRTC with end-to-end encryption.",
  },
  {
    id: "enterprise",
    name: "Enterprise & Global Orgs",
    tagline: "Large-scale internal platforms, multi-tenant infrastructure, and governance.",
    context: "Large enterprises struggle with monolithic legacy software, departmental silos, and bureaucratic friction that decelerates digital velocity.",
    operationalProblems: [
      "Siloed legacy ERPs requiring expensive manual middleware to communicate.",
      "Security compliance friction across thousands of globally distributed employees.",
      "Slow feature release cadences due to brittle monolithic codebases.",
      "Lack of real-time operational transparency for C-suite strategic decisions.",
    ],
    softwareSystems: [
      "Custom unified operational platforms orchestrating ERP, CRM, and supply chain.",
      "Enterprise developer portals with standardized internal APIs and RBAC governance.",
      "Global asset tracking and procurement management systems.",
      "Corporate intranet and collaborative intelligence knowledge hubs.",
    ],
    automationOpportunities: [
      "Automated vendor contract review and risk clause detection via LLMs.",
      "Intelligent employee onboarding and IT provisioning pipelines.",
      "Automated cross-department budget reconciliation and variance analysis.",
    ],
    productPossibilities: [
      "B2B customer self-service extranets reducing support headcount.",
      "Predictive operational maintenance dashboards for global facilities.",
      "Unified compliance management suites with audit logging.",
    ],
    keyArchitecture: "Microservices mesh with Istio/Kubernetes, OAuth2/OIDC SSO, and multi-cloud resilience.",
  },
  {
    id: "logistics",
    name: "Logistics & Supply Chain",
    tagline: "Real-time fleet telemetry, algorithmic load dispatch, and warehouse orchestration.",
    context: "Freight and supply chains operate on razor-thin margins where route efficiency, fuel economics, and real-time visibility make or break profitability.",
    operationalProblems: [
      "Empty backhauls and unoptimized vehicle capacity utilization.",
      "Blind spots in in-transit temperature, vibration, and location telemetry.",
      "Manual paperwork and bill-of-lading processing causing customs hold-ups.",
      "Inaccurate delivery ETA estimations degrading downstream customer trust.",
    ],
    softwareSystems: [
      "Real-time GPS/OBD-II vehicle telemetry ingestion engines.",
      "Algorithmic dynamic dispatch and multi-stop route optimization software.",
      "Warehouse management systems with barcode/RFID automated sorting.",
      "Digital freight brokerage marketplace connecting carriers with shippers.",
    ],
    automationOpportunities: [
      "Automated rate quoting based on historical lane spot market conditions.",
      "Computer-vision vehicle damage inspection upon yard check-in.",
      "Automated proof-of-delivery (PoD) reconciliation and driver payout triggers.",
    ],
    productPossibilities: [
      "White-label track-and-trace portals for high-value cold chain shipments.",
      "Carrier mobile companion apps with offline map caching and voice navigation.",
      "Carbon emissions calculation and compliance reporting platforms for cargo.",
    ],
    keyArchitecture: "MQTT/gRPC event streaming, Geo-spatial indexes (PostGIS/H3), Redis distributed locks.",
  },
  {
    id: "startups",
    name: "High-Growth Startups",
    tagline: "Zero-to-one product engineering, rapid MVP validation, and scaling architecture.",
    context: "Startups need exceptional engineering velocity without compromising foundational architecture, avoiding the trap of throwing away code when scaling.",
    operationalProblems: [
      "Runway burned on premature over-engineering or slow offshore developers.",
      "Fragile prototype code that collapses when user acquisition surges.",
      "Difficulty hiring senior full-stack talent in competitive markets.",
      "Lack of product instrumentation obscuring core cohort retention metrics.",
    ],
    softwareSystems: [
      "Scalable foundational web and mobile MVPs ready for initial 100k users.",
      "Complete analytics and instrumentation pipelines (PostHog, Segment, Mixpanel).",
      "Stripe billing, subscription tiers, and multi-tenant authorization engines.",
      "Self-service onboarding and product-led growth (PLG) viral loops.",
    ],
    automationOpportunities: [
      "Automated user onboarding sequences and milestone email triggers.",
      "AI-driven product walkthroughs that adapt dynamically to user skill levels.",
      "Automated error triage sending bug alerts with stack traces to engineers.",
    ],
    productPossibilities: [
      "Modern vertical SaaS applications disrupting outdated industry incumbents.",
      "Consumer mobile experiences with gamified retention loops.",
      "API-first developer products with interactive documentation.",
    ],
    keyArchitecture: "Next.js App Router, Supabase/Postgres, Tailwind CSS, Vercel/AWS serverless edge.",
  },
  {
    id: "real-estate",
    name: "Real Estate & PropTech",
    tagline: "Asset management portals, virtual tour pipelines, and digital lease workflows.",
    context: "Property management and development require high-fidelity visual presentation paired with robust contract management and tenant lifecycle operations.",
    operationalProblems: [
      "Disjointed tenant communications and delayed maintenance tracking.",
      "Manual lease drafting, execution, and security deposit management.",
      "Fragmented utility billing and sub-metering reconciliation across portfolios.",
      "Low lead conversion on static, uninspiring 2D property listing portals.",
    ],
    softwareSystems: [
      "Tenant and landlord mobile portals with integrated rent collection.",
      "Commercial real estate portfolio analytics and valuation engines.",
      "Interactive 3D building floorplan and space-planning visualizers.",
      "Smart facility management platforms with IoT HVAC and access control.",
    ],
    automationOpportunities: [
      "Automated lease renewal reminders and programmatic rent escalations.",
      "AI conversational agents qualifying prospective buyers and scheduling tours.",
      "Automated maintenance ticket dispatch based on vendor trade and proximity.",
    ],
    productPossibilities: [
      "Fractional real estate investment and tokenized asset management platforms.",
      "Digital construction project tracking platforms for developers and banks.",
      "Smart-building energy optimization dashboards tracking ESG benchmarks.",
    ],
    keyArchitecture: "Three.js 3D rendering, Stripe/Razorpay automated ACH, Spatial database queries.",
  },
  {
    id: "retail",
    name: "Retail & Modern Commerce",
    tagline: "Sub-second headless storefronts, omnichannel inventory, and personalized engines.",
    context: "Modern commerce is won on millisecond page speeds, unified inventory across physical and digital storefronts, and contextual customer experiences.",
    operationalProblems: [
      "Sluggish monolithic e-commerce platforms resulting in high cart abandonment.",
      "Inventory desynchronization between warehouse, retail stores, and online sites.",
      "Generic product recommendations leading to low average order value (AOV).",
      "Inability to rapidly spin up international localized storefronts.",
    ],
    softwareSystems: [
      "Headless e-commerce web applications with performance-optimized global edge delivery.",
      "Unified inventory synchronization engine connecting ERP, POS, and online carts.",
      "Custom B2B wholesale portals with tiered price books and net-term invoicing.",
      "Dynamic promotion and discount rule engines with instant basket validation.",
    ],
    automationOpportunities: [
      "Predictive reorder suggestions for subscription and replenishment goods.",
      "Dynamic price optimization responding to competitor catalog shifts.",
      "Automated abandoned-cart recovery sequences with personalized incentives.",
    ],
    productPossibilities: [
      "Curated luxury commerce destinations with immersive visual storytelling.",
      "Omnichannel click-and-collect mobile apps for multi-location brands.",
      "Live video commerce shopping platforms with instant checkout overlay.",
    ],
    keyArchitecture: "Next.js ISR/SSR, Shopify Storefront API / MedusaJS, Algolia search, Edge CDN caching.",
  },
  {
    id: "msme",
    name: "MSMEs & Growing Businesses",
    tagline: "Digital operating systems, order processing, and accounting integration.",
    context: "Growing businesses need institutional-grade technology without the million-dollar price tag of legacy enterprise software.",
    operationalProblems: [
      "Over-reliance on WhatsApp messages and physical registers for customer orders.",
      "Cash-flow visibility gaps due to delayed invoicing and payment collection.",
      "Inability to scale order volume without linearly increasing administrative staff.",
      "Difficulty competing with tech-enabled modern competitors.",
    ],
    softwareSystems: [
      "Custom business operating systems centralizing orders, customers, and inventory.",
      "Billing workflows, configurable tax calculations, and payment link integrations.",
      "Customer booking and appointment management portals.",
      "Mobile-friendly field-staff tracking and job completion apps.",
    ],
    automationOpportunities: [
      "Automated payment reminders via SMS/WhatsApp with one-click payment links.",
      "Automated low-stock inventory alerts and supplier reorder drafting.",
      "Automated daily sales and expense summary reports sent to business owners.",
    ],
    productPossibilities: [
      "Custom branded customer-facing order portals.",
      "Digital service delivery platforms replacing paper-based contracts.",
      "Loyalty and recurring customer engagement engines.",
    ],
    keyArchitecture: "Lightweight modular web applications, PostgreSQL, Cloudflare edge, secure payment webhooks.",
  },
];
