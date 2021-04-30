import React from "react";

function Banner(props) {
  return (
    <>
      <div className="banner">
        <div className="banner__cover">
          <span className="banner__title ">It's all about</span>
          <span className="banner__title">WAYNE HUANG</span>
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
