import type { Metadata } from "next";
import { projects } from "@/lib/projectsList";
import ProjectsList from "@/components/projects-list";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Client and product work built with React, TypeScript and Next.js: SaaS starters, dashboards and web apps.",
  alternates: {
    canonical: "/projects",
  },
};

export default function Projects() {
  return (
    <div className="shell page-wrap">
      <header className="page-head">
        <div className="page-head-grid">
          <h1 className="page-title">Work built and shipped</h1>
          <p className="page-lede">
            {projects.length} projects built with React, TypeScript and Next.js. Each
            one is live.
          </p>
        </div>
      </header>

      <ProjectsList projects={projects} />
    </div>
  );
}
