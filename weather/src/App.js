import React, { useState, useEffect, useContext } from "react";
import WeatherContext from "./context/WeatherContext";
import "./App.css";
import Current from "./components/Current";
import Location from "./components/Location";
function App() {
  const { currentWeather, currentData, location } = useContext(WeatherContext);

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <h4>Weather App</h4>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <button onClick={() => currentWeather()}>Current Weather</button>
            <Location {...location} />
          </div>
          <div className="col-lg-7">
            <Current {...currentData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
