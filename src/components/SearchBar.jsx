import { useState } from "react";
import Details from "../pages/Details";

function SearchBar() {
  const [searchInput, setSearchInput] = useState("");

  function handleSearchInput(event) {
    setSearchInput(event.target.value);
  }

  return (
    <>
      <label htmlFor="searchInput">
        City/Location
        <input type="text" id="searchInput" onBlur={handleSearchInput} />
      </label>
      {searchInput && <Details searchInput={searchInput} />}
    </>
  );
}

export default SearchBar;
