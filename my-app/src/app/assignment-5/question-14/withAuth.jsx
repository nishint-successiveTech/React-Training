"use client";

import { useEffect, useState } from "react";

const withAuth = (Component) => (props) => {
  const [loggedIn, setLoggedIn] = useState(undefined);

  const handleAuth = () => {
    const user = "Nishint";
    localStorage.setItem(
      "authUser",
      JSON.stringify({ type: "Admin", userName: user })
    );
    setLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("authUser");
    setLoggedIn(false);
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("authUser"));
    if (storedUser?.type === "Admin") {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  if (loggedIn === undefined) return null;

  return (
    <Component
      {...props}
      loggedIn={loggedIn}
      setLoggedIn={setLoggedIn}
      handleAuth={handleAuth}
      handleLogout={handleLogout}
    />
  );
};

export default withAuth;
