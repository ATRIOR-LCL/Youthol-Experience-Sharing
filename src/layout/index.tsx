import React from "react";
import ReactDOM from "react-dom";
import Front from "./components/Front";
import Content from "./components/Content";
import Foot from "./components/Foot";

type AppState = {
    height: number;
}



class App extends React.Component<{},AppState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            height: window.innerHeight
        }
    }
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
                <Foot />
                </>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
