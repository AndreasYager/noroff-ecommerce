import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import CartIcon from "../carticon/CartIcon";
import logo from "../../images/ecom-logo.png";
import contactIcon from "../../images/contact-icon.png";
import "./Header.css";
import Search from "../Search";

const Header = () => {
  const itemCount = 0;

  return (
    <header>
      <Container className="mb-4">
        {/* Larger */}
        <Row className="align-items-center d-none d-lg-flex">
          {/* Logo */}
          <Col lg="2" className="logo-container">
            <Link to="/">
              <img
                src={logo}
                alt="YAGERS E-Commerce Logo"
                style={{ maxWidth: "70px", height: "auto" }}
              />
            </Link>
          </Col>

          {/* Search Bar */}
          <Col lg="8" className="search-bar-container">
            <Search />
          </Col>

          {/* Contact and Cart Icons */}
          <Col lg="1" className="text-center">
            <Link to="/contact">
              <img
                src={contactIcon}
                alt="Contact"
                style={{ maxWidth: "70px", height: "auto" }}
              />
            </Link>
          </Col>
          <Col lg="1" className="text-lg-right cart-container">
            <CartIcon itemCount={itemCount} />
          </Col>
        </Row>

        {/* Smaller screens */}
        <Row className="d-lg-none">
          {/* Logo */}
          <Col xs="4" className="text-center">
            <Link to="/">
              <img
                src={logo}
                alt="E-Commerce Logo"
                className="img-fluid logo"
              />
            </Link>
          </Col>

          {/* Contact Icon */}
          <Col xs="4" className="text-center">
            <Link to="/contact">
              <img
                src={contactIcon}
                alt="Contact"
                style={{ maxWidth: "70px", height: "auto" }}
              />
            </Link>
          </Col>

          {/* Cart Icon */}
          <Col xs="4" className="text-center">
            <CartIcon itemCount={itemCount} />
          </Col>
        </Row>

        {/* Search Bar for smaller screens */}
        <Row className="d-lg-none">
          <Col xs="12 pb-3" className="search-bar-container">
            <Search />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
