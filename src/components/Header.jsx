import React from "react";
import logo from "../assets/TNC-logo.png";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Header = ({ isDarkMode, toggleTheme }) => {
  const { user } = useContext(UserContext);
  return (
    <header
      className="fs-1 fs-sm-1 fs-md-3 fs-lg-4"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Link to="/home" style={{ textDecoration: "none" }}>
        <img className="header-logo" src={logo} alt="The NC News Logo" />
      </Link>
      <div className="d-flex ml-auto align-items-center">
        <Button variant="secondary" onClick={toggleTheme}>
          {isDarkMode ? "Dark Theme" : "Light Theme"}
        </Button>
        <p
          className="nav-font"
          style={{
            textAlign: "right",
            marginLeft: "1rem",
            marginRight: "1rem",
            color: "black",
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
