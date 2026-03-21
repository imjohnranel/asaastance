import type { Metadata } from "next";
import { comprehensiveDigitalSolutionsIntro } from "@/lib/site-content";
import { SiteShell } from "@/components/SiteShell";
import { Section, SectionInner } from "@/components/SiteSections";
import { DigitalSolutionsGrid } from "@/components/DigitalSolutionsGrid";

export const metadata: Metadata = {
  title: "Other Services",
  description: comprehensiveDigitalSolutionsIntro.description,
};

export default function OtherServicesPage() {
  return (
    <SiteShell>
      <Section className="border-b border-border pb-12 pt-16 lg:pt-20">
        <SectionInner>
          <div className="mb-10 max-w-3xl md:mb-12">
            <h1 className="font-display text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl lg:text-5xl">
              {comprehensiveDigitalSolutionsIntro.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              {comprehensiveDigitalSolutionsIntro.description}
            </p>
          </div>
          <DigitalSolutionsGrid />
        </SectionInner>
      </Section>
    </SiteShell>
  );
}
