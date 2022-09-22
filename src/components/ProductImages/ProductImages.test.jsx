import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import ProductImages from "./ProductImages";

describe("Product Images Component", () => {
  const product = {
    id: 5,
    name: "Air Max Thea Jacquard",
    description: "Tenis de Mujer 100% Original",
    price: 250000,
    brand: "Nike",
    city: "Medellín",
    reseller: "Sofía Mesada",
    reseller_logo: "https://rickandmortyapi.com/api/character/avatar/730.jpeg",
    reseller_rating: 4.2,
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

  test("Renders dots slider", () => {
    const component = render(<ProductImages product={product} />);

    const dots = component.container.querySelector("ul");
    expect(dots.children).toHaveLength(product.imgs.length);
  });

  test("Renders all images", () => {
    const component = render(<ProductImages product={product} />);

    product.imgs.forEach((img) => {
      const node = component.container.querySelector(`img[src='${img.src}']`);
      expect(node).toBeDefined();
    });
  });

  test("slide img when press dot button", () => {
    const component = render(<ProductImages product={product} />);

    const dots = component.container.querySelector("ul");
    const lastDot = dots.lastChild;
    fireEvent.click(lastDot, { class: "slick-active" });
  });
});
