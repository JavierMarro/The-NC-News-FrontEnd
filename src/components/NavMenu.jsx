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
        <Navbar.Brand as={Link} to="/home" className="nav-font ">
          <strong className="nav-font">Home</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="me-auto">
          <Nav className="me-auto nav-style">
            <NavDropdown
              title="Topics"
              id="basic-nav-dropdown"
              className="nav-font flex-grow-1"
            >
              <Container className="nav-font ">
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
              </Container>
            </NavDropdown>
            <Nav.Link as={Link} to="/users" className="nav-font flex-grow-1">
              Users
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className="nav-font flex-grow-1">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavMenu;
