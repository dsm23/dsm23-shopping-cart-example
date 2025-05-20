import { describe, expect, it, vi } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "../../test-utils";
import Cart from "./Cart";

describe("component", () => {
  describe("Cart component", () => {
    it("should display total", () => {
      render(<Cart total="76" products={[]} onCheckoutClicked={vi.fn()} />);

      expect(
        screen.getByText("Total: $76", { selector: "p" }),
      ).toBeInTheDocument();
    });

    it("should display add some products message", () => {
      render(<Cart total="0" products={[]} onCheckoutClicked={vi.fn()} />);

      expect(
        screen.getByText("Please add some products to cart."),
      ).toBeInTheDocument();
    });

    it("should disable button", () => {
      render(<Cart total="0" products={[]} onCheckoutClicked={vi.fn()} />);

      expect(screen.getByRole("button")).toBeDisabled();
    });

    describe("when given product", () => {
      const product = [
        {
          id: 1,
          title: "Product 1",
          price: 9.99,
          quantity: 1,
        },
      ];

      it("should render products", () => {
        render(
          <Cart total="9.99" products={product} onCheckoutClicked={vi.fn()} />,
        );

        expect(screen.getByText("Product 1 - $9.99 x 1")).toBeInTheDocument();
      });

      it("should not disable button", () => {
        render(
          <Cart total="9.99" products={product} onCheckoutClicked={vi.fn()} />,
        );

        expect(screen.getByRole("button")).toBeEnabled();
      });

      it("should call action on button click", () => {
        const mockFn = vi.fn();

        render(
          <Cart total="9.99" products={product} onCheckoutClicked={mockFn} />,
        );

        screen.getByRole("button").click();

        expect(mockFn).toBeCalledTimes(1);
      });
    });
  });
});
