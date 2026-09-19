export interface InsightArticle {
  slug: string;
  title: string;
  category: "AI" | "Engineering" | "Products" | "Business Systems" | "Design" | "Technology";
  summary: string;
  author: {
    name: string;
    role: string;
  };
  publishedAt: string;
  readingTime: string;
  keyTakeaway: string;
  tableOfContents: Array<{
    id: string;
    title: string;
  }>;
  sections: Array<{
    id: string;
    heading: string;
    content: string[];
  }>;
  relatedSlugs: string[];
}

export const INSIGHTS: InsightArticle[] = [
  {
    slug: "rethinking-enterprise-ai-autonomous-pipelines",
    title: "AI that fits the workflow",
    category: "AI",
    summary: "A practical approach to useful AI: choose a specific task, define how success is measured, and keep people involved where judgment matters.",
    author: {
      name: "LAYZOX",
      role: "Engineering perspectives",
    },
    publishedAt: "2025-02-15",
    readingTime: "3 min read",
    keyTakeaway: "Start with a useful task and an evaluation plan. The interface and model should follow from those decisions.",
    tableOfContents: [
      { id: "the-chatbot-trap", title: "The Conversational Interface Trap" },
      { id: "deterministic-agents", title: "State Machine Agent Graphs" },
      { id: "schema-enforcement", title: "Validate Before Taking Action" },
      { id: "production-evaluation", title: "Continuous Evaluation Frameworks" },
    ],
    sections: [
      {
        id: "the-chatbot-trap",
        heading: "The Conversational Interface Trap",
        content: [
          "A conversation can be a useful way to explore information. Repetitive operational work may call for a different interaction: a suggested value in a form, a document review queue, or a summary alongside an existing record.",
          "Consider a document intake workflow. An AI step might suggest fields from an uploaded document while ordinary validation checks required values. A person can then review uncertain entries before anything is committed. This is an illustrative design pattern, not a report of a client deployment.",
        ],
      },
      {
        id: "deterministic-agents",
        heading: "State Machine Agent Graphs",
        content: [
          "A bounded workflow makes the system easier to inspect. Each step needs an input, a responsibility, a timeout, and a way to recover when it fails. This structure can constrain the process even when the model's output varies.",
          "For example, extraction, retrieval, validation, and human approval can be separate steps. Keeping those responsibilities visible helps a team locate errors and decide when automation should pause.",
        ],
      },
      {
        id: "schema-enforcement",
        heading: "Validate Before Taking Action",
        content: [
          "Structured output makes it easier to check that required fields are present and have the expected types. Structural validity alone does not establish that a value is true, complete, or appropriate for the business decision.",
          "Apply domain checks independently, preserve the source material, and make failures explicit. A rejected or uncertain result should have a clear route to review instead of silently becoming a business record.",
        ],
      },
      {
        id: "production-evaluation",
        heading: "Continuous Evaluation Frameworks",
        content: [
          "Choose representative examples before optimizing a prompt. Include ordinary requests, incomplete inputs, and situations in which the system should ask for help. Agree on what an acceptable result looks like.",
          "Revisit those examples when prompts, models, or source data change. Quality, response time, and cost all matter; the right balance depends on the task and the consequences of an error.",
        ],
      },
    ],
    relatedSlugs: [
      "death-of-software-bloat-deterministic-latency",
      "distributed-architecture-realtime-synchronization",
    ],
  },
  {
    slug: "death-of-software-bloat-deterministic-latency",
    title: "Performance is a product decision",
    category: "Engineering",
    summary: "Thoughtful choices about rendering, dependencies, and feedback can make a digital product easier to use. Start by measuring what people experience.",
    author: {
      name: "LAYZOX",
      role: "Engineering perspectives",
    },
    publishedAt: "2025-01-20",
    readingTime: "3 min read",
    keyTakeaway: "Software speed is not an optimization pass done at the end; it is an architectural contract enforced from day zero.",
    tableOfContents: [
      { id: "the-latency-tax", title: "The Hidden Latency Tax" },
      { id: "server-components-edge", title: "Server Components & Edge Caching" },
      { id: "zero-runtime-css", title: "Zero-Runtime CSS & Spatial Layouts" },
      { id: "memory-hygiene", title: "Garbage Collection & DOM Hygiene" },
    ],
    sections: [
      {
        id: "the-latency-tax",
        heading: "The Hidden Latency Tax",
        content: [
          "Every dependency, request, and rendering decision has a cost. Those costs are especially visible on modest devices and unreliable connections. An interface that feels quick on a developer's machine may behave differently for the person using it.",
          "Measure the important journeys: loading a page, opening a record, entering data, and saving changes. Clear feedback also matters. People should be able to tell whether an action is pending, complete, or needs attention.",
        ],
      },
      {
        id: "server-components-edge",
        heading: "Server Components & Edge Caching",
        content: [
          "Separating static content from interactive behavior can reduce the work a browser needs to perform. Server rendering and caching are useful tools when they match the content's freshness and access requirements.",
          "The result still depends on the application, hosting, cache behavior, and network. Choose the simplest appropriate rendering strategy, then verify it with representative devices and realistic data.",
        ],
      },
      {
        id: "zero-runtime-css",
        heading: "Zero-Runtime CSS & Spatial Layouts",
        content: [
          "A shared set of design tokens keeps spacing, color, and typography consistent. Reserving space for images and asynchronous content can also help prevent elements from moving while a page loads.",
          "Prefer native layout and interaction features where they meet the need. Profile costly effects and styles before adding optimization complexity; browser layout and painting still have a cost regardless of the styling tool.",
        ],
      },
      {
        id: "memory-hygiene",
        heading: "Garbage Collection & DOM Hygiene",
        content: [
          "A tool used throughout the day deserves testing beyond its first page load. Repeat common actions, navigate between views, and watch for accumulating memory or increasingly slow interactions.",
          "Clean up subscriptions and timers, set limits on retained data, and consider pagination or virtualization for large collections. The appropriate approach comes from the measured workload, not a universal row count.",
        ],
      },
    ],
    relatedSlugs: [
      "rethinking-enterprise-ai-autonomous-pipelines",
      "product-ownership-mindset-engineering",
    ],
  },
  {
    slug: "distributed-architecture-realtime-synchronization",
    title: "Designing for the moments a connection drops",
    category: "Technology",
    summary: "Engineering local-first applications with conflict-free replicated data types (CRDTs) and WebSocket meshes for global enterprise collaboration.",
    author: {
      name: "LAYZOX",
      role: "Engineering perspectives",
    },
    publishedAt: "2024-11-10",
    readingTime: "3 min read",
    keyTakeaway: "Local-first software treats the network as an asynchronous synchronization medium rather than a blocking prerequisite.",
    tableOfContents: [
      { id: "the-offline-problem", title: "The Fragility of Centralized State" },
      { id: "crdt-primitives", title: "CRDTs in Production Environments" },
      { id: "websocket-mesh", title: "Multiplexed WebSocket Topologies" },
      { id: "database-convergence", title: "Deterministic State Convergence" },
    ],
    sections: [
      {
        id: "the-offline-problem",
        heading: "The Fragility of Centralized State",
        content: [
          "A field worker may need to read a record or capture a note while the network is unavailable. Decide which tasks must remain possible in that situation, which can wait, and which require confirmation from a shared system.",
          "Local storage and a synchronization queue can support selected offline tasks. The interface should distinguish locally saved changes from changes acknowledged by the server, so people understand the state of their work.",
        ],
      },
      {
        id: "crdt-primitives",
        heading: "CRDTs in Production Environments",
        content: [
          "Concurrent editing creates a product question as well as a technical one: what should happen when two people change the same record? A merge rule that is suitable for a shared note may be unsuitable for an inventory quantity.",
          "CRDTs are one option for certain collaborative data structures. The wider design still needs authorization, persistence, deletion behavior, and business rules. Some conflicts are better presented for a person to resolve.",
        ],
      },
      {
        id: "websocket-mesh",
        heading: "Multiplexed WebSocket Topologies",
        content: [
          "Persistent connections can deliver changes to active clients, while polling may be sufficient for less time-sensitive views. Choose a transport around the expected traffic and the operational complexity a team can support.",
          "Send only what a client needs and define how it resumes after losing its connection. Any bandwidth or latency improvement should be measured against the application's own baseline.",
        ],
      },
      {
        id: "database-convergence",
        heading: "Deterministic State Convergence",
        content: [
          "Test reconnection with duplicate, delayed, and out-of-order updates. Make retries safe and preserve enough information to investigate why a record changed.",
          "The aim is a recovery path people can understand. Pending changes, conflicts, and failed synchronization should be visible, with a clear next action and a way to avoid silently losing work.",
        ],
      },
    ],
    relatedSlugs: [
      "death-of-software-bloat-deterministic-latency",
      "product-ownership-mindset-engineering",
    ],
  },
  {
    slug: "product-ownership-mindset-engineering",
    title: "Build around the outcome",
    category: "Products",
    summary: "Why pure development hours create misaligned incentives, and how cross-functional engineering teams with business accountability produce lasting systems.",
    author: {
      name: "LAYZOX",
      role: "Product perspectives",
    },
    publishedAt: "2024-09-05",
    readingTime: "3 min read",
    keyTakeaway: "A shared definition of success helps teams choose what to build, what to simplify, and what to leave out.",
    tableOfContents: [
      { id: "the-agency-failure", title: "Why Traditional Outsourcing Breaks" },
      { id: "business-first-engineering", title: "Business-First Engineering" },
      { id: "skin-in-the-game", title: "Alignment Through Long-Term Architecture" },
      { id: "the-layzox-standard", title: "The Layzox Delivery Standard" },
    ],
    sections: [
      {
        id: "the-agency-failure",
        heading: "Why Traditional Outsourcing Breaks",
        content: [
          "A list of features describes an implementation, but may leave its purpose unclear. Before planning delivery, ask who needs the change, what makes their work difficult, and how an improvement would be recognized.",
          "Turning that discussion into a shared brief makes tradeoffs easier. It gives the team a reason to prioritize a small, useful workflow over a larger collection of loosely connected features.",
        ],
      },
      {
        id: "business-first-engineering",
        heading: "Business-First Engineering",
        content: [
          "Useful discovery brings business and engineering questions together. What information already exists? Who can change it? Where does a decision need approval? What happens when an integration is unavailable?",
          "Choose measures that reflect the actual problem, and record a baseline when possible. Task completion, error recovery, and adoption may tell a more useful story than the number of features shipped.",
        ],
      },
      {
        id: "skin-in-the-game",
        heading: "Alignment Through Long-Term Architecture",
        content: [
          "Consider the people who will maintain the system after its first release. Clear boundaries, useful tests, and understandable deployment steps make future changes easier to assess.",
          "Agree on repository access, infrastructure responsibilities, intellectual property, and handover as part of the engagement. These decisions belong in an explicit agreement and should remain visible throughout delivery.",
        ],
      },
      {
        id: "the-layzox-standard",
        heading: "The Layzox Delivery Standard",
        content: [
          "LAYZOX approaches product work as a continuing conversation between the need, the experience, and the system behind it. Start with clear intent, make a useful first version, and use what you learn to choose the next step.",
        ],
      },
    ],
    relatedSlugs: [
      "rethinking-enterprise-ai-autonomous-pipelines",
      "death-of-software-bloat-deterministic-latency",
    ],
  },
];
