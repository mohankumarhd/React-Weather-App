import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Details from "./pages/Details";
import Home from "./pages/Home";
import { useState } from "react";
import { WeatherAppContext } from "./WeatherAppContext";
import WeatherAppError from "./pages/WeatherAppError";
import NoDataFound from "./pages/NoDataFound";

function App() {
  let [searchInput, setSearchInput] = useState("");
  return (
    <>
      <WeatherAppContext.Provider value={{ searchInput, setSearchInput }}>
        <div className="container-fluid">
          <BrowserRouter>
            <Routes>
              <Route path="/" exact element={<Home />}></Route>
              <Route path="/details" exact element={<Details />}></Route>
              <Route
                path="/nodatafound"
                exact
                element={<NoDataFound />}
              ></Route>
              <Route path="*" element={<WeatherAppError />} />
            </Routes>
          </BrowserRouter>
        </div>
      </WeatherAppContext.Provider>
    </>
  );
}

export default App;
