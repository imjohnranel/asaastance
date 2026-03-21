import { cn } from "@/lib/utils";

type Row = { them: string; us: string };

function IconThumbsUp({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M7 10v12"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3 3 0 0 1 3 3v4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconThumbsDown({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M17 14V2"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3 3 0 0 1-3-3v-4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconCheck({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M20 6 9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconCross({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M18 6 6 18M6 6l12 12"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ComparisonCard({
  variant,
  tabLabel,
  title,
  rows,
  pick,
}: {
  variant: "positive" | "negative";
  tabLabel: string;
  title: string;
  rows: Row[];
  pick: "us" | "them";
}) {
  const isPositive = variant === "positive";

  return (
    <div
      className={cn(
        "flex min-w-0 flex-col gap-0 sm:flex-row sm:items-stretch",
        isPositive ? "lg:-mt-1" : "lg:mt-4"
      )}
    >
      {/* Gradient tab — horizontal on mobile, vertical strip on sm+ */}
      <div
        className={cn(
          "flex shrink-0 flex-row items-center justify-center gap-3 px-5 py-3 sm:w-[4.25rem] sm:flex-col sm:gap-4 sm:px-2 sm:py-8",
          "rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none",
          isPositive
            ? "bg-gradient-to-b from-sky-300 via-primary to-blue-950 dark:from-blue-400 dark:via-primary dark:to-background"
            : "bg-gradient-to-b from-slate-300 via-slate-500 to-slate-800 dark:from-slate-600 dark:via-slate-700 dark:to-slate-950"
        )}
      >
        {isPositive ? (
          <IconThumbsUp className="size-7 text-white sm:size-8" />
        ) : (
          <IconThumbsDown className="size-7 text-white sm:size-8" />
        )}
        <span className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white sm:hidden">
          {tabLabel}
        </span>
        <span
          className="hidden font-display text-xs font-bold uppercase tracking-[0.28em] text-white sm:block sm:[writing-mode:vertical-rl] sm:rotate-180"
          aria-hidden
        >
          {tabLabel}
        </span>
      </div>

      {/* Content panel — overlaps tab on larger screens */}
      <div
        className={cn(
          "relative z-10 flex min-w-0 flex-1 flex-col rounded-2xl border bg-card sm:-ml-4 sm:rounded-l-none sm:rounded-r-2xl sm:pl-2",
          isPositive
            ? "border-border/80 shadow-elevated ring-1 ring-primary/10 dark:shadow-[0_28px_64px_-18px_rgba(0,0,0,0.55)]"
            : "border-border/60 bg-muted/25 shadow-sm dark:bg-muted/15 dark:shadow-none"
        )}
      >
        <div className="border-b border-border/80 px-6 pb-5 pt-6 sm:px-8 sm:pt-8">
          <h2
            className={cn(
              "text-center font-display text-xl font-bold tracking-tight sm:text-left md:text-2xl",
              isPositive ? "text-foreground" : "font-semibold text-foreground/90"
            )}
          >
            {title}
          </h2>
        </div>
        <ul className="flex flex-col gap-0 px-4 py-2 sm:px-6 sm:py-4" aria-label={title}>
          {rows.map((row) => {
            const text = pick === "us" ? row.us : row.them;
            return (
              <li
                key={text}
                className="flex gap-3 border-b border-border/50 py-4 last:border-0 sm:gap-4 sm:py-5"
              >
                <div
                  className={cn(
                    "flex size-10 shrink-0 items-center justify-center rounded-full text-white shadow-md",
                    isPositive
                      ? "bg-gradient-to-br from-sky-300 to-primary shadow-primary/25 dark:from-blue-400 dark:to-primary"
                      : "bg-gradient-to-br from-slate-400 to-slate-700 dark:from-slate-500 dark:to-slate-800"
                  )}
                >
                  {isPositive ? <IconCheck className="size-5" /> : <IconCross className="size-5" />}
                </div>
                <p
                  className={cn(
                    "min-w-0 flex-1 pt-0.5 leading-relaxed",
                    isPositive ? "font-medium text-foreground" : "text-muted-foreground"
                  )}
                >
                  {text}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export function VsComparisonBoard({
  rows,
  usTab,
  themTab,
  usTitle,
  themTitle,
}: {
  rows: Row[];
  usTab: string;
  themTab: string;
  usTitle: string;
  themTitle: string;
}) {
  return (
    <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-12 lg:items-start">
      <ComparisonCard variant="positive" tabLabel={usTab} title={usTitle} rows={rows} pick="us" />
      <ComparisonCard variant="negative" tabLabel={themTab} title={themTitle} rows={rows} pick="them" />
    </div>
  );
}
