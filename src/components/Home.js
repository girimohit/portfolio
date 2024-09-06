import React, { useRef } from "react";
import CustomHook from "./CustomHook";
function Home() {
  const scrollTab = useRef();
  CustomHook(scrollTab);

  return (
    <section ref={scrollTab} className="home">
      <div className="content">
        <div className="name">
          {/* MY NAME IS <span>Mohit Giri</span> */}
          I'm a <span>Developer</span>
        </div>
        <div className="des">
          {/* 30 */}
          I am a passionate web and app Developer with a strong focus on creating responsive and user-friendly websites. I am always eager to learn and stay up-to-date with the latest trends and technologies in the field. 
          I thrive on the challenge of solving complex problems and creating efficient, scalable solutions

          </div>

        <a href="/mohit_giri_cv.pdf" target="_blank" rel="noopener noreferrer" className="animation active">
          Download My CV
        </a>
      </div>
      <div className="avatar">
        <div className="card">
          <img src="/avatarr.jpg" alt="" />
          {/* <div className="info">
            <div>Developer</div>
            <div>VietNamese</div>
            <div>03/12</div>
            <div>Male</div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Home;
