import React from "react";
import { useHistory, useLocation } from "react-router";

function Menu(props) {
  const { menuToggle } = props;
  const history = useHistory();
  const location = useLocation();

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
          {location.pathname !== "/" && home}
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
