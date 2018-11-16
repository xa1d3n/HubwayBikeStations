import React, { PureComponent } from "react";
import { getHubwayStations } from "./HubwayService";
import Station from "./Station";
import { NO_STATIONS } from "./constants";
import { Loader, Dimmer } from "semantic-ui-react";

export default class StationWrapper extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      stations: [],
      isLoading: true
    };
  }

  async componentDidMount() {
    /* getHubwayStations().then(jsonData => {
      this.setState({
        stations: jsonData,
        isLoading: false
      });
    }); */

    let response = await getHubwayStations();
    let stations = response.network.stations;
    this.setState({
      stations,
      isLoading: false
    });
  }

  render() {
    const stations = this.state.stations.map(station => (
      <Station station={station} key={station.id} />
    ));

    const noStations = <p>{NO_STATIONS}</p>;

    return (
      <div>
        <Dimmer active={this.state.isLoading}>
          <Loader />
        </Dimmer>
        {stations.length ? stations : noStations}
      </div>
    );
  }
}
