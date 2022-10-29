import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BannerSlider from "./BannerSlider";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

const IMAGES_MOCK = [
  {
    name: "mockImage1",
    title: "mockImageTitle1",
    url: "mockImageUrl1",
  },
  {
    name: "mockImage2",
    title: "mockImageTitle2",
    url: "mockImageUrl2",
  },
  {
    name: "mockImage3",
    title: "mockImageTitle3",
    url: "mockImageUrl3",
  },
];

const mockNavigateFn = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigateFn,
}));

describe("Banner Slider Component", () => {
  test("should render correctly when its not infinite", () => {
    render(
      <MemoryRouter>
        <BannerSlider images={IMAGES_MOCK} infinite={false} />
      </MemoryRouter>
    );
    expect(screen.getByAltText(IMAGES_MOCK[0].title)).toBeInTheDocument();
  });

  test("should render correctly when its infinite", () => {
    render(
      <MemoryRouter>
        <BannerSlider images={IMAGES_MOCK} />
      </MemoryRouter>
    );
    const imageComponent = screen.getAllByAltText(IMAGES_MOCK[0].title)[0];
    expect(imageComponent).toBeInTheDocument();
    expect(imageComponent).toHaveAttribute("src", IMAGES_MOCK[0].url);
  });

  test("should go to product when clicks image", async () => {
    render(
      <MemoryRouter>
        <BannerSlider images={IMAGES_MOCK} />
      </MemoryRouter>
    );
    const imageComponent = screen.getAllByAltText(IMAGES_MOCK[0].title)[0];
    expect(imageComponent).toBeInTheDocument();
    expect(imageComponent).toHaveAttribute("src", IMAGES_MOCK[0].url);
    userEvent.click(imageComponent);
    await waitFor(() =>
      expect(mockNavigateFn).toHaveBeenCalledWith(
        `/search/${IMAGES_MOCK[0].name}`
      )
    );
  });
});
