import CustomCursor from "./components/CustomCursor";
import Header from "./components/Header";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div className="relative h-full">
      {/* Background borders */}
      <div className="absolute top-10 left-0 w-full h-[0.5px] bg-p2 z-50"></div>
      <div className="absolute bottom-10 left-0 w-full h-[0.5px] bg-p2 z-50"></div>
      <div className="absolute top-0 left-10 h-full w-[0.5px] bg-p2 z-50"></div>
      <div className="absolute top-0 right-10 h-full w-[0.5px] bg-p2 z-50"></div>

      {/* Content */}
      <CustomCursor />
      <div className="relative pb-20 h-full">
        <Header />
        <Home />
        <hr className="h-px mt-20 bg-p2 border-0" />
        <Skills />
        <hr className="h-px mt-20 bg-p2 border-0" />
        <Projects />
      </div>
    </div>
  );
}
