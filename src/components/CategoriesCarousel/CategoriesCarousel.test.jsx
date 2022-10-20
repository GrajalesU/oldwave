import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import CategoriesCarousel from "./CategoriesCarousel";

const ICONS_MOCK = [
  {
    category: "mockedCars",
    Icon: () => <div>mockedCarIcon</div>,
  },
  {
    category: "mockedMoto",
    Icon: () => <div>mockedMotoIcon</div>,
  },
  {
    category: "mockedClothes",
    Icon: () => <div>mockedClothesIcon</div>,
  },
  {
    category: "mockedSports",
    Icon: () => <div>mockedSportsIcon</div>,
  },
];

describe("Categories Carrousel Component", () => {
  test("should render correctly when its not infinite", () => {
    render(<CategoriesCarousel icons={ICONS_MOCK} infinite={false} />);
    expect(screen.getByText(ICONS_MOCK[0].category)).toBeInTheDocument();
  });

  test("should render correctly when its infinite", () => {
    render(<CategoriesCarousel icons={ICONS_MOCK} />);
    const imageComponent = screen.getAllByText(ICONS_MOCK[0].category)[0];
    expect(imageComponent).toBeInTheDocument();
  });
});
