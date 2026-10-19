"use client";

import React, { useEffect, useRef } from "react";
import { ArrowUpRight, Download } from "lucide-react";

export function ChannelShowreel() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;
    videoEl.muted = true;
    videoEl.defaultMuted = true;
    videoEl.play().catch(() => {});
  }, []);

  return (
    <section
      id="motion-showreel"
      aria-labelledby="showreel-heading"
      className="border-b border-white/[0.08] bg-midnight py-section-md"
    >
      <div className="editorial-container">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-silver">
              01 / SHOWREEL
            </p>
            <h2
              id="showreel-heading"
              className="mt-2 font-sans text-display-lg font-semibold tracking-[-0.035em] text-glacial"
            >
              Motion Reel.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.youtube.com/@Ai_Spoiler"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[40px] items-center gap-2 rounded-full border border-white/15 px-4 py-2 font-sans text-xs font-medium text-glacial transition-colors hover:border-white/40"
            >
              <span>@Ai_Spoiler</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-silver" aria-hidden="true" />
            </a>

            <a
              href="https://www.youtube.com/@DarkReels9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[40px] items-center gap-2 rounded-full border border-white/15 px-4 py-2 font-sans text-xs font-medium text-glacial transition-colors hover:border-white/40"
            >
              <span>@DarkReels9</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-silver" aria-hidden="true" />
            </a>

            <a
              href="/media/season-showreel.mp4"
              download="SEASON-Showreel.mp4"
              className="inline-flex min-h-[40px] items-center gap-2 rounded-full bg-white/10 px-4 py-2 font-sans text-xs font-medium text-glacial transition-colors hover:bg-white/20"
            >
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Download Reel</span>
            </a>
          </div>
        </div>

        {/* Full-Bleed Autoplaying Showreel Video */}
        <div className="relative aspect-video w-full overflow-hidden rounded-card border border-white/10 bg-abyss">
          <video
            ref={videoRef}
            src="/media/season-showreel.mp4"
            poster="/media/season-hero-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="auto"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
