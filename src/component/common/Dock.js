import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  FcManager,
  FcTimeline,
  FcAndroidOs,
  FcCommandLine,
  FcPicture,
  FcSupport,
  FcStackOfPhotos,
  FcIcons8Cup,
} from "react-icons/fc";
import { useHistory } from "react-router-dom";

function Dock(props) {
  const [iconSize, setIocnSize] = useState(60);
  let history = useHistory();

  const scrollDistance = (e) =>
    e.offsetTop - document.querySelector(".navbar__home").offsetHeight;
  const scrollTo = (e) => {
    window.scrollTo({
      top: scrollDistance(document.querySelector(e)),
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const resetScale = () => {
      Array.from(document.querySelectorAll(".dock__icon")).forEach((icon) => {
        // icon.firstChild.style.width = iconSize;
        // icon.firstChild.style.height = iconSize;
        [icon.firstChild.style.width, icon.firstChild.style.height] = [
          iconSize,
          iconSize,
        ];
        icon.firstChild.style.bottom = "0px";
      });
    };
    Array.from(document.querySelectorAll(".dock__icon")).forEach((icon) => {
      if (window.innerWidth <= 540) return;
      icon.addEventListener("mousemove", (e) => {
        let item = e.currentTarget;
        //該元素在螢幕的位置
        let itemRect = item.getBoundingClientRect();
        //e.clientX為游標在螢幕位置
        //游標位置在元素的寬度的百分比用來計算前後元素放大的比例
        //不知道為什麼有負數:Math.abs
        let offset = Math.abs(e.clientX - itemRect.left) / itemRect.width;
        let prev = item.previousElementSibling || null;
        let next = item.nextElementSibling || null;

        resetScale();

        let scale = 0.6;

        if (prev) {
          [prev.firstChild.style.height, prev.firstChild.style.width] = [
            `${iconSize * (1 + scale * (1 - offset))}px`,
            `${iconSize * (1 + scale * (1 - offset))}px`,
          ];
          prev.firstChild.style.bottom = `${
            (iconSize * scale * (1 - offset)) / 2
          }px`;
        }
        [item.firstChild.style.height, item.firstChild.style.width] = [
          `${iconSize * (1 + scale)}px`,
          `${iconSize * (1 + scale)}px`,
        ];
        item.firstChild.style.bottom = `${(iconSize * scale) / 2}px`;

        if (next) {
          [next.firstChild.style.width, next.firstChild.style.height] = [
            `${iconSize * (1 + scale * offset)}px`,
            `${iconSize * (1 + scale * offset)}px`,
          ];
          next.firstChild.style.bottom = `${(iconSize * scale * offset) / 2}px`;
        }
      });
    });
    document.querySelector(".dock").addEventListener("mouseleave", (e) => {
      resetScale();
    });
  }, []);
  return (
    <>
      <Container>
        <div className="dock">
          <div
            className="dock__icon"
            onClick={() => {
              scrollTo(".about-section");
            }}
          >
            <FcManager size={iconSize} />
            <p className="dock__text">About Me</p>
          </div>
          <div
            className="dock__icon"
            onClick={() => {
              scrollTo(".skills");
            }}
          >
            <FcAndroidOs size={iconSize} />
            <p className="dock__text">Skills</p>
          </div>
          <div
            className="dock__icon"
            onClick={() => {
              scrollTo(".works");
            }}
          >
            <FcStackOfPhotos size={iconSize} />
            <p className="dock__text">Porfolios</p>
          </div>
          <div
            className="dock__icon"
            onClick={() => {
              scrollTo(".exp__sec");
            }}
          >
            <FcTimeline size={iconSize} />
            <p className="dock__text">Experience</p>
          </div>
          <div
            className="dock__icon"
            onClick={() => {
              // scrollTo(".works");
              // history.push("/donate");
            }}
          >
            <FcIcons8Cup size={iconSize} />
            <p className="dock__text">Buy me a coffee</p>
          </div>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  position: fixed;
  bottom: 1rem;
  width: 100%;
  z-index: 9;
  display: flex;
  justify-content: center;
  z-index: 19;

  .dock {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1.5rem;
    background-color: #fff;
    box-shadow: 0 5px 10px 1px rgba(0, 0, 0, 0.2);
    padding-inline: 0.5rem;
    height: 5rem;

    .dock__icon {
      margin: 0;
      padding: 0.5rem;
      cursor: pointer;
      position: relative;

      &:hover {
        .dock__text {
          display: block;
        }
      }

      .dock__text {
        display: none;
        font-family: "Poppins", "Trebuchet MS";
        color: #333;
        position: absolute;
        background-color: #fff;
        top: -3.5rem;
        left: 50%;
        transform: translateX(-50%);
        margin: 0;
        padding: 0.5rem 1rem;
        width: max-content;
        border-radius: 1rem;
        box-shadow: 0 5px 10px 1px rgba(0, 0, 0, 0.12);

        &::after {
          content: "";
          border: 8px solid #ffffff00;
          border-top: 8px solid #fff;
          bottom: -16px;
          left: 50%;
          transform: translateX(-50%);
          position: absolute;
        }
      }

      svg {
        position: relative;
        transition: 0.1s ease-in-out;
      }
    }
  }
`;

export default Dock;
