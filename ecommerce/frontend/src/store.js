import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = combineReducers({});

const initialState = {};

const middleware = [thunk];
const store = configureStore(
  { reducer: reducers },
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
