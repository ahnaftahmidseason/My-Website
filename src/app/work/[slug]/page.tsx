import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Play } from "lucide-react";
import { projectsData } from "@/data/projects";
import { Reveal } from "@/components/Reveal";
import { CollaborationCTA } from "@/components/CollaborationCTA";

interface WorkDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: WorkDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Study Not Found" };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;
  const projectIndex = projectsData.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projectsData[projectIndex]!;
  const nextProject = projectsData[(projectIndex + 1) % projectsData.length]!;

  return (
    <>
      <article className="border-b border-white/[0.08] pt-28 pb-section-md sm:pt-32">
        <div className="editorial-container">
          <Reveal className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-5">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 font-sans text-xs font-medium text-silver transition-colors hover:text-glacial"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
              <span>All Work</span>
            </Link>

            <span className="font-mono text-xs text-silver">
              {project.index} — {project.category}
            </span>
          </Reveal>

          <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
            <Reveal className="lg:col-span-8">
              <h1 className="font-sans text-display-lg font-semibold tracking-[-0.04em] text-glacial">
                {project.title}
              </h1>
              <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-silver">
                {project.summary}
              </p>
            </Reveal>

            <Reveal delay={0.08} className="flex lg:col-span-4 lg:justify-end">
              {project.externalUrl && (
                <a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[46px] items-center gap-2.5 rounded-full bg-glacial px-6 py-3 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-midnight transition-opacity hover:opacity-90"
                >
                  <Play className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                  <span>{project.externalLabel || "Watch on YouTube"}</span>
                </a>
              )}
            </Reveal>
          </div>

          <Reveal delay={0.12} className="mt-12">
            <div className="aspect-video w-full overflow-hidden rounded-card border border-white/10 bg-abyss">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.thumbnailSrc}
                alt={project.thumbnailAlt}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-silver">
                Stack &amp; Mediums
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.toolsAndMediums.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-full border border-white/10 bg-abyss px-3.5 py-1.5 font-sans text-xs text-glacial"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.08} className="space-y-5 lg:col-span-8">
              <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-silver">
                Overview
              </h2>
              {project.editorialOverview.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="font-sans text-base leading-relaxed text-silver"
                >
                  {paragraph}
                </p>
              ))}
            </Reveal>
          </div>

          <Reveal className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-white/[0.08] pt-10 sm:flex-row sm:items-center">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-silver">
                NEXT PROJECT // {nextProject.index}
              </p>
              <h3 className="mt-1 font-sans text-2xl font-semibold text-glacial">
                <Link href={`/work/${nextProject.slug}`} className="hover:text-ice">
                  {nextProject.title}
                </Link>
              </h3>
            </div>

            <Link
              href={`/work/${nextProject.slug}`}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 font-sans text-xs font-medium text-glacial transition-colors hover:border-white/40"
            >
              <span>Next Study</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </article>

      <CollaborationCTA />
    </>
  );
}
