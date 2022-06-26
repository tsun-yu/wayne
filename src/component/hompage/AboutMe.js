import React from "react";
import WaveEffect from "./WaveEffect";

function AboutMe(props) {
  return (
    <>
      <div className="about-section home-content">
        <div className="about">
          <div className="topic">ABOUT ME</div>
          <hr />
          <div className="about__content">
            <h1>
              【從共同創辦人到業務轉成為前端工程師，在快速變動的環境裡，持續學習、面對挑戰】
            </h1>
            <p className="about__intro">
              我是黃尊昱，目前是一位具有美感的前端工程師。
              <br />
              曾為lalalocker
              共享經濟平台共同創辦人，之後雖回歸國貿相關領域業務，
              <br />
              但仍認為在這個屬於網路的時代，前端佔著舉足輕重的地位，毅然決然進入了前端的領域，
              <br />
              即便在工程師的路途上充滿困難及挑戰，依然不畏懼得面對迎來的重重難關，持續學習、不斷增強自己！
            </p>
          </div>
        </div>
        <WaveEffect />
      </div>
    </>
  );
}

export default AboutMe;
