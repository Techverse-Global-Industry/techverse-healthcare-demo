"use client";

import dynamic from "next/dynamic";
import { ArrowDownRight, ArrowRight, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse rounded-[2.5rem] bg-accent/15" />,
});

export function Hero() {
  const { copy } = useLanguage();
  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden bg-canvas pt-24">
      <div className="absolute inset-0 -z-10 bg-hero-glow" aria-hidden="true" />
      <div className="absolute left-[-12rem] top-32 -z-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
      <div className="mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:py-16">
        <div className="relative z-10 max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary shadow-sm backdrop-blur">
            <ShieldCheck className="h-4 w-4" />
            {copy.hero.eyebrow}
          </div>
          <h1 className="text-balance text-[clamp(3.3rem,8vw,7.4rem)] font-semibold leading-[0.84] tracking-[-0.065em] text-ink">
            <span className="block">{copy.hero.line1}</span>
            <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text pb-2 text-transparent">{copy.hero.line2}</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">{copy.hero.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#services" className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-ink/10 transition hover:-translate-y-0.5 hover:bg-primary">
              {copy.hero.services}<ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a href="#pharmacy" className="group inline-flex items-center justify-center gap-2 rounded-full border border-ink/12 bg-white/80 px-6 py-3.5 text-sm font-semibold text-ink shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-primary/30">
              {copy.hero.pharmacy}<ArrowDownRight className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-7 max-w-lg border-l border-primary/20 pl-4 text-sm leading-6 text-muted">{copy.hero.note}</p>
        </div>

        <div className="relative min-h-[440px] lg:min-h-[680px]" aria-label={copy.hero.sceneLabel}>
          <div className="absolute inset-0 rounded-[2.75rem] border border-white/70 bg-white/35 shadow-soft backdrop-blur-sm" />
          <div className="absolute inset-3 overflow-hidden rounded-[2.35rem] bg-gradient-to-br from-white/45 to-accent/10">
            <HeroScene />
          </div>
          <div className="absolute bottom-7 left-7 rounded-2xl border border-white/70 bg-white/70 p-4 shadow-glass backdrop-blur-xl sm:max-w-[230px]">
            <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary"><span className="h-2 w-2 rounded-full bg-secondary" />{copy.hero.techLabel}</div>
            <p className="text-sm leading-5 text-muted">{copy.hero.sceneLabel}</p>
          </div>
          <div className="absolute right-6 top-8 hidden rounded-2xl border border-white/70 bg-white/65 px-4 py-3 shadow-glass backdrop-blur-xl sm:block">
            <div className="flex items-center gap-2 text-xs font-semibold text-ink"><ShieldCheck className="h-4 w-4 text-primary" />{copy.trust[0]}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
