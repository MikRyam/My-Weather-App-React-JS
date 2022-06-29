import React from 'react';
import "../styles/ForecastItem.css";
import { getIcon } from '../functions/weatherFunc';

const ForecastItem = ({item}) => {
  return (
    <div className="hour-item">
      <p className="day-date-time">{item.title}</p>
      <img src={getIcon(item.icon)} alt=""/>
      <p className="forecast-temp">{`${item.temp.toFixed()}`}°</p>
    </div>
  );
};

export default ForecastItem;