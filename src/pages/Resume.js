import React, { useEffect, useState } from "react";

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
  const cnLink =
    "https://drive.google.com/file/d/1OEz-ICghvtmSOrj9QDS95y4RSqhcmQr8/preview";
  const enLink =
    "https://drive.google.com/file/d/1XrdwWgqR4P5foeYhIFg6_fPOJD7ljfEU/preview";

  useEffect(() => {
    document
      .querySelectorAll(".resume__opt>h1")
      .forEach((v) => v.classList.remove("cvSelected"));
    cvLink === cnLink
      ? document.querySelector("#cn-cv").classList.add("cvSelected")
      : document.querySelector("#en-cv").classList.add("cvSelected");
    return () => {};
  }, [cvLink]);

  return (
    <>
      <div className="resume__sec">
        <div className="resume__opt">
          <h1
            id="cn-cv"
            className=""
            onClick={() => {
              setCvLink(cnLink);
              scrollTo("#cv");
            }}
          >
            中文履歷
          </h1>
          <h1
            id="en-cv"
            onClick={() => {
              setCvLink(enLink);
              scrollTo("#cv");
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
