import React from "react";
import { useLocation } from "react-router";
import NavabarHome from "./navbar/NavbarHome";
import NavbarCommon from "./navbar/NavbarCommon";

function Navbar(props) {
  const location = useLocation();
  const slr = (id) => document.querySelector(id);
  const resetColor = () => {
    document.querySelectorAll(".navbar>ul>li").forEach((v) => {
      v.classList.remove("navbar__selected");
    });
    document.querySelectorAll(".menu>ul>li").forEach((v) => {
      v.classList.remove("menu__selected");
    });
  };
  const menuToggle = (action) => {
    if (action === "in") {
      slr("body").classList.add("noscroll");
      slr(".menu").classList.add("menu__appear");
      document.querySelectorAll(`.navbarHam>li`).forEach((v) => {
        v.classList.add("navbarHam__bar--active");
      });
    } else {
      document.querySelectorAll(`.navbarHam>li`).forEach((v) => {
        v.classList.remove("navbarHam__bar--active");
      });
      slr("body").classList.remove("noscroll");
      slr(".menu").classList.remove("menu__appear");
    }
  };

  return location.pathname === "/" ? (
    <NavabarHome />
  ) : (
    <NavbarCommon resetColor={resetColor} menuToggle={menuToggle} />
  );
}

export default Navbar;
