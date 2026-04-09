import { describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";
import App from "./App";

// https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn<(query: string) => MediaQueryList>().mockImplementation(
    (query) =>
      ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn<() => void>(), // deprecated
        removeListener: vi.fn<() => void>(), // deprecated
        addEventListener: vi.fn<() => void>(),
        removeEventListener: vi.fn<() => void>(),
        dispatchEvent: vi.fn<() => boolean>(() => false),
      }) satisfies MediaQueryList,
  ),
});

describe("component", () => {
  describe("App", () => {
    it("should render correctly", () => {
      const { container } = render(<App />);

      expect(container.firstChild).toBeTruthy();
    });
  });
});
