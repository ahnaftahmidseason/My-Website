import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projectsData } from "@/data/projects";
import { Reveal } from "@/components/Reveal";

export function FeaturedWork() {
  const featuredProjects = projectsData.filter((project) => project.featured);

  return (
    <section
      id="featured-work"
      aria-labelledby="featured-work-heading"
      className="border-b border-white/[0.08] bg-midnight py-section-lg"
    >
      <div className="editorial-container">
        <Reveal className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-silver">
              02 / SELECTED WORK
            </p>
            <h2
              id="featured-work-heading"
              className="mt-2 font-sans text-display-xl font-semibold tracking-[-0.04em] text-glacial"
            >
              Featured Projects.
            </h2>
          </div>

          <Link
            href="/work"
            className="inline-flex min-h-[42px] items-center gap-2 rounded-full border border-white/15 px-5 py-2 font-sans text-xs font-medium text-glacial transition-colors hover:border-white/40"
          >
            <span>All Work ({projectsData.length})</span>
            <ArrowUpRight className="h-4 w-4 text-silver" aria-hidden="true" />
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2">
          {featuredProjects.map((project, idx) => (
            <Reveal
              key={project.slug}
              as="article"
              delay={idx * 0.05}
              className="group"
            >
              <Link
                href={`/work/${project.slug}`}
                className="relative block aspect-video w-full overflow-hidden rounded-card border border-white/10 bg-abyss"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.thumbnailSrc}
                  alt={project.thumbnailAlt}
                  loading={idx < 2 ? "eager" : "lazy"}
                  className="h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
                />
              </Link>

              <div className="mt-5 flex items-baseline justify-between gap-4">
                <div>
                  <span className="font-mono text-[11px] text-silver">
                    {project.index} — {project.category}
                  </span>
                  <h3 className="mt-1 font-sans text-xl font-semibold tracking-[-0.02em] text-glacial sm:text-2xl">
                    <Link
                      href={`/work/${project.slug}`}
                      className="transition-colors group-hover:text-silver"
                    >
                      {project.title}
                    </Link>
                  </h3>
                </div>

                {project.externalUrl ? (
                  <a
                    href={project.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Watch ${project.title}`}
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-glacial transition-colors hover:border-white/40 hover:bg-white hover:text-midnight"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : (
                  <Link
                    href={`/work/${project.slug}`}
                    aria-label={`View ${project.title}`}
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-glacial transition-colors hover:border-white/40 hover:bg-white hover:text-midnight"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
