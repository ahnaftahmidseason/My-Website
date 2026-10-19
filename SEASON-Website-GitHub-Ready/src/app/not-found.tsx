import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="py-section-lg">
      <div className="editorial-container">
        <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-taupe">
          404 // PAGE NOT FOUND
        </p>
        <h1 className="mt-4 font-serif text-display-xl font-normal tracking-tight text-ink">
          Uncharted <span className="italic">frame.</span>
        </h1>
        <p className="mt-6 max-w-lg font-sans text-base leading-relaxed text-ink/80">
          The page or study you requested is not in the currentSEASON® index. Return to the primary archive below.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex min-h-[46px] items-center gap-2 rounded-editorial bg-ink px-6 py-3 font-sans text-xs uppercase tracking-[0.16em] text-ivory transition-opacity hover:opacity-90"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
