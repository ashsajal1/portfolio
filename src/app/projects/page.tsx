import Project from "@/components/project";

export default function Projects() {
  return (
    <div>
      <h3>Here is a list of projects!</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 p-2 gap-2">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  )
}
