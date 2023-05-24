import React from "react";
import Nav from "react-bootstrap/Nav";

function Header() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
      <Nav.Item>
        <Nav.Link eventKey="1" href="#/home">
          PROSHOP
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2" href="/cart">
          <i className="fas fa-shopping-cart"></i>Cart
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3" href="/login">
          <i className="fas fa-user"></i>Login
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
export default Header;
