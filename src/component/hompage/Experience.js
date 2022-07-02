import React from "react";
import { useEffect } from "react/cjs/react.development";
import ExperienceItem from "./ExperienceItem";

function Experience(props) {
  const today = new Date();
  const yrs = today.getFullYear() - 2022;
  const mos = today.getMonth() + 6 + 12 * yrs;

  //local可以但vercel會噴錯
  // useEffect(() => {
  //   const expContent = document.querySelector(".exp__content");
  //   const coverTop = document.querySelector(".exp__coverTop");

  //   expContent.addEventListener("scroll", () => {
  //     if (expContent.scrollTop > 1) {
  //       coverTop.classList.add("exp__coverTop--active");
  //       return;
  //     }

  //     if (expContent.scrollTop === 0)
  //       coverTop.classList.remove("exp__coverTop--active");
  //   });
  //   return () => {};
  // }, []);

  return (
    <>
      <div className="exp__sec home-content">
        <div className="topic">EXPERIENCE</div>
        <hr />
        <div className="exp">
          <h1>Timeline</h1>
          <div className="exp__container">
            <div id="expCoverTop" className="exp__coverTop"></div>
            <div className="exp__coverBottom"></div>
            <div className="exp__content">
              <ExperienceItem
                date="2021/7 - now"
                period={`(${mos}mos)`}
                category="工作經歷"
                title="前端工程師"
                des="勤業眾信 Taipei, Taiwan"
                content={[
                  "- 前端技術：Vue 2/3, JS, Bootstrap, jQuery & Plugins",
                  "- 其他工具：Microsoft Sharepoint",
                  "- 負責內容：內部網站及內部系統前端開發",
                  "1. 無紙化系統開發：將原先使用Promise控制多個api的執行順序,改寫為Async/Await語法",
                  "2. 新系統導入之網站：供全所3000多人使用，純JS加上手刻簡易RWD",
                  "3. 其他各BU內部網站",
                ]}
              />
              <ExperienceItem
                date="2020/7 - 2020/11"
                period="(4mos)"
                category="訓練經歷"
                title="資策會 前端工程師就業養成班"
                des="Institute for Information Industry, Taipei, Taiwan"
                content={[
                  "- 前端：HTML5, CSS3, JS ES6, React, Bootstrap, jQuery等",
                  "- 後端：PHP, node.js (CRUD)",
                  "- 資料庫：mySQL",
                  "- 視覺：Adobe(XD, PS, AI)",
                ]}
              />
              <ExperienceItem
                date="2018/6 - 2020/2"
                period="(1yr 9mos)"
                category="工作經歷"
                title="海空運業務"
                des="八達國際物流 Taipei, Taiwan"
                content={[
                  "- 海空運報價：年業績創造利潤百萬",
                  "- 負責海空運報價、解答運輸上的問題、維護與客戶關係、居中協調客人及船公司，需了解海空運運輸知識、進出口文件、了解進口報關規範",
                ]}
              />
              <ExperienceItem
                date="2017/9 - 2018/3"
                period="(7mos)"
                category="工作經歷"
                title="共同創辦人"
                des="Lalalocker, Taipei, Taiwan"
                content={[
                  "- 利用自己搭建的網路平台媒合店家的彈性空間成為旅客的寄物點",
                  "- 合作陌生店家開發：三個月20+合作店家",
                  "遍及全台，包括台北捷運站(市府、國父紀念館等)、觀光區(瑞芳)、高雄捷運站、火車站(台南、彰化、桃園...等)",
                  "- 網頁維護、增加流量：GOOGLE關鍵字搜尋排名第一",
                ]}
              />
              <ExperienceItem
                date="2013/9 - 2017/6"
                period="(3yr 10mos)"
                category="學習經歷"
                title="東吳大學 國際貿易學系"
                des="Soochow University, Taipei, Taiwan"
                content={[
                  "- 選修個體經濟學、總體經濟學、智慧財產權法、餐旅管理等",
                  "- 旁聽國貿研究所電子商務課程",
                  "- 課外活動：系男籃、拳擊社、舉辦迎新宿營",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
