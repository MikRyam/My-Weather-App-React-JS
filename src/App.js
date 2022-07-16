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
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');  
  
  useEffect(() => {
    if (query === null) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          let lat = position.coords.latitude;
          let lon = position.coords.longitude;
          setQuery({lat, lon});
          setMessage(''); 
        });
      } else {
        setMessage('Geolocation is not supported by your browser');
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
      setMessage('');     
      setIsLoading(true); 
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        console.log(data);
        setWeather(data);
        setMessage('');
        setIsLoading(false);
      }).catch(errors => {
        if (errors.code === "ERR_BAD_REQUEST") {
          setMessage('City Not Found');
          setIsLoading(false);
        }
        
        console.log(errors)
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
      <Input setQuery={setQuery} units={units} setUnits={setUnits} isLoading={isLoading} setIsLoading={setIsLoading} message={message} setMessage={setMessage}/>
      
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
