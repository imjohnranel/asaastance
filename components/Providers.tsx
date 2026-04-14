"use client";

import { Toaster } from "sonner";
import { NavigationProgress } from "./NavigationProgress";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavigationProgress />
      {children}
      <Toaster
        theme="system"
        position="top-center"
        richColors
        closeButton
        duration={4500}
        toastOptions={{
          classNames: {
            toast: "font-sans shadow-elevated rounded-xl border border-border",
            title: "font-display font-semibold",
            description: "text-muted-foreground",
          },
        }}
      />
    </>
  );
}
