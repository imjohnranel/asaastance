/** Single source of truth for marketing copy. Pages import from here only. */

export const siteBrand = {
  name: "Asaastance",
  tagline: "AI, SaaS, Tech Consultancy",
} as const;

export const homeHero = {
  headline: "ASAASTANCE",
  subheadline: siteBrand.tagline,
  tagline: "Bespoke AI and SaaS solutions, simplified, to solve complex problems.",
  body: "We learn the complex, scary technology so you don't have to. Then we customize it specifically for your business. Nothing more. Nothing less.",
  ctaPrimary: { label: "Get Started", href: "/inquiry" as const },
  ctaSecondary: { label: "Learn More", href: "/about" as const },
} as const;

/** Hero visual panel (quote overlay on /hero-visual.svg) */
export const homeHeroVisual = {
  quote: "Agents handle the repeat work—your team handles the relationships.",
} as const;

/** Social proof strip below hero */
export const homeTrustedBy = {
  label: "Trusted by teams upgrading operations without adding headcount",
  partners: [
    { name: "Harborline Mutual", initial: "H" },
    { name: "Visayas Brokers Co.", initial: "V" },
    { name: "Pacific Risk Partners", initial: "P" },
    { name: "Cebu Field & Co.", initial: "C" },
    { name: "Metro Renewal Group", initial: "M" },
  ],
} as const;

export type HomeSpotlightItem = {
  id: string;
  industry: string;
  title: string;
  description: string;
  stats: readonly { label: string; value: string }[];
  imageSrc: string;
};

export const homeSpotlightsSection = {
  eyebrow: "Results at a glance",
  title: "Where agents remove the busywork—so your people stay client-facing.",
  link: { label: "Discuss your workflows", href: "/inquiry" as const },
  items: [
    {
      id: "ops-automation",
      industry: "OPERATIONS",
      title: "Billing, reminders, and ledger hygiene",
      description:
        "Policy-aware invoicing and collections cadences run automatically—your team only steps in when judgment matters.",
      stats: [
        { label: "Repeat tasks", value: "Automated" },
        { label: "Handoffs", value: "Exception-only" },
      ],
      imageSrc: "/illustration-case-finance.svg",
    },
    {
      id: "renewals",
      industry: "GROWTH",
      title: "Renewals that don’t slip through",
      description:
        "Expiration tracking, nudges, and prep work land before deadlines—so producers spend time advising, not chasing dates.",
      stats: [
        { label: "Renewal prep", value: "Earlier" },
        { label: "Coverage gaps", value: "Surfaced" },
      ],
      imageSrc: "/illustration-case-logistics.svg",
    },
    {
      id: "client-comms",
      industry: "EXPERIENCE",
      title: "Client updates without the inbox debt",
      description:
        "Claims status, onboarding follow-ups, and routine answers are documented and delivered consistently—humans handle the exceptions.",
      stats: [
        { label: "Status drift", value: "Reduced" },
        { label: "Team focus", value: "Relationships" },
      ],
      imageSrc: "/illustration-case-retail.svg",
    },
  ] as const satisfies readonly HomeSpotlightItem[],
} as const;

export const homeLeadership = {
  eyebrow: "Leadership",
  title: "The co-founders behind your rollout.",
  subtitle:
    "No bait-and-switch: you work with the same operators responsible for discovery, build, and training.",
  cta: { label: "Our story", href: "/about" as const },
} as const;

export const homeWhatWeDo = [
  {
    title: "AI Solutions",
    description:
      "Intelligent automation for repetitive tasks. Billing, collections, monitoring, reporting — all automated.",
  },
  {
    title: "SaaS Customization",
    description:
      "Software tailored to your workflow. Not one-size-fits-all. Built for how you actually work.",
  },
  {
    title: "Tech Consultancy",
    description:
      "Strategy, implementation, and ongoing support. We guide you through the AI revolution.",
  },
] as const;

