import type { Metadata } from "next";
import Link from "next/link";
import { integrationSteps, integrationSummary } from "@/lib/site-content";
import { SiteShell } from "@/components/SiteShell";
import { PageIntro, Section, SectionInner } from "@/components/SiteSections";
import { IntegrationTimeline } from "@/components/IntegrationTimeline";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Six Steps to Integration",
  description: `${integrationSummary.timeline}. ${integrationSummary.support}.`,
};

export default function IntegrationPage() {
  return (
    <SiteShell>
      <Section className="border-b border-border pb-12 pt-16 lg:pt-20">
        <SectionInner>
          <PageIntro
            eyebrow="Process"
            title="Six steps to integration"
            description={`${integrationSummary.timeline}. ${integrationSummary.support}.`}
          />
        </SectionInner>
      </Section>

      <Section muted>
        <SectionInner>
          <IntegrationTimeline steps={integrationSteps} />
        </SectionInner>
      </Section>

      <section className="border-t border-border px-6 py-16 lg:px-12">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <p className="text-lg text-muted-foreground">
            Want this mapped to <span className="font-semibold text-foreground">your</span> stack and timelines?
          </p>
          <Link href="/inquiry">
            <Button size="lg" className="h-12 rounded-full px-8">
              Book a discovery call
            </Button>
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
