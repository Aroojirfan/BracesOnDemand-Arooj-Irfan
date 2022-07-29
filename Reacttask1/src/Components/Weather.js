import React, { useState, useEffect } from "react";
import ShowWeather from "./ShowWeather";
import "../App.css";
import axios from "axios";

const Weather = () => {
 
  const [inputCity, setInputCity] = useState("Lahore");
  const [weather, setWeather] = useState("");
  const getWeather = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;

      const req = axios.get(url);
      const res = await req;
      setWeather({
        descp: res.data.weather[0].description,
        icon: res.data.weather[0].icon,
        temp: res.data.main.temp,
        feels: res.data.main.feels_like,
        city: res.data.name,
        humidity: res.data.main.humidity,
        pressure: res.data.main.pressure,
        country: res.data.sys.country,
        wind: res.data.wind.speed,
      });
      console.log(weather.temp);
      console.log(res);
    } catch (error) {
      console.log(error);
      alert("Enter valid city name!!");
    }
  };

  useEffect(() => {
    getWeather();
  }, []);
  return (
    <>
      <div className="container">
        <div className="search">
          <input
            type="search"
            placeholder="Enter city name..."
            id="search"
            value={inputCity}
            onChange={(e) => setInputCity(e.target.value)}
            className="searchTerm"
          />

          <button className="searchButton" type="button" onClick={getWeather}>
            Search
          </button>
        </div>
      </div>
      <ShowWeather {...weather} />
    </>
  );
};

export default Weather;
