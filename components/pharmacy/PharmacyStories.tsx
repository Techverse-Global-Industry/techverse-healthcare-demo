"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, BadgeCheck, MessageSquareText, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/effects/Reveal";
import { useLanguage } from "@/hooks/useLanguage";

type StockVisualProps = {
  src: string;
  alt: string;
  className?: string;
};

function StockVisual({ src, alt, className = "" }: StockVisualProps) {
  const { copy } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const image = containerRef.current.querySelector("img");
    if (!image) return undefined;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(image,
        { yPercent: -4, scale: 1.06 },
        {
          yPercent: 4,
          scale: 1.06,
          ease: "none",
          scrollTrigger: { trigger: containerRef.current, start: "top bottom", end: "bottom top", scrub: 0.6 },
        },
      );
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className={`group relative overflow-hidden rounded-[2.25rem] border border-white/70 bg-white shadow-soft ${className}`} data-cursor="view">
      <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" aria-hidden="true" />
      <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/35 bg-ink/55 p-4 text-white backdrop-blur-md">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em]"><BadgeCheck className="h-4 w-4 text-accent" />{copy.stock.badge}</div>
        <p className="mt-2 text-xs leading-5 text-white/75">{copy.stock.unavailable}</p>
      </div>
    </div>
  );
}

export function PharmacyStories() {
  const { copy } = useLanguage();
  return (
    <section id="pharmacy" className="section-pad overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl space-y-24 px-5 sm:px-8 lg:space-y-32">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <Reveal>
            <StockVisual src="/images/pharmacy-interior.jpg" alt={copy.stock.pharmacyAlt} className="min-h-[520px]" />
          </Reveal>
          <Reveal>
            <p className="eyebrow">{copy.pharmacy.eyebrow}</p>
            <h2 className="section-title mt-4">{copy.pharmacy.title}</h2>
            <p className="mt-6 text-base leading-7 text-muted">{copy.pharmacy.description}</p>
            <a href="#services" className="mt-7 inline-flex items-center gap-2 font-semibold text-primary transition hover:gap-3">{copy.pharmacy.cta}<ArrowRight className="h-4 w-4" /></a>
          </Reveal>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal className="order-2 lg:order-1">
            <p className="eyebrow">{copy.services.items[2].title}</p>
            <h2 className="section-title mt-4">{copy.pharmacy.profileTitle}</h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted">{copy.pharmacy.profileBody}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <span className="glass-chip"><ShieldCheck className="h-4 w-4" />{copy.trust[1]}</span>
              <span className="glass-chip"><MessageSquareText className="h-4 w-4" />{copy.trust[4]}</span>
            </div>
          </Reveal>
          <Reveal className="order-1 lg:order-2">
            <StockVisual src="/images/pharmacist-profile.jpg" alt={copy.stock.pharmacistAlt} className="min-h-[510px]" />
          </Reveal>
        </div>

        <div className="relative grid gap-10 rounded-[2.75rem] bg-canvas p-5 sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:p-12">
          <Reveal>
            <div className="relative">
              <StockVisual src="/images/medication-guidance.jpg" alt={copy.stock.guidanceAlt} className="min-h-[500px]" />
              <div className="pointer-events-none absolute -right-3 top-12 hidden rounded-2xl border border-white/80 bg-white/80 px-4 py-3 text-sm font-semibold text-ink shadow-glass backdrop-blur-xl sm:block">{copy.pharmacy.guidanceCards[0]}</div>
              <div className="pointer-events-none absolute -left-3 bottom-28 hidden rounded-2xl border border-white/80 bg-white/80 px-4 py-3 text-sm font-semibold text-ink shadow-glass backdrop-blur-xl sm:block">{copy.pharmacy.guidanceCards[1]}</div>
            </div>
          </Reveal>
          <Reveal>
            <p className="eyebrow">{copy.services.items[3].title}</p>
            <h2 className="section-title mt-4">{copy.pharmacy.guidanceTitle}</h2>
            <p className="mt-6 text-base leading-7 text-muted">{copy.pharmacy.guidanceBody}</p>
            <div className="mt-8 grid gap-3">
              {copy.pharmacy.guidanceCards.map((item, index) => (
                <div key={item} className="flex items-center gap-4 rounded-2xl border border-ink/8 bg-white/85 p-4 shadow-sm backdrop-blur">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-xs font-bold text-white">0{index + 1}</span>
                  <span className="font-semibold text-text">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div>
              <p className="eyebrow">{copy.trust[4]}</p>
              <h2 className="section-title mt-4">{copy.pharmacy.personalizedTitle}</h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-muted">{copy.pharmacy.personalizedBody}</p>
            </div>
          </Reveal>
          <Reveal>
            <StockVisual src="/images/personalized-care.jpg" alt={copy.stock.careAlt} className="min-h-[500px]" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
