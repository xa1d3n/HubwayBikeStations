import React from "react";
import * as enzyme from "enzyme";
import StationWrapper from "../StationWrapper";
import Adapter from "enzyme-adapter-react-15";
import { Loader, Dimmer } from "semantic-ui-react";
enzyme.configure({ adapter: new Adapter() });

test("StationWrapper should have Dimmer and Loader components", () => {
  const wrapper = enzyme.mount(<StationWrapper />);

  expect(wrapper.find(Loader).exists()).toBe(true);
  expect(wrapper.find(Dimmer).exists()).toBe(true);
});
