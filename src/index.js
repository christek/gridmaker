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
      colCount: 4
    };
    this.addItem = this.addItem.bind(this);
    this.incrColumns = this.incrColumns.bind(this);
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

  render() {
    const RedAnchor = styled("div", {
      color: "red"
    });
    let foo = "";
    _.times(this.state.colCount, () => {
      console.log("times");
      foo += " 100px";
    });
    return (
      <div>
        <input type="button" value="add element" onClick={this.addItem} />
        <input type="button" value="+" onClick={this.incrColumns} />
        <RedAnchor className="container" style={{ gridTemplateColumns: foo }}>
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
