import type { Metadata } from "next";
import { comprehensiveDigitalSolutionsIntro } from "@/lib/site-content";
import { pageHeroVisuals } from "@/lib/page-visuals";
import { SiteShell } from "@/components/SiteShell";
import { MarketingPageHero } from "@/components/MarketingPageHero";
import { Section, SectionInner } from "@/components/SiteSections";
import { DigitalSolutionsGrid } from "@/components/DigitalSolutionsGrid";

export const metadata: Metadata = {
  title: "Other Services",
  description: comprehensiveDigitalSolutionsIntro.description,
};

export default function OtherServicesPage() {
  return (
    <SiteShell>
      <MarketingPageHero
        eyebrow="Solutions"
        title={comprehensiveDigitalSolutionsIntro.title}
        description={comprehensiveDigitalSolutionsIntro.description}
        image={pageHeroVisuals.otherServices}
      />
      <Section>
        <SectionInner className="pb-16 pt-4 lg:pb-24">
          <DigitalSolutionsGrid />
        </SectionInner>
      </Section>
    </SiteShell>
  );
}
