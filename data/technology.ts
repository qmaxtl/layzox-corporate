export interface TechCategory {
  id: string;
  name: string;
  description: string;
  technologies: Array<{
    name: string;
    role: string;
    description: string;
  }>;
}

export const TECHNOLOGY_STACK: TechCategory[] = [
  {
    id: "frontend",
    name: "FRONTEND & WEB SYSTEMS",
    description: "Spatial interfaces, instant rendering, and responsive typography.",
    technologies: [
      { name: "Next.js (App Router)", role: "Framework", description: "Server components, streaming SSR, and edge execution." },
      { name: "React 19 / TypeScript", role: "Runtime", description: "Strictly typed, concurrent rendering with robust UI boundaries." },
      { name: "Tailwind CSS v4", role: "Design Engine", description: "Zero-runtime utility architecture and modern CSS variables." },
      { name: "Three.js & WebGL", role: "Visual Graphics", description: "Hardware-accelerated 3D shaders and spatial canvases." },
      { name: "Framer Motion", role: "Choreography", description: "Fluid spring physics and scroll-linked state choreography." },
    ],
  },
  {
    id: "backend",
    name: "BACKEND & API ARCHITECTURE",
    description: "High-throughput services, strictly typed domain boundaries, and event pipelines.",
    technologies: [
      { name: "Go (Golang)", role: "Core Systems", description: "High-concurrency microservices with minimal memory footprint." },
      { name: "Node.js & Bun", role: "API Services", description: "High-velocity I/O multiplexing and GraphQL/REST routing." },
      { name: "Python", role: "Compute & AI", description: "FastAPI, mathematical modeling, and asynchronous task workers." },
      { name: "Rust", role: "Performance Critical", description: "Protocol parsing, edge decoders, and deterministic safety." },
      { name: "gRPC & Protocol Buffers", role: "RPC Transport", description: "Low-overhead binary serialization across internal service meshes." },
    ],
  },
  {
    id: "ai",
    name: "ARTIFICIAL INTELLIGENCE",
    description: "Autonomous reasoning, domain retrieval, and private model inference.",
    technologies: [
      { name: "LangGraph / LlamaIndex", role: "Orchestration", description: "State-machine agent loops and structured cognitive DAGs." },
      { name: "Qdrant & pgvector", role: "Vector Indices", description: "High-dimensional approximate nearest-neighbor retrieval." },
      { name: "Open-Weights Models", role: "Inference", description: "Llama 3, DeepSeek, Mistral quantized for private enclaves." },
      { name: "Cross-Encoder Rerankers", role: "Relevance Scoring", description: "Context calibration eliminating ungrounded hallucinations." },
      { name: "Langfuse & Phoenix", role: "Observability", description: "Token audit traces, latency heatmaps, and continuous evaluation." },
    ],
  },
  {
    id: "mobile",
    name: "MOBILE & EDGE CLIENTS",
    description: "Tactile native feedback, local-first offline storage, and hardware connectivity.",
    technologies: [
      { name: "React Native & Expo", role: "Cross-Platform", description: "Shared business logic with native thread UI performance." },
      { name: "Swift / SwiftUI", role: "iOS Native", description: "Deep Apple hardware integration, CoreBluetooth, and Metal." },
      { name: "Kotlin / Jetpack Compose", role: "Android Native", description: "Robust multi-hardware Android engineering." },
      { name: "WatermelonDB / SQLite", role: "Local Data", description: "CRDT-compatible local-first reactive storage." },
    ],
  },
  {
    id: "data",
    name: "DATA & STORAGE",
    description: "Reliable transactional databases, time-series storage, and caching layers.",
    technologies: [
      { name: "PostgreSQL", role: "Relational Foundation", description: "ACID compliance, relational integrity, and row-level security." },
      { name: "Event Queues", role: "Event Streaming", description: "Asynchronous task processing and decoupled service communication." },
      { name: "TimescaleDB", role: "Time-Series", description: "Optimized storage and continuous aggregation for time-series events." },
      { name: "Redis", role: "In-Memory Store", description: "High-speed caching, session management, and rate limiting." },
    ],
  },
  {
    id: "cloud",
    name: "CLOUD & INFRASTRUCTURE",
    description: "Multi-region resilience, isolated VPC topologies, and elastic scaling.",
    technologies: [
      { name: "Kubernetes (EKS / GKE)", role: "Orchestration", description: "Declarative container scheduling with HPA autoscaling." },
      { name: "AWS & Google Cloud", role: "Compute & Storage", description: "Hardened multi-region infrastructure and VPC peering." },
      { name: "Cloudflare Edge Workers", role: "Edge Compute", description: "Request handling and caching close to the people using the application." },
      { name: "Terraform / OpenTofu", role: "Infrastructure as Code", description: "Version-controlled, immutable cloud topology provisioning." },
    ],
  },
  {
    id: "devops",
    name: "DEVOPS & SECURITY",
    description: "Automated delivery pipelines, access controls, and dependency checks.",
    technologies: [
      { name: "GitHub Actions & ArgoCD", role: "GitOps CI/CD", description: "Automated test harnesses, container builds, and canary deploys." },
      { name: "HashiCorp Vault", role: "Secrets Engine", description: "Dynamic cryptographic key management and zero-trust tokens." },
      { name: "Datadog & Prometheus", role: "Observability", description: "Metrics collection, distributed tracing, and automated alerting." },
      { name: "Trivy & Snyk", role: "Security Scanning", description: "Static application security testing and dependency CVE audits." },
    ],
  },
];
