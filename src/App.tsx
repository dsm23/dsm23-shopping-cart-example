/* eslint-disable */
// @ts-nocheck

import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import { thunk } from "redux-thunk";
import { getAllProducts } from "./actions";
import AppImplementation from "./containers/App";
import reducer from "./reducers";

const middleware = [thunk];
if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}

const store = createStore(reducer, applyMiddleware(...middleware));

store.dispatch(getAllProducts());

const App = () => (
  <Provider store={store}>
    <AppImplementation />
  </Provider>
);

export default App;
