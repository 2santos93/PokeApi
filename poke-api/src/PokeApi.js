import React, { useState } from "react";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";

export const PokeApi = () => {
  const [pokemon, setPokemon] = useState({});

  return (
    <>
      <Header setPokemon={setPokemon} />
      <Body pokemon={pokemon} />
      <Footer />
    </>
  );
};
