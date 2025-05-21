/* eslint-disable */
// @ts-nocheck

import { combineReducers } from "redux";
import { ADD_TO_CART, RECEIVE_PRODUCTS } from "../constants/ActionTypes";

type Product = {
  id: number;
  title: string;
  price: number;
  inventory: number;
};

const products = (state: Product, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        inventory: state.inventory - 1,
      };
    default:
      return state;
  }
};

const byId = (state: Record<number, Product> = {}, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        ...action.products.reduce((obj, product) => {
          obj[product.id] = product;
          return obj;
        }, {}),
      };
    default:
      const { productId } = action;
      if (productId) {
        return {
          ...state,
          [productId]: products(state[productId], action),
        };
      }
      return state;
  }
};

const visibleIds = (state: number[] = [], action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.products.map((product) => product.id);
    default:
      return state;
  }
};

export default combineReducers({
  byId,
  visibleIds,
});

export const getProduct = (state, id) => state.byId[id];

export const getVisibleProducts = (state) =>
  state.visibleIds.map((id) => getProduct(state, id));
