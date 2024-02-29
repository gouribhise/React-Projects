import React,{useState,useContext} from "react";
import WeatherContext from "../context/WeatherContext";
import Report from "./Report";
const Forecast=({forecastday})=>{
  console.log('what is props:',forecastday)
    const { currentWeather, currentData, location ,dispForeCast} = useContext(WeatherContext);
    const [term, setTerm] = useState("");
 
  
 return(<div className="container">
  <div className="row">
 
  {forecastday?
      
      forecastday.map((item)=>{
     return   <div className="col-lg-2 mx-auto">
      <Report data={item} /></div>
       
      })
        
        :null}
        </div>
 </div>)
      
 
 
 
 
        
      
  
}

export default Forecast