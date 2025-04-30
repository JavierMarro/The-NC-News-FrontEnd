import React from "react";
import logo from "../assets/TNC-logo.png";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import MoonIcon from "./MoonIcon";
import SunIcon from "./SunIcon";

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
        <img
          className="header-logo mb-2 mt-2"
          src={logo}
          alt="The NC News Logo"
        />
      </Link>
      <div className="d-flex ml-auto align-items-center">
        <label className="theme-switch">
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={toggleTheme}
            aria-label="Toggle dark mode"
          />
          <span className="slider">
            <span className="icon">
              {isDarkMode ? <MoonIcon /> : <SunIcon />}
            </span>
          </span>
        </label>
        <p
          className="nav-font"
          style={{
            textAlign: "right",
            marginLeft: "1rem",
            marginRight: "1rem",
            color: "black",
          }}
        >
          {user ? (
            <>
              Logged in: <br />
              <strong>{user.username}</strong>
            </>
          ) : (
            <>
              You are not <br />
              logged in
            </>
          )}
        </p>
      </div>
    </header>
  );
};

export default Header;
