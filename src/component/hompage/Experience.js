import React, { useEffect, useState } from "react";
import ExperienceItem from "./ExperienceItem";
import { getDataFromFirebase } from "../../util/firebase";
import PuffLoader from "react-spinners/PuffLoader";

function Experience(props) {
  const [exp, setExp] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  useEffect(() => {
    const expContent = document.querySelector(".exp__content");
    const coverTop = document.querySelector(".exp__coverTop");

    expContent.addEventListener("scroll", () => {
      if (expContent.scrollTop > 1) {
        coverTop.classList.add("exp__coverTop--active");
        return;
      }

      if (expContent.scrollTop === 0)
        coverTop.classList.remove("exp__coverTop--active");
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
            <div id="expCoverTop" className="exp__coverTop"></div>
            <div className="exp__coverBottom"></div>
            <div className="exp__content">
              {" "}
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
