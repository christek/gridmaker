import React from "react";
import { styled } from "styletron-react";
import _ from "lodash";
import GridElement from "./GridElement.js";

// https://gridbyexample.com/examples/example1/

export default class GridApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listItems: this.props.listItems,
      colCount: 4,
      rowCount: 4,
      gridGap: 0,
      itemWidth: 100,
      itemHeight: 100,
      itemUnitIndex: 0,
      gridTemplateColumns: '',
      gridTemplateRows: '',
    };
    this.addItem = this.addItem.bind(this);
    this.incrDecrColumns = this.incrDecrColumns.bind(this);
    this.incrDecrGap = this.incrDecrGap.bind(this);
    this.incrWidth = this.incrWidth.bind(this);
    this.incrHeight = this.incrHeight.bind(this);
    this.handleAutoFlow = this.handleAutoFlow.bind(this);
    this.handleUnitIndex = this.handleUnitIndex.bind(this);
    this.handleWidths = this.handleWidths.bind(this);
  }

  addItem() {
    let listItems = this.state.listItems;
    listItems.push(listItems.length + 1);
    this.setState({ listItems: listItems });
  }

  incrDecrColumns(e, incr) {
    let colCount;
    if (incr) {
      colCount = this.state.colCount + 1;
    } else {
      colCount = this.state.colCount - 1;
    }
    this.setState({ colCount: colCount });
  }

  incrDecrGap(e, incr) {
    let gridGap;
    if (incr) {
      gridGap = this.state.gridGap + 1;
    } else {
      if (this.state.gridGap > 0) {
        gridGap = this.state.gridGap - 1;
      }
    }
    this.setState({ gridGap: gridGap });
  }

  incrWidth(e, incr) {
    let itemWidth;
    if (incr) {
      itemWidth = this.state.itemWidth + 1;
    } else {
      if (this.state.itemWidth > 0) {
        itemWidth = this.state.itemWidth - 1;
      }
    }
    this.setState({ itemWidth: itemWidth });
  }

  incrHeight() {
    let itemHeight = this.state.itemHeight + 1;
    this.setState({ itemHeight: itemHeight });
  }

  handleAutoFlow(event) {
    this.setState({ gridAutoFlow: event.target.value });
  }

  handleUnitIndex(event) {
    this.setState({ itemUnitIndex: event.target.value });
  }

  handleWidths() {
    let units = ['px', '%', 'fr'];
    let gridTemplateColumns = '';
    let gridTemplateRows = '';
    _.times(this.state.colCount, () => {
      gridTemplateColumns += " " + this.state.itemWidth + units[this.state.itemUnitIndex];
      this.setState({ gridTemplateColumns: gridTemplateColumns });
    });
    _.times(this.state.rowCount, () => {
      gridTemplateRows += " " + this.state.itemHeight + units[this.state.itemUnitIndex];
      this.setState({ gridTemplateRows: gridTemplateRows });
    });
  }

  componentDidMount() {
    this.handleWidths();
  }

  render() {
    const GridContainer = styled("div");

    



    return (
      <div>
        <input
          id="add-item"
          key="1"
          type="button"
          value="add elements"
          onClick={this.addItem}
        />
        <br />
        <input
          id="decrement-column"
          key="2"
          className="foo"
          type="button"
          value="cols-"
          onClick={e => this.incrDecrColumns(e, false)}
        />
        <input
          id="increment-column"
          key="3"
          type="button"
          value="cols+"
          onClick={e => this.incrDecrColumns(e, true)}
        />
        <br />
        <input
          id="decrement-gap"
          key="4"
          type="button"
          value="gap-"
          onClick={e => this.incrDecrGap(e, false)}
        />
        <input
          id="increment-gap"
          key="5"
          type="button"
          value="gap+"
          onClick={e => this.incrDecrGap(e, true)}
        />
        <br />
        <input
          id="decrement-width"
          key="6"
          type="button"
          value="width-"
          onClick={e => this.incrWidth(e, false)}
        />
        <input
          id="increment-width"
          key="7"
          type="button"
          value="width+"
          onClick={e => this.incrWidth(e, true)}
        />
        <br />
        <input
          key="8"
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
        <select value={this.state.itemUnitIndex} onChange={this.handleUnitIndex}>
          <option value="0">px</option>
          <option value="1">%</option>
          <option value="2">fr</option>
        </select>        
        <GridContainer
          className="container"
          style={{
            gridTemplateColumns: this.state.gridTemplateColumns,
            gridTemplateRows: this.state.gridTemplateRows,
            gridGap: this.state.gridGap,
            gridAutoFlow: this.state.gridAutoFlow
          }}
        >
          {this.state.listItems.map(number => (
            <GridElement className="gridElement" key={number} number={number} />
          ))}
        </GridContainer>
      </div>
    );
  }
}
