import React, { useState } from "react";

function SkillItem(props) {
  const { coverTitle, backItems, id } = props;
  const [isFront, setIsFront] = useState(true);

  let coverDeg = 0;
  let backDeg = -180;
  coverDeg = isFront ? 0 : -180;
  backDeg = isFront ? -180 : 0;

  const items = backItems.map((v, i) => (
    <div className="skills__item " key={i}>
      {v}
    </div>
  ));
  return (
    <>
      <div
        className="skills__category"
        id={id}
        onClick={() => setIsFront((prev) => !prev)}
      >
        <div
          className="skills__category--cover"
          style={{ transform: `rotateY(${coverDeg}deg)` }}
        >
          <h2>{coverTitle}</h2>
        </div>
        <div
          className="skills__category--back"
          style={{ transform: `rotateY(${backDeg}deg)` }}
        >
          {items}
        </div>
      </div>
    </>
  );
}

export default SkillItem;
