import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe("Greeting Component", () => {
  it("renders with a default greeting", () => {
    render(<Greeting />);
    expect(screen.getByText("Hello, World!")).toBeInTheDocument();
  });

  it("renders with a custom name", () => {
    render(<Greeting name='Next.js' />);
    expect(screen.getByText("Hello, Next.js!")).toBeInTheDocument();
  });
});
