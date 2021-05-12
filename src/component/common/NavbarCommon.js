import React, { useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useHistory, useLocation } from "react-router-dom";
import Menu from "../common/Menu";

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

      if (slr(".navbar__progress--common") === null) {
        return 0;
      } else {
        slr(".navbar__progress--common").style.width = progressPercent + "%";
      }
      switch (location.pathname) {
        case "/portfolios":
          resetColor();
          slr("#nav-ports").classList.add(".navbar__selected");
          break;
        case "/contact":
          resetColor();
          slr("#nav-ports").classList.add(".navbar__selected");
          break;
        case "/resume":
          resetColor();
          slr("#nav-ports").classList.add(".navbar__selected");
          break;
      }
    });

    return () => {};
  }, []);

  return (
    <>
      <header className="navbar navbar__sm ">
        <div className="navbar__progress navbar__progress--common"></div>
        <span id="logo" onClick={() => history.push("/")}>
          WAYNE
        </span>
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
          <li id="nav-ports" onClick={() => history.push("/portfolios")}>
            PORTFOLIOS
          </li>
          <li id="nav-resume" onClick={() => history.push("/resume")}>
            RESUME
          </li>
          <li id="nav-contact" onClick={() => history.push("/contact")}>
            CONTACT
          </li>
        </ul>
      </header>
      <Menu />
    </>
  );
}

export default NavabarCommon;
