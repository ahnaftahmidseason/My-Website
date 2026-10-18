"use client";

import React, { useState, useMemo } from "react";
import {
  projectsData,
  projectCategories,
  type ProjectCategory,
} from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";

export function WorkArchiveClient() {
  const [selectedCategory, setSelectedCategory] = useState<"All" | ProjectCategory>("All");

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") {
      return projectsData;
    }
    return projectsData.filter((project) => project.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div>
      {/* Clean Filter Pill Bar */}
      <div
        role="toolbar"
        aria-label="Filter projects by discipline"
        className="mb-12 flex flex-wrap items-center gap-2 border-b border-white/[0.08] pb-6"
      >
        <button
          type="button"
          onClick={() => setSelectedCategory("All")}
          aria-pressed={selectedCategory === "All"}
          className={`min-h-[38px] rounded-full px-4 py-1.5 font-sans text-xs font-medium transition-colors ${
            selectedCategory === "All"
              ? "bg-glacial text-midnight"
              : "border border-white/15 text-silver hover:text-glacial"
          }`}
        >
          All ({projectsData.length})
        </button>

        {projectCategories.map((category) => {
          const isSelected = selectedCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              aria-pressed={isSelected}
              className={`min-h-[38px] rounded-full px-4 py-1.5 font-sans text-xs font-medium transition-colors ${
                isSelected
                  ? "bg-glacial text-midnight"
                  : "border border-white/15 text-silver hover:text-glacial"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
        {filteredProjects.map((project, idx) => (
          <Reveal key={project.slug} delay={idx * 0.04}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
