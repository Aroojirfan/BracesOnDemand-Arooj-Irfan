import React from "react";
import "../App.css";

const ShowWeather = (props) => {
  const { icon, temp, city, country, feels, humidity, pressure, wind } = props;
  return (
    <>
      <div className="weather">
        <div className="weatherIcon">
          <img
            style={{ width: "150px" }}
            src={`http://openweathermap.org/img/w/${icon}.png`}
          />
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}°C</span>
          </div>

          <div className="description">
            <div className="weatherCondition">{props.descp}</div>
            <div className="place">
              {city}, {country}
            </div>
          </div>
        </div>
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                feels_like <br />
                {feels}°C
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                Humidity <br />
                {humidity}%
              </p>
            </div>
          </div>
          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                Pressure <br />
                {pressure}
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                speed <br />
                {wind}km/hr
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowWeather;
