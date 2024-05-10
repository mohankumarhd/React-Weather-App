import { useEffect, useState, useContext } from "react";
import WeatherApiService from "../api/WeatherApi";
import WeatherDisplay from "../components/WeatherDisplay";
import Forecast from "../components/Forecast";
import { WeatherAppContext } from "../WeatherAppContext";

function Details(props) {
  const [geoData, setGeoData] = useState(null);
  let weatherAppContext = useContext(WeatherAppContext);

  //Get geo data
  useEffect(() => {
    (async () => {
      let response = await WeatherApiService.getGeoData(
        weatherAppContext.searchInput
      );
      let geoDataResponse = await response.json();
      setGeoData(geoDataResponse[0]);
    })();
  }, [props.searchInput]);

  return (
    <>
      {geoData != null && geoData.lat ? geoData.lat : "No data found"}
      {geoData && <WeatherDisplay geoData={geoData} />}
      {geoData && <Forecast geoData={geoData} />}
    </>
  );
}

export default Details;
