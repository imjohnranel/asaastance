import { siteBrand } from "@/lib/site-content";

export default function Loading() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-6 px-6 py-24">
      <div
        className="relative flex size-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/5 shadow-md motion-reduce:animate-none animate-pulse"
        aria-hidden
      >
        <div className="size-8 rounded-full border-2 border-primary/30 border-t-primary motion-reduce:animate-none animate-spin" />
      </div>
      <div className="text-center">
        <p className="font-display text-sm font-bold uppercase tracking-widest text-primary">Loading</p>
        <p className="mt-2 text-sm text-muted-foreground">{siteBrand.name}</p>
      </div>
      <div className="h-1 w-48 max-w-full overflow-hidden rounded-full bg-muted">
        <div className="route-loading-bar h-full w-1/3 rounded-full bg-primary" />
      </div>
    </div>
  );
}
