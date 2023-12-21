import React from "react";
import { SiGithub, SiGmail, SiInstagram, SiLinkedin } from "react-icons/si";
import { HiMiniDocumentArrowDown } from "react-icons/hi2";

import styled from "styled-components";

function Banner(props) {
  return (
    <>
      <Cover>
        <div className="cover">
          <div className="portrait">
            <img src="./images/portrait1.jpg" alt="portrait" />
          </div>
          <div>
            <div className="animate__animated animate__flipInX animate__slow">
              <p className="banner__title banner__title--lg">Hello</p>
              <p className="banner__title">
                I'm <span className="banner__title--primary">Wayne</span>
              </p>
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
                <p className="contact__icon ">
                  <p className="contact__icon--hover">
                    <SiGmail size={40} color={"#d44638"} />
                  </p>
                </p>
                <SiGmail size={40} color={"#555"} />
              </a>
              <a
                href="https://github.com/tsun-yu"
                rel="noreferrer"
                target="_blank"
                className="contact"
              >
                <p className="contact__icon ">
                  <p className="contact__icon--hover">
                    <SiGithub size={40} color={"#6e5494"} />
                  </p>
                </p>
                <SiGithub size={40} color={"#555"} />
              </a>
              <a
                href="https://www.linkedin.com/in/tsun-yu-wayne-huang-020268163/"
                rel="noreferrer"
                target="_blank"
                className="contact"
              >
                <p className="contact__icon ">
                  <p className="contact__icon--hover">
                    <SiLinkedin size={40} color={"#0A66C2"} id="linkedinIcon" />
                  </p>
                </p>
                <SiLinkedin size={40} color={"#555"} />
              </a>
              <a href="" rel="noreferrer" target="_blank" className="contact">
                <p className="contact__icon ">
                  <p className="contact__icon--hover">
                    <HiMiniDocumentArrowDown
                      size={50}
                      color={"#0F9D58"}
                      id="docIcon"
                    />
                  </p>
                </p>
                <HiMiniDocumentArrowDown size={50} color={"#555"} />
              </a>
            </div>
          </div>
        </div>
      </Cover>
    </>
  );
}

const Cover = styled.div`
  height: 100vh;
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
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    height: 100%;
    background-color: #ffffff9e;
    backdrop-filter: blur(10px);
    border-radius: 1.5rem;
    box-shadow: 4px 4px 10px 1px rgba(0, 0, 0, 0.089);
    padding: 1rem;

    .portrait {
      flex: 0 0 22rem;
      height: 22rem;
      border-radius: 50%;
      overflow: hidden;
      border: 0.5rem solid #fdc300;
      display: grid;
      place-items: center;
      box-shadow: 4px 4px 10px 1px #33333370;
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
      text-shadow: 1px 1px 2px #aaa;
      margin: 0;
      line-height: 5rem;

      .banner__title--primary {
        color: #fdc300;
      }
    }
    .banner__des {
      font-family: "Pacifico", cursive;
      font-size: 2rem;
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
        }

        p {
          margin: 0;
        }

        .contact__icon {
          display: grid;
          grid-template-rows: 0fr;
          overflow: hidden;
          transition: 0.3s ease-in;
          position: absolute;

          .contact__icon--hover {
            min-height: 0;
            overflow: hidden;
          }
        }
      }
    }
  }
`;

export default Banner;
