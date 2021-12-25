import React, { useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useHistory } from "react-router-dom";
import Menu from "../Menu";

function NavabarHome(props) {
  const { resetColor, menuToggle } = props;
  let history = useHistory();

  const slr = (id) => document.querySelector(id);

  //需滾動的距離公式
  const scrollDistance = (e) => e.offsetTop - slr(".navbar__home").offsetHeight;

  useEffect(() => {
    //每個區塊需滾動的距離
    const homeContents = Array.from(
      document.querySelectorAll(".home-content"),
      (v) => scrollDistance(v)
    );

    window.addEventListener("scroll", () => {
      //縮小
      if (slr(".navbar__home") === null) {
        return;
      } else {
        document.body.clientWidth >= 540 && window.scrollY >= 50
          ? slr(".navbar__home").classList.add("navbar__sm")
          : slr(".navbar__home").classList.remove("navbar__sm");
      }
      //網頁高度
      const documentHeight = document.body.offsetHeight;
      //視窗高度
      const windowHeight = window.innerHeight;
      //捲動高度
      let scrollHeight = window.scrollY;
      //進度條
      let progressPercent =
        (100 * scrollHeight) / (documentHeight - windowHeight);
      slr(".navbar__progress").style.width = progressPercent + "%";

      //變色
      for (let i = homeContents.length - 1; i >= 0; i--) {
        if (scrollHeight > homeContents[i]) {
          resetColor();
          document
            .querySelectorAll(`.navbar__home > ul > li`)
            [i].classList.add("navbar__selected");
          break;
        } else {
          resetColor();
        }
      }
    });

    slr("#menu-home").classList.add("menu__selected");
    return () => {};
  }, []);

  //scroll to the section
  const scrollTo = (e) => {
    window.scrollTo({
      top: scrollDistance(slr(e)),
      behavior: "smooth",
    });
  };

  return (
    <>
      <header className="navbar__home navbar">
        <div className="navbar__progress navbar__progress--home"></div>
        <span>WAYNE</span>
        <ul
          className="navbarHam"
          onClick={(e) => {
            slr(".menu").classList.contains("menu__appear")
              ? menuToggle("out")
              : menuToggle("in");
          }}
        >
          <li id="hamBar1"></li>
          <li id="hamBar2"></li>
          <li id="hamBar3"></li>
        </ul>
        <ul className="navbar__options">
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
          {/* <li onClick={() => history.push("/resume")}>RESUME</li> */}
          <li onClick={() => history.push("/contact")}>CONTACT</li>
        </ul>
      </header>
      <Menu menuToggle={menuToggle} />
    </>
  );
}

export default NavabarHome;
