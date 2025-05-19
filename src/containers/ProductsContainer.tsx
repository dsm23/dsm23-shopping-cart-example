/* eslint-disable */
// @ts-nocheck

import type { FunctionComponent } from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions";
import ProductItem from "../components/ProductItem";
import ProductsList from "../components/ProductsList";
import { getVisibleProducts } from "../reducers/products";

type Props = {
  products: {
    id: number;
    title: string;
    price: number;
    inventory: number;
  }[];
  addToCart: (id: number) => void;
};

const ProductsContainer: FunctionComponent<Props> = ({
  products,
  addToCart,
}) => (
  <ProductsList title="Products">
    {products.map((product) => (
      <ProductItem
        key={product.id}
        product={product}
        onAddToCartClicked={() => addToCart(product.id)}
      />
    ))}
  </ProductsList>
);

const mapStateToProps = (state) => ({
  products: getVisibleProducts(state.products),
});

export default connect(mapStateToProps, { addToCart })(ProductsContainer);
