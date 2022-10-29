import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ProductSideBarShop from "./ProductSideBarShop";
import { MemoryRouter } from "react-router-dom";
import { formatPrice } from "../../utils/numbers";

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
        cartDetails: {},
      };
    }),
  };
});

describe("ProductSideBarShop", () => {
  test("should render correctly", async () => {
    render(
      <ProductSideBarShop
        id={1}
        name={"iPhone"}
        price={2999900}
        thumbnail="http://http2.mlstatic.com/D_990246-MLA46153276373_052021-I.jpg"
        quantity={0}
        stock={2}
      ></ProductSideBarShop>
    );
    expect(screen.getByText("iPhone")).toBeInTheDocument();
    expect(screen.getByText("delete")).toBeInTheDocument();
  });

  test("should show out of stock if item is not available from server", async () => {
    render(
      <ProductSideBarShop
        id={1}
        name={"iPhone"}
        price={2999900}
        thumbnail="http://http2.mlstatic.com/D_990246-MLA46153276373_052021-I.jpg"
        stock={0}
      ></ProductSideBarShop>
    );
    expect(screen.getByText("Sin stock")).toBeInTheDocument();
  });

  test("should increase button disabled when you have all available item quantity in your cart", async () => {
    render(
      <ProductSideBarShop
        id={1}
        name={"iPhone"}
        price={2999900}
        thumbnail="http://http2.mlstatic.com/D_990246-MLA46153276373_052021-I.jpg"
        quantity={2}
        stock={2}
      ></ProductSideBarShop>
    );
    const increaseButton = screen.getByTestId("increase");
    expect(increaseButton).toBeInTheDocument();
    expect(increaseButton).toHaveClass("disabled");
  });

  test("should delete item when button is clicked", async () => {
    render(
      <ProductSideBarShop
        id={1}
        name={"iPhone"}
        price={2999900}
        thumbnail="http://http2.mlstatic.com/D_990246-MLA46153276373_052021-I.jpg"
        quantity={0}
        stock={2}
      ></ProductSideBarShop>
    );
    const deleteButton = screen.getByText("delete");
    expect(deleteButton).toBeInTheDocument();
    fireEvent.click(deleteButton);
    await waitFor(() => expect(mockRemoveItem).toHaveBeenCalledWith(1));
  });

  test("should decrease cart item quantity when decrease button is clicked", async () => {
    render(
      <ProductSideBarShop
        id={1}
        name={"iPhone"}
        price={2999900}
        thumbnail="http://http2.mlstatic.com/D_990246-MLA46153276373_052021-I.jpg"
        quantity={0}
        stock={2}
      ></ProductSideBarShop>
    );
    const decreaseButton = screen.getByTestId("decrease");
    expect(decreaseButton).toBeInTheDocument();
    fireEvent.click(decreaseButton);
    await waitFor(() => expect(mockDecrementItem).toHaveBeenCalledWith(1));
  });

  test("should increase cart item quantity when increase button is clicked", async () => {
    render(
      <ProductSideBarShop
        id={1}
        name={"iPhone"}
        price={2999900}
        thumbnail="http://http2.mlstatic.com/D_990246-MLA46153276373_052021-I.jpg"
        quantity={0}
        stock={2}
      ></ProductSideBarShop>
    );
    const increaseButton = screen.getByTestId("increase");
    expect(increaseButton).toBeInTheDocument();
    fireEvent.click(increaseButton);
    await waitFor(() => expect(mockIncrementItem).toHaveBeenCalledWith(1));
  });
});
