import { render, screen } from "@testing-library/react";
import UserProfile from "./UserProfile";

describe("UserProfile component", () => {
  beforeEach(() => {
    render(
      <UserProfile
        name="User"
        email="user@user.com"
        phone="7668725002"
      />
    );
  });

  it("renders the user's name", () => {
    expect(screen.getByText(/Name : User/i)).toBeInTheDocument();
  });

  it("renders the user's email", () => {
    expect(screen.getByText(/Email : user@user.com/i)).toBeInTheDocument();
  });

  it("renders the user's phone number", () => {
    expect(screen.getByText(/Phone number : 7668725002/i)).toBeInTheDocument();
  });
});

