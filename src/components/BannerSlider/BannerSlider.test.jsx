import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import BannerSlider from "./BannerSlider";

const IMAGES_MOCK = [
  {
    title: "mockImageTitle1",
    url: "mockImageUrl1",
  },
  {
    title: "mockImageTitle2",
    url: "mockImageUrl2",
  },
  {
    title: "mockImageTitle3",
    url: "mockImageUrl3",
  },
];

describe("Banner Slider Component", () => {
  test("should render correctly when its not infinite", () => {
    render(<BannerSlider images={IMAGES_MOCK} infinite={false} />);
    expect(screen.getByAltText(IMAGES_MOCK[0].title)).toBeInTheDocument();
  });

  test("should render correctly when its infinite", () => {
    render(<BannerSlider images={IMAGES_MOCK} />);
    const imageComponent = screen.getAllByAltText(IMAGES_MOCK[0].title)[0];
    expect(imageComponent).toBeInTheDocument();
    expect(imageComponent).toHaveAttribute("src", IMAGES_MOCK[0].url);
  });
});
