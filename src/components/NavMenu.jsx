import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavMenu = () => {
  return (
    <Navbar
      expand="lg"
      bg="light"
      variant="light"
      className="navbar-nav align-items-end ml-auto"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          The NC News
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-links">
            <Nav.Link as={Link} to="/home">
              Articles
            </Nav.Link>
            <Nav.Link as={Link} to="/topics">
              Topics
            </Nav.Link>
            <Nav.Link as={Link} to="/users">
              Users
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavMenu;
