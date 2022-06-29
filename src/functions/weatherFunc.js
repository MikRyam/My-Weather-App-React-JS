import axios from 'axios';
import { DateTime } from "luxon";

const myAPI = 'cddb40732e554f8200444d24783241fa';
const baseURL = 'https://api.openweathermap.org/data/2.5';

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(baseURL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: myAPI });

  // return fetch(url).then((res) => res.json()).then((data) => data);
  // const response = axios.get(url);
  // const weatherData = response.data;

  return axios.get(url).then(response => response.data)
};

const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
  };
};

const formatForecastWeather = (data) => {
  let { timezone, daily, hourly } = data;
  daily = daily.slice(1).map((d) => {
    return {
      dt: d.dt,
      title: formatToLocalTime(d.dt, timezone, "ccc, dd LLL"),
      temp: d.temp.day,
      icon: d.weather[0].icon,
    };
  });

  hourly = hourly.slice(1).map((d) => {
    return {
      dt: d.dt,
      title: formatToLocalTime(d.dt, timezone, "HH:mm"),
      temp: d.temp,
      icon: d.weather[0].icon,
    };
  });

  return { timezone, daily, hourly };
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);

  const { lat, lon } = formattedCurrentWeather;

  const formattedForecastWeather = await getWeatherData(
    "onecall", {
    lat,
    lon,
    exclude: "current,minutely,alerts",
    units: searchParams.units,
  }).then(formatForecastWeather);

  return { ...formattedCurrentWeather, ...formattedForecastWeather };
  // return formattedCurrentWeather;
};

const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const getIcon = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;


export default getFormattedWeatherData;

export { formatToLocalTime, getIcon };

// export default getWeatherData;