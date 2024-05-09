import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Details from "./pages/Details";
import Home from "./pages/Home";
import { useState } from "react";
import { WeatherAppContext } from "./WeatherAppContext";

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
            </Routes>
          </BrowserRouter>
        </div>
      </WeatherAppContext.Provider>
    </>
  );
}

export default App;
