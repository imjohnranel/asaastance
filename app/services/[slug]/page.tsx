import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { digitalSolutionServices, siteBrand } from "@/lib/site-content";
import { SiteShell } from "@/components/SiteShell";
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

  return (
    <SiteShell>
      <Section className="border-b border-border pb-12 pt-16 lg:pt-20">
        <SectionInner>
          <div className="max-w-3xl">
            <p className="font-display text-xs font-bold uppercase tracking-widest text-primary">Service</p>
            <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {service.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{service.description}</p>
            <ul className="mt-8 space-y-2">
              {service.bullets.map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                  <span className="size-1.5 shrink-0 rounded-full bg-primary/70" />
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/inquiry">
                <Button size="lg" className="h-12 rounded-full px-8">
                  Book a consultation
                </Button>
              </Link>
              <Link href="/other-services">
                <Button size="lg" variant="outline" className="h-12 rounded-full px-8">
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
