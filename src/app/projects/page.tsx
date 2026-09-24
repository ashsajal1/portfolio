import type { Metadata } from "next";
import { projects } from "@/lib/projectsList";
import ProjectsList from "@/components/projects-list";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse client and product work built with React, TypeScript and Next.js — SaaS starters, dashboards and web apps.",
  alternates: {
    canonical: "/projects",
  },
};

export default function Projects() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-8">
      <div className="text-center mb-12">
        <h1 className="text-2xl sm:text-3xl font-extrabold gradient-text">
          Here is a list of projects!
        </h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          {projects.length} projects built with React, TypeScript, and Next.js
        </p>
        <div className="mt-4 mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-primary to-secondary" />
      </div>

      <ProjectsList projects={projects} />
    </div>
  )
}
