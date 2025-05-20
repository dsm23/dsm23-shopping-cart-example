import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import cart from "~/reducers/cart";
import products from "~/reducers/products";

const rootReducer = combineReducers({
  cart,
  products,
});

export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
