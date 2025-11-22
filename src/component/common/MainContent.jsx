import React from "react";

function MainContent(props) {
  return (
    <>
      <main>
        <div>{props.children}</div>
      </main>
    </>
  );
}

export default MainContent;
