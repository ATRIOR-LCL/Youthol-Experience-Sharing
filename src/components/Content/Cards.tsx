import React from "react";
import "../../style/content/cards.less";
import Card from "./Card";
import cardsArray from "../../configs/cardtitles";
import ProcessBar from "./ProcessBar";
import Tip from "./Tip";

type CardsState = {
  title: string;
}

interface cardContextProps {
  title: string;
  updateTitle: (hoverTitle: string) => void;
}

export const cardContext = React.createContext<cardContextProps>({
  title: "",
  updateTitle: () => { }
});

class Cards extends React.Component<{}, CardsState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      title: "Cards",
    };
  }
  private updateTitle = (hoverTitle: string) => {
    this.setState({
      title: hoverTitle
    })
  }
  render(): React.ReactNode {
    return (
      <cardContext.Provider value={{ title: this.state.title, updateTitle: this.updateTitle }}>
        <div className="cards">
          <ProcessBar />
          <Tip title={this.state.title} />
          <div className="cards-container">
            {cardsArray.arr.map((obj) => {
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
      </cardContext.Provider>
    );
  }
}

export default Cards;
