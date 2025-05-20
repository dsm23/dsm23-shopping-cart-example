import { describe, expect, it, vi } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "../../test-utils";
import ProductItem from "./ProductItem";

const product = {
  title: "Product 1",
  price: 9.99,
  inventory: 6,
};

describe("component", () => {
  describe("ProductItem component", () => {
    it("should render product", () => {
      const { container } = render(
        <ProductItem product={product} onAddToCartClicked={vi.fn()} />,
      );

      expect(container.firstChild).toBeInTheDocument();
    });

    it("should render Add To Cart message", () => {
      render(<ProductItem product={product} onAddToCartClicked={vi.fn()} />);

      expect(screen.getByRole("button")).toHaveTextContent("Add to cart");
    });

    it("should not disable button", () => {
      render(<ProductItem product={product} onAddToCartClicked={vi.fn()} />);

      expect(screen.getByRole("button")).toBeEnabled();
    });

    it("should call action on button click", () => {
      const mockFn = vi.fn();

      render(<ProductItem product={product} onAddToCartClicked={mockFn} />);

      screen.getByRole("button").click();

      expect(mockFn).toHaveBeenCalledOnce();
    });

    describe("when product inventory is 0", () => {
      it("should render Sold Out message", () => {
        render(
          <ProductItem
            product={{ ...product, inventory: 0 }}
            onAddToCartClicked={vi.fn()}
          />,
        );

        expect(screen.getByRole("button")).toHaveTextContent("Sold Out");
      });

      it("should disable button", () => {
        render(
          <ProductItem
            product={{ ...product, inventory: 0 }}
            onAddToCartClicked={vi.fn()}
          />,
        );

        expect(screen.getByRole("button")).toBeDisabled();
      });
    });
  });
});
