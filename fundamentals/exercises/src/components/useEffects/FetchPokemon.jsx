import React, { useState, useEffect } from "react";

const FetchPokemon = () => {
  let [imageUrl, setImageurl] = useState(null);
  const url = "https://pokeapi.co/api/v2/pokemon/mankey";
  useEffect(() => {
    async function getPokemon() {
      const respons = await fetch(url);
      const json = await respons.json();
      const imageUrl = json.sprites.other["official-artwork"].front_default;

      setImageurl(imageUrl);
    }
    getPokemon();
  }, []);

  return (
    <div>
      <h1>Mankey</h1>
      <div style={{ height: "400px", width: "400px" }}>
        <img src={imageUrl} />
      </div>
    </div>
  );
};

export default FetchPokemon;
