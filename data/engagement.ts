export interface EngagementModel {
  id: string;
  title: string;
  subtitle: string;
  bestSuitedFor: string;
  typicalScope: string[];
  collaborationApproach: string;
  timelineEstimate: string;
}

export const ENGAGEMENT_MODELS: EngagementModel[] = [
  {
    id: "end-to-end",
    title: "END-TO-END PRODUCT DEVELOPMENT",
    subtitle: "Concept to Production Deployment",
    bestSuitedFor: "Ambitious founders and enterprise business units launching a new digital product, SaaS platform, or business operating system from zero.",
    typicalScope: [
      "Product discovery, user research, and domain modeling",
      "Bespoke spatial design system and interactive prototypes",
      "Full-stack engineering (Frontend, Backend, Database, Cloud)",
      "Verified production deployment and launch telemetry",
    ],
    collaborationApproach: "Turnkey delivery with dedicated product manager, lead architect, senior engineers, and UX designer. Weekly sprint demos and direct collaboration channel.",
    timelineEstimate: "Rapid MVP & Fast-Track Delivery",
  },
  {
    id: "dedicated-team",
    title: "DEDICATED PRODUCT TEAM",
    subtitle: "Autonomous Cross-Functional Engineering Squad",
    bestSuitedFor: "Scale-ups and established technology firms requiring a high-output, autonomous engineering team to accelerate product roadmap velocity.",
    typicalScope: [
      "Staffed with senior engineers, tech lead, QA, and designer",
      "Direct integration into existing engineering rituals and repos",
      "Ownership of dedicated product domains or microservices",
      "Elastic scaling as product velocity dictates",
    ],
    collaborationApproach: "Embedded squad operating on client timezones (India, US, UK, EU overlap). Transparent git pull requests, standups, and bi-weekly retrospectives.",
    timelineEstimate: "Continuous Delivery Retainer",
  },
  {
    id: "ai-implementation",
    title: "AI & AUTOMATION IMPLEMENTATION",
    subtitle: "Enterprise Cognitive Workflows & Agent Pipelines",
    bestSuitedFor: "Organizations with unstructured document repositories, manual compliance friction, or repetitive operational bottlenecks seeking measurable leverage.",
    typicalScope: [
      "Workflow auditing and layout-aware document chunking",
      "Custom hybrid RAG architectures and vector database deployment",
      "Multi-agent state machines with deterministic schema enforcement",
      "Continuous evaluation harnesses and prompt optimization",
    ],
    collaborationApproach: "Milestone-driven technical execution with rigorous accuracy benchmarking and VPC security governance.",
    timelineEstimate: "Priority Build Sprints",
  },
  {
    id: "modernisation",
    title: "SOFTWARE MODERNISATION",
    subtitle: "A Planned Transition from Legacy Systems",
    bestSuitedFor: "Enterprises burdened by slow, monolithic, or ageing codebases that inhibit business velocity or fail modern security audits.",
    typicalScope: [
      "Legacy forensic code audit and dependency vulnerability analysis",
      "Strangler-pattern incremental microservice extraction",
      "Modern Next.js / TypeScript frontend replatforming",
      "Database migration with reconciliation checks and a recovery plan",
    ],
    collaborationApproach: "Risk-mitigated phased migration with automated regression testing and canary rollouts.",
    timelineEstimate: "Phased Modernisation Sprints",
  },
  {
    id: "consulting",
    title: "TECHNOLOGY CONSULTING",
    subtitle: "Architectural Audits & Strategic Direction",
    bestSuitedFor: "Executive leadership and founders seeking unbiased technical architecture reviews before major capital allocation.",
    typicalScope: [
      "Technical due diligence for acquisitions or funding rounds",
      "Cloud architecture and multi-region resilience audits",
      "Performance, security, and scalability benchmarking",
      "Long-term technology roadmap and vendor evaluation",
    ],
    collaborationApproach: "High-density executive working sessions, code reviews, and comprehensive architectural whitepaper delivery.",
    timelineEstimate: "Focused Architecture Sprint",
  },
  {
    id: "engineering-partnership",
    title: "ONGOING ENGINEERING PARTNERSHIP",
    subtitle: "Continuous Systems Evolution & Reliability",
    bestSuitedFor: "Companies with production software requiring continuous SRE monitoring, security patches, reliability monitoring, and systematic performance upgrades.",
    typicalScope: [
      "Proactive infrastructure telemetry and incident triage",
      "Regular dependency upgrades and security vulnerability patching",
      "Continuous database index optimization and latency tuning",
      "Quarterly architectural reviews and capacity planning",
    ],
    collaborationApproach: "Retainer-backed engineering with transparent incident dashboards and direct developer access.",
    timelineEstimate: "Continuous Engineering Partnership",
  },
];
