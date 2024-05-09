import { useEffect, useState } from "react";
import WeatherApiService from "../api/WeatherApi";
import { Link } from "react-router-dom";

function WeatherDisplay(props) {
  const [currentWeather, setCurrentWeather] = useState(null);

  const [weather, setWeather] = useState(null);
  const [main, setMain] = useState(null);
  const [wind, setWind] = useState(null);

  useEffect(() => {
    (async () => {
      let response = await WeatherApiService.getCurrentWeather(
        props.geoData.lat,
        props.geoData.lon
      );

      let currentWeatherResponse = await response.json();
      setCurrentWeather(currentWeatherResponse);
      setWeather(currentWeatherResponse.weather[0]);
      setMain(currentWeatherResponse.main);
      setWind(currentWeatherResponse.wind);
    })();
  }, [props.geoData.lat, props.geoData.lon]);

  return (
    <>
      <Link to="/">Home</Link>
      <h2>Current Weather</h2>

      {weather != null ? <p>{"description: " + weather.description}</p> : null}
      {main != null ? <p>{main.temp}</p> : null}
      {main != null ? <p>{main.humidity}</p> : null}
      {wind != null ? <p>{wind.speed}</p> : null}
    </>
  );
}

export default WeatherDisplay;
