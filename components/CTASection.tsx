import Link from "next/link";
import { homeCollaborateCta, siteBrand } from "@/lib/site-content";
import { Button } from "./ui/button";

export function CTASection() {
  return (
    <section className="relative w-full overflow-hidden border-t border-border bg-slate-100/90 px-6 py-20 dark:bg-zinc-900/60 lg:px-12 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.07] via-transparent to-violet-500/[0.06]" aria-hidden />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl dark:bg-primary/15" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-6">
          <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-primary">Next step</p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl lg:text-[2.75rem] lg:leading-tight">
            {homeCollaborateCta.title}
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">{homeCollaborateCta.subtitle}</p>
        </div>

        <div className="rounded-[2rem] border border-border bg-background p-8 shadow-elevated ring-1 ring-primary/10 dark:bg-zinc-900 lg:col-span-6 lg:p-10">
          <p className="font-display text-sm font-semibold text-foreground">
            Start with {siteBrand.name}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Open the contact form—tell us your industry and the workflow that hurts most. We&apos;ll respond with a
            practical plan.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/inquiry" className="sm:flex-1">
              <Button className="h-12 w-full rounded-full text-base font-bold shadow-md shadow-primary/20">
                Get Started
              </Button>
            </Link>
            <Link href="/pricing" className="sm:flex-1">
              <Button variant="outline" className="h-12 w-full rounded-full border-2 text-base font-semibold">
                View pricing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
