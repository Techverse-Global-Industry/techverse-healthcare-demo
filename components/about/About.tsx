"use client";

import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { Reveal } from "@/components/effects/Reveal";
import { useLanguage } from "@/hooks/useLanguage";

export function About() {
  const { copy } = useLanguage();
  return (
    <section id="about" className="section-pad bg-canvas">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow">{copy.about.eyebrow}</p>
            <h2 className="section-title mt-4">{copy.about.title}</h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-muted lg:justify-self-end">{copy.about.description}</p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {copy.about.stats.map((stat) => (
            <Reveal key={stat.label}>
              <article className="rounded-[2rem] border border-ink/8 bg-white p-7 shadow-glass">
                <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-800"><BadgeCheck className="h-3.5 w-3.5" />{copy.about.placeholder}</span>
                <div className="mt-8 text-5xl font-semibold tracking-[-0.05em] text-primary">{stat.value}</div>
                <p className="mt-3 font-medium text-text">{stat.label}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid overflow-hidden rounded-[2.75rem] bg-ink lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="relative min-h-[520px]">
            <Image src="/images/african-healthcare.jpg" alt={copy.stock.teamAlt} fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ink/55" aria-hidden="true" />
          </Reveal>
          <Reveal className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-accent"><BadgeCheck className="h-4 w-4" />{copy.stock.badge}</span>
            <h3 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{copy.about.teamTitle}</h3>
            <p className="mt-5 text-base leading-7 text-white/65">{copy.about.teamBody}</p>
            <p className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs leading-5 text-white/55">{copy.stock.unavailable}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
