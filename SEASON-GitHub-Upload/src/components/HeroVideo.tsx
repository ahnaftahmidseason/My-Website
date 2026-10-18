"use client";

import React, { useEffect, useRef } from "react";
import { heroMediaManifest } from "@/data/media-manifest";

interface HeroVideoProps {
  videoSrc?: string;
}

export function HeroVideo({
  videoSrc = heroMediaManifest.mp4Src,
}: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    videoEl.muted = true;
    videoEl.defaultMuted = true;
    videoEl.playsInline = true;

    const startPlayback = () => {
      const playPromise = videoEl.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Retry on first user interaction if browser blocks initial autoplay
        });
      }
    };

    startPlayback();
  }, [videoSrc]);

  return (
    <div
      className="relative h-full w-full overflow-hidden bg-midnight"
      aria-hidden="true"
    >
      <video
        key={videoSrc}
        ref={videoRef}
        src={videoSrc}
        poster={heroMediaManifest.posterSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="h-full w-full object-cover"
      />

      {/* Minimal Bottom Vignette Only for the Bottom Bar */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-36"
        style={{
          background:
            "linear-gradient(180deg, rgba(3,6,17,0) 0%, rgba(3,6,17,0.82) 100%)",
        }}
      />
    </div>
  );
}
