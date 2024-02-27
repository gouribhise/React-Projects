import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";
const BASE_URL = "http://api.weatherapi.com/v1/current.json?";
const API_KEY = process.env.REACT_APP_WEATHER_API;

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [location, setLocation] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const currentWeather = (term) => {
    axios
      .get(`${BASE_URL}key=${API_KEY}&q=${term}`)
      .then((data) => {
        setLocation(data.data.location);
        setCurrentData(data.data.current);
      })
      .catch((error) => console.log(error));
  };
  console.log("currentdata:", currentData);
  console.log("locationdata:", location);
  return (
    <WeatherContext.Provider value={{ currentWeather, currentData, location }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
