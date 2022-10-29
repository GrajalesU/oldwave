import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import ProductCard from "./ProductCard";
import { MemoryRouter } from "react-router-dom";

jest.mock("use-shopping-cart", () => {
  return {
    useShoppingCart: jest.fn(() => {
      return {
        addItem: jest.fn(),
        cartDetails: {},
      };
    }),
  };
});

describe("ProductCard component", () => {
  test("should render correctly", async () => {
    render(
      <MemoryRouter>
        <ProductCard
          id={1}
          name={"iPhone"}
          brand={"Apple"}
          price={2999900}
          thumbnail={
            "http://http2.mlstatic.com/D_990246-MLA46153276373_052021-I.jpg"
          }
          city={"Medellín"}
          reseller={"Enrique Segoviano"}
          reseller_rating={4.5}
          stock={2}
        ></ProductCard>
      </MemoryRouter>
    );
    //screen.debug()
    expect(screen.getByAltText("Imagen de iPhone")).toBeInTheDocument();
    expect(screen.getByText("Enrique Segoviano")).toBeInTheDocument();
    expect(screen.getByText("Puntuación: 4.5")).toBeInTheDocument();
    expect(screen.getByText("iPhone")).toBeInTheDocument();
    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.getByText("Medellín")).toBeInTheDocument();
    expect(screen.getByText("Agregar al carrito")).toBeInTheDocument();
    expect(screen.getByTestId("card-element")).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("card-element"));
    fireEvent.click(screen.getByText("Agregar al carrito"));
  });
});
