"use client";

import { Ear, HeartHandshake, Route } from "lucide-react";
import { Reveal } from "@/components/effects/Reveal";
import { useLanguage } from "@/hooks/useLanguage";

const icons = [Ear, Route, HeartHandshake];

export function DarkCare() {
  const { copy } = useLanguage();
  return (
    <section className="relative isolate overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div className="absolute inset-0 -z-10 opacity-60" aria-hidden="true">
        <div className="absolute left-[8%] top-[18%] h-52 w-52 rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute bottom-[12%] right-[10%] h-64 w-64 rounded-full bg-accent/15 blur-3xl" />
        <div className="particle-grid absolute inset-0" />
        <div className="absolute right-[8%] top-[20%] flex h-10 w-28 rotate-[-18deg] overflow-hidden rounded-full border border-white/10 shadow-2xl [transform:perspective(600px)_rotateY(-18deg)_rotateZ(-18deg)]" aria-hidden="true"><span className="w-1/2 bg-primary/80" /><span className="w-1/2 bg-white/80" /></div>
      </div>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <p className="eyebrow !text-accent">{copy.care.eyebrow}</p>
          <h2 className="mt-4 text-[clamp(2.8rem,6vw,5.8rem)] font-semibold leading-[0.95] tracking-[-0.055em]">{copy.care.title}</h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/60">{copy.care.description}</p>
        </Reveal>
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {copy.care.cards.map((card, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={card.title} delay={index * 0.05}>
                <article className="min-h-[270px] rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 backdrop-blur-sm transition hover:-translate-y-1 hover:border-accent/25 hover:bg-white/[0.08]">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/15 text-accent"><Icon className="h-5 w-5" /></span>
                  <h3 className="mt-16 text-2xl font-semibold tracking-tight">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/55">{card.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
