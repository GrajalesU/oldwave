import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import ProductDetail from "./ProductDetail";
import * as api from "../../utils/api";
import { act } from "react-dom/test-utils";

jest.mock("../../utils/api");

const mockAddItem = jest.fn();
jest.mock("use-shopping-cart", () => {
  return {
    useShoppingCart: jest.fn(() => {
      return {
        addItem: mockAddItem,
        cartDetails: {},
      };
    }),
  };
});

const PRODUCT = {
  id: 5,
  name: "Air Max Thea Jacquard",
  description: "Tenis de Mujer 100% Original",
  price: 250000,
  brand: "Nike",
  city: "Medellín",
  reseller: "Sofía Mesada",
  reseller_logo: "https://rickandmortyapi.com/api/character/avatar/730.jpeg",
  reseller_rating: 4.2,
  stock: 10,
  imgs: [
    {
      id: 14,
      src: "https://http2.mlstatic.com/D_834282-MCO31707822885_082019-O.jpg",
    },
    {
      id: 15,
      src: "https://http2.mlstatic.com/D_848925-MCO31708380111_082019-O.jpg",
    },
    {
      id: 16,
      src: "https://http2.mlstatic.com/D_799093-MCO31707838783_082019-O.jpg",
    },
  ],
};

describe("Product Detail Page", () => {
  beforeEach(() => jest.clearAllMocks());

  test("Api call", async () => {
    api.getProduct.mockResolvedValue({
      ...PRODUCT,
    });
    act(() => {
      render(<ProductDetail />);
    });

    await waitFor(() => {
      expect(api.getProduct).toBeCalledTimes(1);
    });
  });

  test("Render title", async () => {
    api.getProduct.mockResolvedValue({
      ...PRODUCT,
    });
    act(() => {
      render(<ProductDetail />);
    });

    await waitFor(() => {
      const productTitle = `${PRODUCT.name} ${PRODUCT.brand}`;
      expect(screen.getByText(productTitle)).toBeInTheDocument();
    });
  });

  test("Render availability", async () => {
    api.getProduct.mockResolvedValue({
      ...PRODUCT,
    });
    act(() => {
      render(<ProductDetail />);
    });

    await waitFor(() => {
      const productAvailability = "Disponible";
      expect(screen.getByText(productAvailability)).toBeInTheDocument();
    });
  });

  test("Render description", async () => {
    api.getProduct.mockResolvedValue({
      ...PRODUCT,
    });
    act(() => {
      render(<ProductDetail />);
    });

    await waitFor(() => {
      expect(screen.getByText(PRODUCT.description)).toBeInTheDocument();
    });
  });

  test("Render city", async () => {
    api.getProduct.mockResolvedValue({
      ...PRODUCT,
    });
    act(() => {
      render(<ProductDetail />);
    });

    await waitFor(() => {
      expect(screen.getByText(PRODUCT.city)).toBeInTheDocument();
    });
  });

  test("Render reseller name", async () => {
    api.getProduct.mockResolvedValue({
      ...PRODUCT,
    });
    act(() => {
      render(<ProductDetail />);
    });

    await waitFor(() => {
      expect(screen.getByText(PRODUCT.reseller)).toBeInTheDocument();
    });
  });

  test("Render reseller logo", async () => {
    api.getProduct.mockResolvedValue({
      ...PRODUCT,
    });
    act(() => {
      render(<ProductDetail />);
    });

    await waitFor(() => {
      const resellerAlt = "Reseller Logo";
      expect(screen.getByAltText(resellerAlt)).toBeInTheDocument();
    });
  });

  test("Render reseller rating", async () => {
    api.getProduct.mockResolvedValue({
      ...PRODUCT,
    });
    act(() => {
      render(<ProductDetail />);
    });

    await waitFor(() => {
      const resellerRating = `${PRODUCT.reseller_rating} ⭐`;
      expect(screen.getByText(resellerRating)).toBeInTheDocument();
    });
  });

  test("Should add the product to cart when clicks the add cart button", async () => {
    api.getProduct.mockResolvedValue({
      ...PRODUCT,
    });
    act(() => {
      render(<ProductDetail />);
    });

    await waitFor(() => {
      const resellerRating = `${PRODUCT.reseller_rating} ⭐`;
      expect(screen.getByText(resellerRating)).toBeInTheDocument();
    });

    const addCartButton = screen.getByTestId("add-to-cart");
    expect(addCartButton).toBeInTheDocument();
    fireEvent.click(addCartButton);
    await waitFor(() =>
      expect(mockAddItem).toHaveBeenCalledWith({ ...PRODUCT })
    );
  });
});
