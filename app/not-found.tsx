"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";

export default function NotFound() {
  const { copy } = useLanguage();
  return (
    <main className="grid min-h-screen place-items-center bg-canvas px-5">
      <div className="max-w-xl text-center">
        <div className="text-sm font-bold tracking-[0.2em] text-primary">
          404
        </div>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink">
          {copy.errors.notFoundTitle}
        </h1>
        <p className="mt-4 text-muted">{copy.errors.notFoundBody}</p>
        <Link
          href="/"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          {copy.errors.home}
        </Link>
      </div>
    </main>
  );
}
