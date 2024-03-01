import React from "react";

const Location = ({ name, region, country, lat, lon, tz_id, localtime }) => {
 
 
  return (<>
  <div className="row py-3">
           
            <div className="col">
            {name} &nbsp;
              {region}
            
            </div>
              
        <div className="col">Today: {localtime?localtime.slice(0,10):null}  Time: {localtime?localtime.slice(10,):null}</div>
             <div className="col">  Lat: {lat}  Long: {lon}</div>
          
          
        
     
      </div>
  </>
       
   );
};

export default Location;
