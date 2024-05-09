export const WeatherApiService = {
  getGeoData: (searchTerm) => {
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${searchTerm}&limit=1&appid=9be999fe18e7fd2dd28b726429bc8feb`;
    return fetch(url, {
      method: "GET",
    });
  },

  getCurrentWeather: (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?units=Metric&lat=${lat}&lon=${lon}&appid=9be999fe18e7fd2dd28b726429bc8feb&units`;
    return fetch(url, {
      method: "GET",
    });
  },

  getForecastWeather: (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?cnt=5&units=Metric&lat=${lat}&lon=${lon}&appid=9be999fe18e7fd2dd28b726429bc8feb`;
    return fetch(url, {
      method: "GET",
    });
  },
};

export default WeatherApiService;
