import React from "react";
import AboutMe from "../component/AboutMe";
import Banner from "../component/Banner";

function Homepage(props) {
  return (
    <>
      <main>
        <Banner />
        <AboutMe />
      </main>
    </>
  );
}

export default Homepage;
