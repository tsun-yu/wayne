import React, { useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation, useHistory } from "react-router-dom";

function Navbar(props) {
  let location = useLocation();
  let history = useHistory();

  const resetColor = () => {
    document.querySelectorAll(".navbar>ul>li").forEach((v) => {
      v.classList.remove("navbar__selected");
    });
  };
  const slr = (id) => document.querySelector(id);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      //縮小
      document.body.clientWidth >= 540 &&
        (window.scrollY >= 50
          ? slr(".navbar").classList.add("navbarFix")
          : slr(".navbar").classList.remove("navbarFix"));

      //進度條
      const documentHeight = document.body.offsetHeight;
      const windowHeight = window.innerHeight;
      let scrollHeight = window.scrollY;
      let progressPercent =
        (100 * scrollHeight) / (documentHeight - windowHeight);
      slr(".navbar__progress").style.width = progressPercent + "%";

      //需滾動的距離
      const scrollDistance = (ele) =>
        slr(ele) === null
          ? 0
          : slr(ele).offsetTop - slr(".navbar").offsetHeight;

      //每項元素需滾動的距離
      const homeContents = [];
      document
        .querySelectorAll(".home-content")
        .forEach((v, i) =>
          homeContents.push(scrollDistance(`.home-content:nth-child(${i + 1})`))
        );

      // for (let i = 0; i > homeContents.length - 1; i++) {
      //   if (scrollHeight < homeContents[i + 1]) {
      //     resetColor();
      //     slr("#nav-prots").classList.add("navbar__selected");
      //     break;
      //   }
      // }
      //變色
      if (scrollHeight >= homeContents[0] && scrollHeight < homeContents[1]) {
        resetColor();
        slr("#nav-about").classList.add("navbar__selected");
      } else if (
        scrollHeight >= homeContents[1] &&
        scrollHeight < homeContents[2]
      ) {
        resetColor();
        slr("#nav-skill").classList.add("navbar__selected");
      } else if (
        scrollHeight >= homeContents[2] &&
        scrollHeight <= homeContents[3]
      ) {
        resetColor();
        slr("#nav-exp").classList.add("navbar__selected");
      } else if (scrollHeight >= homeContents[3]) {
        resetColor();
        slr("#nav-prots").classList.add("navbar__selected");
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
  const homeNav = (
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
              scrollTo(".works");
            }}
          >
            PORFOLIOS
          </li>

          {/* <li>
            <Link to="contact">CONTACT</Link>
          </li> */}
        </ul>
      </header>
    </>
  );
  const commonNav = (
    <>
      <header className="navbar">
        <div className="navbar__progress"></div>
        <span>WAYNE</span>
        <div className="navbar__ham" onClick={() => {}}>
          <GiHamburgerMenu size={35} color={"#333"} />
        </div>
        <ul>
          <li>
            <Link to="test">test</Link>
          </li>
          <li>
            <Link to="/">home</Link>
          </li>
        </ul>
      </header>
    </>
  );

  return location.pathname === "/" ? homeNav : commonNav;
}

export default Navbar;
