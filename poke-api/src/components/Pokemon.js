import React from "react";
import { PropTypes } from "prop-types";

export const Pokemon = ({ pokemon }) => {
  const { name, types, sprites, abilities } = pokemon;
  console.log(pokemon);
  return (
    <div className="body__pokemon">
      <div className="body__pokemon-card">
        <div className="body__pokemon-card-header">
          <img src={sprites.front_default} />
          <img src={sprites.back_default} />
          <h1>{name.toUpperCase()}</h1>
        </div>
        <div className="body__pokemon-card-body">
          <div>
            <h1>Types:</h1>
            <hr />
            {types.map(({ type }) => (
              <h2>{type.name}</h2>
            ))}
          </div>
          <div>
            <h1>Abilities:</h1>
            <hr />
            {abilities.map(({ ability }) => (
              <h2>{ability.name}</h2>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Pokemon.propTypes = {
  pokemon: PropTypes.object.isRequired,
};
