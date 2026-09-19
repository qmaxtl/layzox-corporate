export interface DeliveryStage {
  step: string;
  name: string;
  action: string;
  deliverables: string[];
  cadence: string;
  speedMode: string;
}

export const DELIVERY_STAGES: DeliveryStage[] = [
  {
    step: "01",
    name: "BRIEF",
    action: "Direct alignment on business goals, technical constraints, and high-leverage outcomes without layers of bureaucracy.",
    deliverables: [
      "Core domain & objectives brief",
      "Constraint & integration matrix",
      "Non-functional SLAs specification",
      "Fast-track delivery scope",
    ],
    cadence: "Hours to Days",
    speedMode: "Direct Alignment",
  },
  {
    step: "02",
    name: "DEFINE",
    action: "Define the architecture, data model, and API contracts, and resolve open questions before implementation.",
    deliverables: [
      "System topology blueprint",
      "Data entity schemas & contracts",
      "Modular milestone sequence",
      "Security & isolation criteria",
    ],
    cadence: "Rapid Sprint",
    speedMode: "Architectural Precision",
  },
  {
    step: "03",
    name: "DESIGN",
    action: "High-fidelity spatial interfaces and interactive ergonomics designed directly for human operational velocity.",
    deliverables: [
      "Spatial interface design system",
      "Tactile clickable prototype",
      "State transitions & micro-actions",
      "Accessibility review against agreed criteria",
    ],
    cadence: "Fast-Track Prototyping",
    speedMode: "Ergonomic Clarity",
  },
  {
    step: "04",
    name: "BUILD",
    action: "Parallel, senior-led engineering across frontend, backend microservices, AI pipelines, and infrastructure.",
    deliverables: [
      "Type-safe modular application code",
      "Daily preview builds per branch",
      "Automated unit & integration harnesses",
      "Declarative cloud IaC blueprints",
    ],
    cadence: "Continuous Velocity",
    speedMode: "Concurrent Engineering",
  },
  {
    step: "05",
    name: "VERIFY",
    action: "Rigorous automated testing under realistic production concurrency, latency, and edge conditions.",
    deliverables: [
      "Concurrency & stress benchmark",
      "Security penetration & CVE check",
      "Cross-device matrix verification",
      "Performance measurements against agreed targets",
    ],
    cadence: "Automated Pipeline",
    speedMode: "Production Hardening",
  },
  {
    step: "06",
    name: "SHIP",
    action: "Verified production deployment with live operational telemetry and active monitoring.",
    deliverables: [
      "Canary / blue-green release",
      "Live telemetry & metric alerts",
      "Operational runbooks & handover",
      "Code access and ownership handover as agreed",
    ],
    cadence: "Verified Release",
    speedMode: "Phased Deployment",
  },
];
