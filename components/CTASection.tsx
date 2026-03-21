import Link from "next/link";
import { siteBrand } from "@/lib/site-content";
import { Button } from "./ui/button";

export function CTASection() {
  return (
    <section className="relative w-full overflow-hidden bg-primary px-6 py-24 text-primary-foreground">
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-40" />
      <div
        className="pointer-events-none absolute -left-20 top-1/2 h-[120%] w-[40%] -translate-y-1/2 rounded-full bg-primary-foreground/10 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <div className="mx-auto mb-8 h-1 w-16 rounded-full bg-primary-foreground/40" aria-hidden />
        <h2 className="font-display text-3xl font-bold tracking-tight text-balance md:text-4xl lg:text-5xl">
          Ready for a 30-day pilot or a full workflow assessment?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg font-medium text-primary-foreground/90">
          Tell us what slows your team down—we&apos;ll map where {siteBrand.name} Agents fit first.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/inquiry">
            <Button
              size="lg"
              variant="secondary"
              className="h-14 rounded-full border-0 bg-background px-10 text-base font-bold text-foreground shadow-lg hover:bg-background/95"
            >
              Get Started
            </Button>
          </Link>
          <Link href="/pricing">
            <Button
              size="lg"
              variant="ghost"
              className="h-14 rounded-full px-10 text-base font-semibold text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              View pricing
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
