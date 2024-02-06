import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useHistory } from "react-router-dom";
import Menu from "../Menu";
import styled from "styled-components";
import classNames from "classnames";

function NavabarHome() {
  const [shrinkNav, setShrinkNav] = useState(false);
  const navbarCLass = classNames({ navbar__sm: shrinkNav, navbar__home: true });

  const slr = (id) => document.querySelector(id);

  //需滾動的距離公式
  const scrollDistance = (e) => e.offsetTop - slr(".navbar__home").offsetHeight;

  useEffect(() => {
    //每個區塊需滾動的距離
    const homeContents = Array.from(
      document.querySelectorAll(".home-content"),
      (v) => scrollDistance(v)
    );

    window.addEventListener("scroll", () => {
      //縮小
      if (slr(".navbar__home") === null) return;

      window.scrollY >= 1 ? setShrinkNav(true) : setShrinkNav(false);

      //網頁高度
      const documentHeight = document.body.offsetHeight;
      //視窗高度
      const windowHeight = window.innerHeight;
      //捲動高度
      let scrollHeight = window.scrollY;
      //進度條
      let progressPercent =
        (100 * scrollHeight) / (documentHeight - windowHeight);
      slr(".navbar__progress").style.width = progressPercent + "%";

      //變色
      // for (let i = homeContents.length - 1; i >= 0; i--) {
      //   if (scrollHeight > homeContents[i]) {
      //     resetColor();
      //     document
      //       .querySelectorAll(`.navbar__home > ul > li`)
      //       [i].classList.add("navbar__selected");
      //     break;
      //   } else {
      //     resetColor();
      //   }
      // }
    });

    // slr("#menu-home").classList.add("menu__selected");
    return () => {};
  }, []);

  //scroll to the section
  const scrollTo = (e) => {
    window.scrollTo({
      top: scrollDistance(slr(e)),
      behavior: "smooth",
    });
  };

  return (
    <>
      <NavBar className={navbarCLass}>
        <div className="navbar__progress navbar__progress--home"></div>
        <span>WAYNE</span>
      </NavBar>
    </>
  );
}

const NavBar = styled.header`
  width: 100vw;
  height: 6.25rem;
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 20;

  &.navbar__sm {
    height: 3.125rem;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(2px);
    transition: 0.5s;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);

    span {
      display: inline-block;
      font-family: "Pacifico", cursive;
      font-size: 1.5rem;
    }
    #logo {
      cursor: pointer;
    }
  }

  span {
    display: none;
  }

  .navbar__progress {
    position: absolute;
    backdrop-filter: blur(5px);
    height: 100%;
    z-index: -2;
    left: 0;
    background-color: rgba(253, 195, 0, 0.5);
  }

  @media (max-width: 540px) {
    &.navbar__sm {
      justify-content: space-between;
      background-color: rgba(255, 255, 255, 1);

      span {
        display: inline-block;
        font-family: "Pacifico", cursive;
        font-size: 1.5rem;
        margin-left: 1rem;
      }
      #logo {
        cursor: pointer;
      }
    }

    .navbar__progress {
      background-color: #fdc300;
      box-shadow: none;
    }
  }
`;

export default NavabarHome;
