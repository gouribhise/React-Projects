import React,{useState,useContext} from "react";
import WeatherContext from "../context/WeatherContext";
const Forecast=({forecastday})=>{
  console.log('what is props:',forecastday)
    const { currentWeather, currentData, location ,dispForeCast} = useContext(WeatherContext);
    const [term, setTerm] = useState("");
   return<> {forecastday?
      
    forecastday.map((item)=>{
      return <>
      {item.date}
      <p>{item.day.maxtemp_c}</p>
      </>
    })
      
      :null
    
    }
    </>
 
 
        
      
  
}

export default Forecast