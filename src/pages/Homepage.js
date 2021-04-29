import React from "react";
import AboutMe from "../component/AboutMe";
import Banner from "../component/Banner";
import Skills from "../component/Skills";

function Homepage(props) {
  return (
    <>
      <main>
        <Banner />
        <AboutMe />
        <Skills />
        <Skills />
        <Skills />
      </main>
    </>
  );
}

export default Homepage;
