import React from "react";
import { useLocation } from "react-router";

function Footer(props) {
  const location = useLocation();
  const homeFooter = (
    <>
      <footer className="home__footer">
        <div>
          <p>Copyright © 2021 Wayne All rights reserved.</p>
        </div>
      </footer>
    </>
  );
  const commonFooter = (
    <>
      <footer className="common__footer">
        <p>Copyright © 2021 Wayne All rights reserved.</p>
      </footer>
    </>
  );
  return location.pathname === "/" ? homeFooter : commonFooter;
}

export default Footer;
