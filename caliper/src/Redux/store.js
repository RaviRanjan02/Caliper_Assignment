import { legacy_createStore, applyMiddleware, combineReducers } from "redux";

import thunk from "redux-thunk";

import { reducer } from "./ProductReducer/reducer";

import {reducer as ContactReducer}from "./ContactReducer/reducer";



const rootReducer = combineReducers({
  produce: reducer,
  user: ContactReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
