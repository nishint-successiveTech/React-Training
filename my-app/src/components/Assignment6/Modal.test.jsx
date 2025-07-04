import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ModalComponent from "./Modal";

describe("ModalComponent", () => {
  it("renders the open modal button", () => {
    render(<ModalComponent />);
    expect(screen.getByRole("button", { name: /open modal/i })).toBeInTheDocument();
  });

  it("opens the modal when the button is clicked", async () => {
    render(<ModalComponent />);
    const openButton = screen.getByRole("button", { name: /open modal/i });

    await userEvent.click(openButton);

    expect(await screen.findByRole("heading", { name: /modal content/i })).toBeInTheDocument();
    expect(screen.getByText(/this is some content inside the modal/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /close/i })).toBeInTheDocument();
  });

  it("closes the modal when the close button is clicked", async () => {
    render(<ModalComponent />);
    const openButton = screen.getByRole("button", { name: /open modal/i });

    await userEvent.click(openButton);

    const closeButton = await screen.findByRole("button", { name: /close/i });
    await userEvent.click(closeButton);

    // Modal content should no longer be visible
    expect(screen.queryByText(/modal content/i)).not.toBeInTheDocument();
  });
});