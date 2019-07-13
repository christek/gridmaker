import React from "react";
import GridApp from "../GridApp.js";
import GridElement from "../GridElement.js";
import { shallow, mount, render } from 'enzyme';


const numbers = [1, 2, 3, 4, 5, 6];

test("GridApp is rendered with default state", () => {
  
  const wrapper = mount(<GridApp listItems={numbers} />);
  expect(wrapper.state().listItems).toEqual([1, 2, 3, 4, 5, 6]);  
  expect(wrapper.state().colCount).toEqual(4);
  expect(wrapper.state().rowCount).toEqual(4);
  expect(wrapper.state().itemWidth).toEqual(100);
  expect(wrapper.state().gridGap).toEqual(0);  
  expect(wrapper.state().itemHeight).toEqual(100);    
});