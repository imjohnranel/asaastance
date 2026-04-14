import type { Metadata } from "next";
import Link from "next/link";
import {
  comparisonBottomLine,
  comparisonRows,
  vsCompetitorsPage,
} from "@/lib/site-content";
import { pageHeroVisuals } from "@/lib/page-visuals";
import { SiteShell } from "@/components/SiteShell";
import { MarketingPageHero } from "@/components/MarketingPageHero";
import { Section, SectionInner } from "@/components/SiteSections";
import { VsComparisonBoard } from "@/components/VsComparisonBoard";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Us vs Them",
  description: comparisonBottomLine.text,
};

export default function VsCompetitorsPage() {
  return (
    <SiteShell>
      <MarketingPageHero
        eyebrow={vsCompetitorsPage.eyebrow}
        title={vsCompetitorsPage.headline}
        description={vsCompetitorsPage.subhead}
        image={pageHeroVisuals.vsCompetitors}
      />

      <Section muted className="py-16 lg:py-24">
        <SectionInner>
          <VsComparisonBoard
            rows={comparisonRows}
            usTab={vsCompetitorsPage.usTab}
            themTab={vsCompetitorsPage.themTab}
            usTitle={vsCompetitorsPage.usTitle}
            themTitle={vsCompetitorsPage.themTitle}
          />

          <div className="mx-auto mt-16 max-w-3xl rounded-3xl border border-border bg-card p-8 shadow-elevated md:mt-20 md:p-10 lg:max-w-none">
            <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
              {comparisonBottomLine.headline}
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {comparisonBottomLine.text}
            </p>
            <Link href="/inquiry" className="mt-8 inline-block">
              <Button size="lg" className="h-12 rounded-full px-8">
                Talk to us
              </Button>
            </Link>
          </div>
        </SectionInner>
      </Section>
    </SiteShell>
  );
}
