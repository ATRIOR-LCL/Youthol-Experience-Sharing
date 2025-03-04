import React from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
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
            <p className="md">{this.props.detail}</p>
          </section>
          {this.props.imgUrl ? (
            <picture className="box-content-child">
              <img src={this.props.imgUrl} alt="" />
            </picture>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Box;
