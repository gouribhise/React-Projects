import React from "react";

const Current = (props) => {
  return (
    <div className="container">
      <div className="row">
        <table>
          <tr>
            <th>Centigrade</th>
            <td>{props.temp_c}</td>
          </tr>
          <tr>
            <th>Farhenheit</th>
            <td>{props.temp_f}</td>
          </tr>
          <tr>
            <th>Wind</th>
            <td>{props.wind_kph}</td>
          </tr>

          <tr>
            <th>Wind Degree</th>
            <td> {props.wind_degree}</td>
          </tr>
          <tr>
            <th>Wind Direction</th>
            <td> {props.wind_dir}</td>
          </tr>
          <tr>
            <th>W</th>
            <td> {props.W}</td>
          </tr>
          <tr>
            <th>Pressure in mb</th>
            <td>{props.pressure_mb}</td>
          </tr>
          <tr>
            <th>Pressure </th>
            <td>{props.pressure_in}</td>
          </tr>
          <tr>
            <th>Precip</th>
            <td> {props.precip_mm}</td>
          </tr>
          <tr>
            <th>Humidity</th>
            <td> {props.precip_in}</td>
          </tr>
          <tr>
            <th></th>
            <td> {props.humidity}</td>
          </tr>
          <tr>
            <th>cloud</th>
            <td> {props.cloud}</td>
          </tr>
          <tr>
            <th>feelslike_c</th>
            <td>{props.feelslike_c}</td>
          </tr>
          <tr>
            <th>feelslike_f</th>
            <td> {props.feelslike_f}</td>
          </tr>
          <tr>
            <th>vis_km</th>
            <td> {props.vis_km}</td>
          </tr>
          <tr>
            <th>vis-miles</th>
            <td> {props.vis_miles}</td>
          </tr>
          <tr>
            <th>uv</th>
            <td> {props.uv}</td>
          </tr>
          <tr>
            <th>gust_mph</th>
            <td> {props.gust_mph}</td>
          </tr>
          <tr>
            <th>gust_kph</th>
            <td> {props.gust_kph}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Current;
