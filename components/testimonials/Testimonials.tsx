"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight, Quote, Sparkles } from "lucide-react";
import { Reveal } from "@/components/effects/Reveal";
import { useLanguage } from "@/hooks/useLanguage";

export function Testimonials() {
  const { copy } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);

  const move = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * Math.min(track.clientWidth * 0.82, 440), behavior: "smooth" });
  };

  return (
    <section className="section-pad overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow">{copy.testimonials.eyebrow}</p>
            <h2 className="section-title mt-4">{copy.testimonials.title}</h2>
          </div>
          <div className="lg:justify-self-end">
            <p className="max-w-2xl text-base leading-7 text-muted">{copy.testimonials.description}</p>
            <div className="mt-5 flex gap-2 lg:justify-end">
              <button type="button" onClick={() => move(-1)} aria-label={copy.testimonials.previous} className="grid h-11 w-11 place-items-center rounded-full border border-ink/10 bg-canvas text-ink transition hover:border-primary/30 hover:text-primary"><ArrowLeft className="h-4 w-4" /></button>
              <button type="button" onClick={() => move(1)} aria-label={copy.testimonials.next} className="grid h-11 w-11 place-items-center rounded-full border border-ink/10 bg-canvas text-ink transition hover:border-primary/30 hover:text-primary"><ArrowRight className="h-4 w-4" /></button>
            </div>
          </div>
        </Reveal>

        <div ref={trackRef} className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {copy.testimonials.items.map((item, index) => (
            <article key={`${item.name}-${index}`} className="testimonial-card min-h-[350px] w-[min(86vw,420px)] shrink-0 snap-center rounded-[2rem] border border-ink/10 bg-canvas p-7 shadow-glass sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <Quote className="h-7 w-7 text-primary" />
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/20 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-primary"><Sparkles className="h-3 w-3" />{copy.testimonials.placeholder}</span>
              </div>
              <blockquote className="mt-12 text-xl font-medium leading-8 tracking-tight text-ink">“{item.quote}”</blockquote>
              <p className="mt-8 text-sm font-semibold text-muted">{item.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
