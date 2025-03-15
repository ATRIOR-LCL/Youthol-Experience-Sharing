import React from "react";
import '../../style/content/tip.less'
import logo from '../../assets/img/handous/touxiang.jpg'

interface TipProps {
    title: string;
}

type TipState = {
    title: string;
}

class Tip extends React.Component<TipProps, TipState> {
    private message = React.createRef<HTMLDivElement>();
    constructor(props: TipProps) {
        super(props);
        this.state = {
            title: this.props.title
        }
    }
    componentDidUpdate(prevProps: Readonly<TipProps>): void {
        if (prevProps.title !== this.props.title) {
            this.setState({
                title: this.props.title
            })
            if (this.message.current) {
                this.message.current.style.opacity = '1';
            }
            setTimeout(() => {
                if (this.message.current) {
                    this.message.current.style.opacity = '0';
                }
            }, 1000);
        }
    }
    render(): React.ReactNode {
        return (
            <div className="tip">
                <div className="tip-message" ref={this.message}>
                    <p>{this.state.title}</p>
                </div>
                <img src={logo} alt="" className="tip-logo" />
            </div>
        )
    }
}

export default Tip;