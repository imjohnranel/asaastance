import Link from "next/link";
import { Button } from "./ui/button";
import { homeHero, homeHeroVisual, siteBrand } from "@/lib/site-content";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-hero-agency pb-16 pt-10 sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-16">
      <div className="pointer-events-none absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-primary/[0.12] blur-3xl" aria-hidden />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-[24rem] w-[24rem] rounded-full bg-violet-500/[0.14] blur-3xl"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-40" aria-hidden />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="font-display text-xs font-bold uppercase tracking-[0.28em] text-primary sm:text-sm">
          {siteBrand.name}
        </p>
        <p className="mt-3 font-display text-sm font-semibold text-muted-foreground md:text-base">{homeHero.subheadline}</p>
        <h1 className="mt-6 font-display text-[2rem] font-extrabold leading-[1.08] tracking-tight text-foreground text-balance sm:text-4xl md:text-5xl lg:text-[3.25rem]">
          {homeHero.tagline}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {homeHero.body}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
          <Link href={homeHero.ctaPrimary.href}>
            <Button
              size="lg"
              className="h-14 min-w-[11rem] rounded-full px-10 text-base font-bold shadow-lg shadow-primary/25"
            >
              {homeHero.ctaPrimary.label}
            </Button>
          </Link>
          <Link
            href={homeHero.ctaSecondary.href}
            className="font-display text-base font-semibold text-primary underline decoration-primary/40 underline-offset-[6px] transition-colors hover:text-primary/90"
          >
            {homeHero.ctaSecondary.label}
          </Link>
        </div>
      </div>

      <div className="relative mx-auto mt-14 max-w-5xl px-4 sm:px-6 lg:mt-20 lg:px-8">
        <div className="relative mx-auto max-w-4xl">
          <div
            className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary/25 via-violet-500/15 to-transparent opacity-90 blur-xl sm:rounded-[2.25rem]"
            aria-hidden
          />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-border/80 bg-card shadow-elevated ring-1 ring-primary/10 sm:rounded-[2rem]">
            {/* eslint-disable-next-line @next/next/no-img-element -- SVG hero */}
            <img
              src="/hero-visual.svg"
              alt="Workflow automation and analytics preview"
              className="aspect-[4/3] w-full object-cover object-center sm:aspect-[16/10]"
              width={1200}
              height={900}
              decoding="async"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/25 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-left sm:p-8 md:p-10">
              <p className="max-w-xl font-display text-base font-semibold italic leading-relaxed text-white md:text-lg">
                &ldquo;{homeHeroVisual.quote}&rdquo;
              </p>
              <p className="mt-3 text-sm font-medium text-white/70">— {siteBrand.name}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
