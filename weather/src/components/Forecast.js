import React,{useState,useContext} from "react";
import WeatherContext from "../context/WeatherContext";
const Forecast=({isForecast})=>{
    const { currentWeather, currentData, location } = useContext(WeatherContext);
    const [term, setTerm] = useState("");
    return(
        <div>
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
                Forecast
              </button>
            </div>
        </div>
      
    )
}

export default Forecast