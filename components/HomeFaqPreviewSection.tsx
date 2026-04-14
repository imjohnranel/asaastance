import Link from "next/link";
import { faqPageContent, homeDarkQuotes } from "@/lib/site-content";
import { Button } from "./ui/button";

const PREVIEW_COUNT = 5;

export function HomeFaqPreviewSection() {
  const items = faqPageContent.items.slice(0, PREVIEW_COUNT);

  return (
    <section className="relative overflow-hidden border-y border-zinc-800/80 bg-zinc-950 py-20 text-zinc-100 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-10%,rgba(59,130,246,0.12),transparent_55%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-600/10 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-primary">
              Client voices
            </p>
            <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
              What teams say after the first sprint
            </h2>
            <ul className="mt-10 space-y-4">
              {homeDarkQuotes.map((t) => (
                <li
                  key={t.quote}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 shadow-lg backdrop-blur-sm transition-colors hover:border-zinc-700"
                >
                  <p className="text-sm leading-relaxed text-zinc-300">&ldquo;{t.quote}&rdquo;</p>
                  <p className="mt-3 font-display text-xs font-bold uppercase tracking-wider text-zinc-500">
                    {t.name}
                    <span className="font-normal text-zinc-600"> · {t.role}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-primary">
              FAQ
            </p>
            <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
              Frequently asked questions
            </h2>
            <div className="mt-8 space-y-2">
              {items.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 open:border-zinc-600 open:bg-zinc-900/70"
                >
                  <summary className="cursor-pointer list-none px-4 py-4 font-display text-sm font-semibold leading-snug text-zinc-100 marker:content-none [&::-webkit-details-marker]:hidden">
                    <span className="flex items-start justify-between gap-3">
                      <span>{item.question}</span>
                      <span
                        className="mt-0.5 shrink-0 text-primary transition-transform duration-200 group-open:rotate-45"
                        aria-hidden
                      >
                        +
                      </span>
                    </span>
                  </summary>
                  <div className="border-t border-zinc-800/80 px-4 pb-4 pt-2 text-sm leading-relaxed text-zinc-400">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
            <div className="mt-8">
              <Button
                asChild
                variant="secondary"
                className="h-12 rounded-full border-0 bg-white px-8 font-display font-bold text-zinc-950 hover:bg-zinc-100"
              >
                <Link href="/faq">View all questions</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
