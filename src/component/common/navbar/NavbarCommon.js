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
        <ul
          className="navbarHam"
          onClick={(e) => {
            console.log("click1");
            document.querySelectorAll(`.navbarHam>li`).forEach((v) => {
              if (v.classList.contains("navbarHam__bar--active")) {
                v.classList.remove("navbarHam__bar--active");
                // menuToggle("out");
              } else {
                console.log("click");
                v.classList.add("navbarHam__bar--active");
                // menuToggle("in");
              }
            });
          }}
        >
          <li id="hamBar1"></li>
          <li id="hamBar2"></li>
          <li id="hamBar3"></li>
          {/* <GiHamburgerMenu
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
          /> */}
        </ul>
        <ul className="navber__options">
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
      </header>
      <Menu resetColor={resetColor} menuToggle={menuToggle} />
    </>
  );
}

export default NavabarCommon;
