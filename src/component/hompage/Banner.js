import React from "react";
import styled from "styled-components";

function Banner(props) {
  return (
    <>
      <Cover>
        <div className="cover">
          <div className="portrait">
            <img src="./images/portrait1.jpg" />
          </div>
          <div className="banner__title animate__animated animate__flipInX animate__slow">
            <p className="banner__title--lg">Hello</p>
            <p>
              I'm <span className="banner__title--primary">Wayne</span>
            </p>
          </div>
        </div>
        {/* <div className="banner__cover">


          <hr />
          <div className="banner__title--sm">
            <span>Welcome To My Website</span>
            <span>Skills | Experience | Works</span>
          </div>
        </div> */}
      </Cover>
    </>
  );
}

const Cover = styled.div`
  /* background-size: cover; */
  /* background-position: center; */
  /* height: calc(100vh + 4.5rem); */
  /* background-image: url(./images/nyc.jpg); */
  /* background-attachment: fixed; */
  height: 100vh;
  padding: 2rem;

  .cover {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    height: 100%;
    background-color: #ffffff83;
    backdrop-filter: blur(2px);
    border-radius: 1.5rem;
    box-shadow: 4px 4px 10px 1px rgba(0, 0, 0, 0.089);
    position: relative;

    &::before {
      content: "";
      /* width: 100%;
      height: 100%; */
      position: absolute;
      top: 0;
      display: block;
      /* background-color: #fdc300; */
      border-top: #fdc300 calc(50vh - 1.5rem) solid;
      border-left: #fdc300 calc(50vw - 1.5rem) solid;
      border-right: #fdc30000 calc(50vw - 1.5rem) solid;
      border-bottom: #fdc30000 50vh solid;
    }

    .portrait {
      width: 22rem;
      height: 22rem;
      border-radius: 50%;
      overflow: hidden;
      border: 0.5rem solid #fdc300;
      display: grid;
      place-items: center;
      box-shadow: 4px 4px 10px 1px rgba(0, 0, 0, 0.089);
      background-color: #ffffff00;

      img {
        width: 20rem;
        height: 20rem;
        border-radius: 50%;
      }
    }

    .banner__title {
      font-family: "Pacifico", cursive;
      font-size: 4.5rem;
      font-weight: 100;
      color: #ffffff;
      text-shadow: 1px 1px 2px #ccc;

      p {
        margin: 0;
        line-height: 8rem;
      }

      .banner__title--primary {
        color: #fdc300;
      }
    }
  }

  /* .banner__cover {
    height: 100%;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .banner__title {
      font-family: $fontEn3;
      font-size: 6rem;
      font-weight: 100;
      color: #ffffff;
      text-shadow: 1px 1px 2px #555;

      p {
        margin: 0;
        line-height: 8rem;
      }

      .banner__title--primary {
        color: $primary;
      }
    }

    .banner__title--sm {
      font-family: $fontEn1;
      font-weight: 300;
      text-shadow: 1px 1px 2px #aaa;
      display: flex;
      flex-direction: column;

      span {
        color: #ffffff;
        font-size: 1.125rem;
        text-align: center;
      }

      span:nth-child(2) {
        color: $primary;
      }
    }
  } */
`;

export default Banner;
