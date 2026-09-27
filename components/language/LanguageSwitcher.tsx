"use client";

import { useLanguage } from "@/hooks/useLanguage";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { language, setLanguage, copy } = useLanguage();
  return (
    <div className="inline-flex items-center rounded-full border border-ink/10 bg-white/70 p-1 shadow-sm backdrop-blur" role="group" aria-label={copy.language.label}>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`rounded-full ${compact ? "px-2.5" : "px-3"} py-1.5 text-xs font-semibold transition ${language === "en" ? "bg-ink text-white" : "text-muted hover:text-ink"}`}
        aria-pressed={language === "en"}
        title={copy.language.english}
      >
        {copy.language.enShort}
      </button>
      <button
        type="button"
        onClick={() => setLanguage("fr")}
        className={`rounded-full ${compact ? "px-2.5" : "px-3"} py-1.5 text-xs font-semibold transition ${language === "fr" ? "bg-ink text-white" : "text-muted hover:text-ink"}`}
        aria-pressed={language === "fr"}
        title={copy.language.french}
      >
        {copy.language.frShort}
      </button>
    </div>
  );
}
