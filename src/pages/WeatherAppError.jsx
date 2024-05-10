import { Link } from "react-router-dom";

function WeatherAppError() {
  return (
    <>
      <div>Weather APP Unexpected error. </div>
      <Link to="/">Go to Home Page</Link>
    </>
  );
}
export default WeatherAppError;
