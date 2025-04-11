import { useState } from "react";
import MeteoCard from "./components/MeteoCard";
import MeteoList from "./components/MeteoList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className='app'>
        <MeteoCard />
        <MeteoList />
      </div>
    </>
  );
}

export default App;
