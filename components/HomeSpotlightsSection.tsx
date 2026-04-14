import Image from "next/image";
import Link from "next/link";
import { homeSpotlightsSection } from "@/lib/site-content";
import { IconArrowRight } from "@/components/icons";
import { Eyebrow, Section, SectionInner } from "./SiteSections";

export function HomeSpotlightsSection() {
  const { eyebrow, title, link, items } = homeSpotlightsSection;

  return (
    <Section className="relative overflow-hidden border-b border-border bg-background">
      <div
        className="pointer-events-none absolute -right-32 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-primary/[0.07] blur-3xl"
        aria-hidden
      />
      <SectionInner className="relative">
        <div className="mb-12 flex flex-col gap-8 md:mb-14 md:flex-row md:items-end md:justify-between lg:mb-16">
          <div className="max-w-2xl">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              {title}
            </h2>
          </div>
          <Link
            href={link.href}
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-primary/35 bg-primary/5 px-5 py-2.5 font-display text-sm font-bold text-primary transition-colors hover:border-primary hover:bg-primary/10 md:self-auto"
          >
            {link.label}
            <IconArrowRight className="size-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {items.map((item) => (
            <article
              key={item.id}
              className="group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated sm:rounded-[2rem]"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted/40">
                <Image
                  src={item.imageSrc}
                  alt=""
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-transparent to-transparent" />
                <p className="absolute left-4 top-4 font-display text-[10px] font-bold uppercase tracking-[0.2em] text-background/95">
                  {item.industry}
                </p>
              </div>
              <div className="flex flex-1 flex-col p-6 md:p-7">
                <h3 className="font-display text-xl font-bold text-foreground">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                <dl className="mt-6 grid grid-cols-2 gap-3 border-t border-border pt-5">
                  {item.stats.map((s) => (
                    <div key={s.label}>
                      <dt className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                        {s.label}
                      </dt>
                      <dd className="mt-1 font-display text-lg font-extrabold text-primary">{s.value}</dd>
                    </div>
                  ))}
                </dl>
                <Link
                  href="/inquiry"
                  className="mt-5 inline-flex items-center gap-1 font-display text-sm font-bold text-primary hover:underline"
                >
                  Discuss this workflow
                  <IconArrowRight className="size-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </SectionInner>
    </Section>
  );
}
