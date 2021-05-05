import React, { useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar(props) {
  useEffect(() => {
    // const document.querySelector = (id) => document.querySelector(id);

    const aboutHeight =
      document.querySelector(".about-section").offsetTop -
      document.querySelector(".navbar").offsetHeight;
    const skillHeight =
      document.querySelector(".skills").offsetTop -
      document.querySelector(".navbar").offsetHeight;
    const expHeight =
      document.querySelector(".exp__sec").offsetTop -
      document.querySelector(".navbar").offsetHeight;

    const resetColor = () => {
      document.querySelectorAll(".navbar>ul>li").forEach((v) => {
        v.classList.remove("navbar__selected");
      });
    };

    window.addEventListener("scroll", () => {
      //縮小
      document.body.clientWidth >= 540 &&
        (window.scrollY >= 50
          ? document.querySelector(".navbar").classList.add("navbarFix")
          : document.querySelector(".navbar").classList.remove("navbarFix"));

      //進度條
      const documentHeight = document.body.offsetHeight;
      const windowHeight = window.innerHeight;
      let scrollHeight = window.scrollY;
      let progressPercent =
        (100 * scrollHeight) / (documentHeight - windowHeight);

      document.querySelector(".navbar__progress").style.width =
        progressPercent + "%";

      //變色
      if (scrollHeight >= aboutHeight && scrollHeight < skillHeight) {
        resetColor();
        document.querySelector("#nav-about").classList.add("navbar__selected");
      } else if (scrollHeight >= skillHeight && scrollHeight < expHeight) {
        resetColor();
        document.querySelector("#nav-skill").classList.add("navbar__selected");
      } else if (scrollHeight >= expHeight) {
        resetColor();
        document.querySelector("#nav-exp").classList.add("navbar__selected");
      } else {
        resetColor();
      }
    });

    return () => {};
  }, []);

  //scroll to the element
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
        <div className="navbar__ham" onClick={() => {}}>
          <GiHamburgerMenu size={35} color={"#333"} />
        </div>
        <ul>
          {/* about */}
          <li
            id="nav-about"
            onClick={() => {
              scrollTo(".about-section");
            }}
          >
            ABOUT
          </li>
          {/* skills */}
          <li
            id="nav-skill"
            onClick={() => {
              scrollTo(".skills");
            }}
          >
            SKILLS
          </li>
          {/* experience */}
          <li
            id="nav-exp"
            onClick={() => {
              scrollTo(".exp__sec");
            }}
          >
            EXPERIENCE
          </li>
          {/* portfolios */}
          <li
            id="nav-prots"
            onClick={() => {
              scrollTo(".exp__sec");
            }}
          >
            PORFOLIOS
          </li>
          <li>CONTACT</li>
        </ul>
      </header>
    </>
  );
}

export default Navbar;
