import React, { useEffect } from "react";

function Navbar(props) {
  useEffect(() => {
    //縮小navbar
    document.body.clientWidth >= 540 &&
      window.addEventListener("scroll", () => {
        window.scrollY >= 50
          ? document.querySelector(".navbar").classList.add("navbarFix")
          : document.querySelector(".navbar").classList.remove("navbarFix");
      });
    //進度條
    window.addEventListener("scroll", () => {
      const documentHeight = document.body.offsetHeight;
      const windowHeight = window.innerHeight;
      let scrollHeight = window.scrollY;
      let progressPercent =
        (100 * scrollHeight) / (documentHeight - windowHeight);

      document.querySelector(".navbar__progress").style.width =
        progressPercent + "%";
    });

    return () => {};
  }, []);

  const scrollTo = (ele) => {
    const distance =
      document.querySelector(ele).offsetTop -
      document.querySelector(".navbar").offsetHeight;

    window.scrollTo({
      top: distance,
      behavior: "smooth",
    });
  };

  return (
    <>
      <header className="navbar">
        <div className="navbar__progress"></div>
        <span>WAYNE</span>
        <ul>
          {/* about */}
          <li
            onClick={() => {
              scrollTo(".about-section");
            }}
          >
            ABOUT
          </li>
          {/* skills */}
          <li
            onClick={() => {
              scrollTo(".skills");
            }}
          >
            SKILLS
          </li>
          {/* experience */}
          <li
            onClick={() => {
              scrollTo(".exp__sec");
            }}
          >
            EXPERIENCE
          </li>
          {/* portfolios */}
          <li
            onClick={() => {
              scrollTo(".exp__sec");
            }}
          >
            PORFOLIOS
          </li>
        </ul>
      </header>
    </>
  );
}

export default Navbar;
