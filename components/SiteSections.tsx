import { cn } from "@/lib/utils";

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "font-display text-xs font-bold uppercase tracking-[0.22em] text-primary",
        className
      )}
    >
      {children}
    </p>
  );
}

export function PageIntro({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <header className={cn("max-w-3xl", className)}>
      {eyebrow ? (
        <div className="mb-5">
          <Eyebrow className="mb-3">{eyebrow}</Eyebrow>
          <div className="h-0.5 w-14 rounded-full bg-primary" aria-hidden />
        </div>
      ) : null}
      <h1 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
        {title}
      </h1>
      {description ? (
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground md:text-xl max-w-2xl">
          {description}
        </p>
      ) : null}
    </header>
  );
}

export function Section({
  children,
  className,
  id,
  muted,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  muted?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "w-full px-6 py-20 lg:px-12 lg:py-28",
        muted && "bg-surface-muted/80 dark:bg-surface-muted/40",
        className
      )}
    >
      {children}
    </section>
  );
}

export function SectionInner({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("mx-auto max-w-6xl", className)}>{children}</div>;
}
