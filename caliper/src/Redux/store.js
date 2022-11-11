import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./ProductReducer/reducer";



const rootReducer = combineReducers({
  produce: reducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
