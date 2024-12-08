import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonCircleQuestion, faEarthAsia } from "@fortawesome/free-solid-svg-icons";
import CustomHook from "./CustomHook";

function Projects() {
  const [listProjects] = useState([
    {
      name: "Ballotic",
      des: "Ballotic is a secure, user-friendly web platform that simplifies the election process. It features authentication, real-time results, and privacy-focused voting to ensure fairness. Admins can easily manage elections through a comprehensive dashboard, while 2FA guarantees secure participation.",
      mission: "Making elections secure, simple, and transparent.",
      language: "Next.js, Postgresql, ShadCN",
      images: "/ballotic.png",
    },
    {
      name: "Prasaran",
      des: "प्रसारण is an all-in-one app for college students, simplifying event management, peer networking, and real-time updates. With its user-friendly design and customizable features, it helps students stay connected, organized, and informed on campus.",
      mission:
        "Simplifying campus life through seamless event management, student networking, and real-time updates.",
      language: "Flutter, Firebase, FireStore",
      images: "/prasaran.png",
    },
    {
      name: "FinViser",
      des: "A platform that uses interactive games and contests to teach financial literacy and encourage savings. The project combines education with gamification to make learning about money management both fun and effective.",
      mission: "Gamify financial education to enhance savings habits.",
      language: "Django, MySQL",
      images: "/finvisern.png",
    },
  ]);


  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  
  return (
    <section className="projects" ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        PROJECTS
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
      </div>

      <div className="list">
        {listProjects.map((value, key) => (
          <div className="item" key={key} ref={(el) => el && divs.current.push(el)}>
            <div className="images">
              <img src={value.images} alt="" />
            </div>

            <div className="content" ref={(el) => el && divs.current.push(el)}>
              <h3>{value.name}</h3>
              <div className="des">{value.des}</div>
              <div className="mission">
                <div>
                  <FontAwesomeIcon icon={faPersonCircleQuestion} />
                </div>
                <div className="ct-div">
                  <div>
                    <strong>Objective</strong>
                  </div>
                  <div className="des">{value.mission}</div>
                </div>
              </div>
              <div className="mission">
                <div>
                  <FontAwesomeIcon icon={faEarthAsia} />
                </div>
                <div className="ct-div">
                  <div>
                    <strong>Tech Stack</strong>
                  </div>
                  <div className="des">{value.language}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;
