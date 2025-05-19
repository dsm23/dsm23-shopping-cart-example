/* eslint-disable */
// @ts-nocheck

import type { FunctionComponent } from "react";
import { connect } from "react-redux";
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

const CartContainer: FunctionComponent<Props> = ({
  products,
  total,
  checkout,
}) => (
  <Cart
    products={products}
    total={total}
    onCheckoutClicked={() => checkout(products)}
  />
);

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state),
});

export default connect(mapStateToProps, { checkout })(CartContainer);
