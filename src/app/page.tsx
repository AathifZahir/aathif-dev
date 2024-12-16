import Header from "./components/Header";
import Hero from "./components/Hero";
import CustomCursor from "./components/CustomCursor";
import Projects from "./components/Projects";
import ProjectData from "./data/projects.json";

type Project = {
  id: number;
  name: string;
  technologies: string[];
  date: string;
  description: string;
  image: string;
  link: string;
};

function displaydata(project: Project) {
  console.log(project);
}

console.log(ProjectData);
export default function Home() {
  return (
    <div>
      <CustomCursor />
      <div>
        <Header />
      </div>
      <div className="mt-10">
        <Hero />
      </div>
      <div>
        {ProjectData.projects.map((project: Project, index: number) => (
          <div key={index}>
            <Projects project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
