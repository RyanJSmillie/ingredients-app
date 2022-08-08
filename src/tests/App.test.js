import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../components/App";

describe("renders app correctly", () => {
  test("renders App", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});

// const linkElement = screen.getByText(/recipes/i);
// expect(linkElement).toBeInTheDocument();
