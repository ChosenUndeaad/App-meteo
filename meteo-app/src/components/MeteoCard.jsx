import React, { useEffect } from "react";
import "../style/meteoCard.css";

const MeteoCard = () => {
  //API Key: 5acac74060d7655a3ba8c4c4437a2153
  // URL: https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5acac74060d7655a3ba8c4c4437a2153`;

      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    search("London");
  }, []);

  return (
    <div className='meteo-card'>
      <h1>Previsioni</h1>
      <div className='search-bar'>
        <input type='text' placeholder='Cerca una città ' />
        <button type='button'>Cerca</button>
      </div>

      <img
        src='https://www.mrw.it/wp-content/uploads/2020/12/0iwkf4_1609360688.jpg'
        alt='Icona del tempo'
        className='tempo-icona'
      />
      <p className='temperatura'>16 C</p>
      <p className='luogo'>Città</p>
      <div className='meteo-data'>
        <div className='col'>
          <p>Umidità</p>
          <span>UMI</span>
        </div>
        <div className='col'>
          <p>Vento</p>
          <span>VEN Km/h</span>
        </div>
      </div>
    </div>
  );
};

export default MeteoCard;
