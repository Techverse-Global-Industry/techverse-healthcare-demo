"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/effects/Reveal";
import { useLanguage } from "@/hooks/useLanguage";

export function HealthcareJourney() {
  const { copy } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const crossRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !crossRef.current) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(crossRef.current,
        { xPercent: 0, rotate: -10 },
        {
          xPercent: 480,
          rotate: 350,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "bottom 40%",
            scrub: 0.6,
          },
        },
      );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="section-pad overflow-hidden bg-canvas">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow">{copy.journey.eyebrow}</p>
          <h2 className="section-title mt-4 max-w-4xl">{copy.journey.title}</h2>
        </Reveal>
        <div className="relative mt-14 overflow-x-auto pb-4">
          <div className="relative min-w-[880px] px-4 py-10">
            <div className="absolute left-12 right-12 top-[4.4rem] h-px bg-ink/12" aria-hidden="true" />
            <div ref={crossRef} className="absolute left-7 top-[3.1rem] z-10 grid h-10 w-10 place-items-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20" aria-hidden="true">
              <Plus className="h-5 w-5" />
            </div>
            <div className="grid grid-cols-5 gap-5">
              {copy.journey.steps.map((step, index) => (
                <article key={step} className="relative pt-20">
                  <span className="absolute left-0 top-[3.7rem] h-3 w-3 rounded-full border-2 border-primary bg-canvas" />
                  <div className="text-xs font-bold tracking-[0.16em] text-primary">0{index + 1}</div>
                  <h3 className="mt-3 text-xl font-semibold text-ink">{step}</h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
