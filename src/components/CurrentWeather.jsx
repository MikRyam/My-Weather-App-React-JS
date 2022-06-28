import React from 'react'
import "../styles/CurrentWeather.css";
import { formatToLocalTime, getIcon } from '../functions/weatherFunc';

const CurrentWeather = (
  {
    weather: {
      details,
      icon,
      temp,
      temp_min,
      temp_max,
      sunrise,
      sunset,
      speed,
      humidity,
      feels_like,
      timezone,
    },
  }
) => {
  return (
    <div className="current-weather">
      <div className="current-weather-top">
        <div className="weather-description">
          <img src={getIcon(icon)} alt=""/>
          <p className="description item">{details}</p>
        </div>
        <div className="temp item">
          <h1>{`${temp.toFixed()}`}°</h1>
          <p className="feels"><span>Feels like</span>{` ${feels_like.toFixed()}`}°</p>
        </div>
        <div className="details-right item">
          <p className="details"><span>Humidity:</span> {humidity}%</p>
          {/* <FontAwesomeIcon icon="fa-regular fa-wind" /> */}
          <p className="details"><span>Wind:</span> {` ${speed.toFixed()}`} m/s</p>
        </div>
      </div>
      <div className="current-weather-bottom">
        <div className="bottom-box-left">
          <p className="details"><span>Rise:</span> { formatToLocalTime(sunrise, timezone, "HH:mm") }</p>
          <p className="details border-left"><span>Set:</span> { formatToLocalTime(sunset, timezone, "HH:mm") }</p>
        </div>
        <div className="bottom-box-right">
          <p className="details border-left"><span>High:</span> {`${temp_max.toFixed()}`}°</p>
          <p className="details border-left"><span>Low:</span> {`${temp_min.toFixed()}`}°</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;