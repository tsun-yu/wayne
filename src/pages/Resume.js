import React from "react";

function Resume(props) {
  const $cvCn = document.querySelector("#cv-cn");
  const $cvEn = document.querySelector("#cv-en");
  const cvToggle = (target, other) => {
    if (target.classList.length === 1) {
      target.classList.remove("resume__hide");
      other.classList.add("resume__hide");
    }
  };
  const scrollTo = (ele) => {
    const distance =
      document.querySelector(ele).offsetTop -
      document.querySelector(".navbar__sm").offsetHeight;

    window.scrollTo({
      top: distance,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="resume__sec">
        <div className="resume__opt">
          <h1
            onClick={() => {
              cvToggle($cvCn, $cvEn);
              scrollTo("#cv-cn");
            }}
          >
            中文履歷
          </h1>
          <h1
            onClick={() => {
              cvToggle($cvEn, $cvCn);
              scrollTo("#cv-en");
            }}
          >
            英文履歷
          </h1>
        </div>
        <iframe
          id="cv-cn"
          frameBorder="0"
          scrolling="no"
          src="https://drive.google.com/file/d/1OEz-ICghvtmSOrj9QDS95y4RSqhcmQr8/preview"
        ></iframe>
        <iframe
          className="resume__hide"
          id="cv-en"
          frameBorder="0"
          scrolling="no"
          src="https://drive.google.com/file/d/1XrdwWgqR4P5foeYhIFg6_fPOJD7ljfEU/preview"
        ></iframe>
      </div>
    </>
  );
}

export default Resume;
