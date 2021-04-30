import React from "react";
import AboutMe from "../component/AboutMe";
import Banner from "../component/Banner";
import Experience from "../component/Experience";
import Skills from "../component/Skills";

function Homepage(props) {
  return (
    <>
      <main>
        <Banner />
        <AboutMe />
        <Skills />
        <Experience />
      </main>
    </>
  );
}

export default Homepage;
