import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    // Fetch the list of Pokémon
    fetch("https://pokeapi.co/api/v2/pokemon?limit=56") // limit to 56 for simplicity
      .then(response => response.json())
      .then(async data => {
        // Fetch details for each Pokémon
        const detailedPokemonList = await Promise.all(data.results.map(async (pokemon) => {
          const response = await fetch(pokemon.url);
          const details = await response.json();
          return {
            name: details.name,
            image: details.sprites.front_default
          };
        }));
        setPokemonList(detailedPokemonList);
      })
      .catch(err => console.log(err));
  }, []);

  return (<>
  <Navbar/>
    <div className='main'>
       {pokemonList.map((pokemon, index) => (
          <div className="card" >
          <img src={pokemon.image} class="card-img-top" alt={pokemon.name}/>
          <div class="card-body">
            <p class="card-text">{pokemon.name}</p>
          </div>
        </div>
        ))}
      
    </div>
    </>
  );
}

export default App;