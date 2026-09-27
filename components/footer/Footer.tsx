"use client";

import { Plus } from "lucide-react";
import { LanguageSwitcher } from "@/components/language/LanguageSwitcher";
import { useLanguage } from "@/hooks/useLanguage";

export function Footer() {
  const { copy } = useLanguage();
  const navLinks = [
    [copy.nav.home, "#home"],
    [copy.nav.services, "#services"],
    [copy.nav.pharmacy, "#pharmacy"],
    [copy.nav.about, "#about"],
    [copy.nav.resources, "#resources"],
    [copy.nav.contact, "#contact"],
  ] as const;

  return (
    <footer className="bg-[#04110f] text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#home" className="flex items-center gap-2.5 font-semibold tracking-tight">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary"><Plus className="h-5 w-5" /></span>
              <span>{copy.brand}</span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-6 text-white/50">{copy.footer.summary}</p>
            <div className="mt-6"><LanguageSwitcher /></div>
          </div>
          <div>
            <h3 className="text-sm font-semibold">{copy.footer.navigation}</h3>
            <div className="mt-4 grid gap-2.5">
              {navLinks.map(([label, href]) => <a key={href} href={href} className="text-sm text-white/50 transition hover:text-accent">{label}</a>)}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold">{copy.footer.hours}</h3>
            <div className="mt-4 grid gap-2 text-sm leading-6 text-white/50">
              <p>{copy.footer.weekdays}</p>
              <p>{copy.footer.saturday}</p>
              <p>{copy.footer.sunday}</p>
            </div>
            <h3 className="mt-7 text-sm font-semibold">{copy.footer.contact}</h3>
            <p className="mt-3 text-sm leading-6 text-white/50">{copy.contact.detailsPlaceholder}</p>
            <h3 className="mt-7 text-sm font-semibold">{copy.footer.social}</h3>
            <p className="mt-3 text-xs leading-5 text-white/45">{copy.footer.socialPlaceholder}</p>
            <div className="mt-3 flex flex-wrap gap-2">{copy.footer.socialChannels.map((channel) => <span key={channel} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/45">{channel}</span>)}</div>
          </div>
          <div>
            <h3 className="text-sm font-semibold">{copy.footer.disclaimerTitle}</h3>
            <p className="mt-4 text-xs leading-6 text-white/45">{copy.footer.disclaimer}</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-7 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>{copy.footer.rights}</p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="hover:text-white">{copy.footer.privacy}</a>
            <a href="#contact" className="hover:text-white">{copy.footer.terms}</a>
            <a href="#contact" className="hover:text-white">{copy.footer.disclaimerTitle}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
