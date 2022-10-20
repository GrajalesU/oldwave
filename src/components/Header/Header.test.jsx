import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "./Header";
import { MemoryRouter } from "react-router-dom";
import { useUser } from "../../context/user";

jest.mock("../../context/user", () => {
  return {
    useUser: jest.fn(() => {
      return {
        name: "",
        picture: "",
        email: "",
      };
    }),
    useDispatch: jest.fn(() => {
      return jest.fn();
    }),
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

  test("go to login correctly", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByText("Regístrate o inicia sesión"));
  });

  test("close session correctly", () => {
    useUser.mockImplementation(() => {
      return {
        name: "JUAN",
        picture: "",
        email: "",
      };
    });
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByText("Cerrar sesión")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Cerrar sesión"));
  });
});
