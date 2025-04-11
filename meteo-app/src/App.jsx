import { useState } from "react";
import MeteoCard from "./components/MeteoCard";
import MeteoList from "./components/MeteoList";

function App() {
  return (
    <>
      <div className='app'>
        <MeteoList />
        <MeteoCard />
      </div>
    </>
  );
}

export default App;
