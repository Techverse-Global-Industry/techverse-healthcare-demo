"use client";

import { ArrowUpRight, BookOpenCheck, HeartPulse, Leaf, Pill, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/effects/Reveal";
import { useLanguage } from "@/hooks/useLanguage";

const icons = [ShieldCheck, Leaf, Pill, HeartPulse, BookOpenCheck];

export function Resources() {
  const { copy } = useLanguage();
  return (
    <section id="resources" className="section-pad bg-canvas">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow">{copy.resources.eyebrow}</p>
          <h2 className="section-title mt-4 max-w-4xl">{copy.resources.title}</h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted">{copy.resources.description}</p>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {copy.resources.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={item} delay={Math.min(index * 0.04, 0.16)}>
                <article className="group flex min-h-[240px] flex-col rounded-[1.75rem] border border-ink/8 bg-white p-6 shadow-glass transition hover:-translate-y-1">
                  <div className="flex items-start justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-accent/25 text-primary"><Icon className="h-5 w-5" /></span>
                    <ArrowUpRight className="h-4 w-4 text-muted transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                  </div>
                  <h3 className="mt-auto pt-12 text-lg font-semibold leading-6 text-ink">{item}</h3>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
