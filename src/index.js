import React from "react";
import ReactDOM from "react-dom";
import { styled } from "styletron-react";
import _ from "lodash";

import "./styles.css";

const numbers = [1, 2, 3, 4, 5, 6];

// https://gridbyexample.com/examples/example1/

class GridElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: this.props.listItems,
      colCount: 4,
      rowCount: 4,
      gridGap: 0,
      itemWidth: 100,
      itemHeight: 100
    };
    this.handleGridColumnStart = this.handleGridColumnStart.bind(this);
  }

  handleGridColumnStart(event) {
    this.setState({ gridColumnStart: event.target.value });
  }

  render() {
    const GridElement = styled("div");
    return (
      <GridElement
        key={this.props.number}
        className="box"
        style={{
          gridColumnStart: 0
        }}
      >
        <input type="text" value="0" onChange={this.handleGridColumnStart} />
        {this.props.number}
      </GridElement>
    );
  }
}

class GridApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: this.props.listItems,
      colCount: 4,
      rowCount: 4,
      gridGap: 0,
      itemWidth: 100,
      itemHeight: 100
    };
    this.addItem = this.addItem.bind(this);
    this.incrColumns = this.incrColumns.bind(this);
    this.incrGap = this.incrGap.bind(this);
    this.incrWidth = this.incrWidth.bind(this);
    this.incrHeight = this.incrHeight.bind(this);
    this.handleAutoFlow = this.handleAutoFlow.bind(this);
  }

  addItem() {
    let listItems = this.state.listItems;
    listItems.push(Math.floor(Math.random() * 10));
    this.setState({ listItems: listItems });
  }

  incrColumns() {
    let colCount = this.state.colCount + 1;
    this.setState({ colCount: colCount });
  }

  incrGap() {
    let gridGap = this.state.gridGap + 1;
    this.setState({ gridGap: gridGap });
  }

  incrWidth() {
    let itemWidth = this.state.itemWidth + 1;
    this.setState({ itemWidth: itemWidth });
  }

  incrHeight() {
    let itemHeight = this.state.itemHeight + 1;
    this.setState({ itemHeight: itemHeight });
  }

  handleAutoFlow(event) {
    this.setState({ gridAutoFlow: event.target.value });
  }

  render() {
    const GridContainer = styled("div");
    let gridTemplateColumns = "";
    let gridTemplateRows = "";
    _.times(this.state.colCount, () => {
      gridTemplateColumns += " " + this.state.itemWidth + "px";
    });
    _.times(this.state.rowCount, () => {
      gridTemplateRows += " " + this.state.itemHeight + "px";
    });
    return (
      <div>
        <input
          key="1"
          type="button"
          value="add elements"
          onClick={this.addItem}
        />
        <input key="2" type="button" value="cols+" onClick={this.incrColumns} />
        <input key="3" type="button" value="gap+" onClick={this.incrGap} />
        <input key="4" type="button" value="width+" onClick={this.incrWidth} />
        <input
          key="5"
          type="button"
          value="height+"
          onClick={this.incrHeight}
        />
        <select value={this.state.value} onChange={this.handleAutoFlow}>
          <option value="row">row</option>
          <option value="column">column</option>
          <option value="row dense">row dense</option>
          <option value="column dense">column dense</option>
        </select>
        <GridContainer
          className="container"
          style={{
            gridTemplateColumns: gridTemplateColumns,
            gridTemplateRows: gridTemplateRows,
            gridGap: this.state.gridGap,
            gridAutoFlow: this.state.gridAutoFlow
          }}
        >
          {this.state.listItems.map(number => (
            <GridElement number={number} />
          ))}
        </GridContainer>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <GridApp listItems={numbers} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