export const homeHowItWorks = [
  {
    step: 1,
    title: "Discovery",
    description: "We audit your workflows and identify automation opportunities.",
  },
  {
    step: 2,
    title: "Design",
    description: "We build Asaastance Agents specifically for your needs.",
  },
  {
    step: 3,
    title: "Deployment",
    description: "We integrate, train your team, and optimize continuously.",
  },
] as const;

export type AgentContent = {
  id: string;
  title: string;
  whatItDoes: string[];
  benefit: string;
  howItWorks?: string[];
  templateLibrary?: string[];
  limitations?: string[];
};

export const agents: AgentContent[] = [
  {
    id: "billing-automation",
    title: "Billing Automation Agent",
    whatItDoes: [
      "Generates invoices automatically based on policy data",
      "Tracks payment status in real-time",
      "Sends payment reminders at 7, 14, and 30 days",
      "Flags overdue accounts for human follow-up",
      "Updates accounting software automatically",
    ],
    benefit: "Dramatic reduction in manual billing work",
  },
  {
    id: "collection-automation",
    title: "Collection Automation Agent",
    whatItDoes: [
      "Monitors all outstanding payments daily",
      "Sends personalized reminder emails/SMS",
      "Offers payment plan options to clients",
      "Documents all collection attempts",
      "Escalates to human agent when needed",
    ],
    benefit: "Improved collection efficiency, less awkward conversations",
  },
  {
    id: "policy-monitoring",
    title: "Policy Monitoring Agent",
    whatItDoes: [
      "Tracks all policy expiration dates",
      "Alerts 30, 15, and 7 days before renewal",
      "Identifies coverage gaps in client portfolios",
      "Flags life changes that may need policy updates",
      "Prepares renewal quotes automatically",
    ],
    benefit: "Never miss a renewal, proactive client service",
  },
  {
    id: "claims-assistance",
    title: "Claims Assistance Agent",
    whatItDoes: [
      "Organizes claim documentation",
      "Tracks claim status with carriers",
      "Updates clients on progress automatically",
      "Flags urgent claims requiring immediate attention",
      "Maintains claims history database for compliance",
    ],
    benefit: "Faster claim resolution, happier clients",
  },
  {
    id: "accounting-reporting",
    title: "Accounting & Reporting Agent",
    whatItDoes: [
      "Reconciles daily transactions across all accounts",
      "Generates weekly and monthly financial reports",
      "Tracks commission payments to agents",
      "Monitors cash flow and alerts to anomalies",
      "Prepares data for tax filing and audits",
    ],
    benefit: "Clean books, no spreadsheet chaos",
  },
  {
    id: "content-marketing",
    title: "Content Marketing Agent",
    whatItDoes: [
      "Writes blog posts about industry topics and trends",
      "Creates email newsletters for client education",
      "Develops educational content for prospects",
      "Generates SEO-optimized website copy",
      "Repurposes content across multiple platforms",
    ],
    benefit: "Consistent content without writer's block",
  },
  {
    id: "social-media",
    title: "Social Media Agent",
    whatItDoes: [
      "Creates and schedules posts for Facebook, LinkedIn, Instagram",
      "Monitors comments and direct messages",
      "Tracks engagement metrics and growth",
      "Identifies trending topics in your industry",
      "Responds to common questions automatically",
    ],
    benefit: "Active social presence, reduced manual posting time",
  },
  {
    id: "graphic-design",
    title: "Graphic Design Agent",
    whatItDoes: [
      "Accesses library of pre-designed Canva templates",
      "Customizes templates with your brand colors, logos, text",
      "Auto-generates social media graphics from content briefs",
      "Resizes designs for multiple platforms",
      "Works with Content Marketing and Social Media Agents",
    ],
    benefit: "Consistent, on-brand visuals without design software skills",
    howItWorks: [
      "Content Marketing Agent writes post text",
      "Graphic Design Agent selects appropriate template",
      "Auto-fills: headline, body text, brand colors, logo",
      "Presents 2–3 variations for approval",
      "Upon approval, delivers final files",
    ],
    templateLibrary: [
      "Quote graphics (insurance tips, advice)",
      "Announcement graphics (new policies, updates)",
      "Educational infographics (coverage types, claims process)",
      "Holiday greetings (seasonal posts)",
      "Testimonial layouts (client reviews)",
    ],
    limitations: [
      "Works from templates, not original designs",
      "Complex custom work requires human designer",
      "Brand must be established first (colors, fonts, logo)",
    ],
  },
];

