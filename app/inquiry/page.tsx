"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { SiteShell } from "@/components/SiteShell";
import { contactContent } from "@/lib/site-content";
import { Button } from "@/components/ui/button";
import { Eyebrow, Section, SectionInner } from "@/components/SiteSections";
import { IconMail, IconPhone, IconClock } from "@/components/icons";

/**
 * Form submit: client-side navigation only until a backend (e.g. Resend, server action, CRM) is wired.
 */
export default function InquiryPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/inquiry/thank-you");
  };

  return (
    <SiteShell>
      <Section className="border-b border-border pb-10 pt-12 lg:pt-16">
        <SectionInner>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            {contactContent.headline}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">{contactContent.subhead}</p>
        </SectionInner>
      </Section>

      <Section muted className="py-12 lg:py-16">
        <SectionInner>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="space-y-10 lg:col-span-5">
              <div>
                <h2 className="font-display text-xs font-bold uppercase tracking-widest text-primary">
                  Office hours
                </h2>
                <ul className="mt-4 space-y-3">
                  {contactContent.officeHours.map((row) => (
                    <li key={row.label} className="flex gap-3 text-muted-foreground">
                      <IconClock className="mt-0.5 size-5 shrink-0 text-primary" />
                      <span>
                        <span className="font-semibold text-foreground">{row.label}</span>
                        <br />
                        {row.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-display text-xs font-bold uppercase tracking-widest text-primary">
                  Next steps
                </h2>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  {contactContent.nextSteps.map((s) => (
                    <li key={s.id} className="flex gap-2">
                      <span className="text-primary">→</span>
                      {s.label}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-8">
                {contactContent.founders.map((f) => (
                  <div key={f.name} className="rounded-2xl border border-border bg-card p-6 shadow-elevated ring-1 ring-border/60">
                    <p className="font-display text-lg font-bold text-foreground">{f.name}</p>
                    <p className="text-sm font-medium text-primary">{f.role}</p>
                    <a
                      href={`mailto:${f.email}`}
                      className="mt-4 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      <IconMail className="size-4 shrink-0 text-primary" />
                      {f.email}
                    </a>
                    <a
                      href={`tel:${f.phone.replace(/\s/g, "")}`}
                      className="mt-2 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      <IconPhone className="size-4 shrink-0 text-primary" />
                      {f.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 shadow-md md:p-10 lg:col-span-7">
              <h2 className="font-display text-2xl font-bold text-foreground">Send a message</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                We&apos;ll respond as soon as we can. Prefer a pilot or a full assessment? Say so below.
              </p>

              <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-foreground">
                      Full name
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground outline-none transition-[box-shadow,border-color] focus-visible:border-primary/40 focus-visible:ring-2 focus-visible:ring-primary/25"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground">
                      Work email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@company.com"
                      className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground outline-none transition-[box-shadow,border-color] focus-visible:border-primary/40 focus-visible:ring-2 focus-visible:ring-primary/25"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-foreground">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Company name"
                      className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground outline-none transition-[box-shadow,border-color] focus-visible:border-primary/40 focus-visible:ring-2 focus-visible:ring-primary/25"
                    />
                  </div>
                  <div>
                    <label htmlFor="nextStep" className="block text-sm font-semibold text-foreground">
                      Next step
                    </label>
                    <select
                      id="nextStep"
                      name="nextStep"
                      defaultValue=""
                      required
                      className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground outline-none transition-[box-shadow,border-color] focus-visible:border-primary/40 focus-visible:ring-2 focus-visible:ring-primary/25"
                    >
                      <option value="" disabled>
                        Select one
                      </option>
                      {contactContent.nextSteps.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Workflows you want to automate, current tools, timeline…"
                    className="mt-2 w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-foreground outline-none transition-[box-shadow,border-color] focus-visible:border-primary/40 focus-visible:ring-2 focus-visible:ring-primary/25"
                  />
                </div>

                <Button type="submit" className="h-12 w-full rounded-full text-base font-bold sm:w-auto sm:px-12">
                  Submit
                </Button>
                <p className="text-center text-xs text-muted-foreground sm:text-left">
                  By submitting, you agree to our{" "}
                  <Link href="#" className="underline hover:text-primary">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </form>
            </div>
          </div>
        </SectionInner>
      </Section>
    </SiteShell>
  );
}
