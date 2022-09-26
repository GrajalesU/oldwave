import Login from "./Login";
import { render, screen } from "@testing-library/react";

describe("Login page", () => {
  test("Render title", () => {
    render(<Login />);
    expect(screen.getByText("Login")).toBeInTheDocument();
  });

  test("Render logo", () => {
    render(<Login />);
    expect(screen.getByAltText("Oldwave Logo")).toBeInTheDocument();
  });

  test("Render description", () => {
    render(<Login />);
    expect(screen.getByText("Inicia sesión en un click")).toBeInTheDocument();
  });

  test("Render Google button", () => {
    render(<Login />);
    expect(screen.getByAltText("Google Logo")).toBeInTheDocument();
  });

  test("Render back button", () => {
    render(<Login />);
    expect(screen.getByAltText("Back symbol")).toBeInTheDocument();
  });
});
