import React, { Component } from "react";

export class CardComponent1 extends Component {
  render() {
    const result = this.props.name;
    let i = 0;
    return result.map((individual) => {
      let className = "card h-100";
      if (i === 0) {
        className += " bg-primary";
      } else if (i === 1) {
        className += " bg-warning";
      } else if (i === 2) className += " bg-secondary";
      i++;
      return (
        <div className="col-sm mb-3">
          <div className={className}>
            <div className="card-body text-left text-white d-flex flex-column">
              <p className="card-text">{individual.date}</p>
              <h5 className="card-title">{individual.title}</h5>
              <p className="card-text">{individual.details}</p>
              <a
                href="#"
                className="btn btn-outline-light align-self-start mt-auto"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      );
    });
  }
}

export default CardComponent1;
