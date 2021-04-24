import React from "react";

function Banner(props) {
  return (
    <>
      <div className="banner">
        <div className="light-cover">
          <span className="hpTitle animate__animated animate__flipInX">
            It's all about
          </span>
          <span className="hpTitle animate__animated animate__flipInX">
            WAYNE HUANG
          </span>
          <hr />
          <div className="smallword animate__animated animate__flipInY ">
            <span>Welcome To My Website</span>
            <span>Skills | Experience | Works</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
