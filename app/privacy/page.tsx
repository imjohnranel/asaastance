import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { MarketingPageHero } from "@/components/MarketingPageHero";
import { Section, SectionInner } from "@/components/SiteSections";
import { siteBrand } from "@/lib/site-content";
import { pageHeroVisuals } from "@/lib/page-visuals";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteBrand.name} handles information you share with us.`,
};

export default function PrivacyPage() {
  return (
    <SiteShell>
      <MarketingPageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description={`This page describes how ${siteBrand.name} treats information collected through this website and our engagement process. It is a summary for transparency—not a substitute for a signed agreement specific to your organization.`}
        image={pageHeroVisuals.privacy}
        stacked
      />

      <Section muted className="pb-20 pt-4">
        <SectionInner>
          <div className="prose prose-slate max-w-3xl rounded-[2rem] border border-border bg-card p-8 shadow-sm dark:prose-invert lg:p-12">
            <h2 className="font-display text-xl font-bold">What we collect</h2>
            <p>
              When you submit an inquiry, we collect what you choose to provide (name, contact details, company
              context, and message). Technical logs typical of web hosting may also be collected by our providers
              (e.g. IP region, browser type) for security and reliability.
            </p>
            <h2 className="mt-10 font-display text-xl font-bold">How we use it</h2>
            <p>
              We use this information to respond to you, scope projects, and improve our services. We do not sell
              your personal data. If we use subprocessors (such as email or database providers), we select them for
              reasonable security practices.
            </p>
            <h2 className="mt-10 font-display text-xl font-bold">Retention</h2>
            <p>
              We keep inquiry and project-related correspondence as long as needed for the relationship and any
              legal obligations. You may ask us to delete or export certain contact details where applicable law
              allows.
            </p>
            <h2 className="mt-10 font-display text-xl font-bold">Contact</h2>
            <p>
              For privacy questions, reach us through the{" "}
              <a className="font-semibold text-primary hover:underline" href="/inquiry">
                contact form
              </a>
              .
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleDateString("en-PH", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>
        </SectionInner>
      </Section>
    </SiteShell>
  );
}
