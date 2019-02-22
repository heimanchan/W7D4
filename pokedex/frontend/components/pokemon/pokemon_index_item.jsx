import React from 'react';
import { Link } from 'react-router-dom';

const pokemonIndexItem = (props) => {
  const poke = props.pokemon;
  return (
    
    <li> 
      <Link to={`/pokemon/${poke.id}`}>
        {poke.name}
      </Link>
      <img src={poke.image_url} width="50px" height="50px"></img>
    </li>

  );
};

export default pokemonIndexItem