import { useEffect, useState } from "react";
import WeatherApiService from "../api/WeatherApi";

function Forecast(props) {
  const [forecaseWeather, setForecastWeather] = useState(null);

  const [day1, setDay1] = useState(null);
  const [day2, setDay2] = useState(null);
  const [day3, setDay3] = useState(null);
  const [day4, setDay4] = useState(null);
  const [day5, setDay5] = useState(null);

  useEffect(() => {
    (async () => {
      let response = await WeatherApiService.getForecastWeather(
        props.geoData.lat,
        props.geoData.lon
      );
      let forecastWeatherResponse = await response.json();
      setForecastWeather(forecastWeatherResponse);
      setDay1(forecastWeatherResponse.list[0]);
      setDay2(forecastWeatherResponse.list[1]);
      setDay3(forecastWeatherResponse.list[2]);
      setDay4(forecastWeatherResponse.list[3]);
      setDay5(forecastWeatherResponse.list[4]);
    })();
  }, [props.geoData.lat, props.geoData.lon]);

  return (
    <>
      <h2>Forecast Weather</h2>

      {day1 != null ? <p>{day1.weather[0].description}</p> : null}
      {day2 != null ? <p>{day2.main.temp}</p> : null}
      {day3 != null ? <p>{day3.main.temp}</p> : null}
      {day4 != null ? <p>{day4.main.temp}</p> : null}
      {day5 != null ? <p>{day5.main.temp}</p> : null}
    </>
  );
}

export default Forecast;
