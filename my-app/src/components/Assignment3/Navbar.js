import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#eee" }}>
      <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

export default Navbar;
