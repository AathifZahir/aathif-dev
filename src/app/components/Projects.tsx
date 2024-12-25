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
  index: number; // To apply incremental sticky positions
};

const Projects = ({ project, index }: ProjectsProps) => {
  return (
    <div
      className="project-card bg-white p-8 rounded-lg shadow-md m-10"
      style={{
        position: "sticky",
        top: `calc(2rem * ${index + 1})`,
        zIndex: 10 - index, // Ensures proper stacking order
      }}
    >
      <div className="flex justify-between items-start">
        {/* Left Content */}
        <div className="w-1/2 space-y-4">
          <h2 className="text-2xl font-bold mb-2 text-gray-900">
            {project.name}
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((item: string, index: number) => (
              <span
                key={index}
                className="text-white bg-black rounded-lg px-2 py-1"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="text-gray-700">{project.description}</p>
          <p className="text-sm text-gray-500">Date: {project.date}</p>
          <div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Project
            </a>
          </div>
        </div>
        {/* Right Image */}
        <img
          src={project.image}
          alt={project.name}
          className="w-1/3 rounded-lg"
        />
      </div>
    </div>
  );
};

export default Projects;
