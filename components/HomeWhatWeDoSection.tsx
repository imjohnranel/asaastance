import Link from "next/link";
import { IconArrowUpRight, IconAutomation, IconLayers, IconChart } from "@/components/icons";
import { homeWhatWeDo, siteBrand } from "@/lib/site-content";
import { Eyebrow, Section, SectionInner } from "./SiteSections";
import { cn } from "@/lib/utils";

const icons = [IconAutomation, IconLayers, IconChart] as const;

export function HomeWhatWeDoSection() {
  const bentoClass = (i: number) =>
    cn(
      "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-[transform,box-shadow,border-color] duration-300 sm:rounded-3xl sm:p-7 md:p-8",
      "hover:-translate-y-1 hover:border-primary/35 hover:shadow-elevated",
      /* Tall left tile + two stacked right tiles — no dead grid space */
      i === 0 && "md:col-span-7 md:row-span-2 md:min-h-0",
      i === 1 && "md:col-span-5 md:row-start-1 md:col-start-8",
      i === 2 && "md:col-span-5 md:row-start-2 md:col-start-8"
    );

  return (
    <Section muted className="relative overflow-hidden py-14 lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-brand-mesh opacity-30" aria-hidden />
      <div
        className="pointer-events-none absolute -left-40 top-1/4 h-[28rem] w-[28rem] rounded-full bg-primary/[0.08] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-64 w-96 translate-x-1/4 bg-gradient-to-tl from-primary/15 to-transparent opacity-70"
        aria-hidden
      />
      <SectionInner className="relative">
        <div className="mb-6 max-w-xl md:mb-8">
          <Eyebrow>What we do</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
            Built around how you actually operate—not a generic playbook.
          </h2>
          <p className="mt-5 max-w-md text-muted-foreground">
            Three pillars. One goal: remove friction between your workflows and the tools that should
            support them.
          </p>
          <Link
            href="/what-we-offer"
            className="mt-8 inline-flex items-center gap-2 font-display text-sm font-bold text-primary hover:underline"
          >
            Explore {siteBrand.name} Agents
            <IconArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-12 md:grid-rows-2 md:gap-4 md:min-h-[300px] lg:min-h-[340px]">
          {homeWhatWeDo.map((item, i) => {
            const Icon = icons[i] ?? IconAutomation;
            return (
              <div key={item.title} className={cn(bentoClass(i), "md:h-full")}>
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/10 transition-transform duration-500 group-hover:scale-110"
                  aria-hidden
                />
                <div className="relative flex h-full flex-col">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/12 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-7" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="mt-3 max-w-prose flex-1 text-muted-foreground leading-relaxed">{item.description}</p>
                  <div
                    className="pointer-events-none mt-6 h-1 w-full max-w-[7rem] rounded-full bg-gradient-to-r from-primary via-primary/40 to-transparent opacity-80 transition-all duration-300 group-hover:max-w-[10rem] group-hover:opacity-100"
                    aria-hidden
                  />
                </div>
              </div>
            );
          })}
        </div>
      </SectionInner>
    </Section>
  );
}
