import React from "react";
import '../../style/content/processbar.less'
import { MyContext } from "../../layout";

interface LineProps {
    toAction: number
}

type BarState = {
    color: string
}


class ProcessBar extends React.Component<{}, BarState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            color: 'red'
        }
    }

    private clearLinePropety = (arr: HTMLElement[]) => {
        arr.forEach((line) => {
            if (line) {
                line.style.setProperty('--bar-color', 'rgba(128, 128, 128, 0.537)');
            }
        })
    }

    private setLinePropety = (nm: number) => {
        const line = document.querySelector(`.process-bar-line:nth-child(${nm})`) as HTMLElement
        if (line) {
            line.style.setProperty('--bar-color', '#000');
        }
    }

    private currentAction = (st: number, arr: HTMLElement[]) => {
        if (st >= window.innerHeight && st < 2 * window.innerHeight) {
            console.log('yes');
            this.clearLinePropety(arr);
            this.setLinePropety(1);
        }
        else if (st >= 2 * window.innerHeight + window.innerHeight / 2 && st < 4 * window.innerHeight) {
            this.clearLinePropety(arr);
            this.setLinePropety(2);
        }
        else if (st >= 4 * window.innerHeight + window.innerHeight / 2 && st < 6 * window.innerHeight) {
            this.clearLinePropety(arr);
            this.setLinePropety(3);
        }
        else if (st >= 6 * window.innerHeight + window.innerHeight / 2 && st < 8 * window.innerHeight) {
            this.clearLinePropety(arr);
            this.setLinePropety(4);
        }
        else if (st >= 8 * window.innerHeight + window.innerHeight / 2 && st < 10 * window.innerHeight) {
            this.clearLinePropety(arr);
            this.setLinePropety(5);
        }
        else if (st >= 10 * window.innerHeight + window.innerHeight / 2 && st < 12 * window.innerHeight) {
            this.clearLinePropety(arr);
            this.setLinePropety(6);
        }
    }

    componentDidMount(): void {
        const handous = document.querySelector('html') as HTMLElement;
        const Lines = [...document.querySelectorAll('.process-bar-line') as NodeListOf<HTMLElement>];
        window.addEventListener('scroll', () => {
            let scrollTop = handous.scrollTop
            this.currentAction(scrollTop, Lines);
        })
    }

    render(): React.ReactNode {
        return (
            <MyContext.Consumer>
                {
                    value => {
                        return (
                            <div className="process-bar" >
                                {
                                    [...Array(6)].map((_, index) => {
                                        let action = (index * 2) * value.height + value.height;
                                        return <ProcessLine key={index} toAction={action} />
                                    })
                                }
                            </div>
                        )
                    }
                }
            </MyContext.Consumer>
        )
    }
}

class ProcessLine extends React.Component<LineProps> {
    private lineRef = React.createRef<HTMLDivElement>();
    constructor(props: LineProps) {
        super(props);
    }
    private handleClick = () => {
        window.scrollTo({
            top: this.props.toAction,
            behavior: 'smooth'
        })
    }
    render(): React.ReactNode {
        return (
            <div className="process-bar-line" onClick={this.handleClick} ref={this.lineRef}>
                <div className="process-bar-line-s"></div>
            </div>
        )
    }
}

export default ProcessBar;