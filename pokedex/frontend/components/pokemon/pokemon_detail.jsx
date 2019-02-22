import React from 'react';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  render() {
    if (this.props.pokemon === undefined) return null;
    return (
      <ul>
        <li>{this.props.pokemon.name}</li>
        <li><img src={this.props.pokemon.image_url}></img></li>
      </ul>
    )
  }
}

export default PokemonDetail;