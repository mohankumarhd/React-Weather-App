import { useState } from "react";
import Details from "../pages/Details";

function SearchBar() {
  const [searchInput, setSearchInput] = useState(null);

  function handleSearchInput(event) {
    event.preventDefault();
    setSearchInput(document.getElementById("username").value);
  }

  return (
    <>
      <form onSubmit={handleSearchInput}>
        <input
          type="text"
          id="username"
          className="form-control"
          placeholder="Enter your Username..."
        />
        <button type="submit">Submit</button>
      </form>

      {searchInput && <Details searchInput={searchInput} />}
    </>
  );
}

export default SearchBar;
