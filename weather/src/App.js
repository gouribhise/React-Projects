import React, { useState, useEffect, useContext } from "react";
import WeatherContext from "./context/WeatherContext";
import "./App.css";
import WeatherData from "./components/WeatherData";
import Location from "./components/Location";
import Current from "./components/Current";
import Forecast from "./components/Forecast";
function App() {
  const { currentWeather, currentData, location,dispForeCast,fiveData } = useContext(WeatherContext);
    return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <h4>Weather App</h4>
        </div>
        <div className="row">
       
          <div className="col-lg-4">
            <Current/>
       
        
            <Location {...location} />
          
          </div>
          <div className="col-lg-5">
           <WeatherData {...currentData}/>
           <Forecast {...fiveData}/>         
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
