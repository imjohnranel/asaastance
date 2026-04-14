import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { aboutContent } from "@/lib/site-content";
import { founderPortraitVisuals, pageHeroVisuals } from "@/lib/page-visuals";
import { SiteShell } from "@/components/SiteShell";
import { MarketingPageHero } from "@/components/MarketingPageHero";
import { Section, SectionInner, Eyebrow } from "@/components/SiteSections";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description: aboutContent.story,
};

export default function AboutPage() {
  return (
    <SiteShell>
      <MarketingPageHero
        eyebrow="About"
        title="Our story"
        description={aboutContent.story}
        image={pageHeroVisuals.about}
      />

      <Section muted>
        <SectionInner>
          <div>
            <Eyebrow>Co-founders</Eyebrow>
            <div className="mt-3 h-0.5 w-14 rounded-full bg-primary" aria-hidden />
          </div>
          <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
            {aboutContent.founders.map((f) => (
              <article
                key={f.name}
                className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-elevated transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[21/9] w-full bg-muted/30 sm:aspect-[2/1]">
                  <Image
                    src={founderPortraitVisuals[f.name]?.src ?? "/portrait-placeholder.svg"}
                    alt={founderPortraitVisuals[f.name]?.alt ?? f.name}
                    fill
                    className="object-cover object-center"
                    unoptimized
                  />
                </div>
                <div className="p-8 lg:p-10">
                <h2 className="font-display text-2xl font-bold text-foreground">{f.name}</h2>
                <p className="mt-1 text-sm font-semibold text-primary">{f.role}</p>
                <p className="mt-5 text-muted-foreground leading-relaxed">{f.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionInner>
      </Section>

      <Section>
        <SectionInner>
          <div className="max-w-3xl">
            <Eyebrow>Philosophy</Eyebrow>
            <div className="mt-3 h-0.5 w-14 rounded-full bg-primary" aria-hidden />
            <blockquote className="mt-8 font-display text-2xl font-semibold leading-snug text-foreground md:text-3xl text-balance">
              {aboutContent.philosophy}
            </blockquote>
          </div>
          <Link href="/inquiry" className="mt-12 inline-block">
            <Button size="lg" className="h-12 rounded-full px-8">
              Get Started
            </Button>
          </Link>
        </SectionInner>
      </Section>
    </SiteShell>
  );
}
