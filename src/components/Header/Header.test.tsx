import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import Header from "./Header";

describe("Header", () => {
  it("render header", () => {
    render(<Header />);
    expect(screen.getByText(/weather app/i)).toBeInTheDocument();
  });
});
