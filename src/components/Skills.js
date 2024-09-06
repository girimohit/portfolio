import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faHtml5, faCss3, faJs, faVuejs, faLaravel } from "@fortawesome/free-brands-svg-icons";
import { RiFlutterFill } from "react-icons/ri";
import CustomHook from "./CustomHook";

import { SiFlask } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { SiMongodb, SiDart } from "react-icons/si";
import { FaPython } from "react-icons/fa6";
import { TbBrandCpp } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";

function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  const [listSkills] = useState([
    {
      name: "Django",
      icon: <SiDjango />,
    },
    {
      name: "MERN Stack",
      icon: <RiFlutterFill />,
    },
    {
      name: "NextJS",
      icon: <RiNextjsLine />,
    },
    {
      name: "Flask",
      icon: <SiFlask />,
    },
    {
      name: "ReactJs",
      icon: <FontAwesomeIcon icon={faReact} />,
    },
    {
      name: "Flutter",
      icon: <RiFlutterFill />,
    },
    {
      name: "MySQL",
      icon: <SiMysql />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
    },
    {
      name: "C++",
      icon: <TbBrandCpp />,
    },
    {
      name: "Python",
      icon: <FaPython />,
    },
    {
      name: "Javascript",
      icon: <IoLogoJavascript />,
    },
    {
      name: "Dart",
      icon: <SiDart />,
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
    },
    {
      name: "Docker",
      icon: <FaDocker />,
    },
    {
      name: "Python",
      icon: <FaPython />,
    },
  ]);

  return (
    <section className="skills" ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        SKILLS
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
      </div>
      <div className="list">
        {listSkills.map((value, key) => (
          <div className={"item"} key={key} ref={(el) => el && divs.current.push(el)}>
            {value.icon}
            <h3>{value.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
