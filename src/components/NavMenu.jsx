import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavDropdown } from "react-bootstrap";

const NavMenu = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand={"xl"} sticky="top">
      <Container>
        <Navbar.Brand>
          <strong className="nav-font">Menu:</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="me-auto">
          <Nav className="me-auto nav-style">
            <Nav.Link as={Link} to="/home" className="nav-font flex-grow-1">
              Articles
            </Nav.Link>
            <Nav.Link as={Link} to="/users" className="nav-font flex-grow-1">
              Users
            </Nav.Link>
            <NavDropdown
              title="Topics"
              id="basic-nav-dropdown"
              className="nav-font flex-grow-1"
            >
              <Container className="nav-font flex-grow-1">
                <NavDropdown.Item href="#placeholder">coding</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#placeholder">cooking</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#placeholder">
                  football
                </NavDropdown.Item>
              </Container>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavMenu;
