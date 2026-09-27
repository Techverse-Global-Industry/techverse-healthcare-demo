"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Plus, X } from "lucide-react";
import { LanguageSwitcher } from "@/components/language/LanguageSwitcher";
import { useLanguage } from "@/hooks/useLanguage";

export function Navbar() {
  const { copy } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const links = [
    [copy.nav.home, "#home"],
    [copy.nav.services, "#services"],
    [copy.nav.pharmacy, "#pharmacy"],
    [copy.nav.about, "#about"],
    [copy.nav.resources, "#resources"],
    [copy.nav.contact, "#contact"],
  ] as const;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "border-b border-ink/10 bg-canvas/80 shadow-sm backdrop-blur-xl" : "bg-transparent"}`}>
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8" aria-label={copy.nav.home}>
        <a href="#home" className="group flex items-center gap-2.5 font-semibold tracking-tight text-ink">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20 transition group-hover:rotate-6">
            <Plus className="h-5 w-5" strokeWidth={2.4} />
          </span>
          <span className="text-sm sm:text-base">{copy.brand}</span>
        </a>

        <div className="hidden items-center gap-6 xl:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-medium text-muted transition hover:text-primary">{label}</a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher compact />
          <a href="#contact" className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-primary">
            {copy.nav.support}
          </a>
        </div>

        <button type="button" onClick={() => setOpen((value) => !value)} className="grid h-11 w-11 place-items-center rounded-full border border-ink/10 bg-white/70 md:hidden" aria-label={open ? copy.nav.closeMenu : copy.nav.openMenu} aria-expanded={open}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-ink/10 bg-canvas/95 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto grid max-w-7xl gap-2 px-5 py-5">
              {links.map(([label, href]) => (
                <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-base font-semibold text-ink hover:bg-white">{label}</a>
              ))}
              <div className="mt-3 flex items-center justify-between gap-3 rounded-2xl bg-white p-3 shadow-sm">
                <LanguageSwitcher />
                <a href="#contact" onClick={() => setOpen(false)} className="rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-white">{copy.nav.support}</a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
