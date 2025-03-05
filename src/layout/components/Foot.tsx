import React from "react";
import "../../style/foot/foot.less";
import mortis from "../../assets/img/footer/mortise.jpg";
import right from "../../assets/img/footer/right.png";

class Foot extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="foot">
        <main className="foot-main">
          <img src={mortis} alt="" />
          <hgroup>
            <h1>OK，事件循环的学习就到此结束吧 🎉</h1>
            <h2>因为我是用 React 写的，</h2>
            <h2>所以对于 Vue 还是请看官方文档吧</h2>
            <nav>
              <div></div>
              <a href="https://cn.vuejs.org/" target="_blank">
                Vue.js
              </a>
              <svg
              className="right"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="#FFFFFF"
              >
                <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
              </svg>
            </nav>
          </hgroup>
        </main>
      </div>
    );
  }
}

export default Foot;
