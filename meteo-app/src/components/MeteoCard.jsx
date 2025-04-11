import React from "react";
import "../style/meteoCard.css";

const MeteoCard = () => {
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
      </div>
    </div>
  );
};

export default MeteoCard;
