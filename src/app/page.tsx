"use client";

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

export default function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      const homeBottom =
        (homeSection?.offsetTop ?? 0) + (homeSection?.offsetHeight ?? 0);
      const scrollPosition = window.scrollY;

      // Show the button when the user is not in the "Home" section
      if (scrollPosition > homeBottom) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative h-full">
      {/* Background borders  */}
      <div className="absolute top-10 left-0 w-full h-[0.5px] bg-p2 z-50"></div>
      <div className="absolute bottom-11 left-0 w-full h-[0.5px] bg-p2 z-50"></div>
      <div className="absolute top-0 left-10 h-full w-[0.5px] bg-p2 z-50"></div>
      <div className="absolute top-0 right-10 h-full w-[0.5px] bg-p2 z-50"></div>

      {/* Content */}
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

      {/* Floating Download Button */}
      {showButton && (
        <a
          href="https://www.dropbox.com/scl/fi/92rqk09pwqc4psznzlyvn/Aathif_Zahir_CV.pdf?rlkey=3rra1ehgin0zwalytk2khl966&st=m970an65&dl=1"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 flex items-center justify-center gap-2 bg-p4 text-white rounded-full z-[999] group overflow-hidden transition-all duration-300 ease-in-out p-4 hover:shadow-p4/50 hover:-translate-y-1 hover:shadow-lg hover:scale-110 w-14 hover:w-auto transition-width duration-300 ease-in-out"
          aria-label="Download CV"
        >
          {/* Icon always visible */}
          <svg
            className="flex-shrink-0"
            width="20"
            height="17"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.25 12.125V15.625C18.25 16.0891 18.0568 16.5342 17.713 16.8624C17.3692 17.1906 16.9029 17.375 16.4167 17.375H3.58333C3.0971 17.375 2.63079 17.1906 2.28697 16.8624C1.94315 16.5342 1.75 16.0891 1.75 15.625V12.125M5.41667 7.75L10 12.125M10 12.125L14.5833 7.75M10 12.125V1.625"
              stroke="#080909"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Text only visible on hover */}
          <span className="duration-300 ease-in-out text-background hidden whitespace-nowrap group-hover:inline-block transition-all duration-300 ease-in-out">
            Resume
          </span>
        </a>
      )}
    </div>
  );
}
