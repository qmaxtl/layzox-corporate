export interface Capability {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  summary: string;
  whatItSolves: string[];
  whatLayzoxBuilds: string[];
  typicalApplications: string[];
  technicalCapabilities: string[];
  deliveryApproach: {
    phase: string;
    description: string;
  }[];
  relatedWorkSlug: string;
}

export const CAPABILITIES: Capability[] = [
  {
    slug: "product-engineering",
    number: "01",
    title: "PRODUCT ENGINEERING",
    subtitle: "Web Applications · SaaS Platforms · Enterprise Systems",
    summary: "We design and build mission-critical digital products from ground-truth requirements to high-throughput scale. Engineered for product-led growth, resilience, and clean domain isolation.",
    whatItSolves: [
      "Fragmented product roadmaps and fragile technical foundations.",
      "Inability to scale past early-stage prototypes into enterprise concurrency.",
      "High technical debt causing engineering velocity stagnation.",
      "Poor user ergonomics leading to high customer churn.",
    ],
    whatLayzoxBuilds: [
      "Multi-tenant SaaS platforms with fine-grained RBAC and tenancy isolation.",
      "Enterprise software platforms replacing legacy manual workflows.",
      "High-performance customer portals and billing infrastructure.",
      "Internal mission-control dashboards and telemetry engines.",
      "High-density data visualization and analytics tools.",
    ],
    typicalApplications: [
      "B2B SaaS subscription platforms",
      "Financial workflow automation platforms",
      "Supply-chain orchestration software",
      "Healthcare patient & provider portals",
      "Developer tooling and APIs",
    ],
    technicalCapabilities: [
      "Next.js App Router, React 19, TypeScript strict mode",
      "Node.js, Go, Python modular web services",
      "PostgreSQL, Redis, and optimized query indexing",
      "Event-driven workflows and message queues",
      "GraphQL and RESTful contract-first API design",
    ],
    deliveryApproach: [
      { phase: "Architecture Discovery", description: "Domain-driven design workshops, entity relationship modeling, and non-functional requirements benchmarking." },
      { phase: "Prototyping & UX", description: "High-fidelity spatial design systems and clickable state validation with target users." },
      { phase: "Iterative Engineering", description: "Two-week test-driven sprint cycles with automated CI/CD deployments to staging." },
      { phase: "Production Hardening", description: "Load testing, chaos testing, security audits, and observability instrumentation." },
    ],
    relatedWorkSlug: "businessflow",
  },
  {
    slug: "artificial-intelligence",
    number: "02",
    title: "ARTIFICIAL INTELLIGENCE",
    subtitle: "Autonomous Agents · RAG Platforms · Generative Systems",
    summary: "AI workflows for document processing, knowledge retrieval, and operational tasks, with evaluation and human review designed into the process.",
    whatItSolves: [
      "Hallucinations and ungrounded outputs in generative language models.",
      "Data privacy concerns when exposing proprietary enterprise knowledge.",
      "High token costs and inference latency in production pipelines.",
      "Lack of structured tool calling and programmatic guardrails.",
    ],
    whatLayzoxBuilds: [
      "Multi-agent autonomous systems capable of end-to-end task execution.",
      "Retrieval-Augmented Generation (RAG) engines over unstructured document lakes.",
      "Domain-specific fine-tuning and quantization for private model deployment.",
      "Deterministic LLM pipelines with pydantic/zod schema enforcement.",
      "Automated document processing, entity extraction, and synthesis pipelines.",
    ],
    typicalApplications: [
      "Document review assistance with specialist oversight",
      "Intelligent customer support copilots with tool-calling capabilities",
      "Enterprise synthesis engines for clinical and financial records",
      "Predictive anomaly detection and automated remediation triggers",
      "Code analysis and automated architectural audit agents",
    ],
    technicalCapabilities: [
      "LangGraph, LlamaIndex, Semantic Kernel, DSPy",
      "OpenAI, Anthropic, Mistral, and local open-weights (Llama 3, DeepSeek, Qwen)",
      "Qdrant, pgvector, Milvus, Pinecone vector infrastructure",
      "Hybrid dense-sparse retrieval with reranking (Cohere / BGE)",
      "Continuous evaluation pipelines with Langfuse & Phoenix Tracing",
    ],
    deliveryApproach: [
      { phase: "Ground Truth Benchmarking", description: "Dataset curation, baseline evaluation metrics, and error boundary definition." },
      { phase: "Retrieval & Context Architecture", description: "Chunking strategy, embedding model selection, and hybrid search calibration." },
      { phase: "Agent Orchestration", description: "State machine engineering with guardrails, fallback triggers, and tool execution." },
      { phase: "Latency & Cost Optimization", description: "Semantic caching, prompt compression, and dynamic model routing." },
    ],
    relatedWorkSlug: "businessflow",
  },
  {
    slug: "web-experiences",
    number: "03",
    title: "WEB EXPERIENCES",
    subtitle: "Flagship Corporate Web · Interactive Systems · High-Performance Web",
    summary: "Bespoke digital flagships and interactive web platforms designed to position market leaders. Built with extreme typographic precision, fluid motion, and sub-second performance.",
    whatItSolves: [
      "Template-like corporate websites that fail to inspire institutional trust.",
      "Slow, sluggish page loads resulting in high bounce rates and poor SEO.",
      "Inability to communicate complex enterprise technology visually.",
      "Accessibility and cross-device display degradation.",
    ],
    whatLayzoxBuilds: [
      "Global corporate flagship websites for enterprise and technology leaders.",
      "Interactive 3D and WebGL product walkthroughs.",
      "Editorial storytelling platforms and interactive digital annual reports.",
      "Headless e-commerce and high-velocity conversion web systems.",
      "Interactive product configuration tools and ROI calculators.",
    ],
    typicalApplications: [
      "Enterprise technology corporate websites",
      "High-growth venture-backed company launches",
      "Global professional service digital headquarters",
      "Interactive technical product simulators",
      "Modern luxury and premium brand web systems",
    ],
    technicalCapabilities: [
      "Next.js App Router, React Server Components",
      "Three.js, WebGL, HTML5 Canvas 2D custom pipelines",
      "Tailwind CSS v4, Framer Motion, GSAP timeline choreography",
      "Edge caching, CDN asset streaming, image optimization",
      "Full WCAG 2.1 AA accessibility and international SEO metadata",
    ],
    deliveryApproach: [
      { phase: "Editorial & Art Direction", description: "Moodboards, typographic exploration, interactive wireframes, and creative vision." },
      { phase: "Creative Engineering", description: "Bespoke interactive WebGL/canvas systems, motion physics, and spatial layouts." },
      { phase: "Responsive Matrixing", description: "Pixel-perfect adaptation across ultra-wide, laptop, tablet, and mobile displays." },
      { phase: "Performance Tuning", description: "Measure Core Web Vitals on representative devices and improve loading, responsiveness, and layout stability against agreed targets." },
    ],
    relatedWorkSlug: "businessflow",
  },
  {
    slug: "mobile",
    number: "04",
    title: "MOBILE ENGINEERING",
    subtitle: "iOS · Android · Cross-Platform Systems · Field Ops",
    summary: "Native-grade mobile applications built for responsive tactile feedback, offline resilience, and secure hardware integrations. From enterprise field tooling to global consumer products.",
    whatItSolves: [
      "Sluggish hybrid apps that feel unnatural and battery-draining.",
      "Offline sync conflicts in intermittent connectivity environments.",
      "Platform-specific UI regressions and brittle push notification pipes.",
      "App Store rejection cycles and security compliance failures.",
    ],
    whatLayzoxBuilds: [
      "High-performance cross-platform applications with React Native & Flutter.",
      "Native Swift / SwiftUI iOS applications for premium tactile experiences.",
      "Enterprise field inspection, barcode scanning, and logistics apps.",
      "Secure biometric authentication and payment SDK integrations.",
      "Real-time geolocation tracking and background sync engines.",
    ],
    typicalApplications: [
      "Telehealth patient and clinician mobile apps",
      "Fintech wealth management and biometric transaction apps",
      "On-demand logistics, routing, and dispatch interfaces",
      "B2B mobile approvals and executive decision dashboards",
      "IoT hardware companion and device control applications",
    ],
    technicalCapabilities: [
      "React Native, Expo, SwiftUI, Kotlin",
      "WatermelonDB, SQLite with CRDT offline sync",
      "Bluetooth Low Energy (BLE), NFC, Geofencing APIs",
      "Secure Enclave / Keystore cryptographic storage",
      "Automated CI/CD pipelines via Fastlane and GitHub Actions",
    ],
    deliveryApproach: [
      { phase: "Human-Interface Design", description: "Platform-specific ergonomics (iOS HIG and Android Material) mapped to core user loops." },
      { phase: "Offline-First Architecture", description: "Local-first data synchronization, optimistic UI state, and conflict resolution rules." },
      { phase: "Hardware Integration", description: "Sensor, camera, biometric, and power consumption testing." },
      { phase: "Store Certification", description: "Apple App Store and Google Play compliance review, test flight staging, and release." },
    ],
    relatedWorkSlug: "businessflow",
  },
  {
    slug: "business-systems",
    number: "05",
    title: "BUSINESS SYSTEMS & AUTOMATION",
    subtitle: "ERP · Custom CRM · Operations Platforms · Workflow Engines",
    summary: "Custom internal operational platforms that eliminate manual friction, harmonize siloed databases, and give leadership complete real-time visibility over business velocity.",
    whatItSolves: [
      "Disparate spreadsheets and fragmented SaaS subscriptions creating data silos.",
      "Manual data entry errors resulting in operational delays and compliance risk.",
      "Off-the-shelf software imposing rigid workflows that restrict company growth.",
      "Lack of executive operational visibility across distributed departments.",
    ],
    whatLayzoxBuilds: [
      "Bespoke ERP systems tailored to proprietary manufacturing or logistics flows.",
      "Custom CRM platforms with integrated pipeline analytics and telephony.",
      "Automated quote-to-cash, invoicing, and reconciliation engines.",
      "Staff scheduling, resource allocation, and job dispatch platforms.",
      "Inventory tracking with barcode and IoT telemetry integration.",
    ],
    typicalApplications: [
      "Logistics freight brokerage and route dispatch systems",
      "Manufacturing shop-floor tracking and quality assurance platforms",
      "Professional service practice management and billing systems",
      "Multi-branch healthcare appointment and queue management",
      "Wholesale order distribution and supplier portals",
    ],
    technicalCapabilities: [
      "Temporal.io, Camunda, and custom state machines for durable execution",
      "PostgreSQL with TimescaleDB for operational telemetry",
      "Webhook orchestration and bi-directional third-party ERP synchronization",
      "Granular audit trails, immutable logging, and compliance dashboards",
      "Role-based access control with multi-factor authentication",
    ],
    deliveryApproach: [
      { phase: "Process Mapping", description: "Shadowing operational teams to identify edge cases, bottlenecks, and manual choke points." },
      { phase: "Schema & Flow Design", description: "Unified operational data model unifying inventory, orders, and customer records." },
      { phase: "Staged Rollout", description: "Phase the transition alongside existing tools, with regression checks and a documented recovery plan." },
      { phase: "Operational Enablement", description: "Staff training documentation, administrative dashboards, and telemetry monitoring." },
    ],
    relatedWorkSlug: "businessflow",
  },
  {
    slug: "cloud-infrastructure",
    number: "06",
    title: "CLOUD & INFRASTRUCTURE",
    subtitle: "Distributed Systems · API Architecture · Kubernetes · Edge",
    summary: "Cloud infrastructure planned around real workloads, with access controls, scaling, monitoring, and recovery appropriate to the system.",
    whatItSolves: [
      "Monolithic failure points causing catastrophic production downtime.",
      "Runaway cloud infrastructure bills with unoptimized resource allocation.",
      "Manual server provisioning leading to deployment friction and errors.",
      "Vulnerability to DDoS attacks, data leaks, and zero-day exploits.",
    ],
    whatLayzoxBuilds: [
      "Infrastructure-as-Code (Terraform, Pulumi) for repeatable, immutable environments.",
      "Multi-region Kubernetes clusters with automated pod autoscaling.",
      "High-throughput API gateways with rate limiting, caching, and token validation.",
      "Zero-trust network architectures with isolated VPCs and private endpoints.",
      "Comprehensive telemetry stacks: Prometheus, Grafana, OpenTelemetry, Datadog.",
    ],
    typicalApplications: [
      "High-concurrency fintech transaction processing backbones",
      "Global multi-region SaaS hosting with localized data compliance",
      "Big data ingestion pipelines processing millions of daily events",
      "Disaster recovery and automated failover architectures",
      "Cost-optimized hybrid cloud setups for intensive compute loads",
    ],
    technicalCapabilities: [
      "AWS (EKS, RDS, DynamoDB, Lambda), GCP (GKE, Cloud Run), Cloudflare Edge",
      "Docker, Kubernetes, Helm, ArgoCD GitOps pipelines",
      "Terraform, Terragrunt, OpenTofu infrastructure definition",
      "TLS 1.3, mTLS, HashiCorp Vault secrets management",
      "CI/CD automation with GitHub Actions and automated security scanning",
    ],
    deliveryApproach: [
      { phase: "Well-Architected Review", description: "Reliability, security, cost, and operational excellence audit against industry standards." },
      { phase: "Blueprint Modeling", description: "Declarative IaC codebase generation with modular VPC, IAM, and cluster topologies." },
      { phase: "Phased Cloud Migration", description: "Blue/green or canary migration strategies ensuring continuous operational stability." },
      { phase: "Operations Handover", description: "Runbooks, alerting thresholds, automated incident escalation, and reliability monitoring." },
    ],
    relatedWorkSlug: "businessflow",
  },
  {
    slug: "product-modernisation",
    number: "07",
    title: "PRODUCT MODERNISATION",
    subtitle: "Legacy Overhaul · Architecture Upgrades · Performance Engineering",
    summary: "Strategic transformation of ageing, fragile codebases into modern, modular, high-velocity digital products—without risky full-rewrite downtime.",
    whatItSolves: [
      "Decade-old monolithic codebases preventing rapid feature development.",
      "Obsolete UI/UX creating friction for modern end-users.",
      "High operational maintenance costs on deprecated software libraries.",
      "Security vulnerabilities inherent in legacy frameworks.",
    ],
    whatLayzoxBuilds: [
      "Strangler-fig migrations decomposing monoliths into clean microservices.",
      "Frontend replatforming to modern Next.js/React while preserving backend APIs.",
      "Database schema refactoring and migration to high-performance SQL/NoSQL stores.",
      "Performance-focused latency optimization and bundle reduction.",
      "Automated test harness implementation covering legacy regression risks.",
    ],
    typicalApplications: [
      "Legacy desktop enterprise apps transitioned to modern cloud SaaS",
      "PHP/ColdFusion/Classic .NET systems modernized into Node.js/Go",
      "Cluttered 2010s portals transformed into spatial, responsive interfaces",
      "Unscalable relational databases migrated to distributed cloud storage",
      "Deprecated mobile apps refactored to contemporary cross-platform architectures",
    ],
    technicalCapabilities: [
      "Strangler Pattern implementation with reverse-proxy routing",
      "Dual-write and CDC (Change Data Capture) database sync via Debezium",
      "Automated end-to-end regression test suites (Playwright, Cypress)",
      "Compatibility checks and a documented API migration plan",
      "Phased user rollout with feature-flag toggling (LaunchDarkly)",
    ],
    deliveryApproach: [
      { phase: "Legacy Forensic Audit", description: "Static analysis, dependency vulnerability scan, and architectural bottleneck mapping." },
      { phase: "Strangler Architecture", description: "Establishing a modernization proxy to route endpoints incrementally to the new system." },
      { phase: "Parallel Testing", description: "Validating identical functional parity through shadowed production traffic." },
      { phase: "Decommissioning", description: "Retire legacy components after agreed validation, monitoring, and rollback criteria are met." },
    ],
    relatedWorkSlug: "businessflow",
  },
];
