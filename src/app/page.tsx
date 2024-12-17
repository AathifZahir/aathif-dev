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
      <div className={`relative m-20`} style={{ minHeight: "300vh" }}>
        {ProjectData.projects.map((project: Project, index: number) => (
          <Projects key={project.id} project={project} index={0} />
        ))}
      </div>
    </div>
  );
}
