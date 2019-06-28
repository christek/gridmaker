import React from "react";
import ReactDOM from "react-dom";
import { styled } from "styletron-react";
import _ from "lodash";

import "./styles.css";

const numbers = [1, 2, 3, 4, 5, 6];

// https://gridbyexample.com/examples/example1/

class GridContainerNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: this.props.listItems,
      colCount: 4,
      gridGap: 0
    };
    this.addItem = this.addItem.bind(this);
    this.incrColumns = this.incrColumns.bind(this);
    this.incrGap = this.incrGap.bind(this);
  }

  addItem() {
    let foo = this.state.listItems;
    foo.push(Math.floor(Math.random() * 10));
    this.setState({ listItems: foo });
  }

  incrColumns() {
    let foo = this.state.colCount + 1;
    this.setState({ colCount: foo });
  }

  incrGap() {
    let foo = this.state.gridGap + 1;
    this.setState({ gridGap: foo });
  }

  render() {
    const RedAnchor = styled("div", {
      color: "red"
    });
    let foo = "";
    _.times(this.state.colCount, () => {
      foo += " 100px";
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
        <RedAnchor
          className="container"
          style={{
            gridTemplateColumns: foo,
            gridGap: this.state.gridGap
          }}
        >
          {this.state.listItems.map(number => (
            <div key={number} className="box">
              {number}
            </div>
          ))}
        </RedAnchor>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <GridContainerNew listItems={numbers} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
