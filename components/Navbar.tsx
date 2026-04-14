"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { IconMenu, IconX } from "@/components/icons";
import { navLinks, siteBrand } from "@/lib/site-content";
import { cn } from "@/lib/utils";

const NAV_H = "5rem"; /* h-20 */

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  /* Close drawer on route change (Link onClick already closes; this handles browser back/forward). */
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional UI reset when pathname changes
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Mobile drawer: sibling of <nav> so it is not trapped by nav backdrop-blur / stacking context */}
      <div
        className={cn(
          "fixed inset-x-0 bottom-0 z-40 flex flex-col bg-background lg:hidden",
          "transition-[visibility,opacity] duration-200 ease-out",
          isOpen ? "visible opacity-100" : "invisible pointer-events-none opacity-0"
        )}
        style={{ top: NAV_H }}
        aria-hidden={!isOpen}
        id="mobile-navigation"
      >
        <div
          className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-y-contain px-6 pb-10 pt-6 [-webkit-overflow-scrolling:touch]"
          role="navigation"
          aria-label="Mobile menu"
        >
          <ul className="flex list-none flex-col gap-0.5 border-b border-border pb-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-3 py-3.5 font-display text-lg font-semibold leading-normal text-foreground hover:bg-muted active:bg-muted"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex shrink-0 flex-col gap-3 pb-[max(1.25rem,env(safe-area-inset-bottom,0px))]">
            <Link href="/inquiry" onClick={() => setIsOpen(false)} className="block w-full">
              <Button variant="outline" className="h-12 w-full rounded-full border-2 border-primary/35 font-semibold">
                Contact
              </Button>
            </Link>
            <Link href="/inquiry" onClick={() => setIsOpen(false)} className="block w-full">
              <Button size="lg" className="h-12 w-full rounded-full shadow-md shadow-primary/20">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <nav
        className="sticky top-0 z-50 flex h-20 w-full items-center justify-between border-b border-border bg-background px-6 shadow-[0_8px_30px_-18px_rgba(15,23,42,0.12)] backdrop-blur-md supports-[backdrop-filter]:bg-background/90 lg:px-12 dark:shadow-[0_8px_30px_-18px_rgba(0,0,0,0.45)] dark:supports-[backdrop-filter]:bg-background/90"
        aria-label="Main"
      >
        <Link
          href="/"
          className="relative z-[60] font-display text-xl font-bold tracking-tight text-foreground transition-opacity hover:opacity-85"
          onClick={() => setIsOpen(false)}
        >
          {siteBrand.name}
        </Link>

        <div className="hidden items-center gap-1 lg:flex xl:gap-2">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "rounded-md px-2.5 py-2 text-sm font-medium transition-colors xl:px-3",
                  active
                    ? "bg-primary/10 text-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

          <div className="hidden items-center gap-3 lg:flex">
          <Link href="/inquiry">
            <Button variant="outline" className="rounded-full border-2 border-primary/35 bg-background px-5 font-semibold shadow-sm hover:bg-primary/5">
              Contact
            </Button>
          </Link>
          <Link href="/inquiry">
            <Button className="rounded-full px-6 shadow-md shadow-primary/20">Get Started</Button>
          </Link>
        </div>

        <button
          type="button"
          className="relative z-[60] flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted lg:hidden"
          onClick={() => setIsOpen((o) => !o)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <IconX className="size-6" /> : <IconMenu className="size-6" />}
        </button>
      </nav>
    </>
  );
}
