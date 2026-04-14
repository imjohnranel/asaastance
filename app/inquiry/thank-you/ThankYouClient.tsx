"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { toast } from "sonner";
import { IconCheckCircle, IconHome, IconArrowRight } from "@/components/icons";
import { SiteShell } from "@/components/SiteShell";
import { siteBrand } from "@/lib/site-content";
import { Button } from "@/components/ui/button";

export function ThankYouClient() {
  const reduce = useReducedMotion();

  useEffect(() => {
    try {
      if (sessionStorage.getItem("asaastance_inquiry_ok") === "1") {
        sessionStorage.removeItem("asaastance_inquiry_ok");
        toast.success("Request received", {
          description: `${siteBrand.name} will follow up using the details you provided.`,
        });
      }
    } catch {
      /* ignore */
    }
  }, []);

  return (
    <SiteShell>
      <div className="flex min-h-[70vh] flex-col items-center justify-center bg-hero-agency px-6 py-20">
        <div className="relative">
          <div className="absolute inset-0 scale-150 rounded-full bg-primary/20 blur-3xl" aria-hidden />
          <motion.div
            initial={reduce ? { scale: 1, opacity: 1 } : { scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 380, damping: 24 }}
            className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-2xl bg-primary shadow-xl shadow-primary/30 md:h-28 md:w-28 md:rounded-3xl"
          >
            <IconCheckCircle className="h-12 w-12 text-primary-foreground md:h-14 md:w-14" />
          </motion.div>
        </div>
        <motion.h1
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 max-w-2xl text-center font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance"
        >
          Thank you — we received your message
        </motion.h1>
        <motion.p
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.14, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-lg text-center text-lg text-muted-foreground leading-relaxed"
        >
          Someone from <span className="font-semibold text-foreground">{siteBrand.name}</span> will review your note
          and follow up. If you chose a pilot or assessment, we&apos;ll align on timing on first contact.
        </motion.p>
        <motion.div
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:justify-center"
        >
          <Link href="/">
            <Button size="lg" className="h-12 w-full rounded-full px-8 transition-interactive sm:w-auto">
              <IconHome className="mr-2 size-4" />
              Back to home
            </Button>
          </Link>
          <Link href="/what-we-offer">
            <Button
              size="lg"
              variant="outline"
              className="h-12 w-full rounded-full border-2 px-8 transition-interactive sm:w-auto"
            >
              Explore agents
              <IconArrowRight className="ml-2 size-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </SiteShell>
  );
}
