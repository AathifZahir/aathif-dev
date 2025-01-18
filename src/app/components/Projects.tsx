import ProjectCard from "./ProjectCard";
import projectsData from "../data/projects.json";

interface Project {
  id: number;
  name: string;
  technologies: string[];
  date: string;
  description: string;
  link: string;
  image: string;
}

interface ProjectsData {
  projects: Project[];
}

const projects: Project[] = projectsData.projects;

export default function Projects() {
  return (
    <div className="container mx-auto w-10/12 mt-10 h-full">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
