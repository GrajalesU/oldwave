import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import SideBarShop from "./SideBarShop";
import { BrowserRouter } from "react-router-dom";

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
        clearCart: jest.fn(),
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

jest.mock("../../utils/api", () => {
  return {
    addOrder: jest.fn(() => {
      return {
        Succes: true,
      };
    }),
  };
});

const activeFn = jest.fn();

describe("SideBarShop", () => {
  test("should render correctly", async () => {
    render(<SideBarShop active={activeFn} />, { wrapper: BrowserRouter });
    expect(screen.getByText("Carrito de compras")).toBeInTheDocument();
    expect(screen.getByText("FINALIZAR PEDIDO")).toBeInTheDocument();
  });

  test("should render products", async () => {
    render(<SideBarShop active={activeFn} />, { wrapper: BrowserRouter });
    expect(screen.getByText("mockProduct1")).toBeInTheDocument();
  });

  test("should close the sidebar when clicks close button", async () => {
    render(<SideBarShop active={activeFn} />, { wrapper: BrowserRouter });
    const closeButton = screen.getByTestId("close");
    expect(closeButton).toBeInTheDocument();
    fireEvent.click(closeButton);
    await waitFor(() => expect(activeFn).toHaveBeenCalled());
  });

  test("should end purchase when clicks end of purchase button", () => {
    render(<SideBarShop active={activeFn} />, { wrapper: BrowserRouter });
    const eofPurchase = screen.getByText("FINALIZAR PEDIDO");
    fireEvent.click(eofPurchase);
  });
});
