import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Layout from "./Layout";
import { MemoryRouter } from "react-router-dom";

jest.mock(
  "../Header/Header",
  () =>
    function Header() {
      return <span>mocked Header</span>;
    }
);

jest.mock(
  "../Footer/Footer",
  () =>
    function Header() {
      return <span>mocked Footer</span>;
    }
);

describe("Layout component", () => {
  test("should render correctly", () => {
    render(
      <MemoryRouter>
        <Layout>
          <span>mocked Children</span>
        </Layout>
      </MemoryRouter>
    );
    expect(screen.getByText("mocked Header")).toBeInTheDocument();
    expect(screen.getByText("mocked Footer")).toBeInTheDocument();
    expect(screen.getByText("mocked Children")).toBeInTheDocument();
  });
  test("should render correctly searchBar", () => {
    render(
      <MemoryRouter>
        <Layout>
          <span>mocked Children</span>
        </Layout>
      </MemoryRouter>
    );
  });
});
