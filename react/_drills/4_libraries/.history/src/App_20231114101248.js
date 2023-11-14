import PokeList from './PokeContext'
import { useState, useEffect, createContext } from "react";
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