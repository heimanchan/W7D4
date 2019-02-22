import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { requestAllPokemon, requestSinglePokemon } from './actions/pokemon_actions';
import { selectAllPokemon } from './reducers/selectors';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  // window.receiveAllPokemon = receiveAllPokemon;
  const store = configureStore();
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.requestAllPokemon = requestAllPokemon;
  // window.selectAllPokemon = selectAllPokemon;
  // window.store = store;
  window.requestSinglePokemon = requestSinglePokemon;

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
})