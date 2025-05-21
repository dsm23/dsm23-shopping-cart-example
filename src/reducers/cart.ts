/* eslint-disable */
// @ts-nocheck

import {
  ADD_TO_CART,
  CHECKOUT_FAILURE,
  CHECKOUT_REQUEST,
} from "../constants/ActionTypes";

type CartState = {
  addedIds: number[];
  quantityById: Record<number, number>;
};

const initialState: CartState = {
  addedIds: [],
  quantityById: {},
};

const addedIds = (state: CartState = initialState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.indexOf(action.productId) !== -1) {
        return state;
      }
      return [...state, action.productId];
    default:
      return state;
  }
};

const quantityById = (state: CartState = initialState.quantityById, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { productId } = action;
      return { ...state, [productId]: (state[productId] || 0) + 1 };
    default:
      return state;
  }
};

export const getQuantity = (state: CartState, productId: number) =>
  state.quantityById[productId] || 0;

export const getAddedIds = (state) => state.addedIds;

const cart = (state: CartState = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return initialState;
    case CHECKOUT_FAILURE:
      return action.cart;
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action),
      };
  }
};

export default cart;
