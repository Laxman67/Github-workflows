import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import App from "./App";


test("contains one or more h1 elements", () => {
  render(<App />);
  const headings = screen.getAllByRole("heading", { level: 1 });
  expect(headings.length).toBeGreaterThan(0);
});

test("contains one or more h2 elements", () => {
  render(<App />);
  const subHeadings = screen.getAllByRole("heading", { level: 2 });
  expect(subHeadings.length).not.toBeGreaterThan(0);
});
