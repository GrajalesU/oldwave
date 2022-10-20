import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { MemoryRouter } from "react-router-dom";

jest.mock("../../assets/oldwave-logo-horizontal.png", () => {
  return {
    default: "mockedLogoURL.png",
  };
});

describe("Header component", () => {
  test("should render correctly", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByText("menu")).toBeInTheDocument();
    expect(screen.getByAltText("Logotipo OldWave")).toBeInTheDocument();
    expect(screen.getByText("Regístrate o inicia sesión")).toBeInTheDocument();
    expect(screen.getByAltText("Icono de login")).toBeInTheDocument();
    expect(
      screen.getByAltText("Icono de carrito de compras")
    ).toBeInTheDocument();
  });
});
