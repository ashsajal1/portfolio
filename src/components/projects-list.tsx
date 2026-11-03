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
    <section className="project-index" aria-label="Projects">
      <h2 className="index-title">All projects</h2>

      {allTags.length > 0 && (
        <div className="filter-row" role="group" aria-label="Filter projects by technology">
          <button
            type="button"
            onClick={() => setActiveTag(null)}
            aria-pressed={activeTag === null}
            className="filter-btn"
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              aria-pressed={activeTag === tag}
              className="filter-btn"
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      <div className="project-list">
        {filtered.map(({ title, description, repo, url, image, tags }) => (
          <Project
            key={repo}
            title={title}
            description={description}
            repo={repo}
            url={url}
            image={image}
            tags={tags}
          />
        ))}
      </div>
    </section>
  );
}
