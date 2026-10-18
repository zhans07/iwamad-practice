
import { describe, it, expect, afterEach } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import RegisterPage from "../pages/RegisterPage";

afterEach(() => {
  cleanup();
});

describe("RegisterPage", () => {
  it("renders the registration heading", () => {
    render(<RegisterPage />);
    expect(
      screen.getByRole("heading", { name: "Register" })
    ).toBeInTheDocument();
  });

  it("renders the full name field", () => {
    render(<RegisterPage />);
    expect(screen.getByLabelText("Full Name")).toBeInTheDocument();
  });

  it("renders the email field", () => {
    render(<RegisterPage />);
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
  });

  it("renders the password field", () => {
    render(<RegisterPage />);
    expect(screen.getByLabelText("Password", { exact: true })).toBeInTheDocument();
  });

  it("renders the confirm password field", () => {
    render(<RegisterPage />);
    expect(screen.getByLabelText("Confirm Password")).toBeInTheDocument();
  });

  it("renders the terms checkbox", () => {
    render(<RegisterPage />);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("shows validation errors for an empty form", () => {
    render(<RegisterPage />);
    fireEvent.click(screen.getByRole("button", { name: /create account/i }));

    expect(screen.getByText("Enter your full name")).toBeInTheDocument();
    expect(
      screen.getByText("Enter a valid email, like name@example.com")
    ).toBeInTheDocument();
  });

  it("shows a success message after valid submission", () => {
    render(<RegisterPage />);

    fireEvent.change(screen.getByLabelText("Full Name"), {
      target: { value: "Zhansaya Ruslankyzy" },
    });
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "zhansaya@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Password", { exact: true }), {
      target: { value: "hello1234" },
    });
    fireEvent.change(screen.getByLabelText("Confirm Password"), {
      target: { value: "hello1234" },
    });
    fireEvent.click(screen.getByRole("checkbox"));
    fireEvent.click(screen.getByRole("button", { name: /create account/i }));

    expect(screen.getByText(/you are registered/i)).toBeInTheDocument();
  });
});
