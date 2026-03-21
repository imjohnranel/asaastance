import Link from "next/link";
import type { DigitalSolutionIconId } from "@/lib/site-content";
import { digitalSolutionServices } from "@/lib/site-content";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

function SolutionIcon({ id }: { id: DigitalSolutionIconId }) {
  const common = {
    xmlns: "http://www.w3.org/2000/svg" as const,
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "size-6 text-primary",
    "aria-hidden": true as const,
  };

  switch (id) {
    case "bot":
      return (
        <svg {...common}>
          <path d="M12 8V4H8" />
          <rect width="16" height="12" x="4" y="8" rx="2" />
          <path d="M2 14h2" />
          <path d="M20 14h2" />
          <path d="M15 13v2" />
          <path d="M9 13v2" />
        </svg>
      );
    case "search":
      return (
        <svg {...common}>
          <path d="m21 21-4.34-4.34" />
          <circle cx="11" cy="11" r="8" />
        </svg>
      );
    case "fileText":
      return (
        <svg {...common}>
          <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
          <path d="M14 2v5a1 1 0 0 0 1 1h5" />
          <path d="M10 9H8" />
          <path d="M16 13H8" />
          <path d="M16 17H8" />
        </svg>
      );
    case "briefcase":
      return (
        <svg {...common}>
          <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          <rect width="20" height="14" x="2" y="6" rx="2" />
        </svg>
      );
    case "code":
      return (
        <svg {...common}>
          <path d="m16 18 6-6-6-6" />
          <path d="m8 6-6 6 6 6" />
        </svg>
      );
    case "zap":
      return (
        <svg {...common}>
          <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
        </svg>
      );
    case "cpu":
      return (
        <svg {...common}>
          <path d="M12 20v2" />
          <path d="M12 2v2" />
          <path d="M17 20v2" />
          <path d="M17 2v2" />
          <path d="M2 12h2" />
          <path d="M2 17h2" />
          <path d="M2 7h2" />
          <path d="M20 12h2" />
          <path d="M20 17h2" />
          <path d="M20 7h2" />
          <path d="M7 20v2" />
          <path d="M7 2v2" />
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="8" y="8" width="8" height="8" rx="1" />
        </svg>
      );
    case "smartphone":
      return (
        <svg {...common}>
          <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
          <path d="M12 18h.01" />
        </svg>
      );
    default:
      return null;
  }
}

export function DigitalSolutionsGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {digitalSolutionServices.map((service) => (
        <Link key={service.slug} href={`/services/${service.slug}`} className="group block">
          <Card
            className={cn(
              "h-full gap-6 rounded-2xl border-none bg-white py-6 text-card-foreground shadow-md transition-all duration-300 hover:shadow-xl dark:bg-zinc-900",
              "ring-0 group-hover:-translate-y-1"
            )}
          >
            <CardHeader className="pb-4">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <SolutionIcon id={service.icon} />
              </div>
              <CardTitle className="text-xl font-semibold leading-tight">{service.title}</CardTitle>
              <CardDescription className="mt-2 line-clamp-3">{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {service.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                    <div className="size-1.5 shrink-0 rounded-full bg-primary/70" />
                    {b}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
