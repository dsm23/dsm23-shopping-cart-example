import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Product from "./Product";

describe("component", () => {
  describe("Product", () => {
    it("should render title and price", () => {
      render(<Product title="Test Product" price={9.99} />);

      expect(screen.getByText("Test Product - $9.99")).toBeInTheDocument();
    });

    it("should render title, price, and inventory", () => {
      render(<Product title="Test Product" price={9.99} quantity={6} />);

      expect(screen.getByText("Test Product - $9.99 x 6")).toBeInTheDocument();
    });
  });
});
