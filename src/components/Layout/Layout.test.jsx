import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Layout from "./Layout";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

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

const mockNavigateFn = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigateFn,
}));

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

  test("should redirect when user search something", async () => {
    render(
      <MemoryRouter>
        <Layout>
          <span>mocked Children</span>
        </Layout>
      </MemoryRouter>
    );
    const searchInput = screen.getByTestId("search-input");
    expect(searchInput).toBeInTheDocument();
    await userEvent.type(searchInput, "something");
    expect(searchInput).toHaveValue("something");
    const searchButton = screen.getByTestId("search-button");
    expect(searchButton).toBeInTheDocument();
    fireEvent.click(searchButton);
    await waitFor(() =>
      expect(mockNavigateFn).toBeCalledWith("/search/something")
    );
  });
});
