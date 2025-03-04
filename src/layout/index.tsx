import React from "react";
import ReactDOM from "react-dom";
import Front from "./components/Front";
import Content from "./components/Content";

class App extends React.Component {
  componentDidMount(): void {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  render(): React.ReactNode {
    return (
      <>
        <Front />
        <Content />
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
