import React from "react";
import { useHistory, useLocation } from "react-router";

function Menu(props) {
  const history = useHistory();
  const location = useLocation();
  const slr = (id) => document.querySelector(id);
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
  const home = (
    <>
      <li
        onClick={() => {
          menuToggle("out");
          history.push("/");
        }}
      >
        HOME
      </li>
    </>
  );

  return (
    <>
      <div className="menu">
        <ul>
          {location.pathname != "/" && home}
          <li
            id="menu-ports"
            onClick={() => {
              menuToggle("out");
              history.push("/portfolios");
            }}
          >
            PORTFOLIOS
          </li>
          <li
            id="menu-resume"
            onClick={() => {
              menuToggle("out");
              history.push("/resume");
            }}
          >
            RESUME
          </li>
          <li
            id="menu-contact"
            onClick={() => {
              menuToggle("out");
              history.push("/contact");
            }}
          >
            CONTACT
          </li>
        </ul>
      </div>
    </>
  );
}

export default Menu;
