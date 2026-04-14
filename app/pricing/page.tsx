import type { Metadata } from "next";
import Link from "next/link";
import { pricingPackages } from "@/lib/site-content";
import { pageHeroVisuals } from "@/lib/page-visuals";
import { SiteShell } from "@/components/SiteShell";
import { MarketingPageHero } from "@/components/MarketingPageHero";
import { Section, SectionInner, Eyebrow } from "@/components/SiteSections";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Asaastance packages from Essential through Enterprise and AI Services + Customized PC.",
};

export default function PricingPage() {
  return (
    <SiteShell>
      <MarketingPageHero
        eyebrow="Packages"
        title="Pricing that scales with your agents"
        description="Transparent tiers in PHP with USD reference. API usage is called out where it applies—no surprise line items."
        image={pageHeroVisuals.pricing}
      />

      <Section>
        <SectionInner>
          <div className="grid gap-8 lg:grid-cols-2">
            {pricingPackages.map((pkg) => (
              <article
                key={pkg.id}
                className={cn(
                  "flex flex-col rounded-3xl border bg-card p-8 shadow-sm transition-shadow duration-200 lg:p-10",
                  pkg.highlight
                    ? "border-primary border-2 shadow-lg shadow-primary/10 ring-2 ring-primary/20"
                    : "border-border hover:shadow-md",
                  pkg.id === "ai-pc" &&
                    "ring-2 ring-primary/25 bg-gradient-to-b from-card via-card to-primary/[0.06]"
                )}
              >
                {pkg.highlight ? (
                  <Eyebrow className="mb-2 text-primary">Most popular</Eyebrow>
                ) : null}
                <h2 className="font-display text-2xl font-bold text-foreground">{pkg.name}</h2>
                <div className="mt-4 flex flex-wrap items-baseline gap-2">
                  <span className="font-display text-4xl font-extrabold text-foreground">{pkg.pricePhp}</span>
                  <span className="text-lg text-muted-foreground">{pkg.priceUsd}</span>
                  {pkg.subtitle ? (
                    <span className="text-sm text-muted-foreground">{pkg.subtitle}</span>
                  ) : null}
                </div>
                {pkg.earlyAdopterPhp ? (
                  <p className="mt-3 rounded-xl bg-primary/10 px-4 py-3 text-sm font-semibold text-foreground">
                    Early AI Adopters: {pkg.earlyAdopterPhp}{" "}
                    <span className="font-normal text-muted-foreground">({pkg.earlyAdopterUsd})</span>
                    <span className="mt-1 block text-xs font-normal text-muted-foreground">
                      Per month · exclusive of API costs
                    </span>
                  </p>
                ) : null}
                <ul className="mt-8 flex-1 space-y-3 text-sm text-muted-foreground">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex gap-3 leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                {pkg.pcSpecs && pkg.pcSpecs.length > 0 ? (
                  <div className="mt-8 rounded-2xl border-2 border-dashed border-primary/40 bg-background/80 p-5 shadow-inner dark:bg-muted/25">
                    <h3 className="font-display text-xs font-bold uppercase tracking-widest text-primary">
                      Customized PC specifications
                    </h3>
                    <ul className="mt-3 grid gap-1.5 font-mono text-xs text-muted-foreground sm:grid-cols-2">
                      {pkg.pcSpecs.map((spec) => (
                        <li key={spec}>{spec}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                {pkg.footnotes && pkg.footnotes.length > 0 ? (
                  <div className="mt-6 space-y-2 border-t border-border pt-6 text-xs text-muted-foreground">
                    {pkg.footnotes.map((fn) => (
                      <p key={fn}>{fn}</p>
                    ))}
                  </div>
                ) : null}
                <p className="mt-8 text-sm font-medium text-foreground">
                  <span className="text-muted-foreground">Best for:</span> {pkg.bestFor}
                </p>
                <Link href="/inquiry" className="mt-8">
                  <Button
                    className={cn("h-12 w-full rounded-full", pkg.highlight && "shadow-md shadow-primary/20")}
                    variant={pkg.highlight ? "default" : "outline"}
                  >
                    Get Started
                  </Button>
                </Link>
              </article>
            ))}
          </div>

          <p className="mt-12 max-w-3xl text-sm text-muted-foreground">
            Financing may be available for hardware where noted. API spend varies by workload; we help you
            budget and manage provider accounts up front.
          </p>
        </SectionInner>
      </Section>
    </SiteShell>
  );
}
