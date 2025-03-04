import React from "react";
import "../../style/content/index.less";
import Handous from "../../components/Content/Handous";
import Cards from "../../components/Content/Cards";

class Content extends React.Component {
  componentDidMount(): void {
    const cards = [
      ...(document.querySelectorAll(".card") as NodeListOf<HTMLElement>),
    ];
    const content = document.querySelector(".content") as HTMLElement;
    this.rotate(cards);

    window.addEventListener("scroll", () => {
      let proption = content.getBoundingClientRect().top / window.innerHeight;
      if (proption <= 0) {
        let n = cards.length;
        let index = Math.ceil((proption * n) / 11.5);
        index = Math.abs(index) - 1;
        for (let i = 0; i < n; i++) {
          if (i <= index) {
            cards[i].classList.add("active");
          } else {
            cards[i].classList.remove("active");
          }
        }
        this.rotate(cards);
      }
    });
  }

  private rotate(cards: HTMLElement[]) {
    let angle = 0;
    cards.forEach((card) => {
      if (card.classList.contains("active")) {
        card.style.transform = "translate(-50%, -120vh) rotate(-48deg)";
      } else {
        card.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
        angle -= 10;
      }
    });
  }
  render(): React.ReactNode {
    return (
      <div className="content">
        <Handous />
        <Cards />
      </div>
    );
  }
}

export default Content;
