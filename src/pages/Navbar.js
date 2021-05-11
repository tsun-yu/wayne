import React from "react";
import { useLocation } from "react-router";
import NavabarHome from "../component/common/NavbarHome";
import NavbarCommon from "../component/common/NavbarCommon";

function Navbar(props) {
  const location = useLocation();
  return location.pathname === "/" ? <NavabarHome /> : <NavbarCommon />;
}

export default Navbar;
