import React from "react";
import GridElement from "../GridElement.js";
import { shallow, mount, render } from 'enzyme';

test("GridElement is rendered with default state", () => {
  const wrapper = mount(<GridElement number={1} />);
  expect(wrapper.state().gridColumnStart).toEqual(0);
  expect(wrapper.state().gridColumnEnd).toEqual(0);
});

test("GridElement is rendered with correct content", () => {
  const wrapper = mount(<GridElement number={1} />);
  expect(wrapper.find('.myText').text()).toEqual('1');
  const wrapper2 = mount(<GridElement number={2} />);
  expect(wrapper2.find('.myText').text()).toEqual('2');
});

test("GridElement states change when inputs are changed", () => {
  const wrapper = mount(<GridElement number={1} />);
  expect(wrapper.state().gridColumnStart).toEqual(0);
  expect(wrapper.state().gridColumnEnd).toEqual(0);

  const input1 = wrapper.find('input').at(0)
  input1.instance().value = '1';
  input1.simulate('change');
  expect(wrapper.state().gridColumnStart).toEqual('1');

  const input2 = wrapper.find('input').at(1)
  input2.instance().value = '1';
  input2.simulate('change');
  expect(wrapper.state().gridColumnEnd).toEqual('1');
});
