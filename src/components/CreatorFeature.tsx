"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { aiSpoilerData } from "@/data/ai-spoiler";
import { VideoCard } from "@/components/VideoCard";
import { Reveal } from "@/components/Reveal";

export function CreatorFeature() {
  const [activeChannel, setActiveChannel] = useState<"all" | "ai-spoiler" | "dark-reels">("all");

  const displayedVideos =
    activeChannel === "all"
      ? aiSpoilerData.featuredVideos
      : aiSpoilerData.featuredVideos.filter((v) => v.channelId === activeChannel);

  return (
    <section
      aria-labelledby="creator-feature-heading"
      className="border-b border-white/[0.08] bg-abyss py-section-lg text-glacial"
    >
      <div className="editorial-container">
        {/* Minimal Header + Channel Filter */}
        <Reveal className="flex flex-col justify-between gap-6 border-b border-white/[0.08] pb-10 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-silver">
              03 / CHANNELS
            </p>
            <h2
              id="creator-feature-heading"
              className="mt-2 font-sans text-display-xl font-semibold tracking-[-0.04em] text-glacial"
            >
              AI Spoiler &amp; Dark Reels.
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveChannel("all")}
              aria-pressed={activeChannel === "all"}
              className={`min-h-[38px] rounded-full px-4 py-1.5 font-sans text-xs font-medium transition-colors ${
                activeChannel === "all"
                  ? "bg-glacial text-midnight"
                  : "border border-white/15 text-silver hover:text-glacial"
              }`}
            >
              All (10)
            </button>
            <button
              type="button"
              onClick={() => setActiveChannel("ai-spoiler")}
              aria-pressed={activeChannel === "ai-spoiler"}
              className={`min-h-[38px] rounded-full px-4 py-1.5 font-sans text-xs font-medium transition-colors ${
                activeChannel === "ai-spoiler"
                  ? "bg-glacial text-midnight"
                  : "border border-white/15 text-silver hover:text-glacial"
              }`}
            >
              @Ai_Spoiler
            </button>
            <button
              type="button"
              onClick={() => setActiveChannel("dark-reels")}
              aria-pressed={activeChannel === "dark-reels"}
              className={`min-h-[38px] rounded-full px-4 py-1.5 font-sans text-xs font-medium transition-colors ${
                activeChannel === "dark-reels"
                  ? "bg-glacial text-midnight"
                  : "border border-white/15 text-silver hover:text-glacial"
              }`}
            >
              @DarkReels9
            </button>
          </div>
        </Reveal>

        {/* Compact Dual Channel Bar */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {aiSpoilerData.channels.map((channel) => (
            <a
              key={channel.id}
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-card border border-white/10 bg-midnight p-5 transition-colors hover:border-white/30"
            >
              <div className="flex items-center gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={channel.logoSrc}
                  alt={channel.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-sans text-lg font-semibold text-glacial">
                    {channel.name}
                  </h3>
                  <p className="font-mono text-xs text-silver">
                    {channel.handle}
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 font-sans text-xs font-medium text-glacial group-hover:underline">
                <span>YouTube</span>
                <ArrowUpRight className="h-4 w-4 text-silver" aria-hidden="true" />
              </span>
            </a>
          ))}
        </div>

        {/* Clean 10-Video Visual Grid */}
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {displayedVideos.map((video, idx) => (
            <Reveal key={video.id} delay={idx * 0.03}>
              <VideoCard video={video} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
