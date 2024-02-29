import React from "react";

const Location = ({ name, region, country, lat, lon, tz_id, localtime }) => {
  return (<>
  <div className="row">
           
            <div className="col">
            {name} &nbsp;
              {region}
            
            </div>
              
        <div className="col">{localtime}</div>
             <div className="col">  {lat} - {lon}</div>
          
          
        
     
      </div>
  </>
       
   );
};

export default Location;
