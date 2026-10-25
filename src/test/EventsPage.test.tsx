
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import EventsPage from "../pages/EventsPage";

describe("EventsPage", () => {
  it("renders the events heading and event cards", () => {
    render(
      <MemoryRouter>
        <EventsPage />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", { name: "Events" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: "React Study Night" })
    ).toBeInTheDocument();

    expect(
      screen.getAllByRole("link", { name: "Details" })
    ).toHaveLength(4);
  });
});
