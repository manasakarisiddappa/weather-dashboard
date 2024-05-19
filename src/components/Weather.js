// src/components/Weather.js
import React from "react";
import { WiDaySunny, WiRain, WiSnow, WiCloudy } from "react-icons/wi";

const Weather = ({ weatherData, userGroup }) => {
  const { main, weather, wind, name } = weatherData;

  const getWeatherIcon = (main) => {
    switch (main) {
      case "Clear":
        return <WiDaySunny />;
      case "Rain":
        return <WiRain />;
      case "Snow":
        return <WiSnow />;
      case "Clouds":
        return <WiCloudy />;
      default:
        return <WiDaySunny />;
    }
  };

  return (
    <div className="weather-container">
      <h2>{name}</h2>
      <div className="weather-icon">{getWeatherIcon(weather[0].main)}</div>
      <p>{weather[0].description}</p>
      <h3>{main.temp} °C</h3>
      <p>Humidity: {main.humidity}%</p>
      {userGroup === "farmer" && (
        <div>
          <p>Wind Speed: {wind.speed} m/s</p>
          <p>Pressure: {main.pressure} hPa</p>
        </div>
      )}
      {userGroup === "traveler" && (
        <div>
          <p>Visibility: {weatherData.visibility / 1000} km</p>
          <p>Wind Speed: {wind.speed} m/s</p>
        </div>
      )}
      {userGroup === "event-planner" && (
        <div>
          <p>Wind Speed: {wind.speed} m/s</p>
          <p>Cloudiness: {weatherData.clouds.all}%</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
