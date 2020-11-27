import "./App.css";
import React, { Component } from "react";
import { CardComponent } from "./components/CardComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
      chunkresult: [],
      chunkCount: 0,
      chunkCountFrom: 0,
      chunkCountTo: 3,
    };

    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.el.scrollIntoView({ behavior: "smooth" });
  }
  handleClick() {
    this.setState((state) => ({
      isShow: true,
      chunkCountTo: this.state.chunkCountTo + 3,
      chunkCountFrom: this.state.chunkCountTo,
    }));
  }

  render() {
    return (
      <div className="App">
        <h2 className="text-danger text-left pl-3">Related Articles</h2>
        <p className="text-left pl-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam,
          quidem. Amet qui deserunt nisi labore, reprehenderit natus nesciunt
          laboriosam voluptates porro? Nihil laborum possimus veritatis, tempore
          doloremque eveniet dolor praesentium.
        </p>
        <CardComponent
          chunkCountFrom={this.state.chunkCountFrom}
          chunkCountTo={this.state.chunkCountTo}
        />
        <button
          type="button"
          className="btn align-self-start mt-auto btn-outline-danger"
          onClick={this.handleClick}
        >
          ReadMore
        </button>
        <div
          ref={(el) => {
            this.el = el;
          }}
        />
      </div>
    );
  }
}

export default App;
