import { describe, it, expect } from "vitest";
import { validateSignup } from "./validateSignup";

describe("validateSignup", () => {
  it("returns no errors for a valid sign-up", () => {
    expect(
      validateSignup(
        {
          fullName: "Ada Lovelace",
          email: "ada@example.com",
          tickets: "1",
        },
        5
      )
    ).toEqual({});
  });

  it("shows errors for empty fields and zero tickets", () => {
    const errors = validateSignup(
      {
        fullName: "",
        email: "",
        tickets: "0",
      },
      5
    );

    expect(errors.fullName).toBe("Enter your full name");
    expect(errors.email).toBe(
      "Enter a valid email, like name@example.com"
    );
    expect(errors.tickets).toBe("Choose 1 to 4 tickets");
  });

  it("rejects 5 tickets", () => {
    const errors = validateSignup(
      {
        fullName: "Ada Lovelace",
        email: "ada@example.com",
        tickets: "5",
      },
      5
    );

    expect(errors.tickets).toBe("Choose 1 to 4 tickets");
  });

  it("rejects fractional tickets", () => {
    const errors = validateSignup(
      {
        fullName: "Ada Lovelace",
        email: "ada@example.com",
        tickets: "1.5",
      },
      5
    );

    expect(errors.tickets).toBe("Choose 1 to 4 tickets");
  });

  it("accepts exactly 4 tickets when enough seats are available", () => {
    expect(
      validateSignup(
        {
          fullName: "Ada Lovelace",
          email: "ada@example.com",
          tickets: "4",
        },
        5
      )
    ).toEqual({});
  });

  it("rejects more tickets than available seats", () => {
    const errors = validateSignup(
      {
        fullName: "Ada Lovelace",
        email: "ada@example.com",
        tickets: "3",
      },
      2
    );

    expect(errors.tickets).toBe("Only 2 seats left");
  });
});