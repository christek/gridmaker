import React from "react";
import ReactDOM from "react-dom";
import { styled } from "styletron-react";
import _ from "lodash";

import "./styles.css";

const numbers = [1, 2, 3, 4, 5, 6];

// https://gridbyexample.com/examples/example1/

function Square(props) {
  return (
    <div key={props.number} className="box">
      {props.number}
    </div>
  );
}

class GridApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: this.props.listItems,
      colCount: 4,
      gridGap: 0,
      itemWidth: 100
    };
    this.addItem = this.addItem.bind(this);
    this.incrColumns = this.incrColumns.bind(this);
    this.incrGap = this.incrGap.bind(this);
    this.incrWidth = this.incrWidth.bind(this);
  }

  addItem() {
    let listItems = this.state.listItems;
    foo.push(Math.floor(Math.random() * 10));
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

  render() {
    const GridContainer = styled("div");
    let gridTemplateColumns = "";
    _.times(this.state.colCount, () => {
      gridTemplateColumns += " " + this.state.itemWidth + "px";
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
        <GridContainer
          className="container"
          style={{
            gridTemplateColumns: gridTemplateColumns,
            gridGap: this.state.gridGap
          }}
        >
          {this.state.listItems.map(number => (
            <Square number={number} />
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
