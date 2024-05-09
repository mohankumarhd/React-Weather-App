import { useState, useContext } from "react";
import Details from "../pages/Details";
import { Link } from "react-router-dom";
import { WeatherAppContext } from "../WeatherAppContext";

function SearchBar() {
  let weatherAppContext = useContext(WeatherAppContext);

  function handleSearchInput(event) {
    event.preventDefault();
    console.log(document.getElementById("username").value);
    weatherAppContext.setSearchInput(document.getElementById("username").value);
    console.log(weatherAppContext.searchInput);
  }

  return (
    <>
      <form onSubmit={handleSearchInput}>
        <input
          type="text"
          id="username"
          className="form-controlrounded check-button "
          placeholder="City"
          aria-describedby="search-addon "
          aria-label="Search"
          onBlur={handleSearchInput}
        />
      </form>
    </>
  );
}

export default SearchBar;
