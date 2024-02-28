import React, { useState, useEffect, useContext } from "react";
import WeatherContext from "./context/WeatherContext";
import "./App.css";
import WeatherData from "./components/WeatherData";
import Location from "./components/Location";
import Current from "./components/Current";
import Forecast from "./components/Forecast";
function App() {
  const { currentWeather, currentData, location } = useContext(WeatherContext);
const[isVisible,setIsVisible]=useState(true)
   return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <h4>Weather App</h4>
        </div>
        <div className="row">
       
          <div className="col-lg-4">
            <Current isVisible={isVisible}/>
       
        
            <Location {...location} />
          
          </div>
          <div className="col-lg-5">
            <WeatherData {...currentData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
