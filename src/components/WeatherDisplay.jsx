import { useEffect, useState } from "react";
import WeatherApiService from "../api/WeatherApi";

function WeatherDisplay(props) {
  const [currentWeather, setCurrentWeather] = useState([]);

  useEffect(() => {
    (async () => {
      let response = await WeatherApiService.getCurrentWeather(
        props.geoData.lat,
        props.geoData.lon
      );
      let currentWeatherResponse = await response.json();
      setCurrentWeather(currentWeatherResponse);
    })();
  }, [props.geoData.lat, props.geoData.lon]);

  return (
    <>
      <p>Weather Dispay</p>
    </>
  );
}

export default WeatherDisplay;
