import React from "react";
import { useState, useEffect } from "react";
import ThirdStyle from "./Thirdel.module.css";

function Thirdel() {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState("New York");
  const [name, setName] = useState("");
  const [iconcode, seticon] = useState("10d");

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  const fetchWeather = async (cityName) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );
      const data = await response.json();
      if (data.cod === 200) {
        setWeather(data);
      } else {
        alert("City not found");
      }
    } catch (err) {
      console.error("Error fetching weather data:", err);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    let iconcode = weather.weather[0].icon;
    if (name) {
      setCity(name);
      seticon(iconcode);
      setName("");
    }
  };
  return (
    <div className={ThirdStyle.weatherCont}>
      <h1 className={ThirdStyle.weatherTitle}>Weather Today</h1>
      <div className={ThirdStyle.resultCont}>
        <form onSubmit={handleSearch} className={ThirdStyle.searchBox}>
          {/* TODO: you can use searchRef and remove onchagne */}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Search for a city..."
          />
          <button type="submit">Search</button>
        </form>
        {weather && (
          <div className={ThirdStyle.weatherInfo}>
            <h2 className={ThirdStyle.weatherText}>{weather.name}</h2>
            <div className={ThirdStyle.mainInfo}>
              <p>{weather.weather[0].description}</p>
              <img
                src={`http://openweathermap.org/img/w/${iconcode}.png`}
                alt={weather.weather[0].description}
              />
            </div>
            <div>
              <h3>{Math.round(weather.main.temp)}°C</h3>
              <p>Humidity: {weather.main.humidity}%</p>
              <p>Wind Speed: {weather.wind.speed} m/s</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Thirdel;
