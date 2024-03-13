import React, { useEffect, useState } from "react";
import { SiGithub, SiGmail, SiGoogledocs, SiLinkedin } from "react-icons/si";

import styled from "styled-components";
import { getImageURLFromStorage } from "../../util/fetchData";

function Banner(props) {
  const [portraitUrl, setPortraitUrl] = useState("");
  const [cvUrl, setCvUrl] = useState("");
  useEffect(() => {
    const getImg = async () => {
      const portraitUrl = await getImageURLFromStorage("home", "portrait.jpg");
      setPortraitUrl(portraitUrl);
      const cvUrl = await getImageURLFromStorage("docs", "cv.pdf");
      setCvUrl(cvUrl);
    };
    getImg();
  }, []);
  return (
    <>
      <Cover>
        <div className="cover">
          <div className="portrait">
            <img src={portraitUrl} alt="portrait" />
          </div>
          <div>
            <div className="animate__animated animate__flipInX animate__slow">
              <div>
                <p className="banner__title banner__title--lg">Hello</p>
                <p className="banner__title">
                  I'm <span className="banner__title--primary">Wayne</span>
                </p>
              </div>
              <p className="banner__des">
                A frontend engineer in Deloitte Taiwan.
              </p>
            </div>
            <div className="contacts">
              <a
                href="mailto:tsun988487@gmail.com"
                rel="noreferrer"
                className="contact"
              >
                <p className="contact__text">Mail</p>
                <div className="contact__icon ">
                  <p className="contact__icon--hover">
                    <SiGmail size={40} color={"#d44638"} />
                  </p>
                </div>
                <SiGmail size={40} color={"#555"} />
              </a>
              <a
                href="https://github.com/tsun-yu"
                rel="noreferrer"
                target="_blank"
                className="contact"
              >
                <p className="contact__text">Github</p>
                <div className="contact__icon ">
                  <p className="contact__icon--hover">
                    <SiGithub size={40} color={"#6e5494"} />
                  </p>
                </div>
                <SiGithub size={40} color={"#555"} />
              </a>
              <a
                href="https://www.linkedin.com/in/tsun-yu-wayne-huang-020268163/"
                rel="noreferrer"
                target="_blank"
                className="contact"
              >
                <p className="contact__text">Linkedin</p>
                <div className="contact__icon ">
                  <p className="contact__icon--hover">
                    <SiLinkedin size={40} color={"#0A66C2"} id="linkedinIcon" />
                  </p>
                </div>
                <SiLinkedin size={40} color={"#555"} />
              </a>
              <a
                href={cvUrl}
                rel="noreferrer"
                target="_blank"
                className="contact"
              >
                <p className="contact__text">CV</p>
                <div className="contact__icon ">
                  <p className="contact__icon--hover">
                    <SiGoogledocs size={40} color={"#0F9D58"} id="docIcon" />
                  </p>
                </div>
                <SiGoogledocs size={40} color={"#555"} />
              </a>
            </div>
          </div>
        </div>
      </Cover>
    </>
  );
}

const Cover = styled.div`
  min-height: 100dvh;
  padding: 2rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    border-top: #fdc300 calc(50vh - 1.5rem) solid;
    border-left: #fdc300 calc(50vw - 1.5rem) solid;
    border-right: #fdc30000 calc(50vw - 1.5rem) solid;
    border-bottom: #fdc30000 50vh solid;
  }

  .cover {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    /* height: 100%; */
    min-height: calc(100dvh - 4rem);
    /* width: 100%; */
    width: calc(100% - 4rem);
    background-color: #ffffff9e;
    backdrop-filter: blur(10px);
    border-radius: 1.5rem;
    box-shadow: 4px 4px 10px 1px rgba(0, 0, 0, 0.089);
    padding: 1rem;

    .portrait {
      flex: 0 0 22rem;
      aspect-ratio: 1/1;
      border-radius: 50%;
      overflow: hidden;
      border: 0.5rem solid #fdc300;
      display: grid;
      place-items: center;
      box-shadow: 4px 4px 10px 1px #33333370;
      background-color: #ffffff00;

      img {
        width: 20rem;
        aspect-ratio: 1/1;
        border-radius: 50%;
      }
    }

    .banner__title {
      font-family: "Pacifico", cursive;
      font-size: min(16vw, 4.5rem);
      font-weight: 100;
      color: #ffffff;
      text-shadow: 1px 1px 2px #aaa;
      margin: 0;
      line-height: min(16vw, 5rem);

      .banner__title--primary {
        color: #fdc300;
      }
    }
    .banner__des {
      font-family: "Pacifico", cursive;
      font-size: min(10vw, 2rem);
      margin: 1rem 0 0;
      color: #333;
    }
    .contacts {
      display: flex;
      align-items: center;
      margin-top: 1rem;
      gap: 1rem;

      .contact {
        position: relative;
        display: inline-block;

        &:hover {
          .contact__icon {
            grid-template-rows: 1fr;
          }

          .contact__text {
            display: block;
            background-color: #fdc300;
            color: #fff;
          }
        }

        p {
          margin: 0;
        }

        .contact__text {
          font-family: "Poppins", "Trebuchet MS";
          position: absolute;
          bottom: -3rem;
          left: 50%;
          transform: translateX(-50%);
          background-color: #fdc30000;
          border-radius: 1rem;
          color: #ffffff00;
          padding: 0.5rem 1rem;
          transition-delay: 0.5s;
          display: none;
          box-shadow: 0 5px 10px 1px rgba(0, 0, 0, 0.12);

          &::after {
            content: "";
            border: 8px solid #ffffff00;
            border-bottom: 8px solid #fdc300;
            top: -16px;
            left: 50%;
            transform: translateX(-50%);
            position: absolute;
          }
        }

        .contact__icon {
          display: grid;
          grid-template-rows: 0fr;
          overflow: hidden;
          transition: 0.5s ease-in;
          position: absolute;

          .contact__icon--hover {
            min-height: 0;
            overflow: hidden;
          }
        }
      }
    }
  }

  @media (max-width: 830px) {
    .cover {
      flex-wrap: wrap;
      padding: 1.5rem;
      min-height: fit-content;

      .animate__flipInX {
        display: flex;
        flex-direction: column;
        align-items: center;

        .banner__des {
          text-align: center;
        }
      }
      .contacts {
        justify-content: center;
        margin-bottom: 0.5rem;
      }
    }
  }
  @media (max-width: 540px) {
    padding: 1rem;

    .cover {
      width: calc(100% - 2rem);
      /* min-height: calc(100dvh - 2rem); */
      flex-wrap: wrap;
      gap: 1rem;
      top: 50%;
      transform: translateY(-50%);

      .portrait {
        flex-basis: 90%;

        img {
          width: 95%;
        }
      }
    }
  }
`;

export default Banner;
