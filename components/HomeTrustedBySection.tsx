import { homeTrustedBy } from "@/lib/site-content";
import { SectionInner } from "./SiteSections";

export function HomeTrustedBySection() {
  return (
    <section
      className="relative w-full border-b border-border bg-background py-12 lg:py-14"
      aria-labelledby="trusted-by-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-brand-mesh opacity-70" aria-hidden />
      <SectionInner className="relative">
        <p
          id="trusted-by-heading"
          className="text-center font-display text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground"
        >
          {homeTrustedBy.label}
        </p>
        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-8 md:gap-x-14">
          {homeTrustedBy.partners.map((p) => (
            <li key={p.name} className="flex flex-col items-center gap-2">
              <div
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-card font-display text-lg font-extrabold text-primary shadow-sm ring-1 ring-primary/10"
                aria-hidden
              >
                {p.initial}
              </div>
              <span className="max-w-[9rem] text-center text-xs font-medium leading-snug text-muted-foreground">
                {p.name}
              </span>
            </li>
          ))}
        </ul>
      </SectionInner>
    </section>
  );
}
