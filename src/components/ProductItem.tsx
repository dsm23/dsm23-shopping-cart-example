import type { ButtonHTMLAttributes, FunctionComponent } from "react";
import Product from "./Product";

type Props = {
  product: {
    title: string;
    price: number;
    inventory: number;
  };
  onAddToCartClicked: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
};

const ProductItem: FunctionComponent<Props> = ({
  product,
  onAddToCartClicked,
}) => (
  <div style={{ marginBottom: 20 }}>
    <Product
      title={product.title}
      price={product.price}
      quantity={product.inventory}
    />
    <button onClick={onAddToCartClicked} disabled={product.inventory === 0}>
      {product.inventory > 0 ? "Add to cart" : "Sold Out"}
    </button>
  </div>
);

export default ProductItem;
