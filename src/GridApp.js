import React from "react";
import { styled } from "styletron-react";
import _ from "lodash";
import GridElement from "./GridElement.js";

// https://gridbyexample.com/examples/example1/

const initialState = {
  listItems : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  colCount: 4,
  rowCount: 4,
  gridGap: 0,
  itemWidth: 250,
  itemHeight: 250,
  itemUnitIndex: 0,
  gridTemplateColumns: '',
  gridTemplateRows: '',
  gridTemplateAreas: '', 
};
debugger;
export default class GridApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.addItem = this.addItem.bind(this);
    this.incrDecrColumns = this.incrDecrColumns.bind(this);
    this.incrDecrGap = this.incrDecrGap.bind(this);
    this.incrWidth = this.incrWidth.bind(this);
    this.incrHeight = this.incrHeight.bind(this);
    this.handleAutoFlow = this.handleAutoFlow.bind(this);
    this.handleUnitIndex = this.handleUnitIndex.bind(this);
    this.handleWidths = this.handleWidths.bind(this);
    this.resetAll = this.resetAll.bind(this);
    //resetAll
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
    this.setState({ colCount: colCount },
      () => this.handleWidths());
  }

  incrDecrGap(e, incr, reset = false) {
    if (reset) {
      this.setState({ gridGap: 0 },
        () => this.handleWidths()); 
        return
    }
    let gridGap = 0;
    if (incr) {
      gridGap = this.state.gridGap + 1;
    } else {
      if (this.state.gridGap > 0) {
        gridGap = this.state.gridGap - 1;
      }
    }
    this.setState({ gridGap: gridGap },
      () => this.handleWidths());
  }

  incrWidth(e, incr, reset = false) {
    if (reset) {
      this.setState({ itemWidth: 250 },
        () => this.handleWidths()); 
        return
    }
    let itemWidth;
    if (incr) {
      itemWidth = this.state.itemWidth + 1;
    } else {
      if (this.state.itemWidth > 0) {
        itemWidth = this.state.itemWidth - 1;
      }
    }
    this.setState({ itemWidth: itemWidth },
      () => this.handleWidths());
  }

  incrHeight(e, incr, reset = false) {
    if (reset) {
      this.setState({ itemHeight: 250 },
        () => this.handleWidths()); 
        return
    }
    let itemHeight;
    if (incr) {
      itemHeight = this.state.itemHeight + 1;
    } else {
      if (this.state.itemHeight > 0) {
        itemHeight = this.state.itemHeight - 1;
      }
    }
    this.setState({ itemHeight: itemHeight },
      () => this.handleWidths());
  }

  handleAutoFlow(event) {
    this.setState({ gridAutoFlow: event.target.value });
  }

  resetAll() {
    this.setState(initialState);
    this.handleWidths();
  }

  handleUnitIndex(event) {
    // wrap in promise
    if (event.target.value === '1') {
      this.setState({ itemWidth: 25 },
        () => this.handleWidths());      
    } else {
      this.setState({ itemWidth: 250 },
        () => this.handleWidths());       
    }
    this.setState({ itemUnitIndex: event.target.value },
      () => this.handleWidths());
  }

  handleWidths() {
    let units = ['px', '%', 'fr'];
    let gridTemplateColumns = '';
    let gridTemplateRows = '';
    let gridTemplateAreasRow = '';
    let gridTemplateAreas = ''
 
    _.times(this.state.colCount, () => {
      gridTemplateColumns += " " + this.state.itemWidth + units[this.state.itemUnitIndex];
      gridTemplateAreasRow += '. ';
      this.setState({ gridTemplateColumns: gridTemplateColumns });
    });
    gridTemplateAreasRow = gridTemplateAreasRow.trim();
    _.times(this.state.rowCount, () => {
      gridTemplateRows += " " + this.state.itemHeight + units[this.state.itemUnitIndex];
      this.setState({ gridTemplateRows: gridTemplateRows });
      gridTemplateAreas += '"' + gridTemplateAreasRow + '" ';
      
    });
    gridTemplateAreas = gridTemplateAreas.trim();
    this.setState({ gridTemplateAreas: gridTemplateAreas });
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
        <input
          id="reset-gap"
          key="reset-gap"
          type="button"
          value="reset gap"
          onClick={e => this.incrDecrGap(null, null, true)}
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
        <input
          id="reset-width"
          key="reset-width"
          type="button"
          value="reset width"
          onClick={e => this.incrWidth(null, null, true)}
        />        
        <br />
        <input
          key="8"
          type="button"
          value="height+"
          onClick={e => this.incrHeight(e, true)}
        />
        <input
          key="9"
          type="button"
          value="height-"
          onClick={e => this.incrHeight(e, false)}
        />
        <input
          key="reset-height"
          type="button"
          value="reset height"
          onClick={e => this.incrHeight(null, null, true)}
        />
        <br />
        <input
          key="reset-all"
          type="button"
          value="reset all"
          onClick={e => this.resetAll()}
        />          
        <br />
        <select value={this.state.value} onChange={this.handleAutoFlow}>
          <option value="row">row</option>
          <option value="column">column</option>
          <option value="row dense">row dense</option>
          <option value="column dense">column dense</option>
        </select>
        <select id="units" value={this.state.itemUnitIndex} onChange={this.handleUnitIndex}>
          <option value="0">px</option>
          <option value="1">%</option>
          <option value="2">fr</option>
        </select>        
        <GridContainer
          className="container"
          style={{
            gridTemplateColumns: this.state.gridTemplateColumns,
            gridTemplateRows: this.state.gridTemplateRows,
            gridTemplateAreas: this.state.gridTemplateAreas,
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
