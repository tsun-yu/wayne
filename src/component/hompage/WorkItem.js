import React, { useEffect, useMemo, useState } from "react";
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

  const [isFront, setIsFront] = useState(true);
  const coverDeg = useMemo(() => (isFront ? 0 : -180), [isFront]);
  const backDeg = useMemo(() => (isFront ? -180 : 0), [isFront]);
  const [imgUrl, setImgUrl] = useState("");
  const cardClass = classNames({
    "works__card--sm": currIdx + 2 === itemIdx || currIdx === itemIdx,
  });

  useEffect(() => {
    const getImg = async () => {
      const url = await getImageURLFromStorage("portfolios", imgSrc);
      setImgUrl(url);
    };
    getImg();
  }, []);

  let workDesBr = workDes.map((v) => (
    <>
      {v}
      <br />
    </>
  ));

  return (
    <>
      <Card
        className={cardClass}
        style={{ transition: `${transition}ms` }}
        onClick={() => setIsFront((prev) => !prev)}
      >
        <div
          className="works__card works__img"
          style={{ transform: `rotateX(${coverDeg}deg)` }}
        >
          <img src={imgUrl} alt="port-img" />
        </div>
        <div
          className="works__card works__des"
          style={{ transform: `rotateX(${backDeg}deg)` }}
        >
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
  width: calc(50% - 2rem);
  min-height: 20rem;
  aspect-ratio: 16/9;
  margin: 1rem;
  box-sizing: border-box;
  flex-shrink: 0;
  transition: 0.5s ease-in;
  cursor: pointer;
  transform: perspective(1000px);
  position: relative;
  font-family: "Poppins", "Trebuchet MS", "Noto Serif TC", serif;
  font-size: 1.25rem;

  &.works__card--sm {
    transform: scale(0.8);
  }
  .works__card {
    width: 100%;
    height: 100%;
    padding: 1rem;
    transition: 0.5s;
    background-color: #fff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
    border-radius: 1.5rem;
    position: absolute;
    backface-visibility: hidden;
  }

  .works__img {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: 3s ease-out;
      border-radius: 0.5rem;
    }
  }

  .works__des {
    h3 {
      margin: 0 0 1rem 0;
    }

    p {
      margin: 0 0 0.25rem 0;

      a {
        color: #fdc300;
      }
    }
  }

  @media (max-width: 1000px) {
    width: calc(80% - 1rem);
    margin-inline: 0.5rem;

    &.works__card--sm {
      transform: scale(0.9);
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
