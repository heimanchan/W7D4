import React from 'react';
import { combineReducers } from 'redux';
// import loadingReducer from './loading_reducer';

const uiReducer = combineReducers({
  loading: (state = {}, action) => state
});

export default uiReducer;
