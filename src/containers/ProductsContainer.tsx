/* eslint-disable */
// @ts-nocheck

import type { FunctionComponent } from "react";
import { useAppDispatch, useAppSelector } from "~/app/hooks";
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

const ProductsContainer: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) =>
    getVisibleProducts(state.products),
  );

  return (
    <ProductsList title="Products">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onAddToCartClicked={() => dispatch(addToCart(product.id))}
        />
      ))}
    </ProductsList>
  );
};

export default ProductsContainer;
