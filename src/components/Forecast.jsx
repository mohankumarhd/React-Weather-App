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

      <div className="col-lg-3">
        <div className="card m-1">
          <div className="card-body">
            {day1 != null && day1.weather[0] != null ? (
              <h5>{"Description: " + day1.weather[0].description}</h5>
            ) : null}

            {day1 != null ? <p>{"Temperaure: " + day1.main.temp}</p> : null}

            {day1 != null ? <p>{"Humidity: " + day1.main.humidity}</p> : null}

            {day1 != null ? <p>{"Speed: " + day1.wind.speed}</p> : null}
          </div>
        </div>

        <div className="card m-1">
          <div className="card-body">
            {day2 != null && day2.weather[0] != null ? (
              <h5>{"Description: " + day2.weather[0].description}</h5>
            ) : null}

            {day2 != null ? <p>{"Temperaure: " + day2.main.temp}</p> : null}

            {day2 != null ? <p>{"Humidity: " + day2.main.humidity}</p> : null}

            {day2 != null ? <p>{"Speed: " + day2.wind.speed}</p> : null}
          </div>
        </div>

        <div className="card m-1">
          <div className="card-body">
            {day3 != null && day3.weather[0] != null ? (
              <h5>{"Description: " + day3.weather[0].description}</h5>
            ) : null}

            {day3 != null ? <p>{"Temperaure: " + day3.main.temp}</p> : null}

            {day3 != null ? <p>{"Humidity: " + day3.main.humidity}</p> : null}

            {day3 != null ? <p>{"Speed: " + day3.wind.speed}</p> : null}
          </div>
        </div>

        <div className="card m-1">
          <div className="card-body">
            {day4 != null && day4.weather[0] != null ? (
              <h5>{"Description: " + day4.weather[0].description}</h5>
            ) : null}

            {day4 != null ? <p>{"Temperaure: " + day4.main.temp}</p> : null}

            {day4 != null ? <p>{"Humidity: " + day4.main.humidity}</p> : null}

            {day4 != null ? <p>{"Speed: " + day4.wind.speed}</p> : null}
          </div>
        </div>

        <div className="card m-1">
          <div className="card-body">
            {day5 != null && day5.weather[0] != null ? (
              <h5>{"Description: " + day5.weather[0].description}</h5>
            ) : null}

            {day5 != null ? <p>{"Temperaure: " + day5.main.temp}</p> : null}

            {day5 != null ? <p>{"Humidity: " + day5.main.humidity}</p> : null}

            {day5 != null ? <p>{"Speed: " + day5.wind.speed}</p> : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Forecast;
