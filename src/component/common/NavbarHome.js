import React, { useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useLocation, useHistory } from "react-router-dom";
import Menu from "../common/Menu";

function NavabarHome(props) {
  const { resetColor, menuToggle } = props;
  let history = useHistory();
  const slr = (id) => document.querySelector(id);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      //縮小
      if (slr(".navbar__home") === null) {
        return 0;
      } else {
        document.body.clientWidth >= 540 && window.scrollY >= 50
          ? slr(".navbar__home").classList.add("navbar__sm")
          : slr(".navbar__home").classList.remove("navbar__sm");
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
          : slr(ele).offsetTop - slr(".navbar__home").offsetHeight;

      //每項元素需滾動的距離
      const homeContents = [];
      document.querySelectorAll(".home-content").forEach((v, i) => {
        homeContents.push(scrollDistance(`.home-content:nth-child(${i + 1})`));
      });

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
      } else if (scrollHeight >= homeContents[2]) {
        resetColor();
        slr("#nav-exp").classList.add("navbar__selected");
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
      document.querySelector(".navbar__home").offsetHeight;

    window.scrollTo({
      top: distance,
      behavior: "smooth",
    });
  };

  return (
    <>
      <header className="navbar__home navbar">
        <div className="navbar__progress navbar__progress--home"></div>
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

          <li onClick={() => history.push("/portfolios")}>PORTFOLIOS</li>
          <li onClick={() => history.push("/resume")}>RESUME</li>
          <li onClick={() => history.push("/contact")}>CONTACT</li>
        </ul>
      </header>
      <Menu />
    </>
  );
}

export default NavabarHome;