export const comparisonRows: { them: string; us: string }[] = [
  { them: "One-size-fits-all solutions", us: "Bespoke, customized for your business" },
  { them: "Force you into their mold", us: "Adapt to how you actually work" },
  { them: "Maximize their profits", us: "Maximize your results" },
  { them: "Generic AI tools", us: "Agents trained on your specific needs" },
  { them: "You learn the technology", us: "We learn it for you" },
  { them: "Remote-only support", us: "In-person setup and training" },
  { them: "Monthly contracts, no flexibility", us: "Scalable packages, upgrade anytime" },
  { them: "Hidden API costs", us: "Transparent pricing, we manage APIs" },
  { them: "Impersonal support", us: "Dedicated co-founders, real relationships" },
];

export const comparisonBottomLine = {
  headline: "The Bottom Line",
  text: "They sell you software. We deliver solutions that actually work for your business.",
} as const;

/** /vs-competitors — hero + card labels */
export const vsCompetitorsPage = {
  eyebrow: "Compare",
  headline: "Clarity beats vendor noise",
  subhead:
    "A straight comparison—because your time is better spent running the business than decoding vendor speak.",
  usTab: "Us",
  themTab: "Them",
  usTitle: siteBrand.name,
  themTitle: "Typical vendors",
} as const;

export const integrationSteps = [
  {
    title: "Discovery Call (Day 1)",
    bullets: [
      "Deep dive into your current workflows",
      "Identify biggest pain points and time wasters",
      "Map your existing tech stack",
      "Define success metrics",
    ],
  },
  {
    title: "Custom Design (Days 2–5)",
    bullets: [
      "Design Asaastance Agents for your specific needs",
      "Configure integrations with your systems",
      "Create customized dashboards",
      "Build workflow automations",
    ],
  },
  {
    title: "Setup & Integration (Days 6–10)",
    bullets: [
      "Deploy agents to your environment",
      "Connect to your existing software",
      "Import client and business data",
      "Test all automations thoroughly",
    ],
  },
  {
    title: "Training (Days 11–12)",
    bullets: [
      "Train your team on the new system",
      "Show them how to monitor agents",
      "Practice handoff procedures",
      "Review exception handling",
    ],
  },
  {
    title: "Soft Launch (Days 13–20)",
    bullets: [
      "Run parallel with existing processes",
      "Monitor agent performance",
      "Fine-tune workflows based on feedback",
      "Gather input from your team",
    ],
  },
  {
    title: "Full Deployment & Optimization (Ongoing)",
    bullets: [
      "Switch to full agent operation",
      "Weekly check-ins for first month",
      "Monthly optimization reviews",
      "Quarterly strategy sessions",
    ],
  },
] as const;

export const integrationSummary = {
  timeline: "3 weeks to full deployment",
  support: "Continuous from day one",
} as const;

export type PricingPackage = {
  id: string;
  name: string;
  pricePhp: string;
  priceUsd: string;
  subtitle?: string;
  features: string[];
  bestFor: string;
  highlight?: boolean;
  footnotes?: string[];
  pcSpecs?: string[];
  earlyAdopterPhp?: string;
  earlyAdopterUsd?: string;
};

