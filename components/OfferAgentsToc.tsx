"use client";

import Link from "next/link";
import { agents } from "@/lib/site-content";

function shortLabel(title: string) {
  const core = title.replace(/\s+Agent$/, "");
  const parts = core.split(" ");
  if (parts.length <= 3) return core;
  return parts.slice(0, 3).join(" ");
}

export function OfferAgentsToc() {
  return (
    <div className="sticky top-20 z-30 w-full border-b border-border/80 bg-background/95 py-3.5 shadow-sm backdrop-blur-md dark:bg-background/90">
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <nav
            className="mx-auto flex w-max max-w-none justify-center gap-2"
            aria-label="Agent sections"
          >
            {agents.map((a) => (
              <Link
                key={a.id}
                href={`#${a.id}`}
                className="shrink-0 rounded-full border border-border/90 bg-card/95 px-3.5 py-2 text-xs font-semibold text-foreground shadow-sm ring-1 ring-primary/5 transition-[color,box-shadow,border-color] hover:border-primary/50 hover:text-primary hover:shadow-md focus-visible:ring-2 focus-visible:ring-ring"
              >
                {shortLabel(a.title)}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
