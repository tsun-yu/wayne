import React, { useEffect, useState } from "react";

function ExperienceItem(props) {
  const { date, period, category, title, des, content } = props;
  const [calcPeriod, setCalcPeriod] = useState("");

  useEffect(() => {
    if (!period) {
      const today = new Date();
      const currMon = today.getMonth();
      const currYr = today.getFullYear();
      const mos = currMon > 5 ? currMon - 6 : currMon;
      const yrs = currMon > 5 ? currYr - 2021 : currYr - 2022;
      setCalcPeriod(`${yrs}yrs ${mos > 0 ? mos + "mos" : ""}`);
    }
  }, []);

  let contentBr = content.map((v, i) => (
    <div key={i}>
      {v}
      <br />
    </div>
  ));

  return (
    <>
      <ul className="exp__item">
        <li className="exp__date">
          {date}
          <br />({period ? period : calcPeriod})
          <br />
          {category}
        </li>

        <li className="exp__description">
          <h3>{title}</h3>
          <p>{des}</p>
          {contentBr}
        </li>
      </ul>
    </>
  );
}

export default ExperienceItem;
