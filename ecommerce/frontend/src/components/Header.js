import React from "react";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <Container>
      <Nav variant="pills" activeKey="1">
        <Nav.Item>
          <NavLink eventKey="1" to="/">
            PROSHOP
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink eventKey="2" to="/cart">
            <i className="fas fa-shopping-cart"></i>Cart
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink eventKey="3" to="/login">
            <i className="fas fa-user"></i>Login
          </NavLink>
        </Nav.Item>
      </Nav>
    </Container>
  );
}
export default Header;
