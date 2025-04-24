import React, { useEffect, useState } from "react";

const Pokemon = () => {
  const [pokemonPage, setPokemonPage] = useState({
    next: null,
    previous: null,
  });

  const [pokemonList, setPokemonList] = useState([]);

  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPokemonPage("https://pokeapi.co/api/v2/pokemon/?limit=5&offset=0");
  }, []);

  const fetchPokemonPage = (url) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response.json();
      })
      .then(async (data) => {
        setPokemonPage({ next: data.next, previous: data.previous });

        const details = await Promise.all(
          data.results.map((pokemon) =>
            fetch(pokemon.url).then((res) => res.json())
          )
        );

        setPokemonList(details);
        setError(null);
        console.log(pokemonList);
      })
      .catch((error) => {
        console.log("fetch error", error);
        setError("Failed to fetch Pokémon.");
      });
  };

  console.log(pokemonList);

  return (
    <>
      <nav>
        <img src="./Pokemon-Logo.png" alt="" />
      </nav>
      <div className="page">
        {error && <p>{error}</p>}
        {pokemonList.length > 0
          ? pokemonList.map((item, index) => (
              <div key={index} className="card">
                <h4>{item.name}</h4>
                <img src={item.sprites.front_default} alt={item.name} />
              </div>
            ))
          : !error && <div className="loader"></div>}
      </div>
      {pokemonPage.previous && (
        <button onClick={() => fetchPokemonPage(pokemonPage.previous)}>
          Prev
        </button>
      )}
      {pokemonPage.next && (
        <button onClick={() => fetchPokemonPage(pokemonPage.next)}>Next</button>
      )}
    </>
  );
};

export default Pokemon;
