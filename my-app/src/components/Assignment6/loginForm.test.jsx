import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "./loginForm";

describe("LoginForm", () => {
  beforeEach(() => {
    render(<LoginForm />);
  });

  it("renders username and password input fields and login button", () => {
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  it("updates input fields when user types", async () => {
    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);

    await userEvent.type(usernameInput, "user");
    await userEvent.type(passwordInput, "123456");

    expect(usernameInput).toHaveValue("user");
    expect(passwordInput).toHaveValue("123456");
  });

  it("shows success message on correct credentials", async () => {
    await userEvent.type(screen.getByLabelText(/username/i), "user");
    await userEvent.type(screen.getByLabelText(/password/i), "123456");
    await userEvent.click(screen.getByRole("button", { name: /login/i }));

    expect(screen.getByText(/user logged in successfully/i)).toBeInTheDocument();
  });

  it("does not show success message on incorrect credentials", async () => {
    await userEvent.type(screen.getByLabelText(/username/i), "wronguser");
    await userEvent.type(screen.getByLabelText(/password/i), "wrongpass");
    await userEvent.click(screen.getByRole("button", { name: /login/i }));

    expect(screen.queryByText(/logged in successfully/i)).not.toBeInTheDocument();
  });
});