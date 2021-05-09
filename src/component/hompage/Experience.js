import React from "react";
import ExperienceItem from "./ExperienceItem";

function Experience(props) {
  return (
    <>
      <div className="exp__sec home-content">
        <div className="topic">EXPERIENCE</div>
        <hr />
        <div className="exp">
          <h1>Timeline</h1>
          <div className="exp__content">
            <ExperienceItem
              date="2020/7 - 2020/11(4mos)"
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
              date="2018/6 - 2020/2(1yr9mos)"
              category="工作經歷"
              title="海空運業務"
              des="八達國際物流 Taipei, Taiwan"
              content={[
                "- 海空運報價：年業績創造利潤百萬",
                "- 負責海空運報價、解答運輸上的問題、維護與客戶關係、居中協調客人及船公司，需了解海空運運輸知識、進出口文件、了解進口報關規範",
              ]}
            />
            <ExperienceItem
              date="2017/9 - 2018/3(7mos)"
              category="工作經歷"
              title="共同創辦人"
              des="Lalalocker, Taipei, Taiwan"
              content={[
                "- 利用自己搭建的網路平台媒合店家的彈性空間成為旅客的寄物點",
                "- 合作陌生店家開發：三個月20+合作店家",
                "遍及全台，包括台北捷運站(市府、國父紀念館等)、觀光區(瑞芳)、高雄捷運站、火車站(台南、彰化、桃園...等)",
                "- SEO、網頁維護、增加流量：GOOGLE關鍵字搜尋排名第一",
              ]}
            />
            <ExperienceItem
              date="2013/9 - 2017/6(3yr 10mos)"
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
    </>
  );
}

export default Experience;
