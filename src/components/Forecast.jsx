import React from 'react'
import "../styles/Forecast.css";
import ForecastItem from './ForecastItem';


const Forecast = ({ title, items }) => {
  return (
    <div className="forecast-block">
      <div className="forecast-container">
        <div className="forecast-title">
          <h6>{title}</h6>
          <hr />
        </div>        
        <div className="forecast-row">
          {items.map(item =>
            <ForecastItem key={item.dt} item={item} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Forecast;