import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { getImageURLFromStorage } from "../../util/fetchData";
import styled from "styled-components";

function WorkItem(props) {
  const {
    imgSrc,
    workTitle,
    workDes,
    workLink,
    workName,
    currIdx,
    itemIdx,
    transition,
  } = props;
  const [imgUrl, setImgUrl] = useState("");
  const cardClass = classNames({
    works__card: true,
    small: currIdx + 1.5 === itemIdx || currIdx - 0.5 === itemIdx,
  });

  useEffect(() => {
    const getImg = async () => {
      const url = await getImageURLFromStorage("portfolios", imgSrc);
      setImgUrl(url);
    };
    getImg();
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const open = (e) => {
    isOpen
      ? e.currentTarget.classList.remove("works__card--clicked")
      : e.currentTarget.classList.add("works__card--clicked");
  };

  const scrollDistance = (e) =>
    e.offsetTop - document.querySelector(".navbar__sm").offsetHeight;

  const scrollTo = (e) => {
    window.scrollTo({
      top: scrollDistance(e),
      behavior: "smooth",
    });
  };
  let workDesBr = workDes.map((v) => (
    <>
      {v}
      <br />
    </>
  ));

  return (
    <>
      <Card className={cardClass} style={{ transition: `${transition}ms` }}>
        <div className="works__img">
          <img src={imgUrl} alt="port-img" />
        </div>
        <div className="works__des">
          <h3>{workTitle}</h3>
          <p>{workDesBr}</p>
          <p>
            連結：
            <a href={workLink} target="_blank" rel="noreferrer">
              {workName}
            </a>
          </p>
        </div>
      </Card>
    </>
  );
}
const Card = styled.div`
  transition: 0.5s ease-in;
  flex-shrink: 0;
  background-color: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
  border-radius: 1.5rem;
  margin: 1rem;
  padding: 1rem;
  width: calc(25% - 2rem);
  box-sizing: border-box;
  cursor: pointer;
  overflow: hidden;

  &.small {
    transform: scale(0.8);
  }
  &.works__card {
    display: flex;
    justify-content: center;
    /* min-height: 14rem; */
    /* margin: 0 auto 2rem; */
    position: relative;

    font-family: $fontEn1, $fontCn;
    font-size: 1.25rem;

    &:after {
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0);
      color: rgba(255, 255, 255, 0);
      font-weight: 900;
      font-size: 2rem;
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.5s;
      white-space: pre;
      text-align: center;
    }

    &:hover:not(.works__card--clicked) {
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);

      &:after {
        background-color: rgba(0, 0, 0, 0.5);
        color: $primary;
      }

      .works__img {
        img {
          transform: scale(1.2);
        }
      }
    }

    .works__img {
      width: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: 3s ease-out;
      }
    }

    .works__des {
      display: none;
      padding-left: 2%;
      width: 72%;

      h3 {
        margin: 0 0 1rem 0;
      }

      p {
        margin: 0 0 0.25rem 0;

        a {
          color: $primary;
        }
      }
    }
  }

  .works__card--clicked {
    width: 100%;
    padding: 1rem 5%;

    &:after {
      display: none;
    }

    &:hover {
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    }

    .works__des {
      display: block;
    }

    .works__img {
      width: 24%;
      margin-right: 2%;
    }
  }

  @media (max-width: 540px) {
    .works__card {
      flex-direction: column;
      width: 100%;
      padding: 0;
      margin: 0 0 2.5rem;
      cursor: auto;

      &:after {
        display: none;
      }

      &:hover:not(.works__card--clicked) {
        .works__img {
          img {
            transform: scale(1, 1);
          }
        }
      }

      .works__des {
        display: block;
        box-sizing: border-box;
        padding: 5%;
        width: 100%;
      }
    }

    .works__card--clicked {
      .works__img {
        width: 100%;
        margin-right: 0;
      }
    }
  }
`;
export default WorkItem;
