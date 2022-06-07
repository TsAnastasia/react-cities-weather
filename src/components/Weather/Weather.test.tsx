import React from "react";
import { render, screen } from "@testing-library/react";
import Weather from "./Weather";
import { renderWithRedux } from "../../utils/redux-test";

describe("wether", () => {
  it("render", () => {
    renderWithRedux(<Weather city={"Moscow"} />);
    // TODO: add test
  });
});
