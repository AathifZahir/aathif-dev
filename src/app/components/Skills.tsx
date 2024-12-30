import skills from "../data/skills.json";
import {
  SiFigma,
  SiFirebase,
  SiPython,
  SiMongodb,
  SiJavascript,
  SiMysql,
  SiReact,
  SiGithub,
  SiPostman,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaJava, FaGitAlt } from "react-icons/fa";

export default function Skills() {
  const skillList = skills.skills;
  var half_length = Math.ceil(skillList.length / 2);
  var sl1 = skillList.slice(0, half_length);
  var sl2 = skillList.slice(half_length, skillList.length);
  function even(index: number) {
    return index % 2 === 0;
  }
  function odd(index: number) {
    return index % 2 !== 0;
  }

  return (
    <div className="container mt-3 w-[94.5%] mx-auto">
      <div className="text-center overflow-hidden ">
        <ul className="flex text-3xl whitespace-nowrap animate-infinite-scroll gap-4">
          {[...sl1, ...sl1, ...sl1].map((skill, index) => (
            <li
              key={index}
              className={`${
                even(index) ? "text-p4" : "text-p4/50"
              } font-normal`}
            >
              {skill}
            </li>
          ))}
        </ul>
        <ul className="flex text-3xl whitespace-nowrap animate-infinite-scroll-rev gap-4">
          {[...sl2, ...sl2, ...sl2].map((skill, index) => (
            <li
              key={index}
              className={`${
                even(index) ? "text-p4/50" : "text-p4"
              } font-normal`}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="text-center  mt-10 flex gap-10 justify-center">
          <div className="hover:text-p4/50 text-p4 transition-colors duration-150">
            <SiFigma size={55} />
          </div>
          <div className="hover:text-p4/50 text-p4 transition-colors duration-150">
            <SiFirebase size={55} />
          </div>
          <div className="hover:text-p4/50 text-p4 transition-colors duration-150">
            <VscVscode size={55} />
          </div>
          <div className="hover:text-p4/50 text-p4 transition-colors duration-150">
            <SiPython size={55} />
          </div>
          <div className="hover:text-p4/50 text-p4 transition-colors duration-150">
            <SiMongodb size={55} />
          </div>
          <div className="hover:text-p4/50 text-p4 transition-colors duration-150">
            <FaJava size={55} />
          </div>
          <div className="hover:text-p4/50 text-p4 transition-colors duration-150">
            <SiJavascript size={55} />
          </div>
          <div className="hover:text-p4/50 text-p4 transition-colors duration-150">
            <SiMysql size={55} />
          </div>
          <div className="hover:text-p4/50 text-p4 transition-colors duration-150">
            <SiReact size={55} />
          </div>
          <div className="hover:text-p4/50 text-p4 transition-colors duration-150">
            <SiGithub size={55} />
          </div>
          <div className="hover:text-p4/50 text-p4 transition-colors duration-150">
            <SiPostman size={55} />
          </div>
          <div className="hover:text-p4/50 text-p4 transition-colors duration-150">
            <SiTailwindcss size={55} />
          </div>
          <div className="hover:text-p4/50 text-p4 transition-colors duration-150">
            <SiNodedotjs size={55} />
          </div>
          <div className="hover:text-p4/50 text-p4 transition-colors duration-150">
            <SiExpress size={55} />
          </div>
          <div className="hover:text-p4/50 text-p4 transition-colors duration-150">
            <FaGitAlt size={55} />
          </div>
        </div>
      </div>
    </div>
  );
}
