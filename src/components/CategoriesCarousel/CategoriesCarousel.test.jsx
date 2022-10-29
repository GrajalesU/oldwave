import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, waitFor } from "@testing-library/react";
import CategoriesCarousel from "./CategoriesCarousel";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

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

const mockNavigateFn = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigateFn,
}));

describe("Categories Carrousel Component", () => {
  test("should render correctly when its not infinite", () => {
    render(
      <MemoryRouter>
        <CategoriesCarousel icons={ICONS_MOCK} infinite={false} />
      </MemoryRouter>
    );
    expect(screen.getByText(ICONS_MOCK[0].category)).toBeInTheDocument();
  });

  test("should render correctly when its infinite", () => {
    render(
      <MemoryRouter>
        <CategoriesCarousel icons={ICONS_MOCK} />
      </MemoryRouter>
    );
    const imageComponent = screen.getAllByText(ICONS_MOCK[0].category)[0];
    expect(imageComponent).toBeInTheDocument();
  });

  test("should go to category when clicks icon", async () => {
    render(
      <MemoryRouter>
        <CategoriesCarousel icons={ICONS_MOCK} />
      </MemoryRouter>
    );
    const imageComponent = screen.getAllByText(ICONS_MOCK[0].category)[0];
    expect(imageComponent).toBeInTheDocument();
    userEvent.click(imageComponent);
    await waitFor(() =>
      expect(mockNavigateFn).toHaveBeenCalledWith(
        `/search/${ICONS_MOCK[0].category}`
      )
    );
  });
});
