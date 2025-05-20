import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import ProductsList from "./ProductsList";

describe("component", () => {
  describe("ProductsList", () => {
    it("should render", () => {
      render(<ProductsList title="Test Products">Test Children</ProductsList>);

      expect(
        screen.getByText("Test Products", { selector: "h2" }),
      ).toBeInTheDocument();
      expect(
        screen.getByText("Test Children", { selector: "div" }),
      ).toBeInTheDocument();
    });
  });
});
