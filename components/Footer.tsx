import Link from "next/link";
import { IconFacebook, IconTwitter, IconLinkedin } from "@/components/icons";
import { agents, footerQuickLinks, getSiteSocialLinks, homeHero, legalRoutes, siteBrand } from "@/lib/site-content";

const socialIconMap = {
  Facebook: IconFacebook,
  X: IconTwitter,
  LinkedIn: IconLinkedin,
} as const;

export function Footer() {
  const socialLinks = getSiteSocialLinks();

  return (
    <footer className="w-full border-t border-border bg-foreground px-6 py-16 text-background lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <div className="mb-5">
              <Link href="/" className="font-display text-xl font-bold tracking-tight hover:text-primary">
                {siteBrand.name}
              </Link>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-background/75">{homeHero.tagline}</p>
            {socialLinks.length > 0 ? (
              <div className="mt-6 flex flex-wrap items-center gap-4 text-background/60">
                {socialLinks.map((s) => {
                  const Icon = socialIconMap[s.name as keyof typeof socialIconMap];
                  if (!Icon) return null;
                  return (
                    <a
                      key={s.name}
                      href={s.href}
                      className="transition-colors hover:text-primary"
                      aria-label={s.ariaLabel}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Icon className="size-5" />
                    </a>
                  );
                })}
              </div>
            ) : (
              <p className="mt-6 text-sm text-background/55">
                <Link href="/inquiry" className="font-semibold text-primary hover:underline">
                  Get in touch
                </Link>{" "}
                for project updates and announcements.
              </p>
            )}
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
            <Link href={legalRoutes.privacy} className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href={legalRoutes.terms} className="hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
