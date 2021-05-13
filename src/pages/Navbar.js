import React from "react";
import { useLocation } from "react-router";
import NavabarHome from "../component/common/NavbarHome";
import NavbarCommon from "../component/common/NavbarCommon";

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
      slr(".menu").classList.add("menu__appear");
      slr("#menu-ham").style.display = "none";
      slr("#menu-close").style.display = "block";
    } else {
      slr(".menu").classList.remove("menu__appear");
      slr("#menu-ham").style.display = "block";
      slr("#menu-close").style.display = "none";
    }
  };
  return location.pathname === "/" ? (
    <NavabarHome resetColor={resetColor} menuToggle={menuToggle} />
  ) : (
    <NavbarCommon resetColor={resetColor} menuToggle={menuToggle} />
  );
}

export default Navbar;