export const pricingPackages: PricingPackage[] = [
  {
    id: "essential",
    name: "Essential",
    pricePhp: "₱6,000",
    priceUsd: "$100",
    subtitle: "/ month",
    features: [
      "1 Main Asaastance Agent + subagents",
      "In-person setup and customization",
      "₱1,000 API credits to start",
      "Complete training and walkthrough",
      "Service guide access",
      "Troubleshooting chat",
      "Annual check-ins",
    ],
    bestFor: "Starting with billing automation, testing the waters",
  },
  {
    id: "professional",
    name: "Professional",
    pricePhp: "₱12,000",
    priceUsd: "$200",
    subtitle: "/ month",
    highlight: true,
    features: [
      "Everything in Package A, plus:",
      "Up to 3 Main Asaastance Agents",
      "Customized task-tracking and workflow system",
      "Quarterly strategy reviews",
      "1 Customized SaaS solution",
      "Bi-annual SEO, website, and social media consultancy",
      "Full maintenance package",
      "Complete API ecosystem setup",
    ],
    bestFor: "Growing businesses ready for full automation",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    pricePhp: "₱18,000",
    priceUsd: "$300",
    subtitle: "/ month",
    features: [
      "Everything in Package B, plus:",
      "Up to 5 Main Asaastance Agents",
      "Monthly strategy sessions",
      "Up to 3 customized SaaS services",
      "Regular staff training",
      "11AM–8PM / 7 days in-person support",
    ],
    bestFor: "Established operations needing full-service support",
  },
  {
    id: "ai-pc",
    name: "Asaastance AI Services + Customized PC",
    pricePhp: "₱30,000",
    priceUsd: "$500",
    subtitle: "/ month",
    earlyAdopterPhp: "₱25,000",
    earlyAdopterUsd: "$420",
    features: [
      "In addition to Asaastance agents, the client purchases through Asaastance a customized PC unit developed specifically to run Asaastance agents (Value: ₱55,000 — financing available).",
    ],
    footnotes: [
      "Early AI Adopters Program: ₱25,000 ($420) / month (exclusive of API costs).",
    ],
    pcSpecs: [
      "AMD Ryzen 7 5700X3D",
      "ASRock B550M Pro4 Motherboard 4DDR4",
      "PNY RTX 4060 8GB",
      "PNY/Patriot/Apacer 8x2 DDR4 RGB RAM",
      "PNY/Apacer/Dahua/Patriot 500GB NVMe",
      "Silverstone Viva 650W Bronze 80Plus PSU",
      "ESGaming Seaview Villa Casing",
      "Inplay Seaview Tower x3 Fans ARGB Kit x2",
      "Cougar Forza 50 Essential Single Tower/4 Heat-Pipes",
      "Genuine Windows 10 Pro",
    ],
    bestFor: "Teams that want dedicated on-prem hardware tuned for agents",
  },
];

export const aboutContent = {
  story:
    "Asaastance was founded by two entrepreneurs who saw the AI revolution coming years ago. We've spent years preparing to help businesses navigate this transformation.",
  philosophy:
    "Most AI solutions are one-size-fits-all. They force your business into their mold. We do the opposite. We learn the complex, scary technology so you don't have to. Then we customize it specifically for your business. Nothing more. Nothing less.",
  founders: [
    {
      name: "D.E. Wilson",
      role: "Co-Founder",
      bio: "Serial entrepreneur with 20+ years experience in copywriting, marketing, sales, management, and technology. Former General Manager managing 100+ person teams across Asia. Founded startups in Singapore, Indonesia, and the Philippines.",
    },
    {
      name: "John Ranel",
      role: "Co-Founder",
      bio: "12+ years in Web Development, Data, Education, and Graphic Design. Former IT Director managing 20+ people and part of executive team overseeing 100+ staff. Recognized as one of Cebu's most talented Web Developers.",
    },
  ],
} as const;

function envOrPlaceholder(key: string, placeholder: string): string {
  if (typeof process !== "undefined" && process.env[key]) {
    return process.env[key] as string;
  }
  return placeholder;
}

