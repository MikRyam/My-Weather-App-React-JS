import React from 'react'
import "../styles/CurrentWeather.css";
import { formatToLocalTime, getIcon } from '../functions/weatherFunc';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { faWind, faWater, faTemperatureArrowUp, faTemperatureArrowDown, faTemperatureHalf, faSun } from "@fortawesome/free-solid-svg-icons";


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
          <p className="feels"><span><FontAwesomeIcon icon={faTemperatureHalf} className="weather-icon" /> Feels like</span>{` ${feels_like.toFixed()}`}°</p>
        </div>
        <div className="details-right item">
          <p className="details"><span><FontAwesomeIcon icon={faWater} className="weather-icon" /> Humidity:</span> {humidity}%</p>
          {/* <FontAwesomeIcon icon="fa-regular fa-wind" /> */}
          <p className="details"><span><FontAwesomeIcon icon={faWind} className="weather-icon" /> Wind: </span> {` ${speed.toFixed()}`} km/h</p>
        </div>
      </div>
      <div className="current-weather-bottom">
        <div className="bottom-box-left">
          <p className="details"><span><FontAwesomeIcon icon={faSun} className="weather-icon" /> Rise:</span> { formatToLocalTime(sunrise, timezone, "HH:mm") }</p>
          <p className="details border-left"><span><FontAwesomeIcon icon={faSun} className="weather-icon" /> Set:</span> { formatToLocalTime(sunset, timezone, "HH:mm") }</p>
        </div>
        <div className="bottom-box-right">
          <p className="details border-left"><span><FontAwesomeIcon icon={faTemperatureArrowUp} className="weather-icon" /> High:</span> {`${temp_max.toFixed()}`}°</p>
          <p className="details border-left"><span><FontAwesomeIcon icon={faTemperatureArrowDown} className="weather-icon" /> Low:</span> {`${temp_min.toFixed()}`}°</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;