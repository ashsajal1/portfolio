import Project from "@/components/project";
import { projects } from "@/lib/projectsList";

export default function Projects() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-8">
      <div className="text-center mb-12">
        <h3 className="text-2xl sm:text-3xl font-extrabold gradient-text">
          Here is a list of projects!
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          {projects.length} projects built with React, TypeScript, and Next.js
        </p>
        <div className="mt-4 mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-primary to-secondary" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {projects.map(({title, description, repo, url, image}) => (
          <Project key={repo} title={title} description={description} repo={repo} url={url} image={image} />
        ))}

      </div>
    </div>
  )
}