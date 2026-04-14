/**
 * Illustration picks for pages and agent sections (SVGs in /public).
 * Maps each surface to a coherent visual so we are not reusing one generic asset everywhere.
 */

export type PageVisual = {
  src: string;
  alt: string;
};

const V = {
  hero: { src: "/hero-visual.svg", alt: "Abstract automation dashboard and workflow visualization" },
  finance: { src: "/illustration-case-finance.svg", alt: "Finance and billing operations illustration" },
  logistics: { src: "/illustration-case-logistics.svg", alt: "Logistics, renewals, and timeline illustration" },
  healthcare: { src: "/illustration-case-healthcare.svg", alt: "Healthcare and client-care workflows illustration" },
  retail: { src: "/illustration-case-retail.svg", alt: "Customer experience and communications illustration" },
  legal: { src: "/illustration-case-legal.svg", alt: "Compliance and documentation illustration" },
  manufacturing: { src: "/illustration-case-manufacturing.svg", alt: "Operations and production illustration" },
  warehouse: { src: "/warehouse-hero.svg", alt: "Supply chain and operations illustration" },
} as const satisfies Record<string, PageVisual>;

/** Top-of-page heroes (marketing routes). */
export const pageHeroVisuals = {
  about: V.healthcare,
  pricing: V.finance,
  whatWeOffer: V.hero,
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
  "collection-automation": V.finance,
  "policy-monitoring": V.logistics,
  "claims-assistance": V.healthcare,
  "accounting-reporting": V.finance,
  "content-marketing": V.retail,
  "social-media": V.retail,
  "graphic-design": V.manufacturing,
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
