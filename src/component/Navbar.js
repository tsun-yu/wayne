import React, { useEffect } from "react";

function Navbar(props) {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY >= 50
        ? document.querySelector(".navbar").classList.add("navbarFix")
        : document.querySelector(".navbar").classList.remove("navbarFix");
    });
    return () => {};
  }, []);
  return (
    <>
      <header className="navbar">
        <span>WAYNE</span>
      </header>
      <div className="content"></div>
    </>
  );
}

export default Navbar;
