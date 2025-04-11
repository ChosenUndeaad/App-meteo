import React from "react";
import "../style/navbar.css";

const Navbar = () => {
  return (
    <div className='topnav'>
      <a className='active' href='#home'>
        Home
      </a>
      <a href='#news'>Previsioni</a>
      <a href='#contact'>Contattaci</a>
      <a href='#about'>Chi siamo</a>
    </div>
  );
};

export default Navbar;
