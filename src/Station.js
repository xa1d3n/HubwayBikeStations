import React from "react";
import { Segment, Divider, Grid } from "semantic-ui-react";
import { FREE_BIKES, EMPTY_SLOTS } from "./constants";
import Moment from "react-moment";

const Station = ({ station }) => {
  return (
    <Segment>
      <h4 key={station.name}>{station.name}</h4>
      <Divider />
      <Grid columns="equal">
        <Grid.Column>
          <h1>{station.free_bikes}</h1>
          <label>{FREE_BIKES}</label>
        </Grid.Column>
        <Grid.Column width={8}>
          <h1>{station.empty_slots}</h1>
          <label>{EMPTY_SLOTS}</label>
        </Grid.Column>
      </Grid>
      <Divider />
      <Moment style={{ color: "lightgray" }}>{station.timestamp}</Moment>
    </Segment>
  );
};

export default Station;
