"use client";

import { createPortal } from "react-dom";

type FormSubmitOverlayProps = {
  open: boolean;
  title?: string;
  subtitle?: string;
};

/**
 * Full-viewport overlay with spinner + indeterminate progress while async work runs.
 */
export function FormSubmitOverlay({
  open,
  title = "Sending your message…",
  subtitle = "Please keep this tab open for a moment.",
}: FormSubmitOverlayProps) {
  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-background/75 px-6 opacity-100 backdrop-blur-sm transition-opacity duration-200"
      role="alert"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="w-full max-w-sm rounded-[1.5rem] border border-border bg-card p-8 text-center shadow-elevated ring-1 ring-primary/10 transition-transform duration-200">
        <div
          className="mx-auto size-11 rounded-full border-2 border-primary/25 border-t-primary motion-reduce:animate-none animate-spin"
          aria-hidden
        />
        <p className="mt-5 font-display text-lg font-bold text-foreground">{title}</p>
        <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
        <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-muted">
          <div className="form-progress-indeterminate h-full rounded-full bg-primary" />
        </div>
      </div>
    </div>,
    document.body
  );
}
