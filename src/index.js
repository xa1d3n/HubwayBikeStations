import React from "react";
import { render } from "react-dom";
import { Container } from "semantic-ui-react";
import StationWrapper from "./StationWrapper";
import Title from "./Title";

const App = () => (
  <Container textAlign="center">
    <Title />
    <StationWrapper />
  </Container>
);

render(<App />, document.getElementById("root"));
