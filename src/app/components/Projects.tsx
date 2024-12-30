import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects.json";

console.log(projects);

export default function Projects() {
  return (
    <div className="container mx-auto w-10/12 mt-10 h-full">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
