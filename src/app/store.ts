import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import cart from "~/reducers/cart";
import products from "~/reducers/products";

const logger = createLogger({
  collapsed: true,
});

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

type AppStore = ReturnType<typeof setupStore>;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore["dispatch"];
