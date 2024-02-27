import React from "react";

const Location = ({ name, region, country, lat, lon, tz_id, localtime }) => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col">
          <div>
            <h6>
              {name} &nbsp;
              {region}
            </h6>
            {lat} - {lon}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">{localtime}</div>
      </div>
    </div>
  );
};

export default Location;