export const contactContent = {
  headline: "Get in Touch",
  subhead: "Ready to automate your business?",
  officeHours: [
    { label: "Monday – Friday", value: "9AM – 6PM" },
    { label: "Saturday", value: "By appointment" },
  ],
  nextSteps: [
    { id: "pilot", label: "30-day pilot program" },
    { id: "assessment", label: "Full workflow assessment" },
  ],
  founders: [
    {
      name: "D.E. Wilson",
      role: "Co-Founder",
      email: envOrPlaceholder("NEXT_PUBLIC_CONTACT_EMAIL_WILSON", "daniel@asaastance.com"),
      phone: envOrPlaceholder("NEXT_PUBLIC_CONTACT_PHONE_WILSON", "+63 977 465 2758"),
    },
    {
      name: "John Ranel",
      role: "Co-Founder",
      email: envOrPlaceholder("NEXT_PUBLIC_CONTACT_EMAIL_JOHN", "john@asaastance.com"),
      phone: envOrPlaceholder("NEXT_PUBLIC_CONTACT_PHONE_JOHN", "+63 905 545 6289"),
    },
  ],
};

/** https://asaastance.vercel.app/ — Comprehensive Digital Solutions (exact copy) */
export const comprehensiveDigitalSolutionsIntro = {
  title: "Comprehensive Digital Solutions",
  description:
    "From organic growth to custom automation, we provide the end-to-end expertise to scale your business and dominate your market.",
} as const;

export type DigitalSolutionIconId =
  | "bot"
  | "search"
  | "fileText"
  | "briefcase"
  | "code"
  | "zap"
  | "cpu"
  | "smartphone";

export const digitalSolutionServices: {
  slug: string;
  title: string;
  description: string;
  bullets: readonly [string, string];
  icon: DigitalSolutionIconId;
}[] = [
  {
    slug: "blog-automation",
    title: "Website Blogs Writing Automation",
    description:
      "AI-driven content creation to keep your blog consistently updated with high-quality, SEO-optimized articles.",
    bullets: ["Automated Workflows", "SEO Optimization"],
    icon: "bot",
  },
  {
    slug: "technical-seo",
    title: "Technical SEO",
    description:
      "Optimizing your website's architecture, speed, and backend to ensure search engines can crawl and index effectively.",
    bullets: ["Site Speed Optimization", "Crawlability"],
    icon: "search",
  },
  {
    slug: "on-page-seo",
    title: "On-page SEO",
    description:
      "Strategic placement of keywords, meta tags, and content structuring to rank your pages higher in search results.",
    bullets: ["Keyword Strategy", "Content Optimization"],
    icon: "fileText",
  },
  {
    slug: "business-consultancy",
    title: "Business Development Consultancy",
    description:
      "Strategic guidance to identify growth opportunities, build partnerships, and scale your operations successfully.",
    bullets: ["Growth Strategy", "Market Analysis"],
    icon: "briefcase",
  },
  {
    slug: "custom-app",
    title: "Custom App Development",
    description:
      "Tailored web and software applications designed to meet your unique business requirements and user needs.",
    bullets: ["Scalable Architecture", "UX/UI Design"],
    icon: "code",
  },
  {
    slug: "automation-app",
    title: "Custom Automation App Development",
    description:
      "Streamline your workflows with intelligent automation apps that save time and reduce manual, repetitive tasks.",
    bullets: ["Process Automation", "API Integrations"],
    icon: "zap",
  },
];

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "What We Offer", href: "/what-we-offer" },
  { name: "Other Services", href: "/other-services" },
  { name: "Integration", href: "/integration" },
  { name: "Pricing", href: "/pricing" },
  { name: "Us vs Them", href: "/vs-competitors" },
  { name: "About", href: "/about" },
] as const;

export const footerQuickLinks = [
  { name: "What We Offer", href: "/what-we-offer" },
  { name: "Other Services", href: "/other-services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Integration", href: "/integration" },
  { name: "Us vs Them", href: "/vs-competitors" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/inquiry" },
] as const;
