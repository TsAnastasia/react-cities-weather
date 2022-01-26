import React from "react";
import { render, screen } from "@testing-library/react";
import ValueBox from "./ValueBox";
import userEvent from "@testing-library/user-event";

const onClick = jest.fn();
const onDelete = jest.fn();

describe("ValueBox", () => {
  it("render ValueBox", () => {
    render(<ValueBox value="testing" onClick={onClick} onDelete={onDelete} />);

    expect(screen.getByText("testing")).toBeInTheDocument();
  });

  it("onClick works", () => {
    render(<ValueBox value="testing" onClick={onClick} onDelete={onDelete} />);

    userEvent.click(screen.getByText("testing"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("onDelete works", () => {
    render(<ValueBox value="testing" onClick={onClick} onDelete={onDelete} />);

    userEvent.click(screen.getAllByRole("button")[1]);
    expect(onDelete).toHaveBeenCalledTimes(1);
  });
});
