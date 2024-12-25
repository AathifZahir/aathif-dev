export default function Header() {
    return (
      <div className="bg-background py-4"> 
        <div className="container mx-auto">
          <ul className="flex justify-center space-x-6 text-white">
            <li className="hover:text-gray-400">Home</li> 
            <li className="hover:text-gray-400">About Me</li>
            <li className="hover:text-gray-400">Skills</li>
            <li className="hover:text-gray-400">Projects</li>
            <li className="hover:text-gray-400">Achievements</li>
            <li className="hover:text-gray-400">Contact</li>
          </ul>
        </div>
      </div>
    );
  }
  