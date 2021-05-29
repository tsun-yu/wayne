import React, { useState } from "react";

function WorkItem(props) {
  const { imgSrc, workTitle, workDes, workLink, workName } = props;

  const [isOpen, setIsOpen] = useState(false);

  const open = (e) => {
    isOpen
      ? e.currentTarget.classList.remove("works__card--clicked")
      : e.currentTarget.classList.add("works__card--clicked");
  };

  const scrollDistance = (e) =>
    e.offsetTop - document.querySelector(".navbar__sm").offsetHeight;

  const scrollTo = (e) => {
    window.scrollTo({
      top: scrollDistance(e),
      behavior: "smooth",
    });
  };
  let workDesBr = workDes.map((v) => (
    <>
      {v}
      <br />
    </>
  ));

  return (
    <>
      <div
        className="works__card"
        onClick={(e) => {
          setIsOpen((prev) => !prev);
          open(e);
          !isOpen &&
            document.body.clientWidth >= 540 &&
            scrollTo(e.currentTarget);
        }}
      >
        <div className="works__img">
          <img src={imgSrc} alt="port-img" />
        </div>
        <div className="works__des">
          <h3>{workTitle}</h3>

          <p>{workDesBr}</p>
          <p>
            連結：
            <a href={workLink} target="_blank" rel="noreferrer">
              {workName}
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default WorkItem;
