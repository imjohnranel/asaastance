"use client";

import { useEffect, useState } from "react";
import { IconArrowUp } from "@/components/icons";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="#top"
      className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-lg transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-ring md:hidden"
      aria-label="Back to top"
    >
      <IconArrowUp className="size-5" />
    </a>
  );
}
