import React from "react";

function WorkItem(props) {
  const { imgSrc, workTitle, workDes, workLink, workName } = props;

  let workDesBr = [];
  for (let i = 0; i < workDes.length; i++) {
    workDesBr.push(workDes[i]);
    workDesBr.push(<br />);
  }

  return (
    <>
      <div className="works__card">
        <div className="works__img">
          <img src={imgSrc} />
        </div>
        <div className="works__des">
          <h3>{workTitle}</h3>

          <p>{workDesBr}</p>
          <p>
            連結：<a href={workLink}>{workName}</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default WorkItem;
