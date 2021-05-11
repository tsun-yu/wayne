import React, { useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { Link, useLocation, useHistory } from "react-router-dom";

function Navbar(props) {
  let location = useLocation();
  let history = useHistory();

  const resetColor = () => {
    document.querySelectorAll(".navbar>ul>li").forEach((v) => {
      v.classList.remove("navbar__selected");
    });
    document.querySelectorAll(".menu>ul>li").forEach((v) => {
      v.classList.remove("menu__selected");
    });
  };
  const slr = (id) => document.querySelector(id);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      //縮小

      if (slr(".navbar") === null) {
        return 0;
      } else {
        document.body.clientWidth >= 540 &&
          (window.scrollY >= 50
            ? slr(".navbar").classList.add("navbarFix")
            : slr(".navbar").classList.remove("navbarFix"));
      }

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
        slr("#menu-about").classList.add("menu__selected");
      } else if (
        scrollHeight >= homeContents[1] &&
        scrollHeight < homeContents[2]
      ) {
        resetColor();
        slr("#nav-skill").classList.add("navbar__selected");
        slr("#menu-skill").classList.add("menu__selected");
      } else if (
        scrollHeight >= homeContents[2] &&
        scrollHeight < homeContents[3]
      ) {
        resetColor();
        slr("#nav-exp").classList.add("navbar__selected");
        slr("#menu-exp").classList.add("menu__selected");
      } else if (scrollHeight >= homeContents[3]) {
        resetColor();
        slr("#nav-ports").classList.add("navbar__selected");
        slr("#menu-ports").classList.add("menu__selected");
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
  const menuToggle = (action) => {
    if (action === "in") {
      slr(".menu").classList.add("menu__appear");
      slr("#menu-ham").style.display = "none";
      slr("#menu-close").style.display = "block";
    } else {
      slr(".menu").classList.remove("menu__appear");
      slr("#menu-ham").style.display = "block";
      slr("#menu-close").style.display = "none";
    }

    // document.querySelector(".menu").classList.remove("menu__appear");
  };
  const homeNav = (
    <>
      <header className="navbar">
        <div className="navbar__progress"></div>
        <span>WAYNE</span>
        <div className="navbar__ham">
          <GiHamburgerMenu
            id="menu-ham"
            size={35}
            color={"#333"}
            onClick={() => menuToggle("in")}
          />
          <MdClose
            id="menu-close"
            size={35}
            color={"#333"}
            style={{ display: "none" }}
            onClick={() => menuToggle("out")}
          />
        </div>
        <ul>
          <li
            id="nav-about"
            onClick={() => {
              scrollTo(".about-section");
            }}
          >
            ABOUT
          </li>

          <li
            id="nav-skill"
            onClick={() => {
              scrollTo(".skills");
            }}
          >
            SKILLS
          </li>

          <li
            id="nav-exp"
            onClick={() => {
              scrollTo(".exp__sec");
            }}
          >
            EXPERIENCE
          </li>

          <li
            id="nav-ports"
            onClick={() => {
              scrollTo(".works");
            }}
          >
            PORFOLIOS
          </li>

          <li>
            <Link to="contact">CONTACT</Link>
          </li>
        </ul>
      </header>
      <div className="menu">
        <ul>
          {/* about */}
          <li
            id="menu-about"
            onClick={() => {
              scrollTo(".about-section");
              menuToggle("out");
            }}
          >
            ABOUT
          </li>
          {/* skills */}
          <li
            id="menu-skill"
            onClick={() => {
              scrollTo(".skills");
              menuToggle("out");
            }}
          >
            SKILLS
          </li>
          {/* experience */}
          <li
            id="menu-exp"
            onClick={() => {
              scrollTo(".exp__sec");
              menuToggle("out");
            }}
          >
            EXPERIENCE
          </li>
          {/* portfolios */}
          <li
            id="menu-ports"
            onClick={() => {
              scrollTo(".works");
              menuToggle("out");
            }}
          >
            PORFOLIOS
          </li>

          {/* <li>
            <Link to="contact">CONTACT</Link>
          </li> */}
        </ul>
      </div>
    </>
  );
  const commonNav = (
    <>
      <header className="navbar2">
        {/* <div className="navbar__progress"></div> */}
        <span>
          <Link to="/">WAYNE</Link>
        </span>
        <div className="navbar__ham" onClick={() => {}}>
          <GiHamburgerMenu size={35} color={"#333"} />
        </div>
        <ul>
          <li>
            <Link to="/portfolios">PORTFOLIOS</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </header>
    </>
  );

  return location.pathname === "/" ? homeNav : commonNav;
}

export default Navbar;
