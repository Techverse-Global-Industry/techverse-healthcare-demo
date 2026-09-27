"use client";

import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const { copy } = useLanguage();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="grid min-h-screen place-items-center bg-canvas px-5">
      <div className="max-w-xl rounded-[2rem] border border-ink/8 bg-white p-8 text-center shadow-soft">
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary"><AlertTriangle className="h-5 w-5" /></span>
        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-ink">{copy.errors.genericTitle}</h1>
        <p className="mt-3 text-sm leading-6 text-muted">{copy.errors.genericBody}</p>
        <button type="button" onClick={reset} className="mt-6 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white">{copy.errors.retry}</button>
      </div>
    </main>
  );
}
