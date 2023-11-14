import React, { Children } from "react";
import { createContext, useContext, useEffect, useState } from "react";
​
​
export const PokeListContext = createContext([]);
​
const PokeProvider = ({ Children }) => {
   const [pokes, setpokes] = useState([]);
  //  const [currPoke, setCurrPoke] = useState(null);
​
  // const pokeArray = useContext(PokeListContext);
  useEffect(() => {
    const FetchAllPokemon = async () => {
      const pokesApi = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      ).then((res) => res.json());
      FetchPokemon(pokesApi.results);
    };
    const FetchPokemon = async (pokesApi) => {
      let urls = [];
      pokesApi.map((elem) => {
        return urls.push(elem.url);
      });
      const pokemonData = await Promise.all(
        urls.map((elem) => {
          return fetch(elem).then((res) => res.json());
        })
      );
      setpokes(pokemonData);
        
      console.log(pokemonData);
    };
    
    FetchAllPokemon();
  }, []);
  console.log(pokes);
    return (
      <PokeListContext.Provider value={pokemonData}>
        {Children}
      </PokeListContext.Provider>
    );
};
export default PokeProvider
​