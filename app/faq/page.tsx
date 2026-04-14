import type { Metadata } from "next";
import Link from "next/link";
import { faqPageContent } from "@/lib/site-content";
import { pageHeroVisuals } from "@/lib/page-visuals";
import { SiteShell } from "@/components/SiteShell";
import { MarketingPageHero } from "@/components/MarketingPageHero";
import { Section, SectionInner } from "@/components/SiteSections";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "FAQ",
  description: faqPageContent.description,
};

export default function FaqPage() {
  return (
    <SiteShell>
      <MarketingPageHero
        eyebrow="Help"
        title={faqPageContent.title}
        description={faqPageContent.description}
        image={pageHeroVisuals.faq}
      />

      <Section className="border-b border-border bg-zinc-950 py-16 text-zinc-100 lg:py-24">
        <SectionInner>
          <div className="mx-auto max-w-3xl space-y-2">
            {faqPageContent.items.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 px-5 py-1 open:border-zinc-600 open:bg-zinc-900/80"
              >
                <summary className="cursor-pointer list-none py-4 font-display text-base font-bold leading-snug text-zinc-100 marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start justify-between gap-4">
                    <span>{item.question}</span>
                    <span
                      className="mt-0.5 shrink-0 text-primary transition-transform duration-200 group-open:rotate-45"
                      aria-hidden
                    >
                      +
                    </span>
                  </span>
                </summary>
                <div className="border-t border-zinc-800/90 pb-4 pt-3 text-sm leading-relaxed text-zinc-400">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>

          <div className="mx-auto mt-14 max-w-xl rounded-[2rem] border border-zinc-700 bg-zinc-900/80 px-8 py-10 text-center">
            <p className="font-display text-lg font-semibold text-zinc-100">Still unsure?</p>
            <p className="mt-2 text-zinc-400">
              Tell us your industry and what slows the team down—we&apos;ll suggest where to start.
            </p>
            <Link href="/inquiry" className="mt-6 inline-block">
              <Button size="lg" className="h-12 rounded-full px-10">
                Contact us
              </Button>
            </Link>
          </div>
        </SectionInner>
      </Section>
    </SiteShell>
  );
}
