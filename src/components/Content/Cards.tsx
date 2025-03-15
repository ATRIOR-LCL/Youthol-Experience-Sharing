import React from "react";
import "../../style/content/cards.less";
import Card from "./Card";
import cardsArray from "../../configs/cardtitles";
import ProcessBar from "./ProcessBar";

class Cards extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="cards">
        <ProcessBar />
        <div className="cards-container">
          {cardsArray.arr.map((obj) => {
            // console.log(obj);
            return (
              <Card
                key={obj.id}
                title={obj.title}
                description={obj.description}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Cards;
