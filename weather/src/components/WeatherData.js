import React,{useContext} from "react";
import WeatherContext from "../context/WeatherContext";

const WeatherData = (props) => {
  const { currentWeather, currentData, location ,dispForeCast} = useContext(WeatherContext);

   return (
    <div className="container py-4">
        <div className="row">
        
    
      <div className="col">
      {props.condition?props.condition.text:null}
            <img src={props.condition?props.condition.icon:null}/>
      </div>
        
      <div className="col">
      
  <div>    Centigrade
            {props.temp_c}</div>
          
          
         <div>   Farhenheit
            {props.temp_f}</div>
          
       <div>       
            feelslike_c
            {props.feelslike_c}</div>
            <div>
          
          
            feelslike_f
             {props.feelslike_f}</div>
          
      </div>
        
      <div className="col">
      
            <div>Wind
            {props.wind_kph}
          </div>

          <div>
            Wind Degree
             {props.wind_degree}
          </div>
          <div>
            <div>Wind Direction</div>
            <div> {props.wind_dir}</div>
          </div>
      </div>
        
      <div className="col">
      <div>uv
             {props.uv}
          </div>
          <div>
            Humidity
             {props.humidity}
          </div>
 
          <div>
          cloud
             {props.cloud}
          </div>
      </div>
        
      <div className="col">
      <div>Pressure in mb
            {props.pressure_mb}
          </div>
         
         
          <div>
            Pressure 
            {props.pressure_in}
          </div>
         
      </div>
      </div>
    
    </div>
  );
};

export default WeatherData;
