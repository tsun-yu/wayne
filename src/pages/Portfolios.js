import React, { useEffect, useState } from "react";
import WorkItem from "../component/portfolios/WorkItem";
import { getDataFromFirebase } from "../util/fetchData";
import PuffLoader from "react-spinners/PuffLoader";

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
      <div className="works">
        <div className="topic">PORTFOLIOS</div>
        <hr />
        <div className="work-section">
          {<PuffLoader color="#fdc300" loading={isLoading} />}
          {worksDisplay}
        </div>
      </div>
    </>
  );
}

export default Portfolios;
