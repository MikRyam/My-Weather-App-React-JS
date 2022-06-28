import React from 'react'
import "../styles/Forecast.css";


const Forecast = ({title}) => {
  return (
    <div className="forecast-block">
      <div className="forecast-container">
        <div className="forecast-title">
          <h6>{title}</h6>
          <hr />
        </div>        
        <div className="forecast-row">
          <div className="hour-item">
            <p className="day-data-time">Tue, 28 Jun</p>
            <img src="https://openweathermap.org/img/wn/01d@2x.png" alt=""/>
            <p className="forecast-temp">18°</p>
          </div>
          <div className="hour-item">
            <p className="day-data-time">Tue, 28 Jun</p>
            <img src="https://openweathermap.org/img/wn/01d@2x.png" alt=""/>
            <p className="forecast-temp">18°</p>
          </div>
          <div className="hour-item">
            <p className="day-data-time">Tue, 28 Jun</p>
            <img src="https://openweathermap.org/img/wn/01n@2x.png" alt=""/>
            <p className="forecast-temp">18°</p>
          </div>
          <div className="hour-item">
            <p className="day-data-time">Tue, 28 Jun</p>
            <img src="https://openweathermap.org/img/wn/01n@2x.png" alt=""/>
            <p className="forecast-temp">18°</p>
          </div>
          <div className="hour-item">
            <p className="day-data-time">Tue, 28 Jun</p>
            <img src="https://openweathermap.org/img/wn/01n@2x.png" alt=""/>
            <p className="forecast-temp">18°</p>
          </div>
          <div className="hour-item">
            <p className="day-data-time">Tue, 28 Jun</p>
            <img src="https://openweathermap.org/img/wn/01n@2x.png" alt=""/>
            <p className="forecast-temp">18°</p>
          </div>
          <div className="hour-item">
            <p className="day-data-time">Tue, 28 Jun</p>
            <img src="https://openweathermap.org/img/wn/01n@2x.png" alt=""/>
            <p className="forecast-temp">18°</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forecast;