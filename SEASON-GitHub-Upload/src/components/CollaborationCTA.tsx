import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function CollaborationCTA() {
  return (
    <section
      aria-labelledby="collaboration-cta-heading"
      className="border-b border-white/[0.08] bg-midnight py-section-lg"
    >
      <div className="editorial-container">
        <Reveal className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-silver">
              05 / CONTACT
            </p>
            <h2
              id="collaboration-cta-heading"
              className="mt-3 font-sans text-display-xl font-semibold tracking-[-0.04em] text-glacial"
            >
              Let’s build together.
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex min-h-[48px] items-center gap-2.5 rounded-full bg-glacial px-7 py-3.5 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-midnight transition-opacity hover:opacity-90"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            <a
              href="https://www.youtube.com/@Ai_Spoiler"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 font-sans text-xs font-medium text-glacial transition-colors hover:border-white/40"
            >
              <span>@Ai_Spoiler</span>
              <ArrowUpRight className="h-4 w-4 text-silver" aria-hidden="true" />
            </a>

            <a
              href="https://www.youtube.com/@DarkReels9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 font-sans text-xs font-medium text-glacial transition-colors hover:border-white/40"
            >
              <span>@DarkReels9</span>
              <ArrowUpRight className="h-4 w-4 text-silver" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
