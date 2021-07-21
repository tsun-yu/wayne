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
import SkillItem from "./SkillsItem";

function Skills(props) {
  return (
    <>
      <div className="skills home-content">
        <div className="topic">SKILLS</div>
        <hr />
        <div className="skills__cards">
          <SkillItem
            coverTitle="英語技能"
            backItems={["多益成績:810"]}
            id="en-skill"
          />
          <SkillItem
            coverTitle="HTML & CSS"
            backItems={[
              <>
                <SiHtml5 /> HTML5
              </>,
              <>
                <SiCss3 /> CSS3
              </>,
              <>
                <SiBootstrap /> Bootstrap
              </>,
              <>
                <SiSass /> SCSS
              </>,
              "RWD 切版",
            ]}
          />
          <SkillItem
            coverTitle="JavaScript"
            backItems={[
              <>
                <SiJavascript /> JavaScript
              </>,
              <>
                <SiJquery /> jQuery
              </>,
              <>
                <SiReact /> React
              </>,
              "XHR / AJAX / Fetch",
              "RESTful API",
            ]}
          />
          <SkillItem
            coverTitle="Others"
            backItems={[
              <>
                <SiNpm /> NPM, <SiYarn /> yarn 指令
              </>,
              <>
                <SiGit /> Git 指令
              </>,
              <>
                <IoGitBranch /> Git Flow and Branch
              </>,
              <>
                <SiPostman /> Postman, JSON Server
              </>,
              <>
                <SiPython /> Python
                {/* <br />
                (Numpy, Pandas) */}
              </>,
            ]}
          />
        </div>
      </div>
    </>
  );
}

export default Skills;
