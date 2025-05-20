import type { FunctionComponent } from "react";

type Props = {
  price: number;
  quantity?: number;
  title: string;
};

const Product: FunctionComponent<Props> = ({ price, quantity, title }) => (
  <div>
    {title} - ${price}
    {quantity ? ` x ${quantity}` : null}
  </div>
);

export default Product;
