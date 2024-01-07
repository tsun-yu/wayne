import React from "react";
import WaveEffect from "./WaveEffect";
import styled from "styled-components";

function AboutMe(props) {
  return (
    <>
      <Container>
        <div className="about-section">
          <div className="about">
            <div className="about__left">
              <p>
                我是<span className="en"> Wayne</span>
                <br />
                <h1>具有美感的前端工程師</h1>從
                <span className="emphasis en"> React </span>
                進入了前端的世界
                <br />
                後續也接觸了<span className="emphasis en"> Vue</span>
                <br />
                在前端領域不斷充實自我
              </p>
            </div>
            <div className="about__content">
              <h1 className="forMobile">
                從共同創辦人到業務轉成為前端工程師，
                在快速變動的環境裡，持續學習、面對挑戰
              </h1>
              <h1>
                從共同創辦人到業務轉成為前端工程師
                <br />
                在快速變動的環境裡，持續學習、面對挑戰
              </h1>
              曾為新創<span className="en">lalalocker</span>
              共享經濟平台<span className="emphasis"> 共同創辦人 </span>
              之一，利用陌生開發時學習到的經驗轉當
              <span className="emphasis"> 業務 </span>
              ，但仍認為在這個屬於網路的時代，前端佔著舉足輕重的地位，毅然決然進入了前端的領域，即便在
              <span className="emphasis"> 工程師 </span>
              這條路途上充滿困難及挑戰，依然不畏懼得面對迎來的重重難關，持續學習、不斷增強自己！
            </div>
          </div>
          {/* <WaveEffect /> */}
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  min-height: 50dvh;
  font-family: "Noto Serif TC", serif;
  padding: 2rem;
  width: min(100%, 1200px);
  margin-inline: auto;
  display: flex;
  align-items: center;

  .about {
    display: flex;
    gap: 1rem;
    /* flex-wrap: wrap; */
    .en {
      font-family: "Poppins", "Trebuchet MS";
    }
    .emphasis {
      color: #fdc300;
      font-size: 1.75rem;
    }
    h1 {
      margin-top: 0;
      color: #fdc300;
      font-size: 2rem;
    }
    .about__left {
      font-size: 1.5rem;
      flex: 0 0 23rem;
      display: flex;
      align-items: end;

      h1 {
        margin-bottom: 0;
      }
      p {
        margin: 0 0 0.75rem;
        text-align: end;
        width: 100%;
      }
    }
    .about__content {
      font-size: 1.5rem;
      flex: 3 1;
      color: #777;
      font-size: 1.375rem;

      h1 {
        margin-bottom: 0.5rem;
      }
      .forMobile {
        display: none;
      }
    }
  }
  @media (max-width: 830px) {
    padding: 1rem;
    .about {
      flex-direction: column;

      .about__left {
        align-items: start;
        flex-basis: auto;

        p {
          text-align: center;
        }
      }
      .about__content {
        text-align: center;

        .forMobile {
          display: block;

          & + h1 {
            display: none;
          }
        }
        /* h1 {
          font-size: min();
        } */
      }
    }
  }
`;

export default AboutMe;
