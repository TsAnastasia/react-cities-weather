import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import Intro from "./Intro";

describe("Inrto", () => {
  it("render intro", () => {
    render(<Intro />);
    expect(screen.getByText(/weather app/i)).toBeInTheDocument();
  });
});
