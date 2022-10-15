import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import Carrousel from "./Carrousel";

describe("Carrousel component", () => {
  const imgs = [
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
  ];

  test("render images", () => {
    render(<Carrousel imgs={imgs} />);
  });
});
