import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import { Container, Row, Col } from "reactstrap";
import CartIcon from "../carticon/CartIcon";
import logo from "../../images/ecom-logo.png";

const Header = () => {
  const itemCount = 0;
  const location = useLocation();

  const scrollToSearch = () => {
    if (location.pathname === "/") {
      const searchElement = document.getElementById("search");
      if (searchElement) {
        searchElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = "/#search";
    }
  };

  return (
    <header className="mb-4">
      <Container>
        <Row className="align-items-center justify-content-between top-header">
          <Col xs="3" md="3" lg="2" className="logo-container">
            <Link to="/">
              <img src={logo} alt="E-Commerce Logo" className="logo" />
            </Link>
          </Col>
          <Col xs="6" md="6" lg="8" className="nav-links">
            <Link
              to="/"
              className="nav-link"
              onClick={() => window.scrollTo(0, 0)}
            >
              Home
            </Link>
            <Link to="/" className="nav-link" onClick={scrollToSearch}>
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
