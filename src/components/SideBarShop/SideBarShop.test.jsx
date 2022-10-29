import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import SideBarShop from "./SideBarShop";

const mockIncrementItem = jest.fn();
const mockDecrementItem = jest.fn();
const mockRemoveItem = jest.fn();

jest.mock("use-shopping-cart", () => {
  return {
    useShoppingCart: jest.fn(() => {
      return {
        incrementItem: mockIncrementItem,
        decrementItem: mockDecrementItem,
        removeItem: mockRemoveItem,
        cartDetails: {
          1: {
            key: 1,
            id: 1,
            name: "mockProduct1",
            price: 100000,
            thumbnail: "mockProductThumbnail",
            quantity: 1,
            stock: 1,
          },
        },
      };
    }),
  };
});

const activeFn = jest.fn();

describe("SideBarShop", () => {
  test("should render correctly", async () => {
    render(<SideBarShop active={activeFn} />);
    expect(screen.getByText("Carrito de compras")).toBeInTheDocument();
    expect(screen.getByText("FINALIZAR PEDIDO")).toBeInTheDocument();
  });

  test("should render products", async () => {
    render(<SideBarShop active={activeFn} />);
    expect(screen.getByText("mockProduct1")).toBeInTheDocument();
  });

  test("should close the sidebar when clicks close button", async () => {
    render(<SideBarShop active={activeFn} />);
    const closeButton = screen.getByTestId("close");
    expect(closeButton).toBeInTheDocument();
    fireEvent.click(closeButton);
    await waitFor(() => expect(activeFn).toHaveBeenCalled());
  });
});
