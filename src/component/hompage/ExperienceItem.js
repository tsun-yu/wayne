import React from "react";

function ExperienceItem(props) {
  const { date, category, title, des, content } = props;

  let contentBr = [];
  for (let i = 0; i < content.length; i++) {
    contentBr.push(content[i]);
    contentBr.push(<br />);
  }
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
          <p>{des}</p>
          <div>{contentBr}</div>
        </li>
      </ul>
    </>
  );
}

export default ExperienceItem;
