import { HUBWAY_API } from "./constants";

// get stations from CityBikes API (https://api.citybik.es/v2/)
export async function getHubwayStations() {
  /* return fetch(HUBWAY_API, {})
    .then(res => res.json())
    .then(result => {
      return result.network.stations;
    })
    .catch(error => {
      return [];
    }); */

  return await (await fetch(HUBWAY_API)).json();
}
