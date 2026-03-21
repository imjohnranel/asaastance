import type { Metadata } from "next";
import Link from "next/link";
import { aboutContent } from "@/lib/site-content";
import { SiteShell } from "@/components/SiteShell";
import { PageIntro, Section, SectionInner, Eyebrow } from "@/components/SiteSections";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description: aboutContent.story,
};

export default function AboutPage() {
  return (
    <SiteShell>
      <Section className="border-b border-border pb-12 pt-16 lg:pt-20">
        <SectionInner>
          <PageIntro eyebrow="About" title="Our story" description={aboutContent.story} />
        </SectionInner>
      </Section>

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
                className="rounded-3xl border border-border bg-card p-8 shadow-elevated transition-shadow hover:shadow-lg lg:p-10"
              >
                <h2 className="font-display text-2xl font-bold text-foreground">{f.name}</h2>
                <p className="mt-1 text-sm font-semibold text-primary">{f.role}</p>
                <p className="mt-5 text-muted-foreground leading-relaxed">{f.bio}</p>
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
