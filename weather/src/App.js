import React, { useState, useEffect, useContext } from "react";
import WeatherContext from "./context/WeatherContext";
import "./App.css";
import WeatherData from "./components/WeatherData";
import Location from "./components/Location";
import Search from "./components/Search";
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
       
             <Search/>
       </div>
       <div className="row">

        
            <Location {...location} />
            </div>
            <div>
          
            <WeatherData {...currentData}/>
            </div>
            <div>
           <Forecast {...fiveData}/>         
          
         </div>
      </div>
    </div>
  );
}

export default App;
