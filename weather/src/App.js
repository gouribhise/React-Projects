import React, { useState, useEffect, useContext } from "react";
import WeatherContext from "./context/WeatherContext";
import "./App.css";
import Current from "./components/Current";
import Location from "./components/Location";
function App() {
  const { currentWeather, currentData, location } = useContext(WeatherContext);
  const [term, setTerm] = useState("");
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <h4>Weather App</h4>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div class="form-group fg--search">
              <input
                type="text"
                className="input-search mx-5"
                placeholder="enter city"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
              />
              <button
                className="btn btn-secondary btn-sm rounded-pill"
                onClick={() => currentWeather(term)}
              >
                Search
              </button>
            </div>
            <Location {...location} />
          </div>
          <div className="col-lg-5">
            <Current {...currentData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
