import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import App from "./components/App";
import rootReducer from "./reducers";
import "./index.css";

// logger Code
// const logger = function({ dispatch, getState }) {
//   return function(next) {
//     return function(action) {
//       // my middlware
//       console.log('ACTION', action);
//       next(action);
//     };
//   };
// };

const logger = ({ dispatch, getState }) => (next) => (action) => {
  // my middlware
  console.log("ACTION", action);
  next(action);
};

// for thunk
// const thunk = store => next => action => {
//   if (typeof action === 'function') {
//     return action(store.dispatch);
//   }

//   next(action);
// };

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
