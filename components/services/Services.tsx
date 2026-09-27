"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/effects/Reveal";
import { serviceIcons, trustIcons } from "@/lib/data";
import { useLanguage } from "@/hooks/useLanguage";

export function Services() {
  const { copy } = useLanguage();
  return (
    <>
      <section className="border-y border-ink/8 bg-white/70 py-6" aria-label={copy.services.eyebrow}>
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-5 sm:px-8 md:grid-cols-5">
          {copy.trust.map((item, index) => {
            const Icon = trustIcons[index];
            return (
              <div key={item} className="flex items-center gap-2.5 rounded-2xl px-3 py-3 text-sm font-medium text-text">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent/25 text-primary"><Icon className="h-4 w-4" /></span>
                <span>{item}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section id="services" className="section-pad bg-canvas">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow">{copy.services.eyebrow}</p>
              <h2 className="section-title mt-4 max-w-3xl">{copy.services.title}</h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-muted lg:justify-self-end">{copy.services.description}</p>
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {copy.services.items.map((item, index) => {
              const Icon = serviceIcons[index];
              return (
                <Reveal key={item.title} delay={Math.min(index * 0.04, 0.16)}>
                  <article className="service-card group relative min-h-[280px] overflow-hidden rounded-[2rem] border border-ink/8 bg-white p-7 shadow-glass">
                    <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-accent/20 blur-2xl transition duration-500 group-hover:scale-125" aria-hidden="true" />
                    <div className="relative z-10 flex h-full flex-col">
                      <div className="flex items-start justify-between">
                        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/15"><Icon className="h-5 w-5" /></span>
                        <ArrowUpRight className="h-5 w-5 text-muted transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />
                      </div>
                      <div className="mt-auto pt-16">
                        <h3 className="text-xl font-semibold tracking-tight text-ink">{item.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
