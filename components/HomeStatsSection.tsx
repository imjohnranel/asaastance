import { homeStatsSection, homeStatsTestimonial } from "@/lib/site-content";
import { Eyebrow, Section, SectionInner } from "./SiteSections";

export function HomeStatsSection() {
  return (
    <Section className="relative overflow-hidden border-b border-border bg-background">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-[min(100%,48rem)] -translate-x-1/2 rounded-full bg-primary/[0.06] blur-3xl"
        aria-hidden
      />
      <SectionInner className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Impact</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
            {homeStatsSection.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{homeStatsSection.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-12 lg:items-stretch">
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-2">
            {homeStatsSection.metrics.map((m) => (
              <div
                key={m.label}
                className="flex flex-col justify-center rounded-[1.75rem] border border-border bg-card p-6 shadow-sm ring-1 ring-primary/5 transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-elevated md:p-8"
              >
                <p className="font-display text-3xl font-extrabold tracking-tight text-primary md:text-4xl">
                  {m.value}
                </p>
                <p className="mt-2 text-sm font-medium leading-snug text-muted-foreground">{m.label}</p>
              </div>
            ))}
          </div>

          <aside className="lg:col-span-4">
            <figure className="flex h-full flex-col justify-between rounded-[1.75rem] border border-primary/25 bg-gradient-to-br from-primary/15 via-primary/5 to-violet-500/10 p-8 shadow-inner ring-1 ring-primary/10">
              <blockquote className="font-display text-lg font-semibold leading-relaxed text-foreground text-balance">
                &ldquo;{homeStatsTestimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 border-t border-primary/20 pt-6">
                <p className="font-display text-sm font-bold text-foreground">{homeStatsTestimonial.name}</p>
                <p className="mt-1 text-xs font-medium text-muted-foreground">{homeStatsTestimonial.role}</p>
              </figcaption>
            </figure>
          </aside>
        </div>
      </SectionInner>
    </Section>
  );
}
