import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "./App";
import { renderWithRedux } from "./utils/redux-test";

describe("App", () => {
  it("render App", () => {
    renderWithRedux(<App />);
    expect(
      screen.getByText(/Find out weather in your city/i)
    ).toBeInTheDocument();
  });
});
