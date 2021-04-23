import React, { useEffect } from "react";

function Navbar(props) {
  useEffect(() => {
    document.body.clientWidth >= 540 &&
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
    </>
  );
}

export default Navbar;
