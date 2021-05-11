import React from "react";
import { useHistory } from "react-router";

function Menu(props) {
  const history = useHistory();
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
  return (
    <>
      <div className="menu">
        <ul>
          <li
            onClick={() => {
              menuToggle("out");
              history.push("/portfolios");
            }}
          >
            PORTFOLIOS
          </li>

          <li
            onClick={() => {
              menuToggle("out");
              history.push("/contact");
            }}
          >
            CONTACT
          </li>
          <li
            onClick={() => {
              menuToggle("out");
              history.push("/resume");
            }}
          >
            RESUME
          </li>
        </ul>
      </div>
    </>
  );
}

export default Menu;
