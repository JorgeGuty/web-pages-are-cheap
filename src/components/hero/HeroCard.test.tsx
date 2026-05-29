// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import HeroCard from "./HeroCard";

describe("HeroCard", () => {
  it("renders the message prop", () => {
    render(<HeroCard message="Hello, World!" />);
    screen.getByText("Hello, World!");
  });
});
