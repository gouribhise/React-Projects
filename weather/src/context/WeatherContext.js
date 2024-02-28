import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";
const BASE_URL = "http://api.weatherapi.com/v1/";
const API_KEY = process.env.REACT_APP_WEATHER_API;

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [location, setLocation] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const[dispForecast,setDispForecast]=useState(null)
  const[fiveData,setFiveData]=useState([])
  const currentWeather = (term) => {
    axios
      .get(`${BASE_URL}current.json?key=${API_KEY}&q=${term}`)
      .then((data) => {
        setLocation(data.data.location);
        setCurrentData(data.data.current);
        setDispForecast(false)
      })
      .catch((error) => console.log(error));
  };
  console.log("currentdata:", currentData);
  console.log("locationdata:", location);

  const weatherForecast=(term)=>{
    axios
    .get(`${BASE_URL}forecast.json?key=${API_KEY}&q=${term}&days=5&aqi=no&alerts=no`)
    .then((data) => {
      setLocation(data.data.location);
      setFiveData(data.data.forecast);
      setDispForecast(true)
    })
    .catch((error) => console.log(error));

  }

console.log('dispforecast:',dispForecast) 
 return (
    <WeatherContext.Provider value={{ currentWeather, currentData, location,weatherForecast,fiveData,dispForecast }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
