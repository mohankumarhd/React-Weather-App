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
      <div className="col-lg-3">
        <div className="card m-1">
          <div className="card-body">
            {weather != null ? (
              <h5>{"Description: " + weather.description}</h5>
            ) : null}
            {main != null ? <div>{"Temperature: " + main.temp}</div> : null}

            {main != null ? <div>{"Humidity: " + main.humidity}</div> : null}

            {wind != null ? <div>{"Speed: " + wind.speed}</div> : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherDisplay;
