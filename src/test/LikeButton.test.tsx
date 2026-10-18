import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { LikesProvider } from "../context/LikesContext";
import LikeButton from "../components/LikeButton";

describe("LikeButton", () => {
  test("increments likes when the button is clicked", () => {
    render(
      <LikesProvider>
        <LikeButton />
      </LikesProvider>
    );

    const button = screen.getByRole("button", { name: /like 0/i });

    expect(button).toHaveTextContent("Like 0");

    fireEvent.click(button);

    expect(button).toHaveTextContent("Like 1");
  });
});