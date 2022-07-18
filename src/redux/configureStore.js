import { applyMiddleware } from "redux";
import { createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { Reducer, initialState } from "./reducer";

export const ConfigureStore = () => {
   const store = createStore(Reducer, applyMiddleware(thunk, logger));
   return store;
};
