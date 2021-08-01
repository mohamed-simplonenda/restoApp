// import {createStore, applyMiddleware , combineReducers} from "redux";
// import thunk from "redux-thunk";
// import {platReducer} from "./reducers/reducer"
// import {commandeReducer} from "./reducers/reducer"

// const Reducers = combineReducers({

//     menustore: platReducer
//     // commandeStore:commandeReducer
  
  
//   });

// const store = createStore(platReducer,applyMiddleware(thunk));

// export default store


// store

import { createStore, applyMiddleware,compose } from "redux";
import { rootReducer } from "./reducers/index";
import thunk from "redux-thunk";

const middleWare = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleWare))
);


export default store;

