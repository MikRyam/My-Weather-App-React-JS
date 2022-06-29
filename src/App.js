// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import Forecast from './components/Forecast';
import CurrentWeather from './components/CurrentWeather';
import TimeAndLocation from './components/TimeAndLocation';
import Input from './components/Input';
import TopButtons from './components/TopButtons';
import getFormattedWeatherData from './functions/weatherFunc';


const App = () => {

  // const [query, setQuery] = useState({ q: "Moscow" });
  const [query, setQuery] = useState(null);
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  
  useEffect(() => {
    if (query === null) {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
              let lat = position.coords.latitude;
              let lon = position.coords.longitude;
              setQuery({lat, lon});
      });
    }

    }
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition((position) => {
    //     let lat = position.coords.latitude;
    //     let lon = position.coords.longitude;
    //        setLatitude(position.coords.latitude);
    //        setLongitude(position.coords.longitude);
    //     setQuery({lat, lon});
    //   });
    // }

    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        console.log(data);
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);



  // const fetchWeather = async () => {
  //   const data = await getFormattedWeatherData({q: 'London'});
  //   console.log(data);
  // };

  // fetchWeather();

  
  return (
    <div className="App">
      <TopButtons setQuery={setQuery} />
      <Input setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <CurrentWeather weather={weather} />
          <Forecast title="HOURLY FORECAST" items={weather.hourly} />
          <Forecast title="DAILY FORECAST" items={weather.daily} />
        </div>
      )}

    </div>
  );
};

export default App;
