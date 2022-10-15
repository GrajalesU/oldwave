import Login from "./Login";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Login page", () => {
  test("All in container", () => {
    render(
      <GoogleOAuthProvider clientId="386602516499-pt5f8m9f2dm57lisi3utvtdpdl7s6fhh.apps.googleusercontent.com">
        <Login />
      </GoogleOAuthProvider>
    );
    expect(screen.getByTestId("container")).toBeInTheDocument();
  });
  test("Render title", () => {
    render(
      <GoogleOAuthProvider clientId="386602516499-pt5f8m9f2dm57lisi3utvtdpdl7s6fhh.apps.googleusercontent.com">
        <Login />
      </GoogleOAuthProvider>
    );
    expect(screen.getByText("Login")).toBeInTheDocument();
  });

  test("Render logo", () => {
    render(
      <GoogleOAuthProvider clientId="386602516499-pt5f8m9f2dm57lisi3utvtdpdl7s6fhh.apps.googleusercontent.com">
        <Login />
      </GoogleOAuthProvider>
    );
    expect(screen.getByAltText("Oldwave Logo")).toBeInTheDocument();
  });

  test("Render description", () => {
    render(
      <GoogleOAuthProvider clientId="386602516499-pt5f8m9f2dm57lisi3utvtdpdl7s6fhh.apps.googleusercontent.com">
        <Login />
      </GoogleOAuthProvider>
    );
    expect(screen.getByText("Inicia sesión en un click")).toBeInTheDocument();
  });

  test("Render Google button", () => {
    render(
      <GoogleOAuthProvider clientId="386602516499-pt5f8m9f2dm57lisi3utvtdpdl7s6fhh.apps.googleusercontent.com">
        <Login />
      </GoogleOAuthProvider>
    );
    expect(screen.getByAltText("Google Logo")).toBeInTheDocument();
    userEvent.click(screen.getByAltText("Google Logo"));
  });

  test("Render back button", () => {
    render(
      <GoogleOAuthProvider clientId="386602516499-pt5f8m9f2dm57lisi3utvtdpdl7s6fhh.apps.googleusercontent.com">
        <Login />
      </GoogleOAuthProvider>
    );
    expect(screen.getByAltText("Back symbol")).toBeInTheDocument();
    userEvent.click(screen.getByAltText("Back symbol"));
  });
});
