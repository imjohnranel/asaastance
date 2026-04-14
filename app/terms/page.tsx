import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { MarketingPageHero } from "@/components/MarketingPageHero";
import { Section, SectionInner } from "@/components/SiteSections";
import { siteBrand } from "@/lib/site-content";
import { pageHeroVisuals } from "@/lib/page-visuals";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms governing use of the ${siteBrand.name} website.`,
};

export default function TermsPage() {
  return (
    <SiteShell>
      <MarketingPageHero
        eyebrow="Legal"
        title="Terms of Service"
        description={`By using this website, you agree to these terms. Custom work is governed by separate statements of work or contracts.`}
        image={pageHeroVisuals.terms}
        stacked
      />

      <Section muted className="pb-20 pt-4">
        <SectionInner>
          <div className="prose prose-slate max-w-3xl rounded-[2rem] border border-border bg-card p-8 shadow-sm dark:prose-invert lg:p-12">
            <h2 className="font-display text-xl font-bold">Website use</h2>
            <p>
              Content on this site is for general information. It may change without notice. Do not rely on the site
              as the sole basis for business, legal, or compliance decisions—confirm details with us directly.
            </p>
            <h2 className="mt-10 font-display text-xl font-bold">No guarantee of results</h2>
            <p>
              Case examples, metrics, and descriptions illustrate possibilities. Actual outcomes depend on your data,
              processes, and participation. Nothing on this site guarantees a particular financial or operational
              result.
            </p>
            <h2 className="mt-10 font-display text-xl font-bold">Intellectual property</h2>
            <p>
              {siteBrand.name} branding, copy, and materials on this site are owned by {siteBrand.name} or its
              licensors. Do not copy or redistribute without permission.
            </p>
            <h2 className="mt-10 font-display text-xl font-bold">Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, {siteBrand.name} is not liable for indirect or consequential
              damages arising from use of this website. Your sole remedy for dissatisfaction with the site is to stop
              using it.
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
