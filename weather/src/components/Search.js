import React,{useState,useContext,useEffect} from "react";
import WeatherContext from "../context/WeatherContext";
const Search=({isVisible})=>{
    const { currentWeather, currentData, location,weatherForecast } = useContext(WeatherContext);
    const [term, setTerm] = useState("pune");
    useEffect(()=>{
setTerm('pune')
    },[])
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
                Search
              </button>
             
            </div>
            
        </div>
      
    )
}

export default Search