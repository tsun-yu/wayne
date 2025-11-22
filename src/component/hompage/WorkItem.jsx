import React, { useEffect, useMemo, useState } from "react";
import classNames from "classnames";
import { getImageURLFromStorage } from "../../util/fetchData";
import styled from "styled-components";

function WorkItem(props) {
  const {
    imgSrc,
    imgMSrc,
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
  const [imgUrl, setImgUrl] = useState(null);
  const [imgUrlM, setImgUrlM] = useState(null);
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
      const urlM = await getImageURLFromStorage("portfolios", imgMSrc);
      setImgUrl(url);
      setImgUrlM(urlM);
    };
    getImg();
  }, []);

  let workDesDisplay = workDes.map((v, i) => (
    <p key={keyProp + i} title={v}>
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
          <div className="works__img--desktop">
            <img src={imgUrl} alt="port-img" />
          </div>

          <div className="works__img--mobile">
            <img src={imgUrlM} alt="port-img" />
          </div>
        </div>
        <div
          className="works__card works__des"
          style={{ transform: `rotateX(${backDeg}deg)` }}
        >
          <div>
            <h3>{workTitle}</h3>
            <div className="works__des--content">{workDesDisplay}</div>
          </div>
          <p className="works__des--link">
            <a href={workLink} target="_blank" rel="noreferrer">
              前往 {workName}
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
    .works__img--desktop {
      height: 100%;
    }
    .works__img--mobile {
      height: 100%;
      display: none;
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > div {
      flex-shrink: 1;
      overflow: auto;
      &::-webkit-scrollbar {
        display: none;
      }

      h3 {
        margin: 0 0 1rem 0;
      }
    }

    p {
      margin: 0 0 0.25rem 0;

      &.works__des--link {
        text-align: center;
      }

      a {
        text-decoration: none;
        color: #fff;
        background-color: #fdc300;
        padding: 0.5rem 1.5rem;
        border-radius: 2rem;
        width: min(100%, 30rem);
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        &:hover {
          box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 3px 0px,
            rgba(60, 64, 67, 0.15) 0px 4px 8px 3px;
        }
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

    .works__des {
      p {
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
    }
  }

  @media (max-width: 540px) {
    aspect-ratio: 9/16;
    .works__card {
      flex-direction: column;
      width: 100%;
      padding: 0.5rem;
      margin: 0 0 2.5rem;

      &:after {
        display: none;
      }
    }
    .works__img {
      .works__img--mobile {
        display: block;
      }
      .works__img--desktop {
        display: none;
      }
      img {
        border-radius: 1rem;
      }
      &:hover {
        .works__card--cover {
          opacity: 0;
        }
        img {
          transform: scale(1);
        }
      }
    }
    .works__des {
      box-sizing: border-box;
      padding: 5%;
      width: 100%;

      p {
        -webkit-line-clamp: 10;
      }
    }
  }
`;
export default WorkItem;
