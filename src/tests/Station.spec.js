import React from "react";
import * as enzyme from "enzyme";
import Station from "../Station";
import Adapter from "enzyme-adapter-react-15";
import { Segment, Divider, Grid } from "semantic-ui-react";
enzyme.configure({ adapter: new Adapter() });

const defaultProps = {
  name: "test",
  free_bikes: 1,
  empty_slots: 0,
  timestamp: "11/22/1999"
};

test("Station should have Segment, Divider and Grid components", () => {
  const wrapper = enzyme.shallow(<Station station={defaultProps} />);
  expect(wrapper.find(Segment).exists()).toBe(true);
  expect(wrapper.find(Divider).exists()).toBe(true);
  expect(wrapper.find(Grid).exists()).toBe(true);
});
