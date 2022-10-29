import Login from "./Login";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

jest.mock("../../context/user", () => {
  return {
    useDispatch: jest.fn(),
    useUser: jest.fn(() => {
      return {
        name: "",
        picture: "",
        email: "",
      };
    }),
  };
});

jest.mock("../../utils/user", () => {
  return {
    getUser: jest.fn(async () => {
      return {
        name: "Juan",
        picture: "https://www.randomImage.com",
        email: "juan@gmail.com",
      };
    }),
  };
});

jest.mock("../../utils/api", () => {
  return {
    handleUser: jest.fn(),
  };
});

describe("Login page", () => {
  test("All in container", () => {
    render(
      <GoogleOAuthProvider clientId="386602516499-pt5f8m9f2dm57lisi3utvtdpdl7s6fhh.apps.googleusercontent.com">
        <Login />
      </GoogleOAuthProvider>,
      { wrapper: BrowserRouter }
    );
    expect(screen.getByTestId("container")).toBeInTheDocument();
  });
  test("Render title", () => {
    render(
      <GoogleOAuthProvider clientId="386602516499-pt5f8m9f2dm57lisi3utvtdpdl7s6fhh.apps.googleusercontent.com">
        <Login />
      </GoogleOAuthProvider>,
      { wrapper: BrowserRouter }
    );
    expect(screen.getByText("Login")).toBeInTheDocument();
  });

  test("Render logo", () => {
    render(
      <GoogleOAuthProvider clientId="386602516499-pt5f8m9f2dm57lisi3utvtdpdl7s6fhh.apps.googleusercontent.com">
        <Login />
      </GoogleOAuthProvider>,
      { wrapper: BrowserRouter }
    );
    expect(screen.getByAltText("Oldwave Logo")).toBeInTheDocument();
  });

  test("Render description", () => {
    render(
      <GoogleOAuthProvider clientId="386602516499-pt5f8m9f2dm57lisi3utvtdpdl7s6fhh.apps.googleusercontent.com">
        <Login />
      </GoogleOAuthProvider>,
      { wrapper: BrowserRouter }
    );
    expect(screen.getByText("Inicia sesión en un click")).toBeInTheDocument();
  });

  test("Render Google button", () => {
    render(
      <GoogleOAuthProvider clientId="386602516499-pt5f8m9f2dm57lisi3utvtdpdl7s6fhh.apps.googleusercontent.com">
        <Login />
      </GoogleOAuthProvider>,
      { wrapper: BrowserRouter }
    );
    expect(screen.getByAltText("Google Logo")).toBeInTheDocument();
  });

  test("Render back button", () => {
    render(
      <GoogleOAuthProvider clientId="386602516499-pt5f8m9f2dm57lisi3utvtdpdl7s6fhh.apps.googleusercontent.com">
        <Login />
      </GoogleOAuthProvider>,
      { wrapper: BrowserRouter }
    );
    expect(screen.getByAltText("Back symbol")).toBeInTheDocument();
  });

  test("go to home", () => {
    render(
      <GoogleOAuthProvider clientId="386602516499-pt5f8m9f2dm57lisi3utvtdpdl7s6fhh.apps.googleusercontent.com">
        <Login />
      </GoogleOAuthProvider>,
      { wrapper: BrowserRouter }
    );
    fireEvent.click(screen.getByAltText("Back symbol"));
  });
});
