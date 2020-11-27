import React, { Component } from "react";
import { CardData } from "../resources/data";
import CardComponent1 from "./CardComponent1";

export class CardComponent extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      isShow: true,
      chunkCountTo: this.props.chunkCountTo + 3,
      chunkCountFrom: this.props.chunkCountTo,
    }));
  }
  render() {
    let chunkresult1 = CardData.slice(0, this.props.chunkCountTo);
    let result;
    if (chunkresult1.length < 6) {
      return (
        <div className="card-deck">
          <CardComponent1 name={chunkresult1} />
        </div>
      );
    } else {
      chunkresult1 = new Array(Math.ceil(chunkresult1.length / 3))
        .fill()
        .map((_) => chunkresult1.splice(0, 3));
      result = chunkresult1.map((individual) => {
        return (
          <div className="card-deck">
            <CardComponent1 name={individual} key={individual.id} />
          </div>
        );
      });
      return result;
    }
  }
}

export default CardComponent;
