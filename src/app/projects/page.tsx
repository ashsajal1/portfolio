import Project from "@/components/project";
import { projects } from "@/lib/projectsList";

export default function Projects() {
  return (
    <div>
      <h3 className="text-xl gradient-text font-medium text-center p-2 border-b w-1/2 m-auto border-secondary">Here is a list of projects!</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 p-2 gap-2">
        {projects.map(({title, description, repo, url, image}) => (
          <Project key={repo} title={title} description={description} repo={repo} url={url} image={image} />
        ))}
        
      </div>
    </div>
  )
}
