import { Link } from "react-router-dom";
import { useContext } from "react";
import { WeatherAppContext } from "../WeatherAppContext";

function NoDataFound() {
  let weatherAppContext = useContext(WeatherAppContext);
  return (
    <>
      <div>No Data found for entered text {weatherAppContext.searchInput}</div>
      <Link to="/">Go to home oage</Link>
    </>
  );
}

export default NoDataFound;
