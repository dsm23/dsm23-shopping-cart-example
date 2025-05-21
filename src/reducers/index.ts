/* eslint-disable */
// @ts-nocheck

import { combineReducers } from "redux";
import { RootState } from "~/app/store";
import cart, * as fromCart from "./cart";
import products, * as fromProducts from "./products";

export default combineReducers({
  cart,
  products,
});

const getAddedIds = (state: RootState) => fromCart.getAddedIds(state.cart);
const getQuantity = (state: RootState, id: number) =>
  fromCart.getQuantity(state.cart, id);
const getProduct = (state: RootState, id: number) =>
  fromProducts.getProduct(state.products, id);

export const getTotal = (state: RootState) =>
  getAddedIds(state)
    .reduce(
      (total, id) =>
        total + getProduct(state, id).price * getQuantity(state, id),
      0,
    )
    .toFixed(2);

export const getCartProducts = (state: RootState) =>
  getAddedIds(state).map((id) => ({
    ...getProduct(state, id),
    quantity: getQuantity(state, id),
  }));
