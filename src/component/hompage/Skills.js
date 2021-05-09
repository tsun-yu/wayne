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
      <div className="skills home-content">
        <div className="topic">SKILLS</div>
        <hr />
        <div className="skills__cards">
          <div className="skills__category">
            <h2>英語技能</h2>
            <div className="skills__item  ">多益成績:810</div>
          </div>
          <div className="skills__category">
            <h2>HTML & CSS</h2>
            <div className=" ">
              <div className="skills__item">
                <SiHtml5 /> HTML5
              </div>
              <div className="skills__item">
                <SiCss3 /> CSS3
              </div>
              <div className="skills__item">
                <SiBootstrap />
                Bootstrap
              </div>
              <div className="skills__item">
                <SiSass /> SCSS
              </div>
              <div className="skills__item">RWD 切版</div>
            </div>
          </div>
          <div className="skills__category">
            <h2>JavaScript</h2>
            <div className=" ">
              <div className="skills__item">
                <SiJavascript /> JavaScript
              </div>
              <div className="skills__item">
                <SiJquery />
                jQuery
              </div>
              <div className="skills__item">
                <SiReact /> React
              </div>
              <div className="skills__item">XHR / AJAX / Fetch</div>
              <div className="skills__item"> RESTful API</div>
            </div>
          </div>
          <div className="skills__category">
            <h2>Others</h2>
            <div className=" ">
              <div className="skills__item">
                <SiNpm /> NPM,
                <SiYarn /> yarn 指令
              </div>
              <div className="skills__item">
                <SiGit /> Git 指令
              </div>
              <div className="skills__item">
                <IoGitBranch /> Git Flow and Branch
              </div>
              <div className="skills__item">
                <SiPostman />
                Postman, JSON Server
              </div>
              <div className="skills__item">
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
