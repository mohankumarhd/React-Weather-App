import { useEffect, useState } from "react";
import WeatherApiService from "../api/WeatherApi";
import WeatherDisplay from "../components/WeatherDisplay";
import Forecast from "../components/Forecast";

function Details(props) {
  const [geoData, setGeoData] = useState({
    lat: "",
    lon: "",
  });

  //Get geo data
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
      <WeatherDisplay geoData={geoData} />
      <Forecast geoData={geoData} />
    </>
  );
}

export default Details;
