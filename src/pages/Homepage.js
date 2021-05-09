import React from "react";
import AboutMe from "../component/hompage/AboutMe";
import Banner from "../component/hompage/Banner";
import Experience from "../component/hompage/Experience";
import Skills from "../component/hompage/Skills";
import Works from "../component/hompage/Woks";

function Homepage(props) {
  return (
    <>
      <main>
        <Banner />
        <div>
          <AboutMe />
          <Skills />
          <Experience />
          <Works />
        </div>
      </main>
    </>
  );
}

export default Homepage;
