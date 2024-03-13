import React, { useEffect, useState } from "react";
import ExperienceItem from "./ExperienceItem";
import { getDataFromFirebase } from "../../util/fetchData";
import PuffLoader from "react-spinners/PuffLoader";

function Experience(props) {
  const [exp, setExp] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  useEffect(() => {
    const expContainer = document.querySelector(".exp__container");
    const expContent = document.querySelector(".exp__content");

    expContent.addEventListener("scroll", () => {
      if (expContent.scrollTop > 1) {
        expContainer.style.setProperty("--before-opacity", "1");
        return;
      }

      if (expContent.scrollTop === 0) {
        expContainer.style.setProperty("--before-opacity", "0");
      }
    });
    return () => {};
  }, []);

  useEffect(() => {
    const getData = async () => {
      const data = await getDataFromFirebase("experience");
      setExp(data);
      setIsLoading(false);
    };
    getData();
  }, []);

  const expDisplay = exp.map(
    ({ category, content, date, description, key, period, title }) => {
      return (
        <ExperienceItem
          category={category}
          content={content}
          date={date}
          des={description}
          key={key}
          period={period}
          title={title}
        />
      );
    }
  );

  return (
    <>
      <div className="exp__sec home-content">
        <div className="topic">EXPERIENCE</div>
        <hr />
        <div className="exp">
          <h1>Timeline</h1>
          <div className="exp__container">
            <div className="exp__content">
              {<PuffLoader color="#fdc300" loading={isLoading} />}
              {expDisplay}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
