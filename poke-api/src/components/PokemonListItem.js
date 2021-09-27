import React from 'react'

export const PokemonListItem = ({pokemon: {name}}) => {
  return (
    <div className='body__pokemon-list-item'>
      <h2>{name}</h2>
    </div>
  )
}
