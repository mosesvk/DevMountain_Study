import React, { createContext, useContext, useEffect, useState } from "react";

export const PokeListContext = createContext([]);

const PokeProvider = ({ children }) => {
  const [pokes, setPokes] = useState([]);

  useEffect(() => {
    const fetchAllPokemon = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
        const data = await response.json();
        const pokemonUrls = data.results.map((pokemon) => pokemon.url);

        const pokemonData = await Promise.all(
          pokemonUrls.map((url)=> fetch(url).then((res) => res.json()))
        );

        setPokes(pokemonData);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    };

    fetchAllPokemon();
  }, []);

  // console.log(pokes)
  return (
    <PokeListContext.Provider value={pokes}>
      {children}
    </PokeListContext.Provider>
  );
};

export default PokeProvider;
