import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Spinner from "./Spinner";

describe("Layout component", () => {
  test("should render correctly", () => {
    render(<Spinner />);
    expect(screen.getByTestId("spinner-element")).toBeInTheDocument();
  });
});
