import React from "react";
import PokeProvider from "./components/PokeProvider"; // Adjust the import statement based on your file structure
import PokeList from "./components/PokeList";

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
