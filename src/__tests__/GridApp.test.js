import React from "react";
import GridApp from "../GridApp.js";
import { mount } from "enzyme";

const numbers = [1, 2, 3, 4, 5, 6];

const initialWidth = 250;

test("GridApp is rendered with default state", () => {
  const wrapper = mount(<GridApp listItems={numbers} />);
  expect(wrapper.state().listItems).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  expect(wrapper.state().colCount).toEqual(4);
  expect(wrapper.state().rowCount).toEqual(4);
  expect(wrapper.state().itemWidth).toEqual(initialWidth);
  expect(wrapper.state().gridGap).toEqual(0);
  expect(wrapper.state().itemHeight).toEqual(initialWidth);
});

test("GridApp adds item", () => {
  const wrapper = mount(<GridApp listItems={numbers} />);
  expect(wrapper.state().listItems.length).toEqual(12);
  wrapper.find("#add-item").simulate("click");
  expect(wrapper.state().listItems.length).toEqual(13);
});

describe("GridApp column count", () => {
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
});

describe("GridApp item width", () => {

  
  test("GridApp increments item width when clicking increment item width", () => {
    const wrapper = mount(<GridApp listItems={numbers} />);
    expect(wrapper.state().itemWidth).toEqual(initialWidth);
    wrapper.find("#increment-width").simulate("click");
    expect(wrapper.state().itemWidth).toEqual(initialWidth + 1);
  });

  test("GridApp decrements item width when clicking decrement item width", () => {
    const wrapper = mount(<GridApp listItems={numbers} />);
    expect(wrapper.state().itemWidth).toEqual(initialWidth);
    wrapper.find("#decrement-width").simulate("click");
    expect(wrapper.state().itemWidth).toEqual(initialWidth - 1);
  });
});

describe("GridApp item units", () => {
  test("GridApp has a default item width of px", () => {
    const wrapper = mount(<GridApp listItems={numbers} />);
    expect(wrapper.state().itemUnitIndex).toEqual(0);
    wrapper.find("#units").simulate('change', '', { key: '2' });
    expect(wrapper.state().itemUnitIndex).toEqual("0");
  });
});
