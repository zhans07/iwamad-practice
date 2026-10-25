
import { describe, it, expect } from "vitest";
import { validateSignup } from "./validateSignup";

describe("validateSignup", () => {
  it("returns no errors for valid values", () => {
    expect(
      validateSignup(
        { fullName: "Alex", email: "alex@example.com", tickets: 1 },
        5
      )
    ).toEqual({});
  });

  it("requires a full name", () => {
    const errors = validateSignup(
      { fullName: " ", email: "alex@example.com", tickets: 1 },
      5
    );

    expect(errors.fullName).toBe("Enter your full name");
  });

  it("validates the email address", () => {
    const errors = validateSignup(
      { fullName: "Alex", email: "invalid-email", tickets: 1 },
      5
    );

    expect(errors.email).toBe(
      "Enter a valid email, like name@example.com"
    );
  });

  it("rejects zero tickets", () => {
    const errors = validateSignup(
      { fullName: "Alex", email: "alex@example.com", tickets: 0 },
      5
    );

    expect(errors.tickets).toBe("Choose 1 to 4 tickets");
  });

  it("rejects fractional tickets", () => {
    const errors = validateSignup(
      { fullName: "Alex", email: "alex@example.com", tickets: 1.5 },
      5
    );

    expect(errors.tickets).toBe("Choose 1 to 4 tickets");
  });

  it("rejects tickets above available seats", () => {
    const errors = validateSignup(
      { fullName: "Alex", email: "alex@example.com", tickets: 3 },
      2
    );

    expect(errors.tickets).toBe("Only 2 seats left");
  });
});
