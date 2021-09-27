import React from "react";
import { getPokemon } from "../services/pokemon";
import { useForm } from "./../hooks/useForm";
import PropTypes from "prop-types";

export const Header = ({ setPokemon }) => {
  console.log("Header");

  const { formValues, handlerInputChange } = useForm({ pokeSearch: "" });
  const { pokeSearch } = formValues;

  const handlerSearch = async (e) => {
    e.preventDefault();

    if (!pokeSearch) return;

    const pokemon = await getPokemon(pokeSearch);
    setPokemon(pokemon);
  };

  return (
    <div className="header__content">
      <div className="header__form">
        <form onSubmit={handlerSearch}>
          <input
            className="header__form-input"
            name="pokeSearch"
            onChange={handlerInputChange}
            placeholder="Pokemon Name"
            type="text"
            value={formValues.pokeSearch}
          />
          <button>Search</button>
        </form>
      </div>
    </div>
  );
};

Header.propTypes = {
  setPokemon: PropTypes.func.isRequired,
};
