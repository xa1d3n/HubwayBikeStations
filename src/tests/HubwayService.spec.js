import * as HubwayService from "../HubwayService";
import { HUBWAY_API } from "../constants";

import fetchMock from "fetch-mock";

describe("getHubwayStations", () => {
  beforeEach(() => {
    fetchMock.restore();
  });

  it("HubwayService should return a station", () => {
    const mockResponseEvents = { network: { stations: [("name": "test")] } };

    fetchMock.mock(HUBWAY_API, mockResponseEvents);

    return HubwayService.getHubwayStations().then(value => {
      expect(value).toEqual(mockResponseEvents.network.stations);
    });
  });
});
