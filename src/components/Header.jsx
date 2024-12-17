import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/home" style={{ textDecoration: "none" }}>
        <h1>The NC News</h1>
      </Link>
    </header>
  );
};

export default Header;
