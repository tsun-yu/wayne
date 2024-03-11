import React, { useEffect, useMemo, useState } from "react";
import classNames from "classnames";
import { getImageURLFromStorage } from "../../util/fetchData";
import styled from "styled-components";

function WorkItem(props) {
  const {
    imgSrc,
    workTitle,
    workDes,
    keyProp,
    workLink,
    workName,
    currIdx,
    itemIdx,
    transition,
    worksLength,
  } = props;

  const [isFront, setIsFront] = useState(true);
  const coverDeg = useMemo(() => (isFront ? 0 : -180), [isFront]);
  const backDeg = useMemo(() => (isFront ? -180 : 0), [isFront]);
  const [imgUrl, setImgUrl] = useState("");
  const cardClass = classNames({
    "works__card--sm": currIdx + 2 === itemIdx || currIdx === itemIdx,
    "works__card--copy":
      itemIdx === 0 ||
      itemIdx === 1 ||
      itemIdx === worksLength + 2 ||
      itemIdx === worksLength + 3,
    "works__card--first": itemIdx === 2,
    "works__card--last": itemIdx === worksLength + 1,
  });

  useEffect(() => {
    const getImg = async () => {
      const url = await getImageURLFromStorage("portfolios", imgSrc);
      setImgUrl(url);
    };
    getImg();
  }, []);

  let workDesDisplay = workDes.map((v, i) => (
    <p key={keyProp + i}>
      {v}
      <br />
    </p>
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
          <div className="works__card--cover">
            <h3>{workTitle}</h3>
          </div>
          <img src={imgUrl} alt="port-img" />
        </div>
        <div
          className="works__card works__des"
          style={{ transform: `rotateX(${backDeg}deg)` }}
        >
          <h3>{workTitle}</h3>
          {workDesDisplay}
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
  margin-inline: 1rem;
  aspect-ratio: 16/9;
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
  &:hover {
    .works__card {
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    }
  }
  .works__card {
    width: 100%;
    height: 100%;
    padding: 1rem;
    transition: 0.5s;
    background-color: #fff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
    border-radius: 1.5rem;
    overflow: hidden;
    position: absolute;
    backface-visibility: hidden;
    overflow: hidden;
  }
  .works__img {
    &:hover {
      .works__card--cover {
        opacity: 1;
      }
      img {
        transform: scale(1.2);
      }
    }
    .works__card--cover {
      opacity: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: #00000080;
      top: 0;
      left: 0;
      transition: 0.3s ease-in;
      z-index: 1;
      display: grid;
      place-items: center;

      h3 {
        color: #fdc300;
        font-size: 2rem;
        width: 100%;
        text-align: center;
      }
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: 3s ease-in-out;
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
    width: calc(80% - 2rem);

    &.works__card--sm {
      transform: scale(1);
    }
    &.works__card--copy {
      display: none;
    }
    &.works__card--first {
      margin-left: calc(10% + 1rem);
    }
    &.works__card--last {
      margin-right: calc(10% + 1rem);
    }

    .works__img {
      &:hover {
        .works__card--cover {
          opacity: 0;
        }
        img {
          transform: scale(1);
        }
      }
    }
  }

  @media (max-width: 540px) {
    aspect-ratio: 9/16;
    .works__card {
      flex-direction: column;
      width: 100%;
      padding: 0;
      margin: 0 0 2.5rem;

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
    .works__img {
      &:hover {
        .works__card--cover {
          opacity: 0;
        }
        img {
          transform: scale(1);
        }
      }
    }
  }
`;
export default WorkItem;
