import React from "react";
import {
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiSass,
  SiJavascript,
  SiJquery,
  SiReact,
  SiNpm,
  SiYarn,
  SiGit,
  SiPostman,
  SiPython,
} from "react-icons/si";

import { IoGitBranch } from "react-icons/io5";

function Skills(props) {
  return (
    <>
      <div className="skill-section">
        <div className="topic">SKILLS</div>
        <hr />
        <div className="skills">
          <div className="skill-category">
            <h2>英語技能</h2>
            <div className="skillsItems  ">多益成績:810</div>
          </div>
          <div className="skill-category">
            <h2>HTML & CSS</h2>
            <div className=" ">
              <div className="skillsItems">
                <SiHtml5 /> HTML5
              </div>
              <div className="skillsItems">
                <SiCss3 /> CSS3
              </div>
              <div className="skillsItems">
                <SiBootstrap />
                Bootstrap
              </div>
              <div className="skillsItems">
                <SiSass /> SCSS
              </div>
              <div className="skillsItems">RWD 切版</div>
            </div>
          </div>
          <div className="skill-category">
            <h2>JavaScript</h2>
            <div className=" ">
              <div className="skillsItems">
                <SiJavascript /> JavaScript
              </div>
              <div className="skillsItems">
                <SiJquery />
                jQuery
              </div>
              <div className="skillsItems">
                <SiReact /> React
              </div>
              <div className="skillsItems">XHR / AJAX / Fetch</div>
              <div className="skillsItems"> RESTful API</div>
            </div>
          </div>
          <div className="skill-category">
            <h2>Others</h2>
            <div className=" ">
              <div className="skillsItems">
                <SiNpm /> NPM,
                <SiYarn /> yarn 指令
              </div>
              <div className="skillsItems">
                <SiGit /> Git 指令
              </div>
              <div className="skillsItems">
                <IoGitBranch /> Git Flow and Branch
              </div>
              <div className="skillsItems">
                <SiPostman />
                Postman, JSON Server
              </div>
              <div className="skillsItems">
                <SiPython /> Python(Numpy, Pandas)
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
