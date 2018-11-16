import React from "react";
import * as enzyme from "enzyme";
import Title from "../Title";
import Adapter from "enzyme-adapter-react-15";
import { Header, Icon } from "semantic-ui-react";

enzyme.configure({ adapter: new Adapter() });

test("Title should have Head and Icon components", () => {
  const wrapper = enzyme.shallow(<Title />);
  expect(wrapper.find(Header).exists()).toBe(true);
  expect(wrapper.find(Icon).exists()).toBe(true);
});
