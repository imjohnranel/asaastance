import Link from "next/link";
import { cn } from "@/lib/utils";

type Step = {
  title: string;
  bullets: readonly string[];
};

function parseStepTitle(full: string): { heading: string; phase: string } {
  const m = full.match(/^(.*?)\s*\(([^)]+)\)\s*$/);
  if (m) return { heading: m[1].trim(), phase: m[2].trim() };
  return { heading: full, phase: "" };
}

function TimelinePill({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 rounded-full bg-gradient-to-r from-primary to-sky-500 px-4 py-2 text-sm font-semibold tracking-tight text-primary-foreground shadow-lg shadow-primary/25",
        className
      )}
    >
      {children}
    </span>
  );
}

function TimelineCard({ step, className }: { step: Step; className?: string }) {
  const { heading, phase } = parseStepTitle(step.title);
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-md dark:bg-zinc-900 dark:shadow-none",
        className
      )}
    >
      <div
        className="pointer-events-none absolute -right-10 -top-10 size-36 rounded-full border border-primary/15 opacity-50"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-16 left-4 size-44 rounded-full border border-primary/5 opacity-40"
        aria-hidden
      />
      <div className="relative">
        <h3 className="font-display text-lg font-bold leading-snug md:text-xl">
          <span className="text-primary">{heading}</span>
          {phase ? (
            <span className="font-semibold text-primary/70 dark:text-primary/80"> ({phase})</span>
          ) : null}
        </h3>
        <ul className="mt-5 space-y-3 text-muted-foreground">
          {step.bullets.map((b) => (
            <li key={b} className="flex gap-3 text-sm leading-relaxed md:text-base">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/70" />
              {b}
            </li>
          ))}
        </ul>
        <Link
          href="/inquiry"
          className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
        >
          Discuss this phase
          <span aria-hidden className="text-primary">
            →
          </span>
        </Link>
      </div>
    </div>
  );
}

export function IntegrationTimeline({ steps }: { steps: readonly Step[] }) {
  return (
    <section aria-label="Integration timeline">
      <div className="relative mx-auto max-w-2xl">
        <div
          className="pointer-events-none absolute left-1/2 top-8 bottom-8 hidden w-px -translate-x-1/2 bg-border md:block"
          aria-hidden
        />

        <ol className="relative list-none">
          {steps.map((step, i) => {
            const { phase } = parseStepTitle(step.title);
            const pillLabel = phase || `Step ${i + 1}`;
            const isLast = i === steps.length - 1;

            return (
              <li
                key={step.title}
                className={cn("relative", !isLast && "pb-12 md:pb-16")}
              >
                <div className="flex w-full flex-col items-center gap-3">
                  <div className="relative flex w-full justify-center">
                    <div
                      className="absolute left-1/2 top-1/2 z-0 hidden size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-background bg-primary shadow-md shadow-primary/35 md:block"
                      aria-hidden
                    />
                    <TimelinePill className="relative z-[1]">{pillLabel}</TimelinePill>
                  </div>
                  <TimelineCard step={step} className="w-full" />
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
