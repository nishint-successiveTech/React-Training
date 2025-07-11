import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter component", () => {
    beforeEach(()=>{
        render(<Counter/>)
    })
  it("renders initial count and buttons", () => {
    expect(screen.getByText(/Count: 0/)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Increment/ })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Decrement/ })).toBeInTheDocument();
  });

  it("increments count on button click", async () => {
    const incrementButton = screen.getByRole("button", { name: /Increment/ });
    await userEvent.click(incrementButton);
    expect(screen.getByText(/Count: 1/)).toBeInTheDocument();
  });

  it("decrements count on button click", async () => {
    // render(<Counter />);
    const decrementButton = screen.getByRole("button", { name: /Decrement/ });
    await userEvent.click(decrementButton);
    expect(screen.getByText(/Count: -1/)).toBeInTheDocument();
  });
});
