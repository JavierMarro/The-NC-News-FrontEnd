import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavDropdown } from "react-bootstrap";
import { UserContext } from "../contexts/UserContext";

const NavMenu = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    if (window.confirm("Are you sure you want to sign out?")) {
      setUser(null);
      navigate("/home");
    }
  };

  return (
    <Navbar
      className="p-1 mb-2"
      expand={"xl"}
      sticky="top"
      style={{ height: "auto" }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/home" className="nav-font mr-5">
          <strong className="nav-font">The NC News</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-style">
            <NavDropdown
              title="Topics"
              id="basic-nav-dropdown"
              className="nav-font flex-grow-1"
            >
              <NavDropdown.Item as={Link} to="/home/coding">
                Coding
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/home/cooking">
                Cooking
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/home/football">
                Football
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/users" className="nav-font flex-grow-1">
              Users
            </Nav.Link>
            {user ? (
              <Nav.Link
                onClick={handleSignOut}
                className="nav-font flex-grow-1"
                style={{ cursor: "pointer" }}
              >
                Sign Out
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/login" className="nav-font flex-grow-1">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavMenu;
