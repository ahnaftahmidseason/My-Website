"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HeroVideo } from "@/components/HeroVideo";

export function HeroSection() {
  return (
    <section
      aria-label="SEASON Hero Showreel"
      className="relative flex min-h-[100svh] w-full flex-col justify-end overflow-hidden bg-midnight pb-8 pt-28 sm:pb-10"
    >
      {/* Fullscreen Unobstructed Autoplay of User's Video */}
      <div className="absolute inset-0 z-0">
        <HeroVideo />
      </div>

      {/* Clean Bottom Bar Only — No Giant Text Blocking the Video */}
      <div className="editorial-container relative z-10">
        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/15 pt-5 sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/work"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-glacial px-6 py-2.5 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-midnight transition-transform hover:scale-[1.02]"
            >
              <span>Selected Work</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            <a
              href="#motion-showreel"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/20 bg-midnight/65 px-5 py-2.5 font-sans text-xs font-medium uppercase tracking-[0.14em] text-glacial backdrop-blur-md transition-colors hover:border-white/45"
            >
              <span>Watch Showreel</span>
            </a>
          </div>

          {/* Minimal Dual Channel Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.youtube.com/@Ai_Spoiler"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 rounded-full border border-white/15 bg-midnight/75 py-1.5 pl-2 pr-3.5 backdrop-blur-md transition-colors hover:border-white/40"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/media/channels/ai-spoiler-logo.png"
                alt="AI Spoiler"
                className="h-6 w-6 rounded-full object-cover"
              />
              <span className="font-sans text-xs font-medium text-glacial">
                AI Spoiler
              </span>
            </a>

            <a
              href="https://www.youtube.com/@DarkReels9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 rounded-full border border-white/15 bg-midnight/75 py-1.5 pl-2 pr-3.5 backdrop-blur-md transition-colors hover:border-white/40"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/media/channels/dark-reels-logo.png"
                alt="Dark Reels"
                className="h-6 w-6 rounded-full object-cover"
              />
              <span className="font-sans text-xs font-medium text-glacial">
                Dark Reels
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
