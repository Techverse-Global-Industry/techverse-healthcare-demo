"use client";

import { FormEvent, useState } from "react";
import dynamic from "next/dynamic";
import { ArrowRight, MapPin, MessageCircle, Phone } from "lucide-react";
import { Reveal } from "@/components/effects/Reveal";
import { useLanguage } from "@/hooks/useLanguage";

const ContactScene = dynamic(() => import("@/components/three/ContactScene"), { ssr: false });

export function Contact() {
  const { copy } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative isolate overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-55" aria-hidden="true"><ContactScene /></div>
      <div className="absolute right-[-8rem] top-[-6rem] -z-10 h-[34rem] w-[34rem] rounded-full border-[5rem] border-primary/20 opacity-80" aria-hidden="true" />
      <div className="absolute bottom-[-10rem] left-[-6rem] -z-10 h-[28rem] w-[28rem] rounded-full bg-primary/20 blur-3xl" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <p className="eyebrow !text-accent">{copy.contact.eyebrow}</p>
          <h2 className="mt-4 text-[clamp(3rem,6vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.06em]">{copy.contact.title}</h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/60">{copy.contact.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact-form" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5"><MessageCircle className="h-4 w-4" />{copy.contact.contact}</a>
            <a href="#contact-form" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"><MapPin className="h-4 w-4" />{copy.contact.directions}</a>
            <a href="#contact-form" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"><Phone className="h-4 w-4" />{copy.contact.call}</a>
          </div>
          <p className="mt-5 max-w-lg rounded-2xl border border-white/10 bg-white/5 p-4 text-xs leading-5 text-white/55">{copy.contact.detailsPlaceholder}</p>
        </Reveal>

        <Reveal>
          <form id="contact-form" onSubmit={onSubmit} className="rounded-[2.5rem] border border-white/12 bg-white/[0.07] p-6 shadow-2xl backdrop-blur-xl sm:p-8">
            <h3 className="text-2xl font-semibold tracking-tight">{copy.contact.formTitle}</h3>
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-white/80">
                {copy.contact.name}
                <input required name="name" autoComplete="name" placeholder={copy.contact.namePlaceholder} className="h-12 rounded-2xl border border-white/12 bg-white/10 px-4 text-white outline-none placeholder:text-white/35 focus:border-accent/60 focus:ring-2 focus:ring-accent/20" />
              </label>
              <label className="grid gap-2 text-sm font-medium text-white/80">
                {copy.contact.email}
                <input required type="email" name="email" autoComplete="email" placeholder={copy.contact.emailPlaceholder} className="h-12 rounded-2xl border border-white/12 bg-white/10 px-4 text-white outline-none placeholder:text-white/35 focus:border-accent/60 focus:ring-2 focus:ring-accent/20" />
              </label>
              <label className="grid gap-2 text-sm font-medium text-white/80 sm:col-span-2">
                {copy.contact.message}
                <textarea required name="message" rows={5} placeholder={copy.contact.messagePlaceholder} className="resize-none rounded-2xl border border-white/12 bg-white/10 p-4 text-white outline-none placeholder:text-white/35 focus:border-accent/60 focus:ring-2 focus:ring-accent/20" />
              </label>
            </div>
            <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:bg-white">{copy.contact.submit}<ArrowRight className="h-4 w-4" /></button>
            {submitted ? <p className="mt-4 rounded-2xl bg-accent/10 p-4 text-sm leading-6 text-accent" role="status">{copy.contact.success}</p> : null}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
