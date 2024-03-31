import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import CartIcon from "../carticon/CartIcon";
import logo from "../../images/ecom-logo.png";

const Header = () => {
  const itemCount = 0;

  return (
    <header class="mb-4">
      <Container>
        <Row className="align-items-center justify-content-between top-header">
          <Col xs="3" md="3" lg="2" className="logo-container">
            <Link to="/">
              <img src={logo} alt="E-Commerce Logo" className="logo" />
            </Link>
          </Col>
          <Col xs="6" md="6" lg="8" className="nav-links">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/#search" className="nav-link">
              Search
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </Col>
          <Col xs="3" md="3" lg="2" className="cart-container">
            <CartIcon itemCount={itemCount} />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
