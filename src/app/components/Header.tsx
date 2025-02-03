import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="bg-background py-2">
      <div className="container mx-auto flex justify-center items-center">
        {/* Desktop Menu */}
        <ul className="hidden lg:flex justify-center space-x-12 text-white">
          <li>
            <a href="#home" className="hover:text-p5 text-p4">
              Home
            </a>
          </li>
          <li>
            <a href="#about-me" className="hover:text-p5 text-p4">
              About Me
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-p5 text-p4">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-p5 text-p4">
              Projects
            </a>
          </li>
          <li>
            <a href="#achievements" className="hover:text-p5 text-p4">
              Achievements
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-p5 text-p4">
              Contact
            </a>
          </li>
        </ul>

        {/* Hamburger or X Icon for Mobile */}
        <div className="lg:hidden flex justify-center items-center mx-auto">
          <button
            onClick={toggleMenu}
            className="text-p3  relative w-8 h-8 transform transition-transform duration-300"
          >
            {isMenuOpen ? (
              <svg
                viewBox="0 0 15 15"
                className="w-5 h-5 "
                version="1.1"
                id="cross"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.64,1.27L7.5,6.13l4.84-4.84C12.5114,1.1076,12.7497,1.0029,13,1c0.5523,0,1,0.4477,1,1
                c0.0047,0.2478-0.093,0.4866-0.27,0.66L8.84,7.5l4.89,4.89c0.1648,0.1612,0.2615,0.3796,0.27,0.61c0,0.5523-0.4477,1-1,1
                c-0.2577,0.0107-0.508-0.0873-0.69-0.27L7.5,8.87l-4.85,4.85C2.4793,13.8963,2.2453,13.9971,2,14c-0.5523,0-1-0.4477-1-1
                c-0.0047-0.2478,0.093-0.4866,0.27-0.66L6.16,7.5L1.27,2.61C1.1052,2.4488,1.0085,2.2304,1,2c0-0.5523,0.4477-1,1-1
                C2.2404,1.0029,2.4701,1.0998,2.64,1.27z"
                  fill="#1faa59"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8 text-p3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu (when hamburger is clicked) */}
      <div
        className={`lg:hidden w-full bg-background p-4 transition-all duration-300 ${
          isMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 text-white">
          <li>
            <a href="#home" className="hover:text-p5 text-p4">
              Home
            </a>
          </li>
          <li>
            <a href="#about-me" className="hover:text-p5 text-p4">
              About Me
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-p5 text-p4">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-p5 text-p4">
              Projects
            </a>
          </li>
          <li>
            <a href="#achievements" className="hover:text-p5 text-p4">
              Achievements
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-p5 text-p4">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
