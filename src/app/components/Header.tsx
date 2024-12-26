export default function Header() {
  return (
    <div className="bg-background py-3">
      <div className="container mx-auto">
        <ul className="flex justify-center space-x-12 text-white">
          <li className="hover:text-p5 text-p4">Home</li>
          <li className="hover:text-p5 text-p4">About Me</li>
          <li className="hover:text-p5 text-p4">Skills</li>
          <li className="hover:text-p5 text-p4">Projects</li>
          <li className="hover:text-p5 text-p4">Achievements</li>
          <li className="hover:text-p5 text-p4">Contact</li>
        </ul>
      </div>
    </div>
  );
}
