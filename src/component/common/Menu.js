import React from "react";
import { useHistory } from "react-router";

function Menu(props) {
  const { menuToggle } = props;
  const history = useHistory();

  return (
    <>
      <div className="menu">
        <ul>
          <li
            id="menu-home"
            onClick={() => {
              menuToggle("out");
              history.push("/");
            }}
          >
            HOME
          </li>
          <li
            id="menu-ports"
            onClick={() => {
              menuToggle("out");
              history.push("/portfolios");
            }}
          >
            PORTFOLIOS
          </li>
          {/* <li
            id="menu-resume"
            onClick={() => {
              menuToggle("out");
              history.push("/resume");
            }}
          >
            RESUME
          </li> */}
          {/* <li
            id="menu-contact"
            onClick={() => {
              menuToggle("out");
              history.push("/contact");
            }}
          >
            CONTACT
          </li> */}
        </ul>
      </div>
    </>
  );
}

export default Menu;
