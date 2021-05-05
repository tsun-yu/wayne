import React from "react";

function ExperienceItem(props) {
  const { date, category, title, des, content } = props;
  return (
    <>
      <ul className="exp__item">
        <li className="exp__date">
          {date}
          <br />
          {category}
        </li>

        <li className="exp__description">
          <h3>{title}</h3>
          <span>{des}</span>
          <div>{content}</div>
        </li>
      </ul>
    </>
  );
}

export default ExperienceItem;
