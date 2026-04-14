import Image from "next/image";
import Link from "next/link";
import { homeFeatureHighlight, homeWhatWeDo, siteBrand } from "@/lib/site-content";
import { IconArrowUpRight, IconAutomation, IconLayers, IconChart } from "@/components/icons";
import { Button } from "./ui/button";
import { Eyebrow, Section, SectionInner } from "./SiteSections";
import { cn } from "@/lib/utils";

const icons = [IconAutomation, IconLayers, IconChart] as const;

export function HomeWhatWeDoSection() {
  return (
    <Section className="relative overflow-hidden border-b border-border bg-background py-16 lg:py-24">
      <div
        className="pointer-events-none absolute right-0 top-1/2 h-96 w-96 translate-x-1/3 -translate-y-1/2 rounded-full bg-primary/[0.06] blur-3xl"
        aria-hidden
      />
      <SectionInner className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="order-2 lg:order-1">
            <Eyebrow>{homeFeatureHighlight.eyebrow}</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl lg:text-[2.75rem] lg:leading-tight">
              {homeFeatureHighlight.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{homeFeatureHighlight.subtitle}</p>
            <p className="mt-6 inline-flex items-center rounded-full border border-primary/25 bg-primary/5 px-4 py-2 font-display text-xs font-bold uppercase tracking-wider text-primary">
              {homeFeatureHighlight.badge}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href="/inquiry">
                <Button className="h-12 rounded-full px-8 text-base font-bold shadow-md shadow-primary/20">Get Started</Button>
              </Link>
              <Link
                href="/what-we-offer"
                className="inline-flex items-center gap-2 font-display text-sm font-bold text-primary hover:underline"
              >
                Explore {siteBrand.name} Agents
                <IconArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div
              className="absolute -inset-4 rounded-[2.25rem] bg-gradient-to-br from-primary/20 via-transparent to-violet-500/15 blur-2xl"
              aria-hidden
            />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-border/80 bg-muted/30 shadow-elevated ring-1 ring-primary/10">
              <Image
                src={homeFeatureHighlight.imageSrc}
                alt={homeFeatureHighlight.imageAlt}
                fill
                className="object-cover object-center"
                unoptimized
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-violet-500/10" />
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-6">
          {homeWhatWeDo.map((item, i) => {
            const Icon = icons[i] ?? IconAutomation;
            return (
              <div
                key={item.title}
                className={cn(
                  "flex flex-col rounded-[1.5rem] border border-border bg-slate-50/90 p-6 shadow-sm ring-1 ring-primary/5 transition-[transform,box-shadow] hover:-translate-y-1 hover:shadow-lg dark:bg-zinc-900/40",
                  "lg:p-8"
                )}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-md shadow-primary/20">
                  <Icon className="size-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            );
          })}
        </div>
      </SectionInner>
    </Section>
  );
}
