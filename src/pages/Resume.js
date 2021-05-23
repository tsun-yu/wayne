import React, { useState } from "react";

function Resume(props) {
  const [cvLink, setCvLink] = useState(
    "https://drive.google.com/file/d/1OEz-ICghvtmSOrj9QDS95y4RSqhcmQr8/preview"
  );
  const scrollTo = (ele) => {
    const distance =
      document.querySelector(ele).offsetTop -
      document.querySelector(".navbar__sm").offsetHeight;

    window.scrollTo({
      top: distance,
      behavior: "smooth",
    });
  };
  const cvToggle = (a) => {
    a === "cn"
      ? setCvLink(
          "https://drive.google.com/file/d/1OEz-ICghvtmSOrj9QDS95y4RSqhcmQr8/preview"
        )
      : setCvLink(
          "https://drive.google.com/file/d/1XrdwWgqR4P5foeYhIFg6_fPOJD7ljfEU/preview"
        );
    scrollTo("#cv");
  };

  return (
    <>
      <div className="resume__sec">
        <div className="resume__opt">
          <h1
            onClick={() => {
              cvToggle("cn");
            }}
          >
            中文履歷
          </h1>
          <h1
            onClick={() => {
              cvToggle("en");
            }}
          >
            英文履歷
          </h1>
        </div>
        <iframe
          id="cv"
          frameBorder="0"
          scrolling="no"
          src={cvLink}
          title="My Resume"
        ></iframe>
      </div>
    </>
  );
}

export default Resume;
