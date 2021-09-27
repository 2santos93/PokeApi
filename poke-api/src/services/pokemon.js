export const getPokemon = async (name = '') => {
  try{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name?.toLowerCase()}`);
    const data = await response.json();
    return data
  }catch(e){
    return {};
  }
}

export const getPokemons = async (url = 'https://pokeapi.co/api/v2/pokemon/') => {
  try{
    const response = await fetch(`${url}`);
    const data = await response.json();
    return data;
  }catch(e){
    return [];
  }
}