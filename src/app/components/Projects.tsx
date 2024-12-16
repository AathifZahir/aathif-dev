type ProjectsProps = {
  project: {
    id: number;
    name: string;
    technologies: string[];
    date: string;
    description: string;
    image: string;
    link: string;
  };
};

const Projects = ({ project }: ProjectsProps) => {
  return (
    <div className="project-card">
      <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
      <p className="text-gray-700">{project.description}</p>
      <p className="text-sm text-gray-500">
        Technologies: {project.technologies.join(", ")}
      </p>
      <p className="text-sm text-gray-500">Date: {project.date}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        View Project
      </a>
      <img src={project.image} alt={project.name} className="mt-4" />
    </div>
  );
};

export default Projects;
