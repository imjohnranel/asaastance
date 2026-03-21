import Image from "next/image";
import Link from "next/link";
import { aboutContent, homeLeadership } from "@/lib/site-content";
import { IconArrowRight } from "@/components/icons";
import { Button } from "./ui/button";
import { Eyebrow, Section, SectionInner } from "./SiteSections";

export function HomeLeadershipSection() {
  return (
    <Section muted className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 max-w-xl skew-x-[-8deg] bg-gradient-to-l from-primary/10 to-transparent opacity-90"
        aria-hidden
      />
      <SectionInner className="relative">
        <div className="mb-10 max-w-2xl lg:mb-12">
          <Eyebrow>{homeLeadership.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            {homeLeadership.title}
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">{homeLeadership.subtitle}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {aboutContent.founders.map((f) => (
            <div
              key={f.name}
              className="flex flex-col overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-sm ring-1 ring-primary/5 transition-[box-shadow,border-color] duration-300 hover:border-primary/25 hover:shadow-elevated sm:flex-row"
            >
              <div className="relative h-52 w-full shrink-0 bg-muted/30 sm:h-auto sm:min-h-[14rem] sm:w-44">
                <Image
                  src="/portrait-placeholder.svg"
                  alt={`Portrait of ${f.name}`}
                  fill
                  className="object-cover object-center"
                  unoptimized
                />
              </div>
              <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                <h3 className="font-display text-xl font-bold text-foreground">{f.name}</h3>
                <p className="mt-1 text-sm font-semibold text-primary">{f.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-4">{f.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-start">
          <Link href={homeLeadership.cta.href}>
            <Button variant="outline" className="h-12 rounded-full border-2 border-primary/40 bg-background/80 px-8 backdrop-blur-sm hover:border-primary">
              {homeLeadership.cta.label}
              <IconArrowRight className="ml-2 size-4" />
            </Button>
          </Link>
        </div>
      </SectionInner>
    </Section>
  );
}
