import React from "react";
import "../../style/foot/foot.less";
import mortis from "../../assets/img/footer/mortise.jpg";

class Foot extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="foot">
        <main className="foot-main">
          <img src={mortis} alt="" />
          <hgroup>
            <h1>OK，「事件循环」的学习就到此结束吧 🎉</h1>
            <h2>因为我是用 <span className="r">React</span> 写的，</h2>
            <h2>声明式 UI 还是看 <span className="v">Vue</span> 吧</h2>
            <nav>
              <div></div>
              <a href="https://cn.vuejs.org/" target="_blank">
                Vue.js
              </a>
              <svg
              className="right"
                xmlns="http://www.w3.org/2000/svg"
                height="25px"
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
