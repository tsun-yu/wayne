import React, { useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useHistory, useLocation } from "react-router-dom";
import Menu from "../Menu";

function NavabarCommon(props) {
  const { resetColor, menuToggle } = props;

  let history = useHistory();
  let location = useLocation();
  const slr = (id) => document.querySelector(id);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const documentHeight = document.body.offsetHeight;
      const windowHeight = window.innerHeight;
      let scrollHeight = window.scrollY;
      let progressPercent =
        (100 * scrollHeight) / (documentHeight - windowHeight);

      slr(".navbar__progress").style.width = progressPercent + "%";
    });

    return () => {};
  }, []);
  useEffect(() => {
    resetColor();
    const path = ["/portfolios", "/resume", "/contact"];
    const id = ["ports", "resume", "contact"];

    path.forEach((v, i) => {
      if (location.pathname === v) {
        slr(`#nav-${id[i]}`).classList.add("navbar__selected");
        slr(`#menu-${id[i]}`).classList.add("menu__selected");
      }
    });

    return () => {};
  }, [location.pathname]);

  return (
    <>
      <header className="navbar navbar__sm ">
        <div className="navbar__progress navbar__progress--common"></div>
        <span id="logo" onClick={() => history.push("/")}>
          WAYNE
        </span>

        <ul className="navbar__options">
          <li id="nav-ports" onClick={() => history.push("/portfolios")}>
            PORTFOLIOS
          </li>
          {/* <li id="nav-resume" onClick={() => history.push("/resume")}>
            RESUME
          </li> */}
          <li id="nav-contact" onClick={() => history.push("/contact")}>
            CONTACT
          </li>
        </ul>
        <ul
          className="navbarHam"
          onClick={() => {
            slr(".menu").classList.contains("menu__appear")
              ? menuToggle("out")
              : menuToggle("in");
          }}
        >
          <li id="hamBar1"></li>
          <li id="hamBar2"></li>
          <li id="hamBar3"></li>
        </ul>
      </header>
      <Menu resetColor={resetColor} menuToggle={menuToggle} />
    </>
  );
}

export default NavabarCommon;
