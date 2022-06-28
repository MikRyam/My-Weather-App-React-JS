// import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import React, { useEffect, useState } from 'react';

import './App.css';
import Forecast from './components/Forecast';
import CurrentWeather from './components/CurrentWeather';
import TimeAndLocation from './components/TimeAndLocation';
import Input from './components/Input';
import TopButtons from './components/TopButtons';
import getFormattedWeatherData from './functions/weatherFunc';


const App = () => {

  const [query, setQuery] = useState({ q: "Moscow" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      // const message = query.q ? query.q : "current location.";

      // toast.info("Fetching weather for " + message);

      await getFormattedWeatherData({ ...query, units }).then((data) => {
        // toast.success(
        //   `Successfully fetched weather for ${data.name}, ${data.country}.`
        // );

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


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
       
//       </header>
//     </div>
//   );
// }

// export default App;
