import React from "react";
import { useNavigate } from "react-router";

function Menu(props) {
  const { menuToggle } = props;
  const navigate = useNavigate();

  return (
    <>
      <div className="menu">
        <ul>
          <li
            id="menu-home"
            onClick={() => {
              menuToggle("out");
              navigate("/");
            }}
          >
            HOME
          </li>
          <li
            id="menu-ports"
            onClick={() => {
              menuToggle("out");
              navigate("/portfolios");
            }}
          >
            PORTFOLIOS
          </li>
          {/* <li
            id="menu-resume"
            onClick={() => {
              menuToggle("out");
              navigate("/resume");
            }}
          >
            RESUME
          </li> */}
          {/* <li
            id="menu-contact"
            onClick={() => {
              menuToggle("out");
              navigate("/contact");
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
