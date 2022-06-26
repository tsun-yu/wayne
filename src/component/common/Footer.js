import React from "react";
import { useLocation } from "react-router";

function Footer(props) {
  const location = useLocation();
  const currentYr = new Date().getFullYear();
  const homeFooter = (
    <>
      <footer className="home__footer">
        <div>
          <p>Copyright © {currentYr} Wayne All rights reserved.</p>
        </div>
      </footer>
    </>
  );
  const commonFooter = (
    <>
      <footer className="common__footer">
        <p>Copyright © {currentYr} Wayne All rights reserved.</p>
      </footer>
    </>
  );
  return location.pathname === "/" ? homeFooter : commonFooter;
}

export default Footer;
