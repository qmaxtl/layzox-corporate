export interface CompanyDetails {
  name: string;
  legalName: string;
  brandStatement: string;
  supportingStatement: string;
  secondaryStatement: string;
  corePositioning: string;
  globalPositioning: {
    origin: string;
    reach: string;
    description: string;
    markets: string[];
  };
  contact: {
    general: string;
    projects: string;
    careers: string;
    media: string;
    primaryLocation: string;
    operatingModel: string;
  };
  social: {
    linkedin: string;
    github: string;
    twitter: string;
  };
  corporateInfo: {
    cinPlaceholder: string;
    gstinPlaceholder: string;
    jurisdiction: string;
    registeredState: string;
    country: string;
    registrationNotice: string;
  };
  principles: Array<{
    number: string;
    title: string;
    statement: string;
    detail: string;
  }>;
  objectives: Array<{
    number: string;
    title: string;
    definition: string;
    metric: string;
  }>;
}

export const COMPANY: CompanyDetails = {
  name: "LAYZOX",
  legalName: "Layzox India Pvt Ltd",
  brandStatement: "TECHNOLOGY THAT MOVES BUSINESS FORWARD.",
  supportingStatement:
    "We build products, intelligent systems and digital infrastructure designed around real-world outcomes.",
  secondaryStatement: "Products · Systems · Infrastructure · Intelligence",
  corePositioning:
    "LAYZOX builds products, intelligent systems and digital infrastructure around real-world business needs.",
  globalPositioning: {
    origin: "India",
    reach: "Built for what comes next",
    description: "Technology company building products and systems around real-world problems.",
    markets: ["Businesses", "Individuals", "Builders"],
  },
  contact: {
    general: "contact@layzox.com",
    projects: "projects@layzox.com",
    careers: "careers@layzox.com",
    media: "press@layzox.com",
    primaryLocation: "India",
    operatingModel: "Direct collaboration. Thoughtful engineering.",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/layzox",
    github: "https://github.com/layzox",
    twitter: "https://twitter.com/layzoxtech",
  },
  corporateInfo: {
    cinPlaceholder: "[CIN — Registered under the Indian Companies Act]",
    gstinPlaceholder: "[GSTIN — Configured upon contract engagement]",
    jurisdiction: "Republic of India",
    registeredState: "India",
    country: "India",
    registrationNotice:
      "Layzox India Pvt Ltd is an incorporated technology company registered under the Indian Companies Act.",
  },
  principles: [
    {
      number: "01",
      title: "UNDERSTAND BEFORE BUILDING.",
      statement: "Start with the problem, the people, and the constraints.",
      detail:
        "Before writing code, we work through the needs of the people who will use it. Clear requirements and practical constraints give each design and engineering decision a reason.",
    },
    {
      number: "02",
      title: "DESIGN FOR HUMANS.",
      statement: "Clear interfaces. Useful feedback. Predictable interactions.",
      detail:
        "Products and tools should not penalise the people using them. We design interfaces with intentional hierarchy, direct interaction, and predictable states — regardless of the underlying complexity.",
    },
    {
      number: "03",
      title: "ENGINEER FOR REALITY.",
      statement: "Plan for imperfect networks, changing workloads, and recovery.",
      detail:
        "Production is rarely predictable. We plan for errors, test the important paths, and make monitoring and recovery part of the design.",
    },
    {
      number: "04",
      title: "AUTOMATE WITH PURPOSE.",
      statement: "Machine intelligence where it solves complexity, not where it adds noise.",
      detail:
        "We choose automation where it can reduce repetitive work. AI belongs where its output can be evaluated, with human review for decisions that need judgment.",
    },
    {
      number: "05",
      title: "MAKE COMPLEXITY INVISIBLE.",
      statement: "Intricate infrastructure presented through coherent, calm systems.",
      detail:
        "The deeper the underlying complexity, the simpler and more serene the interface above it must appear. We hide difficult things so that users experience only clarity.",
    },
    {
      number: "06",
      title: "BUILD FOR WHAT COMES NEXT.",
      statement: "Modular architectures structured for continuous evolution.",
      detail:
        "Technology shifts rapidly. We avoid locked systems by enforcing clear boundaries, clean contracts, and deliberate decoupling — so what we build today serves the ambitions of tomorrow.",
    },
  ],
  objectives: [
    {
      number: "01",
      title: "REAL-WORLD IMPACT",
      definition: "Operational leverage, measurable value, or genuine capability that did not exist before.",
      metric: "Outcomes over Features",
    },
    {
      number: "02",
      title: "USABILITY",
      definition: "Interfaces that reduce friction and enable confident action without extensive training.",
      metric: "Human Efficiency",
    },
    {
      number: "03",
      title: "RELIABILITY",
      definition: "Deterministic software behaviour, automated error handling, and robust data integrity.",
      metric: "System Stability",
    },
    {
      number: "04",
      title: "PERFORMANCE",
      definition: "Responsive interactions, efficient queries, and lightweight assets measured against the project’s needs.",
      metric: "Responsive Experience",
    },
    {
      number: "05",
      title: "SCALABILITY",
      definition: "Modular architectures that grow smoothly alongside the business.",
      metric: "Horizontal Expandability",
    },
    {
      number: "06",
      title: "SECURITY",
      definition:
        "Role-based access control, encrypted transmission, and safe authentication practices by default.",
      metric: "Defensive Engineering",
    },
    {
      number: "07",
      title: "MAINTAINABILITY",
      definition:
        "Self-documenting codebases, typed contracts, and clean dependency management that compound over time.",
      metric: "Predictable Velocity",
    },
  ],
};
