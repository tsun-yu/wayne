import React, { useEffect, useState } from "react";

import { getDataFromFirebase } from "../../util/fetchData";
import SkillItem from "./SkillsItem";

function Skills(props) {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await getDataFromFirebase("skills");
      setSkills(data);
    };
    getData();
  }, []);

  const skillsDisplay = skills.map((v) => {
    return <SkillItem coverTitle={v.title} backItems={v.content} key={v.key} />;
  });

  return (
    <>
      <div className="skills home-content">
        <div className="topic">SKILLS</div>
        <hr />
        <div className="skills__container">
          <div className="skills__cards">{skillsDisplay}</div>
        </div>
      </div>
    </>
  );
}

export default Skills;
