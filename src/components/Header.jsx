import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Header = ({ isDarkMode, toggleTheme }) => {
  const { user } = useContext(UserContext);
  return (
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
      <div className="d-flex ml-auto align-items-center">
        <Button variant="secondary" onClick={toggleTheme}>
          {isDarkMode ? "Dark Theme" : "Light Theme"}
        </Button>
        <p
          style={{
            textAlign: "right",
            marginLeft: "1rem",
            marginRight: "1rem",
          }}
        >
          Logged in: <br />
          <strong>{user.username}</strong>
        </p>
      </div>
    </header>
  );
};

export default Header;
