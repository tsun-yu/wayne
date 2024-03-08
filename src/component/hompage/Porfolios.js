import React, { useEffect, useMemo, useState } from "react";
import WorkItem from "./WorkItem";
import { getDataFromFirebase } from "../../util/fetchData";
import PuffLoader from "react-spinners/PuffLoader";
import styled from "styled-components";

function Portfolios(props) {
  const [works, setWorks] = useState([]);
  const worksLength = useMemo(() => works.length, [works]);
  const worksListForSlide = useMemo(() => {
    return [...works.slice(-2), ...works, ...works.slice(0, 2)];
  }, [works]);
  const [isLoading, setIsLoading] = useState([]);
  const [currIdx, setCurrIdx] = useState(1.5);
  const [transition, setTransition] = useState(0);
  const translateX = useMemo(() => {
    return `${-25 * currIdx}%`;
  }, [currIdx]);

  useEffect(() => {
    if (currIdx !== worksLength + 1.5 && currIdx !== 0.5) return;
    const timer = setTimeout(() => {
      setTransition(0);
      if (currIdx === worksLength + 1.5) setCurrIdx(1.5);
      if (currIdx === 0.5) setCurrIdx(worksLength + 0.5);
    }, transition);

    return () => clearTimeout(timer);
  }, [currIdx]);

  const slideHadler = (direction) => {
    const newIdx = currIdx + direction;
    if (newIdx < 0.5 || newIdx > worksLength + 1.5) return;
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
  }, []);

  let worksDisplay = worksListForSlide.map(
    ({ img, title, description, link, name, key }, i) => {
      return (
        <WorkItem
          imgSrc={img}
          workTitle={title}
          workDes={description}
          workLink={link}
          workName={name}
          key={key + i}
          currIdx={currIdx}
          itemIdx={i}
          transition={transition}
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
                width: `${25 * (worksLength + 4)}%`,
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
    padding: 5% 0 0;

    .work-section {
      width: 100%;
      padding-bottom: 1rem;
      position: relative;

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
      overflow: hidden;

      .worksWrap {
        display: flex;
      }
    }
  }

  @media (max-width: 540px) {
    .works {
      padding-top: 3.125rem;

      .work-section {
        flex-direction: column;
      }
    }
  }
`;

export default Portfolios;
