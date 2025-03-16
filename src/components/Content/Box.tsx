import React from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import dog from "../../assets/img/handous/mzm.jpg";
export interface BoxProps {
    title: string;
    detail: React.ReactNode;
    imgUrl?: string;
}

class Box extends React.Component<BoxProps> {
    constructor(props: BoxProps) {
        super(props);
    }

    componentDidMount(): void {
        document.querySelectorAll("pre code").forEach((block) => {
            hljs.highlightBlock(block as HTMLElement);
        });
    }

    render(): React.ReactNode {
        return (
            <div className="box">
                <div className="box-content">
                    <section>
                        <h1>{this.props.title}</h1>
                        <hr />
                        <div className="md">{this.props.detail}</div>
                    </section>
                    {this.props.imgUrl ? (
                        <picture className="box-content-child">
                            <img src={this.props.imgUrl} alt="" className="image" />
                        </picture>
                    ) : (
                        <picture className="box-content-bottom">
                            <div className="noImg">
                                <p>没图捏 (ノへ`、)</p>
                            </div>
                            <img src={dog} alt="" className="dog" />
                        </picture>
                    )}
                </div>
            </div>
        );
    }
}

export default Box;
