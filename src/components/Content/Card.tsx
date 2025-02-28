import React from "react";

interface CardProps {
  title: string;
  description: string;
}

class Card extends React.Component<CardProps> {
  constructor(props: CardProps) {
    super(props);
  }
  render(): React.ReactNode {
    return (
      <div className="card">
        <h2 className="card-title">{this.props.title}</h2>
        <section className="card-description">{this.props.description}</section>
      </div>
    );
  }
}

export default Card;
