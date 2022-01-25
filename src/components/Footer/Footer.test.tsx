import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import Footer from "./Footer";

describe("Footer", () => {
  it("render footer", () => {
    render(<Footer />);
    expect(screen.getByText(/ana/i)).toBeInTheDocument();
  });
});
