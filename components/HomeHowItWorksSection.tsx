import Link from "next/link";
import { IconArrowRight } from "@/components/icons";
import { homeHowItWorks } from "@/lib/site-content";
import { Eyebrow, Section, SectionInner } from "./SiteSections";

export function HomeHowItWorksSection() {
  return (
    <Section muted className="border-b border-border">
      <SectionInner>
        <div className="rounded-[2rem] border border-border/70 bg-card/60 px-6 py-12 shadow-md ring-1 ring-primary/10 sm:px-10 lg:px-14 lg:py-16">
        <div className="mb-14 max-w-2xl">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            From discovery to deployment—without drowning your team in complexity.
          </h2>
        </div>

        <div className="relative">
          <div
            className="absolute left-[2.25rem] top-4 bottom-4 hidden w-px bg-gradient-to-b from-primary via-primary/30 to-border md:block lg:left-[2.75rem]"
            aria-hidden
          />
          <ol className="flex flex-col gap-12 md:gap-0 md:divide-y md:divide-border/80">
            {homeHowItWorks.map((step) => (
              <li
                key={step.step}
                className="relative grid gap-6 pb-12 md:grid-cols-[5.5rem_1fr] md:gap-10 md:pb-14 md:pt-14 [&:first-child]:md:pt-0"
              >
                <div className="flex items-start gap-4 md:block md:pt-1">
                  <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border-2 border-primary bg-background font-display text-lg font-extrabold text-primary shadow-sm md:h-14 md:w-14 md:text-xl">
                    {step.step}
                  </span>
                  <div className="h-px flex-1 bg-border md:hidden" aria-hidden />
                </div>
                <div className="md:-mt-1 md:border-l md:border-transparent md:pl-0">
                  <h3 className="font-display text-2xl font-bold text-foreground">{step.title}</h3>
                  <p className="mt-3 max-w-xl text-lg text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-6 border-t border-border pt-10">
          <Link
            href="/integration"
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-5 py-2.5 font-display text-sm font-bold text-primary transition-colors hover:border-primary hover:bg-primary/10"
          >
            See the full 6-step integration timeline
            <IconArrowRight className="size-4" />
          </Link>
        </div>
        </div>
      </SectionInner>
    </Section>
  );
}
