import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import EventsPage from "./EventsPage";
import { events } from "../data/events";

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
      screen.getAllByRole("link", { name: "Details" })
    ).toHaveLength(events.length);
  });
});