import { PiArrowCircleUpRightBold } from "react-icons/pi";

interface Project {
  id: number;
  name: string;
  technologies: string[];
  date: string;
  description: string;
  link: string;
  image: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="text-p5 flex flex-wrap items-center justify-between mt-16 h-full">
      {/* Left Content */}
      <div
        className={`space-y-4 w-full sm:w-[48%] ${
          project.id % 2 === 0 ? "order-1" : "order-2"
        }`}
      >
        <h1 className="text-2xl font-semibold mb-10">{project.name}</h1>
        <div>
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="mr-3 bg-p6/50 p-1 px-2 rounded-md text-p4"
            >
              {tech}
            </span>
          ))}
        </div>
        <p>{project.description}</p>
        <p>{project.date}</p>
        <p>
          <a
            href={project.link}
            className="underline space-x-1 hover:text-p5/50"
          >
            <span> View Project </span>
            <PiArrowCircleUpRightBold className="inline" size={20} />
          </a>
        </p>
      </div>

      {/* Right Image */}
      <div
        className={`w-full sm:w-[48%] flex ${
          project.id % 2 === 0 ? "order-2 justify-end" : "order-1 justify-start"
        }`}
      >
        <div className="rounded-3xl bg-p6/50 p-10">
          <img
            src={project.image}
            alt={project.name}
            className="rounded-3xl overflow-hidden w-[400px] h-[300px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
