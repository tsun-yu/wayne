import React from "react";

function Banner(props) {
  return (
    <>
      <div className="banner">
        <div className="banner__cover">
          <span className="banner__title animate__animated animate__flipInX animate__slow">
            I am <span className="banner__title--primary">Wayne</span> Huang
          </span>

          <hr />
          <div className="banner__title--sm">
            <span>Welcome To My Website</span>
            <span>Skills | Experience | Works</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
