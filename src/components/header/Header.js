import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import CartIcon from "../carticon/CartIcon";
import logo from "../../images/ecom-logo.png";
import contacticon from "../../images/contact-icon.png";
import "./Header.css";
import Search from "../Search";

const Header = () => {
  const itemCount = 0;

  return (
    <header>
      <Container className="mb-4">
        <Row className="align-items-center">
          {/* Logo */}
          <Col md="2" className="logo-container">
            <Link to="/">
              <img src={logo} alt="E-Commerce Logo" className="logo" />
            </Link>
          </Col>

          {/* Search Bar */}
          <Col md="8" className="search-bar-container">
            <Search />
          </Col>

          {/* Contact Link */}
          <Col md="1" className="text-center">
            <Link to="/contact">
              <img src={contacticon} alt="E-Commerce Logo" className="logo" />
            </Link>
          </Col>

          {/* Cart Icon */}
          <Col md="1" className="text-right cart-container">
            <CartIcon itemCount={itemCount} />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
