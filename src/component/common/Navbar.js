import React, { useEffect } from "react";

function Navbar(props) {
  useEffect(() => {
    document.body.clientWidth >= 540 &&
      window.addEventListener("scroll", () => {
        window.scrollY >= 50
          ? document.querySelector(".navbar").classList.add("navbarFix")
          : document.querySelector(".navbar").classList.remove("navbarFix");
      });

    window.addEventListener("scroll", () => {
      const documentHeight = document.body.offsetHeight;
      const windowHeight = window.innerHeight;
      let scrollHeight = window.scrollY;
      let progressPercent =
        (100 * scrollHeight) / (documentHeight - windowHeight);

      document.querySelector(".navbar__progress").style.width =
        progressPercent + "%";
    });
    return () => {};
  }, []);
  return (
    <>
      <header className="navbar">
        <div className="navbar__progress"></div>
        <span>WAYNE</span>
      </header>
    </>
  );
}

export default Navbar;
