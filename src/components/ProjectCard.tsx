"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ProjectItem } from "@/data/projects";

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);
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

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setSpotlight((prev) => ({ ...prev, opacity: 0 }))}
      className="group relative overflow-hidden rounded-card border border-white/[0.08] bg-midnight/90 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/25"
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: spotlight.opacity,
          background: `radial-gradient(450px circle at ${spotlight.x}px ${spotlight.y}px, rgba(37, 99, 235, 0.22), transparent 75%)`,
        }}
        aria-hidden="true"
      />

      <Link
        href={`/work/${project.slug}`}
        className="relative z-10 block aspect-video w-full overflow-hidden rounded-editorial bg-abyss"
      >
        {!imageError && project.thumbnailSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.thumbnailSrc}
            alt={project.thumbnailAlt}
            loading="lazy"
            onError={() => setImageError(true)}
            className="h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-abyss p-6">
            <span className="font-sans text-xl font-semibold text-glacial/80">
              {project.title}
            </span>
          </div>
        )}
      </Link>

      <div className="relative z-10 mt-4 flex items-baseline justify-between gap-4 px-0.5">
        <div>
          <span className="font-mono text-[11px] text-silver">
            {project.index} — {project.category}
          </span>
          <h3 className="mt-1 font-sans text-xl font-semibold tracking-[-0.02em] text-glacial">
            <Link
              href={`/work/${project.slug}`}
              className="transition-colors group-hover:text-ice"
            >
              {project.title}
            </Link>
          </h3>
        </div>

        <Link
          href={`/work/${project.slug}`}
          aria-label={`View ${project.title}`}
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-glacial transition-colors group-hover:border-white group-hover:bg-white group-hover:text-midnight"
        >
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
