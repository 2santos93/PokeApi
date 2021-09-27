import React from "react";
import { PropTypes } from "prop-types";
import { Pokemon } from "./Pokemon";
import { NotFound } from "./NotFound";
import { PokemonList } from './PokemonList';

export const Body = ({ pokemon }) => {

  const existPokemon = Object.keys(pokemon).length !== 0;

  return (
    <div className="body__content">
      {existPokemon ? <Pokemon pokemon={pokemon} /> : <NotFound />}

      <PokemonList />
    </div>
  );
};

Body.propTypes = {
  pokemon: PropTypes.object.isRequired,
};
