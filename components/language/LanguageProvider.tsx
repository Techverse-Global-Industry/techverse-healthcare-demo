"use client";

import { createContext, useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { translations, type Language, type TranslationCopy } from "@/lib/translations";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  copy: TranslationCopy;
};

export const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "aurelia-language";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "fr") {
      setLanguageState(stored);
      document.documentElement.lang = stored;
    }
  }, []);

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem(STORAGE_KEY, nextLanguage);
    document.documentElement.lang = nextLanguage;
  }, []);

  const value = useMemo<LanguageContextValue>(() => ({
    language,
    setLanguage,
    copy: translations[language],
  }), [language, setLanguage]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
