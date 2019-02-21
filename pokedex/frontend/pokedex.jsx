import React from 'react';
import ReactDOM from 'react-dom';
// import fetchAllPokemon from './util/api_util';
import { receiveAllPokemon } from './actions/pokemon_actions';
import configureStore from './store/store';
import { requestAllPokemon } from './actions/pokemon_actions';

document.addEventListener("DOMContentLoaded", () => {
  // window.fetchAllPokemon = fetchAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.requestAllPokemon = requestAllPokemon;

  const root = document.getElementById("root");
  ReactDOM.render(<h1>Pokedex</h1>, root)
})