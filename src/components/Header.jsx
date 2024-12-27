import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Header = ({ isDarkMode, toggleTheme }) => {
  return (
    <>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link to="/home" style={{ textDecoration: "none" }}>
          <h1>The NC News</h1>
        </Link>
        <Button variant="secondary" onClick={toggleTheme}>
          {isDarkMode ? "Dark Theme" : "Light Theme"}
        </Button>
      </header>
    </>
  );
};

export default Header;
