/**
 * Illustration picks for pages and agent sections (assets in /public).
 * Maps each surface to a coherent visual so we are not reusing one generic asset everywhere.
 */

export type PageVisual = {
  src: string;
  alt: string;
};

const V = {
  hero: { src: "/hero-visual.jpg", alt: "Abstract automation dashboard and workflow visualization" },
  /** /what-we-offer marketing hero only (distinct from global `hero`). */
  whatWeOfferHero: {
    src: "/what-we-offer-hero.jpg",
    alt: "Open workspace and team collaboration",
  },
  /** Collection Automation Agent panel on /what-we-offer. */
  agentCollectionAutomation: {
    src: "/illustration-agent-collection-automation.jpg",
    alt: "Payment terminals and collection workflow context",
  },
  agentClaimsAssistance: {
    src: "/illustration-agent-claims-assistance.jpg",
    alt: "Healthcare, clinical care, and claims coordination context",
  },
  agentAccountingReporting: {
    src: "/illustration-agent-accounting-reporting.jpg",
    alt: "Accounting workspace and financial reporting context",
  },
  agentContentMarketing: {
    src: "/illustration-agent-content-marketing.jpg",
    alt: "Writing desk and content marketing workspace",
  },
  agentSocialMedia: {
    src: "/illustration-agent-social-media.jpg",
    alt: "Social media and digital presence workspace",
  },
  finance: { src: "/illustration-case-finance.jpg", alt: "Finance and billing operations illustration" },
  logistics: { src: "/illustration-case-logistics.jpg", alt: "Logistics, renewals, and timeline illustration" },
  healthcare: { src: "/illustration-case-healthcare.webp", alt: "Healthcare and client-care workflows illustration" },
  retail: { src: "/illustration-case-retail.jpg", alt: "Customer experience and communications illustration" },
  legal: { src: "/illustration-case-legal.svg", alt: "Compliance and documentation illustration" },
  manufacturing: { src: "/illustration-case-manufacturing.svg", alt: "Operations and production illustration" },
  warehouse: { src: "/warehouse-hero.svg", alt: "Supply chain and operations illustration" },
} as const satisfies Record<string, PageVisual>;

/** Top-of-page heroes (marketing routes). */
export const pageHeroVisuals = {
  about: V.healthcare,
  pricing: V.finance,
  whatWeOffer: V.whatWeOfferHero,
  integration: V.logistics,
  otherServices: V.hero,
  vsCompetitors: V.legal,
  faq: V.retail,
  privacy: V.legal,
  terms: V.legal,
  inquiry: V.healthcare,
  successStories: V.finance,
} as const satisfies Record<string, PageVisual>;

/** Per–digital-solution service page (`/services/[slug]`). */
export const serviceSlugVisuals: Record<string, PageVisual> = {
  "blog-automation": V.retail,
  "technical-seo": V.logistics,
  "on-page-seo": V.retail,
  "business-consultancy": V.legal,
  "custom-app": V.manufacturing,
  "automation-app": V.hero,
};

/** Each core agent section on /what-we-offer — matches operational theme. */
export const agentSectionVisuals: Record<string, PageVisual> = {
  "billing-automation": V.finance,
  "collection-automation": V.agentCollectionAutomation,
  "policy-monitoring": V.logistics,
  "claims-assistance": V.agentClaimsAssistance,
  "accounting-reporting": V.agentAccountingReporting,
  "content-marketing": V.agentContentMarketing,
  "social-media": V.agentSocialMedia,
};

export function getServicePageVisual(slug: string): PageVisual {
  return serviceSlugVisuals[slug] ?? V.hero;
}

export function getAgentSectionVisual(agentId: string): PageVisual {
  return agentSectionVisuals[agentId] ?? V.hero;
}

/** Founder cards on About / home leadership — distinct silhouettes from expert set. */
export const founderPortraitVisuals: Record<string, PageVisual> = {
  "D.E. Wilson": { src: "/illustration-expert-1.svg", alt: "Portrait illustration for D.E. Wilson" },
  "John Ranel": { src: "/illustration-expert-2.svg", alt: "Portrait illustration for John Ranel" },
};
