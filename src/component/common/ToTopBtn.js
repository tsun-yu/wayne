import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BiArrowToTop } from "react-icons/bi";

function ToTopBtn(props) {
  const [isShow, setIsShow] = useState("none");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const documentHeight = document.body.offsetHeight;
      const windowHeight = window.innerHeight;
      let scrollHeight = window.scrollY;
      let progressPercent =
        (100 * scrollHeight) / (documentHeight - windowHeight);

      progressPercent >= 10 ? setIsShow("block") : setIsShow("none");
    });
  }, []);
  return (
    <>
      <Container>
        <BiArrowToTop
          size={50}
          style={{ display: isShow }}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        />
      </Container>
    </>
  );
}

const Container = styled.div`
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  z-index: 18;
  color: #333;
  border-radius: 5px;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    background-color: #333;
    color: #f5f5f5;
    transform: translateY(-1rem);
  }

  @media (max-width: 540px) {
    width: 3.5rem;
    height: 3.5rem;
    display: grid;
    place-items: center;
    right: 1rem;
    bottom: 7rem;
    border-radius: 1rem;
    /* background-color: #333; */
    background-color: #ffd74f;
    /* color: #f5f5f5; */
    color: #b48e0b;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);

    &:hover {
      transform: translateY(0);
      background-color: #ffd74f;
      color: #b48e0b;
    }
  }
`;

export default ToTopBtn;
