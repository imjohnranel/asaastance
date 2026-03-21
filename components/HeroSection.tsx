import Link from "next/link";
import { Button } from "./ui/button";
import { homeHero, homeHeroVisual, siteBrand } from "@/lib/site-content";
import { Eyebrow } from "./SiteSections";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-border bg-background">
      <div className="pointer-events-none absolute inset-0 bg-brand-mesh opacity-[0.45] dark:opacity-[0.35]" aria-hidden />
      <div
        className="pointer-events-none absolute -left-24 top-0 h-[140%] w-[min(55vw,28rem)] -rotate-6 rounded-[3rem] bg-primary/[0.09] dark:bg-primary/[0.06]"
        aria-hidden
      />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-primary/12 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-50" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-10 lg:py-14">
        <div className="grid grid-cols-1 items-stretch gap-3 sm:gap-4 lg:grid-cols-12">
          {/* Text bento column */}
          <div className="flex flex-col gap-3 border-l-4 border-primary pl-4 sm:pl-5 lg:col-span-7 lg:gap-3.5">
            <Eyebrow className="mb-0">{homeHero.subheadline}</Eyebrow>
            <h1 className="font-display text-4xl font-extrabold leading-[0.95] tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl xl:text-7xl">
              {homeHero.headline}
            </h1>
            <p className="max-w-xl font-display text-lg font-semibold text-primary text-balance sm:text-xl md:text-2xl">
              {homeHero.tagline}
            </p>
            <p className="max-w-lg text-muted-foreground leading-relaxed">{homeHero.body}</p>
            <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:gap-4">
              <Link href={homeHero.ctaPrimary.href}>
                <Button size="lg" className="h-12 w-full rounded-full px-8 text-base shadow-md shadow-primary/20 sm:h-14 sm:w-auto sm:px-10">
                  {homeHero.ctaPrimary.label}
                </Button>
              </Link>
              <Link href={homeHero.ctaSecondary.href}>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 w-full rounded-full border-2 px-8 text-base backdrop-blur-sm sm:h-14 sm:w-auto sm:px-10"
                >
                  {homeHero.ctaSecondary.label}
                </Button>
              </Link>
            </div>
          </div>

          {/* Visual bento tile */}
          <div className="relative min-h-[240px] lg:col-span-5 lg:min-h-0">
            <div className="relative h-full min-h-[260px] animate-hero-panel-float sm:min-h-[300px] lg:min-h-[min(100%,420px)]">
              <div
                className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/35 via-primary/10 to-transparent opacity-90 blur-sm sm:rounded-[1.5rem]"
                aria-hidden
              />
              <div className="relative flex h-full min-h-[inherit] flex-col overflow-hidden rounded-2xl border border-border/80 bg-card/95 shadow-elevated ring-1 ring-primary/15 backdrop-blur-[2px] sm:rounded-[1.5rem]">
                <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-primary/10" aria-hidden />
                <div className="relative min-h-0 flex-1">
                  <img
                    src="/hero-visual.svg"
                    alt="Workflow automation and analytics preview"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                    width={1200}
                    height={900}
                    decoding="async"
                    fetchPriority="high"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-background sm:p-6 md:p-7">
                    <p className="font-display text-sm font-semibold italic leading-relaxed md:text-base">
                      &ldquo;{homeHeroVisual.quote}&rdquo;
                    </p>
                    <p className="mt-2 text-xs font-medium text-background/75">— {siteBrand.name}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
