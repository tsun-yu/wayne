import React from "react";
import WorkItem from "../component/portfolios/WorkItem";

function Portfolios(props) {
  return (
    <>
      <div className="works">
        <div className="topic">PORTFOLIOS</div>
        <hr />
        <div className="work-section">
          <WorkItem
            id="work1"
            imgSrc="/images/straymao.png"
            workTitle="[React] React專題實作"
            workDes={[
              "- 使用框架：React",
              "- 使用技術：Hooks(useState, useEffect), Redux, React-router, React-Bootstrap, Ant-Motion, SCSS",
              "- 手刻輪播牆",
            ]}
            workLink="https://react-pet.vercel.app/"
            workName="Stary Mao"
          />

          <WorkItem
            id="work2"
            imgSrc="/images/bootstrap-practice.png"
            workTitle="[Bootstrap] 電商首頁RWD切版"
            workDes={[
              "以電商首頁作為範例，使用Bootstrap框架刻板，並做RWD響應式設計。",
            ]}
            workLink="https://tsun-yu.github.io/bootstrap-practice/bootstrap.html"
            workName="Click me"
          />
          <WorkItem
            id="work3"
            imgSrc="/images/ins-ajax-bootstrap.png"
            workTitle="[AJAX + Bootstrap] Instagram API"
            workDes={[
              "- 使用jQuery中的AJAX，並透過Instagram的API，獲取專頁上追蹤人數、大頭照、前12篇PO文照片等資訊，並利用Bootstrap切版呈現。",
              "- 現在此API不提供非同源請求",
            ]}
            workLink="https://tsun-yu.github.io/images/ins-ajax-bootstrap.png"
            workName="Click me"
          />
          <WorkItem
            id="work4"
            imgSrc="/images/black-jack.png"
            workTitle="[JavaScript] Black Jack 21點"
            workDes={[
              "利用Class產生一副52張撲克牌並洗牌，莊家點數若小於玩家點數或17點就會要牌；Ace同時可以當作11點或1點，會依照目前的總和自動判斷。",
            ]}
            workLink="https://tsun-yu.github.io/js-practice/black-jack/index.html"
            workName="Click me"
          />
          <WorkItem
            id="work5"
            imgSrc="/images/1A2B.png"
            workTitle="[JavaScript] 猜數字"
            workDes={[
              "電腦隨機出一組4個不重複的數字，使用者猜出該組答案，數字及位置皆正確即為A，數字對位置錯即為B，依提示猜出最終答案。",
            ]}
            workLink="https://tsun-yu.github.io/js-practice/guess/guess.html"
            workName="Click me"
          />
          <WorkItem
            id="work6"
            imgSrc="/images/todo-list.png"
            workTitle="[JavaScript] Todo-list 代辦事項"
            workDes={[
              "使用者可以新增、修改、刪除任何記事，內容皆存在Local Storage中",
            ]}
            workLink="https://tsun-yu.github.io/js-practice/todolist/todolist.html"
            workName="Click me"
          />
        </div>
      </div>
    </>
  );
}

export default Portfolios;
