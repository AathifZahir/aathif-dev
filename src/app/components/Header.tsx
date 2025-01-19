export default function Header() {
  return (
    <div className="bg-background py-3">
      <div className="container mx-auto">
        <ul className="flex justify-center space-x-12 text-white">
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
