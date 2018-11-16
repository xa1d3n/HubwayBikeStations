import React from "react";
import { Header, Icon } from "semantic-ui-react";
import { HUBWAY } from "./constants";

export default () => (
  <Header as="h2" style={{ marginTop: "10px" }}>
    {HUBWAY}
    <Icon name="bicycle" />
  </Header>
);
