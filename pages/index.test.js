import { render, screen, fireEvent } from "@testing-library/react";
import Home from "./index";

describe("Home Page", () => {
  it("renders the initial page content", () => {
    render(<Home />);
    expect(screen.getByText("Welcome to the Counter App")).toBeInTheDocument();
    expect(screen.getByText("Current Count: 0")).toBeInTheDocument();
    expect(screen.getByText("Increment")).toBeInTheDocument();
  });

  it("increments the counter when the button is clicked", () => {
    render(<Home />);
    const button = screen.getByText("Increment");
    fireEvent.click(button);
    expect(screen.getByText("Current Count: 1")).toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.getByText("Current Count: 2")).toBeInTheDocument();
  });
});
