import React, { useState } from "react";
import "./weather.css";

const api = {
  key: "00cd42c6268129b092b0ed553896bb46",
  base: "https://api.openweathermap.org/data/2.5/",
};

// fetch API
const Weather = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  // function to write full month day
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = daysOfWeek[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`;
  };
  return (
    <div>
      <div className={(typeof weather.main != "undefined")?((weather.main.temp > 16)? 
      'app warm' :'app' ):'app'}>

      </div>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={search}
          />
          </div>
          {(typeof weather.main != "undefined")?(
          <div>
            <div className="location-box">
              {/* Location */}
              <div className="location">
                {weather.name},{weather.sys.country}
              </div>
              {/* Date */}
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            {/* Temperature */}
            <div className="weather-box">
              <div className="temp">
                  {Math.round(weather.main.temp)}℃ 
              </div>
                <div className="weather">
                  {weather.weather[0].main}
                </div>
            </div>
          </div>


          ): (' ')}
        
      </main>
    </div>
  );
};

export default Weather;
