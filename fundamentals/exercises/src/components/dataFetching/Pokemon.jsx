import React, { useEffect, useState } from "react";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState(null);
  const [first, setfirst] = useState(false);

  useEffect(() => {
    const URL = "https://pokeapi.co/api/v2/pokemon/pikachu";
    try {
      fetch(URL)
        .then((res) => res.json())
        .then((json) => {
          setPokemon(json);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      Pokemon
      {pokemon && <h2>{pokemon.name}</h2>}
      <img src={pokemon?.sprites.front_default} alt="" />
      <p>{pokemon?.weight}</p>
    </div>
  );
};

export default Pokemon;
