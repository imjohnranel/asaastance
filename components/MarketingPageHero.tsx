import Image from "next/image";
import type { PageVisual } from "@/lib/page-visuals";
import { PageIntro } from "@/components/SiteSections";
import { cn } from "@/lib/utils";

type MarketingPageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  image: PageVisual;
  /** When true, stacks image below copy on all breakpoints (narrow intros). */
  stacked?: boolean;
  className?: string;
};

export function MarketingPageHero({
  eyebrow,
  title,
  description,
  image,
  stacked = false,
  className,
}: MarketingPageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-border bg-hero-agency",
        className
      )}
    >
      <div className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/4 rounded-full bg-violet-500/[0.1] blur-3xl dark:bg-violet-500/15" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-35" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6 py-14 lg:px-12 lg:py-20">
        <div
          className={cn(
            "grid items-center gap-10 lg:gap-14",
            stacked ? "grid-cols-1" : "lg:grid-cols-2"
          )}
        >
          <PageIntro eyebrow={eyebrow} title={title} description={description} className="text-left" />
          <div
            className={cn(
              "relative mx-auto w-full max-w-xl overflow-hidden rounded-[1.75rem] border border-border/80 bg-card/50 shadow-elevated ring-1 ring-primary/10 sm:rounded-[2rem] lg:max-w-none",
              stacked && "max-w-2xl"
            )}
          >
            <div className="relative aspect-[4/3] w-full sm:aspect-[16/10] lg:aspect-[5/4]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized
                priority
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/[0.07] via-transparent to-violet-500/[0.08]"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
