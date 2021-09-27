import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getPokemons } from "../services/pokemon";
import { PokemonListItem } from "./PokemonListItem";

export const PokemonList = () => {
  const [pokemonData, setPokemonData] = useState({});

  const { results: pokemons, previous, next, count } = pokemonData;
  console.log(pokemonData);

  useEffect(() => {
    getPokemons().then((pokemonList) => {
      setPokemonData(pokemonList);
    });
  }, []);

  const prevHandler = async () => {
    setPokemonData(await getPokemons(previous));
  };

  const nextHandler = async () => {
    setPokemonData(await getPokemons(next));
  };

  return (
    <div className="body__pokemon-list">
      <div className="body__pokemon-list-content">
        {pokemons &&
          pokemons.map((pokemon, index) => (
            <PokemonListItem key={index} pokemon={pokemon}></PokemonListItem>
          ))}
      </div>

      <div>
        {previous && <button onClick={prevHandler}> Prev </button>}
        {next && <button onClick={nextHandler}> Next </button>}
      </div>
    </div>
  );
};
