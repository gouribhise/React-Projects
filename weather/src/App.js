import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
const BASE_URL = "http://api.weatherapi.com/v1/current.json?";
const API_KEY = process.env.REACT_APP_WEATHER_API;

function App() {
  const getData = () => {
    axios
      .get(`${BASE_URL}key=${API_KEY}&q=London`)
      .then((data) => console.log(data.data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <div>hello</div>
    </div>
  );
}

export default App;
