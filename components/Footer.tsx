import Link from "next/link";
import { IconFacebook, IconTwitter, IconLinkedin } from "@/components/icons";
import { agents, footerQuickLinks, homeHero, siteBrand } from "@/lib/site-content";

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-foreground px-6 py-16 text-background lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <div className="mb-5 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-primary-foreground"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5Z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="font-display text-xl font-bold tracking-tight">{siteBrand.name}</span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-background/75">{homeHero.tagline}</p>
            <div className="mt-6 flex items-center gap-4 text-background/60">
              <a href="#" className="transition-colors hover:text-primary" aria-label="Facebook">
                <IconFacebook className="size-5" />
              </a>
              <a href="#" className="transition-colors hover:text-primary" aria-label="Twitter">
                <IconTwitter className="size-5" />
              </a>
              <a href="#" className="transition-colors hover:text-primary" aria-label="LinkedIn">
                <IconLinkedin className="size-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start lg:col-span-3">
            <h4 className="text-center font-display text-xs font-bold uppercase tracking-[0.2em] text-primary md:text-left">
              Explore
            </h4>
            <ul className="mt-5 flex flex-col items-center gap-3 text-sm text-background/80 md:items-start">
              {footerQuickLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-primary">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start lg:col-span-4">
            <h4 className="text-center font-display text-xs font-bold uppercase tracking-[0.2em] text-primary md:text-left">
              Agents
            </h4>
            <ul className="mt-5 flex w-full max-w-sm flex-col items-center gap-2 text-sm text-background/80 sm:max-w-none sm:grid sm:grid-cols-2 sm:items-stretch sm:justify-items-start md:justify-items-start">
              {agents.map((a) => (
                <li key={a.id} className="text-center sm:text-left">
                  <Link
                    href={`/what-we-offer#${a.id}`}
                    className="transition-colors hover:text-primary"
                  >
                    {a.title.replace(/\s+Agent$/, "")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-background/15 pt-8 text-sm text-background/55 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} {siteBrand.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            <Link href="#" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
