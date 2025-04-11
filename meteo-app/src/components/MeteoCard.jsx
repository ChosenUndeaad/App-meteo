import React, { useEffect, useState, useRef } from "react";
import "../style/meteoCard.css";

const MeteoCard = () => {
  //API Key: 5acac74060d7655a3ba8c4c4437a2153
  // URL: https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(null);

  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=5acac74060d7655a3ba8c4c4437a2153`;

      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: data.weather[0].icon,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    search("Rome");
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const iconUrl = `https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`;

  return (
    <div className='meteo-card'>
      <h1>Che tempo fa?</h1>
      <div className='search-bar'>
        <input type='text' placeholder='Cerca una città ' ref={inputRef} />
        <button type='button' onClick={() => search(inputRef.current.value)}>
          Cerca
        </button>
      </div>
      <img src={iconUrl} alt='Icona del tempo' className='tempo-icona' />
      <p className='temperatura'>{weatherData.temperature}°C</p>{" "}
      <p className='luogo'>{weatherData.location}</p>
      <div className='meteo-data'>
        <div className='col'>
          <p>Umidità</p>
          <span>{weatherData.humidity}</span>
        </div>
        <div className='col'>
          <p>Vento</p>
          <span>{weatherData.windSpeed} Km/h</span>
        </div>
      </div>
    </div>
  );
};

export default MeteoCard;
