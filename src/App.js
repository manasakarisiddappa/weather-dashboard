// src/App.js
import React, { useState } from "react";
import axios from "axios";
import Weather from "./components/Weather";
import "./App.css";

const App = () => {
  const [city, setCity] = useState("");
  const [userGroup, setUserGroup] = useState("event-planner");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const apiKey = "729aef5e24d5a247bca27b80590a910c"; // Replace with your OpenWeatherMap API key

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      setWeatherData(response.data);
      setError("");
    } catch (err) {
      setError("City not found");
      setWeatherData(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      fetchWeather();
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Forecast</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <select
            value={userGroup}
            onChange={(e) => setUserGroup(e.target.value)}
          >
            <option value="event-planner">Event Planner</option>
            <option value="farmer">Farmer</option>
            <option value="traveler">Traveler</option>
          </select>
          <button type="submit">Get Weather</button>
        </form>
        {error && <p className="error">{error}</p>}
        {weatherData && (
          <>
            <Weather weatherData={weatherData} userGroup={userGroup} />
          </>
        )}
      </header>
    </div>
  );
};

export default App;
