import type { Metadata } from "next";
import Link from "next/link";
import { agents } from "@/lib/site-content";
import { SiteShell } from "@/components/SiteShell";
import { PageIntro, Section, SectionInner, Eyebrow } from "@/components/SiteSections";
import { OfferAgentsToc } from "@/components/OfferAgentsToc";
import { BackToTop } from "@/components/BackToTop";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "What We Offer",
  description:
    "Core Asaastance Agents for billing, collections, policy monitoring, claims, accounting, content, social, and design workflows.",
};

export default function WhatWeOfferPage() {
  return (
    <SiteShell>
      <div id="top">
        <Section className="pb-10 pt-16 lg:pt-20">
          <SectionInner>
            <PageIntro
              eyebrow="Core agents"
              title="What we offer"
              description="Eight agent families—each scoped to real operational work. Pick where to start; scale packages as you grow."
            />
          </SectionInner>
        </Section>
        <OfferAgentsToc />
        <div className="pb-24">
          {agents.map((agent, index) => (
            <Section
              key={agent.id}
              id={agent.id}
              muted={index % 2 === 1}
              className="scroll-mt-28 py-16 lg:scroll-mt-32 lg:py-20"
            >
              <SectionInner>
                <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
                  <div className="lg:col-span-4 lg:border-l-2 lg:border-primary/20 lg:pl-8">
                    <Eyebrow className="text-muted-foreground">Agent</Eyebrow>
                    <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                      {agent.title}
                    </h2>
                    <p className="mt-6 font-display text-sm font-bold uppercase tracking-widest text-primary">
                      Benefit
                    </p>
                    <p className="mt-2 text-lg font-medium text-foreground">{agent.benefit}</p>
                  </div>
                  <div className="lg:col-span-8">
                    <h3 className="font-display text-sm font-bold uppercase tracking-widest text-muted-foreground">
                      What it does
                    </h3>
                    <ul className="mt-4 space-y-3 text-muted-foreground">
                      {agent.whatItDoes.map((line) => (
                        <li key={line} className="flex gap-3 leading-relaxed">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>

                    {agent.howItWorks && agent.howItWorks.length > 0 ? (
                      <div className="mt-10 rounded-2xl border border-border bg-card/80 p-6 dark:bg-card/50">
                        <h3 className="font-display text-sm font-bold uppercase tracking-widest text-primary">
                          How it works
                        </h3>
                        <ol className="mt-4 list-decimal space-y-2 pl-5 text-muted-foreground">
                          {agent.howItWorks.map((step) => (
                            <li key={step} className="leading-relaxed">
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>
                    ) : null}

                    {agent.templateLibrary && agent.templateLibrary.length > 0 ? (
                      <div className="mt-8">
                        <h3 className="font-display text-sm font-bold uppercase tracking-widest text-muted-foreground">
                          Template library includes
                        </h3>
                        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                          {agent.templateLibrary.map((t) => (
                            <li
                              key={t}
                              className="rounded-lg border border-dashed border-border px-3 py-2 text-sm text-muted-foreground"
                            >
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}

                    {agent.limitations && agent.limitations.length > 0 ? (
                      <div className="mt-8 border-l-4 border-primary/40 pl-5">
                        <h3 className="font-display text-sm font-bold uppercase tracking-widest text-muted-foreground">
                          Limitations
                        </h3>
                        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                          {agent.limitations.map((l) => (
                            <li key={l}>{l}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                </div>
              </SectionInner>
            </Section>
          ))}
        </div>

        <section className="border-t border-border bg-gradient-to-r from-muted/50 via-primary/[0.06] to-muted/50 px-6 py-16 lg:px-12">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 rounded-3xl border border-border/60 bg-card/60 px-8 py-10 shadow-sm backdrop-blur-sm md:flex-row md:items-center md:px-12">
            <p className="max-w-xl font-display text-xl font-semibold text-foreground">
              Not sure which agent to run first? We&apos;ll prioritize from your discovery call.
            </p>
            <Link href="/inquiry">
              <Button size="lg" className="h-14 rounded-full px-10">
                Get Started
              </Button>
            </Link>
          </div>
        </section>
        <BackToTop />
      </div>
    </SiteShell>
  );
}
