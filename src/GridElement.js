import React from "react";
import { styled } from "styletron-react";

import "./styles.css";

export default class GridElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gridColumnStart: 0,
      gridColumnEnd: 0
    };
    this.handleGridColumnStart = this.handleGridColumnStart.bind(this);
    this.handleGridColumnEnd = this.handleGridColumnEnd.bind(this);
  }

  handleGridColumnStart(event) {
    this.setState({ gridColumnStart: event.target.value });
  }

  handleGridColumnEnd(event) {
    this.setState({ gridColumnEnd: event.target.value });
  }

  render() {
    const GridElement = styled("div");
    return (
      <GridElement
        key={this.props.number}
        className="box"
        style={{
          gridColumnStart: this.state.gridColumnStart,
          gridColumnEnd: this.state.gridColumnEnd
        }}
      >
        <input
          type="text"
          value={this.state.gridColumnStart}
          onChange={this.handleGridColumnStart}
        />
        <input
          type="text"
          value={this.state.gridColumnEnd}
          onChange={this.handleGridColumnEnd}
        />
        {this.props.number}
      </GridElement>
    );
  }
}
