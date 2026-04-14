import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "@/components/SiteShell";
import { MarketingPageHero } from "@/components/MarketingPageHero";
import { Section, SectionInner } from "@/components/SiteSections";
import { pageHeroVisuals } from "@/lib/page-visuals";
import { IconArrowRight } from "@/components/icons";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Success stories",
  description: "Illustrative outcomes from automation and AI engagements across industries.",
};

export default function SuccessStoriesPage() {
  const caseStudies = [
    {
      industry: "Finance",
      title: "Fraud Detection at Scale",
      description:
        "Implemented a real-time predictive engine that reduced fraudulent transactions by 42% for a top-tier European bank.",
      category: "Predictive Analytics",
      image: "/illustration-case-finance.svg",
    },
    {
      industry: "Logistics",
      title: "Autonomous Route Optimization",
      description:
        "Optimized complex supply chain routes using custom AI models, resulting in a 15% reduction in carbon emissions.",
      category: "Optimization Engines",
      image: "/illustration-case-logistics.svg",
    },
    {
      industry: "Healthcare",
      title: "Patient Data Synthesis",
      description:
        "Utilized Generative AI to anonymize and synthesize clinical trial data, accelerating research by 6 months.",
      category: "Generative AI",
      image: "/illustration-case-healthcare.svg",
    },
    {
      industry: "Retail",
      title: "Hyper-Personalized CX",
      description:
        "Leveraged LLMs to power a cross-channel recommendation engine that increased AOV by 28%.",
      category: "NLP & LLMs",
      image: "/illustration-case-retail.svg",
    },
    {
      industry: "Manufacturing",
      title: "Computer Vision Inspection",
      description:
        "Developed a visual AI system that identified micro-defects with 99.9% accuracy on high-speed lines.",
      category: "Computer Vision",
      image: "/illustration-case-manufacturing.svg",
    },
    {
      industry: "Legal",
      title: "Automated Contract Review",
      description:
        "Built an NLP pipeline that reduced manual review time by 80% for enterprise compliance teams.",
      category: "Automation",
      image: "/illustration-case-legal.svg",
    },
  ];

  return (
    <SiteShell>
      <MarketingPageHero
        eyebrow="Outcomes"
        title="Success stories"
        description="Examples of how we partner with teams on automation and AI—illustrative scenarios aligned to finance, logistics, healthcare, and more."
        image={pageHeroVisuals.successStories}
      />

      <Section>
        <SectionInner className="pb-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/25">
              All projects
            </span>
            {["Generative AI", "Predictive analytics", "Process automation", "NLP & LLMs"].map((label) => (
              <span
                key={label}
                className="rounded-full border border-border bg-card px-5 py-2 text-sm font-medium text-muted-foreground"
              >
                {label}
              </span>
            ))}
          </div>
        </SectionInner>
      </Section>

      <Section muted className="pb-24">
        <SectionInner>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <article
                key={study.title}
                className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-sm transition-[transform,box-shadow] hover:-translate-y-1 hover:shadow-elevated"
              >
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-muted/30">
                  <Image
                    src={study.image}
                    alt=""
                    fill
                    unoptimized
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute left-4 top-4 z-10">
                    <span className="rounded-full bg-background/95 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary shadow-sm backdrop-blur">
                      {study.industry}
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <h3 className="font-display text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                    {study.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{study.description}</p>
                  <div className="mt-6 flex items-center justify-between">
                    <Link
                      href="/case-studies"
                      className="inline-flex items-center gap-2 font-display text-sm font-bold text-primary hover:underline"
                    >
                      Read more
                      <IconArrowRight className="size-4" />
                    </Link>
                    <span className="text-xs font-medium text-muted-foreground">{study.category}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionInner>
      </Section>

      <section className="border-t border-border bg-slate-100/90 px-6 py-20 dark:bg-zinc-900/50 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Ready to be our next success story?
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Tell us what you want to improve—we&apos;ll map a practical first workflow.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/inquiry">
              <Button className="h-12 rounded-full px-10 text-base font-bold shadow-lg shadow-primary/25">Get Started</Button>
            </Link>
            <Link href="/what-we-offer">
              <Button variant="outline" className="h-12 rounded-full border-2 px-10 text-base font-semibold">
                View capabilities
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
