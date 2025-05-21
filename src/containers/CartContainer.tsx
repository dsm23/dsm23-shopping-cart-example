/* eslint-disable */
// @ts-nocheck

import type { FunctionComponent } from "react";
import { useAppDispatch, useAppSelector } from "~/app/hooks";
import { checkout } from "../actions";
import Cart from "../components/Cart";
import { getCartProducts, getTotal } from "../reducers";

type Product = {
  id: number;
  title: string;
  price: number;
  quantity: number;
};

type Props = {
  products: Product[];
  total: string;
  checkout: (products: Product[]) => void;
};

const CartContainer: FunctionComponent = () => {
  const dispatch = useAppDispatch();

  const products = useAppSelector(getCartProducts);
  const total = useAppSelector(getTotal);

  return (
    <Cart
      products={products}
      total={total}
      onCheckoutClicked={() => dispatch(checkout(products))}
    />
  );
};

export default CartContainer;
