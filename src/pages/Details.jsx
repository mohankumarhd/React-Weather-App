import { useEffect, useState } from "react";
import WeatherApiService from "../api/WeatherApi";
import WeatherDisplay from "../components/WeatherDisplay";
import Forecast from "../components/Forecast";

function Details(props) {
  const [geoData, setGeoData] = useState(null);

  //Get geo data git set
  useEffect(() => {
    (async () => {
      let response = await WeatherApiService.getGeoData(props.searchInput);
      let geoDataResponse = await response.json();
      setGeoData({
        lat: geoDataResponse[0].lat,
        lon: geoDataResponse[0].lon,
      });
    })();
  }, [props.searchInput]);

  return (
    <>
      {geoData && <WeatherDisplay geoData={geoData} />}
      {geoData && <Forecast geoData={geoData} />}
    </>
  );
}

export default Details;
