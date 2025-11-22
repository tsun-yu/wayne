import React, { useEffect, useMemo, useState } from "react";
import WorkItem from "./WorkItem";
import { getDataFromFirebase } from "../../util/fetchData";
import PuffLoader from "react-spinners/PuffLoader";
import styled from "styled-components";

function Portfolios(props) {
  const [works, setWorks] = useState([]);
  const [cardWidthPct, setCardWidthPct] = useState(50);
  const worksLength = useMemo(() => works.length, [works]);
  const worksListForSlide = useMemo(() => {
    return [...works.slice(-2), ...works, ...works.slice(0, 2)];
  }, [works]);
  const [isLoading, setIsLoading] = useState([]);
  const [currIdx, setCurrIdx] = useState(1);
  const [center, setCenter] = useState(0.5);
  const computedIdx = useMemo(() => {
    return currIdx + center;
  }, [currIdx, center]);
  const [transition, setTransition] = useState(0);
  const translateX = useMemo(() => {
    if (window.innerWidth <= 1000) return "0%";
    return `${-1 * cardWidthPct * computedIdx}%`;
  }, [currIdx, cardWidthPct]);

  useEffect(() => {
    if (computedIdx !== worksLength + 1 + center && computedIdx !== center)
      return;
    const timer = setTimeout(() => {
      setTransition(0);
      if (computedIdx === worksLength + 1 + center) setCurrIdx(1);
      if (computedIdx === center) setCurrIdx(worksLength);
    }, transition);

    return () => clearTimeout(timer);
  }, [currIdx]);

  const slideHadler = (direction) => {
    const newIdx = currIdx + direction;
    if (newIdx < 0 || newIdx > worksLength + 1) return;
    setTransition(500);
    setCurrIdx(newIdx);
  };

  useEffect(() => {
    const getData = async () => {
      const data = await getDataFromFirebase("portfolios");
      setWorks(data);
      setIsLoading(false);
    };
    getData();

    // if (document.body.clientWidth <= 1000) {
    if (window.innerWidth <= 1000) {
      setCardWidthPct(80);
      // setCenter(0.875);
    }
  }, []);

  let worksDisplay = worksListForSlide.map(
    (
      {
        img = "",
        title = "",
        description = [],
        link = "",
        name = "",
        key = "",
        img_m = "",
      },
      i
    ) => {
      return (
        <WorkItem
          imgSrc={img}
          imgMSrc={img_m}
          workTitle={title}
          workDes={description}
          workLink={link}
          workName={name}
          key={key + i}
          keyProp={key}
          currIdx={currIdx}
          itemIdx={i}
          transition={transition}
          worksLength={worksLength}
        />
      );
    }
  );
  return (
    <>
      <Container>
        <div className="home-content works">
          <div className="topic">PORTFOLIOS</div>
          <hr />
          <div className="work-section">
            <div className="backArea" onClick={() => slideHadler(-1)}></div>
            <div className="forwardArea" onClick={() => slideHadler(1)}></div>
            {<PuffLoader color="#fdc300" loading={isLoading} />}
            <div
              className="worksWrap"
              style={{
                transition: `${transition}ms`,
                transform: `translateX(${translateX})`,
              }}
            >
              {worksDisplay}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  .works {
    width: 100%;

    .work-section {
      width: 100%;
      position: relative;
      overflow: hidden;

      .backArea,
      .forwardArea {
        position: absolute;
        top: 0;
        width: 25%;
        height: 100%;
        cursor: pointer;
        z-index: 1;
      }
      .backArea {
        left: 0;
        background: linear-gradient(270deg, #f5f5f500 0%, #f5f5f5 100%);
      }
      .forwardArea {
        right: 0;
        background: linear-gradient(90deg, #f5f5f500 0%, #f5f5f5 100%);
      }
      .worksWrap {
        display: flex;
        width: 100%;
        padding: 1.5rem 0 2rem;
      }
    }
  }

  @media (max-width: 1000px) {
    .works {
      hr {
        margin-bottom: 0;
      }
      .work-section {
        &::before,
        &::after {
          content: "";
          position: absolute;
          top: 0;
          width: 10%;
          height: 100%;
          z-index: 1;
        }
        &::before {
          left: 0;
          background: linear-gradient(270deg, #f5f5f500 0%, #f5f5f5 100%);
        }
        &::after {
          right: 0;
          background: linear-gradient(90deg, #f5f5f500 0%, #f5f5f5 100%);
        }

        .backArea,
        .forwardArea {
          width: 10%;
          display: none;
        }
        .worksWrap {
          overflow: auto;
          &::-webkit-scrollbar {
            display: none;
          }
        }
      }
    }
  }
  @media (max-width: 540px) {
    .works {
      margin-top: 5%;
    }
  }
`;

export default Portfolios;
