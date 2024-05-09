import { useEffect, useState } from "react";
import WeatherApiService from "../api/WeatherApi";

function Forecast(props) {
  const [forecaseWeather, setForecastWeather] = useState([]);

  useEffect(() => {
    (async () => {
      let response = await WeatherApiService.getForecastWeather(
        props.geoData.lat,
        props.geoData.lon
      );
      let forecastWeatherResponse = await response.json();
      setForecastWeather(JSON.stringify(forecastWeatherResponse));
    })();
  }, [props.geoData.lat, props.geoData.lon]);

  return (
    <>
      <p>
        <pre>{forecaseWeather}</pre>
      </p>
    </>
  );
}

export default Forecast;
