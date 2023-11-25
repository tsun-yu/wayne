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
  SiReactrouter,
  SiRedux,
  SiGithub,
} from "react-icons/si";

import { IoGitBranch, IoLogoVue } from "react-icons/io5";
import SkillItem from "./SkillsItem";

function Skills(props) {
  return (
    <>
      <div className="skills home-content">
        <div className="topic">SKILLS</div>
        <hr />
        <div className="skills__container">
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
                "BEM 命名法",
                <>
                  <SiBootstrap /> Bootstrap 4
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
                  <SiJavascript /> JavaScript ES6
                </>,
                <>
                  <SiJquery /> jQuery
                </>,
                "AJAX",
                "Promise / Async Await",
                "RESTful API",
              ]}
            />
            <SkillItem
              coverTitle="React"
              backItems={[
                <>
                  <SiReact /> React 17
                </>,
                <>
                  <SiReactrouter /> React-router
                </>,
                <>
                  <SiRedux /> Redux
                </>,
                "React Hooks",
                "Zustand",
              ]}
            />
            <SkillItem
              coverTitle="Vue"
              backItems={[
                <>
                  <IoLogoVue /> Vue 2
                </>,
                <>
                  <IoLogoVue /> Vue 3
                </>,
                "Vue-router",
                "Vuex",
              ]}
            />
            <SkillItem
              coverTitle="Others"
              backItems={[
                <>
                  <SiNpm /> NPM, <SiYarn /> yarn
                </>,
                <>
                  <SiGit /> Git
                </>,
                <>
                  <SiGithub /> Github
                </>,
                <>
                  <SiPostman /> Postman
                </>,
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;

// jsklfjlsajfdljsaldjflk
