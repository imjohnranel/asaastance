import { homeTrustedBy } from "@/lib/site-content";
import { SectionInner } from "./SiteSections";

export function HomeTrustedBySection() {
  return (
    <section
      className="relative w-full border-b border-border bg-slate-50/90 py-14 dark:bg-zinc-950/40 lg:py-16"
      aria-labelledby="trusted-by-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-brand-mesh opacity-40 dark:opacity-25" aria-hidden />
      <SectionInner className="relative">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-border/80 bg-background/80 px-6 py-10 shadow-sm ring-1 ring-primary/5 backdrop-blur-sm dark:bg-zinc-900/50 lg:px-12 lg:py-12">
          <p
            id="trusted-by-heading"
            className="text-center font-display text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground"
          >
            {homeTrustedBy.label}
          </p>
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-10 md:gap-x-16">
            {homeTrustedBy.partners.map((p) => (
              <li key={p.name} className="flex flex-col items-center gap-3 grayscale transition-[filter,opacity] hover:grayscale-0">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-card font-display text-xl font-extrabold text-primary shadow-md ring-1 ring-primary/10"
                  aria-hidden
                >
                  {p.initial}
                </div>
                <span className="max-w-[10rem] text-center text-xs font-semibold leading-snug text-muted-foreground">
                  {p.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </SectionInner>
    </section>
  );
}
