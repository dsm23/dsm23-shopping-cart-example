import type { FunctionComponent, ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

const ProductsList: FunctionComponent<Props> = ({ title, children }) => (
  <div>
    <h2>{title}</h2>
    <div>{children}</div>
  </div>
);

export default ProductsList;
