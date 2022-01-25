import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import { renderWithRedux } from "../../utils/redux-test";
import Search from "./Search";
import styles from "./search.module.scss";

describe("Search", () => {
  it("render search without latest", () => {
    renderWithRedux(<Search />);

    expect(screen.getByPlaceholderText(/city/i)).toBeInTheDocument();
    expect(screen.queryByRole("textbox")).toHaveClass(styles.text);

    expect(screen.getAllByRole("button").length).toEqual(2);
    expect(screen.getByText(/find out/i)).toBeInTheDocument();

    expect(screen.queryByRole("list")).not.toBeInTheDocument();
  });

  it("render search with latest", () => {
    renderWithRedux(<Search />, {
      preloadedState: {
        cityReducer: { city: "", latest: [{ name: "london", id: "1" }] },
      },
    });

    expect(screen.queryByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("list")).toBeInTheDocument();
  });

  it("search london", () => {
    renderWithRedux(<Search />);

    userEvent.type(screen.queryByRole("textbox")!, "london");

    userEvent.click(screen.getByText(/find out/i));

    //TODO:
    // screen.debug();
  });
});
