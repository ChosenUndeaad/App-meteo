import React from "react";
import "../style/meteoCard.css";

function MeteoCard() {
  return (
    <div className='meteo'>
      <h1>Meteo</h1>
      <div className='search-bar'>
        <input type='text' placeholder='Cerca una città' />
      </div>
    </div>
  );
}

export default MeteoCard;
