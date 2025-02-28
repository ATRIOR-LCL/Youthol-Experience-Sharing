import React from "react";
import ReactDOM from "react-dom";
import Front from "./pages/Front";
import Content from "./pages/Content";

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
