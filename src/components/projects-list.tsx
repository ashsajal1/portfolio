"use client";
import React, { useMemo, useState } from "react";
import Project from "@/components/project";
import { projects as projectsData } from "@/lib/projectsList";

type ProjectType = (typeof projectsData)[number];

export default function ProjectsList({ projects }: { projects: ProjectType[] }) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.tags?.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, [projects]);

  const filtered = useMemo(
    () =>
      activeTag
        ? projects.filter((p) => p.tags?.includes(activeTag))
        : projects,
    [projects, activeTag]
  );

  return (
    <div className="max-w-6xl mx-auto">
      {allTags.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            type="button"
            onClick={() => setActiveTag(null)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
              activeTag === null
                ? "bg-gradient-to-br from-primary to-secondary text-slate-50 border-transparent"
                : "border-secondaryLow/50 dark:border-secondaryLow/20 text-slate-600 dark:text-slate-300 hover:border-primary/40"
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                activeTag === tag
                  ? "bg-gradient-to-br from-primary to-secondary text-slate-50 border-transparent"
                  : "border-secondaryLow/50 dark:border-secondaryLow/20 text-slate-600 dark:text-slate-300 hover:border-primary/40"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map(({ title, description, repo, url, image }) => (
          <Project
            key={repo}
            title={title}
            description={description}
            repo={repo}
            url={url}
            image={image}
          />
        ))}
      </div>
    </div>
  );
}
