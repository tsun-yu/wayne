import React from "react";

function ExperienceItem(props) {
  const { date, period, category, title, des, content } = props;

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
          <br />
          {period}
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
