import React from "react";
import ReactDOM from "react-dom";
import Front from "./components/Front";
import Content from "./components/Content";
import Foot from "./components/Foot";

type AppState = {
    height: number;
}

interface ContextProps {
    height: number;
}

export var MyContext = React.createContext<ContextProps>({
    height: 0
});

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
            <MyContext.Provider value={{height: this.state.height}}>
                <Front />
                <Content />
                <Foot />
            </MyContext.Provider>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
