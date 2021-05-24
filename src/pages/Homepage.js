import React from "react";
import AboutMe from "../component/hompage/AboutMe";
import Banner from "../component/hompage/Banner";
import Experience from "../component/hompage/Experience";
import Skills from "../component/hompage/Skills";

function Homepage(props) {
  return (
    <>
      <Banner />
      <div>
        <AboutMe />
        <Skills />
        <Experience />
      </div>
    </>
  );
}

export default Homepage;
