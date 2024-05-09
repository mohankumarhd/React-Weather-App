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
