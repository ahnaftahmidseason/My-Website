"use client";

import React, { useRef, useState } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import type { FeaturedVideoItem } from "@/data/ai-spoiler";

interface VideoCardProps {
  video: FeaturedVideoItem;
  accent?: "blue" | "violet";
}

export function VideoCard({ video, accent = "blue" }: VideoCardProps) {
  const [imgError, setImgError] = useState(false);
  const cardRef = useRef<HTMLElement | null>(null);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setSpotlight({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setSpotlight((prev) => ({ ...prev, opacity: 0 }));
  };

  const glowColor =
    accent === "violet"
      ? "rgba(168, 85, 247, 0.24)"
      : "rgba(37, 99, 235, 0.26)";

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative overflow-hidden rounded-card border border-white/[0.08] bg-midnight/90 p-3.5 transition-all duration-300 hover:-translate-y-1 hover:border-white/25"
    >
      {/* Mouse-Following Spotlight Aura inside Card */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: spotlight.opacity,
          background: `radial-gradient(360px circle at ${spotlight.x}px ${spotlight.y}px, ${glowColor}, transparent 75%)`,
        }}
        aria-hidden="true"
      />

      <a
        href={video.videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Watch ${video.title} on YouTube`}
        className="relative z-10 block aspect-video w-full overflow-hidden rounded-editorial bg-abyss"
      >
        {!imgError && video.thumbnailSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={video.thumbnailSrc}
            alt={video.thumbnailAlt}
            loading="lazy"
            onError={() => setImgError(true)}
            className="h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.04]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center p-6">
            <span className="font-mono text-xs text-silver">
              {video.episodeNumber}
            </span>
          </div>
        )}

        {/* Subtle Play Indicator on Hover */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-midnight/35 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-glacial text-midnight shadow-xl">
            <Play className="ml-0.5 h-4 w-4 fill-current" />
          </span>
        </div>
      </a>

      <div className="relative z-10 mt-3.5 flex items-start justify-between gap-3 px-0.5">
        <div className="flex items-start gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={video.channelLogo}
            alt={video.channelName}
            className="mt-0.5 h-6 w-6 shrink-0 rounded-full object-cover ring-1 ring-white/15"
          />
          <div>
            <h3 className="line-clamp-1 font-sans text-sm font-semibold text-glacial transition-colors group-hover:text-ice">
              <a
                href={video.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {video.title}
              </a>
            </h3>
            <p className="mt-0.5 font-mono text-[11px] text-silver">
              {video.category}
            </p>
          </div>
        </div>

        <a
          href={video.videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${video.title}`}
          className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-silver transition-colors group-hover:text-glacial"
        >
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}
