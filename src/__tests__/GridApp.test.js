import React from "react";
import GridApp from "../GridApp.js";
import { mount } from "enzyme";

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

test("GridApp adds item", () => {
  const wrapper = mount(<GridApp listItems={numbers} />);
  expect(wrapper.state().listItems.length).toEqual(6);
  wrapper.find("#add-item").simulate("click");
  expect(wrapper.state().listItems.length).toEqual(7);
});

test("GridApp increments column count when clicking increment column", () => {
  const wrapper = mount(<GridApp listItems={numbers} />);
  expect(wrapper.state().colCount).toEqual(4);
  wrapper.find("#increment-column").simulate("click");
  expect(wrapper.state().colCount).toEqual(5);
});

test("GridApp increments column count when clicking decrement column", () => {
  const wrapper = mount(<GridApp listItems={numbers} />);
  expect(wrapper.state().colCount).toEqual(4);
  wrapper.find("#decrement-column").simulate("click");
  expect(wrapper.state().colCount).toEqual(3);
});

test("GridApp increments item width when clicking increment item width", () => {
  const wrapper = mount(<GridApp listItems={numbers} />);
  expect(wrapper.state().itemWidth).toEqual(100);
  wrapper.find("#increment-width").simulate("click");
  expect(wrapper.state().itemWidth).toEqual(101);
});

test("GridApp decrement item width when clicking decrement item width", () => {
  const wrapper = mount(<GridApp listItems={numbers} />);
  expect(wrapper.state().itemWidth).toEqual(100);
  wrapper.find("#decrement-width").simulate("click");
  expect(wrapper.state().itemWidth).toEqual(99);
});
