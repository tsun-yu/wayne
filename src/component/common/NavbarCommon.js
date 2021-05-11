import React, { useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useHistory, useLocation } from "react-router-dom";
import Menu from "../common/Menu";

function NavabarCommon(props) {
  let history = useHistory();
  let location = useLocation();
  const slr = (id) => document.querySelector(id);

  useEffect(() => {
    if (location.pathname != "/") {
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
      });
    }

    return () => {};
  }, []);

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
  };

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
          <li onClick={() => history.push("/portfolios")}>PORTFOLIOS</li>
          <li onClick={() => history.push("/resume")}>RESUME</li>
          <li onClick={() => history.push("/contact")}>CONTACT</li>
        </ul>
      </header>
      <Menu />
    </>
  );
}

export default NavabarCommon;
