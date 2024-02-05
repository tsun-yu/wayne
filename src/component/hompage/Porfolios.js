import React, { useEffect, useState } from "react";
import WorkItem from "./WorkItem";
import { getDataFromFirebase } from "../../util/fetchData";
import PuffLoader from "react-spinners/PuffLoader";
import styled from "styled-components";

function Portfolios(props) {
  const [works, setWorks] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await getDataFromFirebase("portfolios");
      setWorks(data);
      setIsLoading(false);
    };
    getData();
  }, []);

  const worksDisplay = works.map(
    ({ img, title, description, link, name, key }) => {
      return (
        <WorkItem
          imgSrc={img}
          workTitle={title}
          workDes={description}
          workLink={link}
          workName={name}
          key={key}
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
            {<PuffLoader color="#fdc300" loading={isLoading} />}
            {worksDisplay}
          </div>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  .works {
    width: 100%;
    padding: 5% 10% 1rem;

    .work-section {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));

      .works__card {
        background-color: #fff;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
        border-radius: 1.5rem;
        display: flex;
        justify-content: center;
        width: 90%;
        min-height: 14rem;
        margin: 0 auto 2rem;
        padding: 1rem;
        box-sizing: border-box;
        cursor: pointer;
        overflow: hidden;
        position: relative;

        font: {
          family: $fontEn1, $fontCn;
          size: 1.25rem;
        }

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

        &:nth-child(1):after {
          content: "REACT";
        }

        &:nth-child(2):after {
          content: "REACT";
        }

        &:nth-child(3):after {
          content: "VUE";
        }

        &:nth-child(4):after {
          content: "REACT";
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
    }
  }

  @media (max-width: 540px) {
    .works {
      padding-top: 3.125rem;

      .work-section {
        flex-direction: column;

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
    }
  }
`;

export default Portfolios;
