import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import Dropdown from "./Dropdown";

describe("Dropdown categories menu Component", () => {
  test("should render correctly", () => {
    render(<Dropdown />);
    expect(screen.getByText("Todas las categorías"));
    const dropdownActivator = screen.getByText("Todas las categorías");
    fireEvent.click(dropdownActivator);
    const background = screen.getByTestId("background");
    fireEvent.click(background);
  });
});
