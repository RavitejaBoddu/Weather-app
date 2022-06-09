import axios from "axios";
import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import Home from "./Home";

const APIkey = "afac2db61dcfd6200633ee34a0cb2e62";

const Main: React.FC = () => {
  const [city, updateCity] = useState<any>();
  const [weather, updateWeather] = useState();

  const fetchWeather = async () => {
    const weatherData = await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`
      )
      .then((res) => {
        return res.data;
      });
    updateWeather(weatherData);
  };
  return (
    <>
      {weather ? (
        <WeatherInfo weather ={weather} />
      ) : (
        <Home updateCity={updateCity} fetchWeather={fetchWeather} />
      )}

    </>
  );
};

export default Main;
