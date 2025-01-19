import Header from "./components/Header";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="relative h-full">
      {/* Background borders */}
      <div className="absolute top-10 left-0 w-full h-[0.5px] bg-p2 z-50"></div>
      <div className="absolute bottom-11 left-0 w-full h-[0.5px] bg-p2 z-50"></div>
      <div className="absolute top-0 left-10 h-full w-[0.5px] bg-p2 z-50"></div>
      <div className="absolute top-0 right-10 h-full w-[0.5px] bg-p2 z-50"></div>

      {/* Content */}
      {/*<CustomCursor />*/}
      <div className="relative pb-10 h-full">
        <Header />
        <div id="home">
          <Home />
        </div>
        <hr className="h-px mt-20 bg-p2 border-0" />
        <div id="skills">
          <Skills />
        </div>
        <hr className="h-px mt-20 bg-p2 border-0" />
        <div id="projects">
          <Projects />
        </div>
        <hr className="h-px mt-20 bg-p2 border-0" />
        <div id="achievements">
          <Achievements />
        </div>
        <hr className="h-px mt-20 bg-p2 border-0" />
        <div id="contact">
          <Contact />
        </div>
      </div>
      <div className="text-p4 text-center p-2">
        © 2025 Aathif Zahir. All rights reserved.
      </div>
    </div>
  );
}
