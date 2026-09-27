"use client";

import { categoryIcons } from "@/lib/data";
import { Reveal } from "@/components/effects/Reveal";
import { useLanguage } from "@/hooks/useLanguage";

export function MedicineCategories() {
  const { copy } = useLanguage();
  return (
    <section className="section-pad bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow">{copy.categories.eyebrow}</p>
          <h2 className="section-title mt-4 max-w-3xl">{copy.categories.title}</h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
          {copy.categories.items.map((item, index) => {
            const Icon = categoryIcons[index];
            return (
              <Reveal key={item} delay={Math.min(index * 0.03, 0.15)}>
                <article className="category-card group relative min-h-[190px] overflow-hidden rounded-[1.75rem] border border-ink/8 bg-canvas p-5">
                  <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-accent/30 blur-xl transition duration-500 group-hover:scale-150" aria-hidden="true" />
                  <div className="absolute right-4 top-8 flex h-5 w-14 rotate-[-28deg] overflow-hidden rounded-full border border-white/60 shadow-md [transform-style:preserve-3d]" aria-hidden="true"><span className="w-1/2 bg-primary" /><span className="w-1/2 bg-white" /></div>
                  <div className="relative flex h-full flex-col justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-primary shadow-sm"><Icon className="h-5 w-5" /></span>
                    <h3 className="mt-10 text-base font-semibold leading-5 text-ink">{item}</h3>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
