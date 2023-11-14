import PokeList from "./components/PokeList"
import { useState, useEffect, createContext } from "react";
import "./App.src.css";
import PokeProvider from "./components/PokeContext";
const App = () => {
  return (
    <PokeProvider>
      <div className="App h-full">
        <div className="bodyDiv h-full flex justify-center items-center">
         <PokeList />
        </div>
      </div>
    </PokeProvider>
  );
};
export default App;