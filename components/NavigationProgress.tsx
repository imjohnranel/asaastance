"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

/**
 * Thin top bar during client-side route transitions (App Router).
 */
export function NavigationProgress() {
  const pathname = usePathname();
  const first = useRef(true);
  const [active, setActive] = useState(false);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    let cancelled = false;
    const kick = window.setTimeout(() => {
      if (cancelled) return;
      setComplete(false);
      setActive(true);
    }, 0);
    const t1 = window.setTimeout(() => {
      if (cancelled) return;
      setComplete(true);
    }, 280);
    const t2 = window.setTimeout(() => {
      if (cancelled) return;
      setActive(false);
      setComplete(false);
    }, 520);
    return () => {
      cancelled = true;
      window.clearTimeout(kick);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [pathname]);

  return (
    <div
      className={cn(
        "pointer-events-none fixed left-0 top-0 z-[9998] h-[3px] w-full overflow-hidden bg-transparent transition-opacity duration-200",
        active ? "opacity-100" : "opacity-0"
      )}
      aria-hidden
    >
      <div
        className={cn(
          "h-full bg-primary shadow-[0_0_12px_rgba(7,102,238,0.6)] transition-[width] duration-300 ease-out",
          complete ? "w-full" : "w-[min(92%,100%)]"
        )}
      />
    </div>
  );
}
