import "../App.src.css";
import PokeCards from "./PokeCards";
import Dex from "./Dex";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PokeContext } from "./PokeContext";
import { useContext } from "react";

 const PokeList = () => {
  
 const PokeListCom = () => {
    const pokes = useContext(PokeContext);
    console.log(pokes)
    return (
      <div className="listBody lg:w-3/4">
        <div className="screenDiv w-11/12 md:w-4/5 xl:w-3/4">
          {pokes.map((elem) => {
            let pokeImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${elem.id}.png`;
            return <PokeCards elem={elem} img={pokeImg} i={elem.id} />
          })}
        </div>
      </div>
    );
  };
  return (
    <Router>
      <Routes>
        <Route path="/" Component={PokeListCom} /> 
        <Route path="Dex" element={<Dex />} />
      </Routes>
    </Router>
  );
}
​
export default PokeList