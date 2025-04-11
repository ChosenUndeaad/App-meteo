import React, { useEffect, useState } from "react";
import "../style/meteoList.css";

const MeteoList = () => {
  const cities = ["Rome", "Paris", "London", "New York", "Tokyo"];
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchWeather = async () => {
      const key = "5acac74060d7655a3ba8c4c4437a2153";

      const fetchedData = await Promise.all(
        cities.map(async (city) => {
          try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`;
            const response = await fetch(url);
            const data = await response.json();

            if (data.cod !== 200) throw new Error(data.message);

            return {
              name: data.name,
              temperature: Math.floor(data.main.temp),
              icon: data.weather[0].icon,
            };
          } catch (error) {
            console.error("Errore nel fetch per", city, error.message);
            return null;
          }
        })
      );

      setWeatherData(fetchedData.filter(Boolean));
    };

    fetchWeather();
  }, []);

  return (
    <div className='meteo-list'>
      <div className='card-container'>
        {weatherData.map((city, index) => (
          <div className='city-card' key={index}>
            <p>{city.name}</p>
            <img
              src={`https://openweathermap.org/img/wn/${city.icon}@2x.png`}
              alt={`Icona meteo ${city.name}`}
              className='tempo-icona'
            />
            <p className='temperatura'>{city.temperature}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeteoList;
