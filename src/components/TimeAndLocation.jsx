import React from 'react'
import "../styles/TimeAndLocation.css";
import { formatToLocalTime } from '../functions/weatherFunc.js';


const TimeAndLocation = ({ weather: { dt, timezone, name, country } }) => {
  return (
    <div className="TimeAndLocation">
      <div className="dateAndTime">
       <p>{ formatToLocalTime(dt, timezone, "cccc, dd LLL yyyy") }</p>
       <p>Local Time: { formatToLocalTime(dt, timezone, "HH:mm") }</p>
      </div>
      <div className="location">       
       <h2>{name}, {country}</h2>
      </div>
    </div>
  )
}

export default TimeAndLocation;