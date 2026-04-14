import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { digitalSolutionServices, siteBrand } from "@/lib/site-content";
import { getServicePageVisual } from "@/lib/page-visuals";
import { SiteShell } from "@/components/SiteShell";
import { MarketingPageHero } from "@/components/MarketingPageHero";
import { Section, SectionInner } from "@/components/SiteSections";
import { Button } from "@/components/ui/button";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return digitalSolutionServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = digitalSolutionServices.find((s) => s.slug === slug);
  if (!service) return { title: "Service" };
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function DigitalServicePage({ params }: Props) {
  const { slug } = await params;
  const service = digitalSolutionServices.find((s) => s.slug === slug);
  if (!service) notFound();

  const visual = getServicePageVisual(slug);

  return (
    <SiteShell>
      <MarketingPageHero
        eyebrow="Service"
        title={service.title}
        description={service.description}
        image={visual}
      />

      <Section muted className="pb-20 pt-4">
        <SectionInner>
          <div className="mx-auto max-w-3xl rounded-[2rem] border border-border bg-card p-8 shadow-sm lg:p-10">
            <h2 className="font-display text-sm font-bold uppercase tracking-widest text-primary">Highlights</h2>
            <ul className="mt-6 space-y-3">
              {service.bullets.map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm font-medium text-foreground/90 leading-relaxed">
                  <span className="size-2 shrink-0 rounded-full bg-primary/80" />
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/inquiry">
                <Button size="lg" className="h-12 rounded-full px-8 shadow-md shadow-primary/20">
                  Book a consultation
                </Button>
              </Link>
              <Link href="/other-services">
                <Button size="lg" variant="outline" className="h-12 rounded-full border-2 px-8">
                  All solutions
                </Button>
              </Link>
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              {siteBrand.name} — enterprise-ready delivery aligned with your roadmap.
            </p>
          </div>
        </SectionInner>
      </Section>
    </SiteShell>
  );
}
