import React from "react";
import "../../style/front/index.less";
import avatar from "../../assets/img/qq.png";
import vue from "../../assets/img/Vue.png";
import react from "../../assets/img/react.png";
import js from "../../assets/img/js.png";
import ts from "../../assets/img/ts.png";
import less from "../../assets/img/less.png";
import html from "../../assets/img/html.png";

class Front extends React.Component {
  componentDidMount(): void {
    const imgs = [
      ...document.querySelectorAll(".vue, .react, .js, .ts, .less, .html"),
    ];
    const ht = [...document.querySelectorAll(".ht, footer")];
    const hb = document.querySelector(".hb");
    const hc = document.querySelector(".hc");
    const slogan = document.querySelector(".slogan");
    const avatar = document.querySelector(".avatar");
    const textture = document.querySelector(".textture") as HTMLElement;
    setTimeout(() => {
      imgs.forEach((img) => {
        img.classList.remove("img-default");
      });
      ht.forEach((h) => {
        h.classList.remove("font-hide-t");
      });
      hb?.classList.remove("font-hide-b");
      slogan?.classList.remove("slogan-hide");
      avatar?.classList.remove("avatar-hide");
      setTimeout(() => {
        hc?.classList.remove("font-hide-c");
        if (textture) {
          textture.style.height = "100%";
        }
      }, 1000);
    }, 0);
  }
  render(): React.ReactNode {
    return (
      <div className="front">
        <hgroup className="title">
          <h1 className="ht font-hide-t">嘿，同学！🤨</h1>
          <h1 className="hb font-hide-b">
            你的 <span>JavaScript</span> 该『<span> 升级 </span>』了！
          </h1>
          <h2 className="hc font-hide-c">— — —浏览器进程模型 / 声明式 UI</h2>
          <div className="title-box">
            <div className="title-box-container">
              <p className="slogan slogan-hide">
                “JS的世界远比你想象的要精彩！”
              </p>
              <img src={avatar} className="avatar avatar-hide" alt="" />
            </div>
            <img src={vue} alt="" className="vue img-default" />
            <img src={react} alt="" className="react img-default" />
            <img src={js} alt="" className="js img-default" />
            <img src={ts} alt="" className="ts img-default" />
            <img src={less} alt="" className="less img-default" />
            <img src={html} alt="" className="html img-default" />
          </div>
          <aside className="textture"></aside>
        </hgroup>
        <footer className="font-hide-t">
          <p>@2024 to Youthol by</p>
          <img src={avatar} alt="" />
          <a href="https://github.com/ATRIOR-LCL" target="_blank">
            atrior
          </a>
          <p>with ❤️</p>
        </footer>
      </div>
    );
  }
}

export default Front;
