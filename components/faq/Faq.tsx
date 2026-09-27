"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { Reveal } from "@/components/effects/Reveal";
import { useLanguage } from "@/hooks/useLanguage";

export function Faq() {
  const { copy } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-pad bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr]">
        <Reveal>
          <p className="eyebrow">{copy.faq.eyebrow}</p>
          <h2 className="section-title mt-4">{copy.faq.title}</h2>
        </Reveal>
        <div className="divide-y divide-ink/10 border-y border-ink/10">
          {copy.faq.items.map((item, index) => {
            const open = openIndex === index;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? -1 : index)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left font-semibold text-ink outline-none transition focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  aria-expanded={open}
                >
                  <span>{item.q}</span>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-canvas text-primary">{open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}</span>
                </button>
                <AnimatePresence initial={false}>
                  {open ? (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <p className="max-w-2xl pb-6 text-sm leading-7 text-muted">{item.a}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
