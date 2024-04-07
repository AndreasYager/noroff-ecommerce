import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import "./Footer.css";
import logo from "../../images/ecom-logo.png"; // Update with your actual logo path
import contactIcon from "../../images/contact-icon.png"; // Update with your actual contact icon path
import cartIcon from "../../images/ecom-cart.png"; // Update with your actual cart icon path

const Footer = () => {
  return (
    <footer className="footer mt-4">
      <Container>
        <Row className="text-center justify-content-center align-items-center">
          {/* Home Icon */}
          <Col xs="true" md="auto">
            <Link to="/" className="footer-icon-link">
              <img src={logo} alt="Home" className="footer-icon" />
            </Link>
          </Col>

          {/* Contact Icon */}
          <Col xs="true" md="auto">
            <Link to="/contact" className="footer-icon-link">
              <img src={contactIcon} alt="Contact" className="footer-icon" />
            </Link>
          </Col>

          {/* Cart Icon */}
          <Col xs="true" md="auto">
            <Link to="/cart" className="footer-icon-link">
              <img src={cartIcon} alt="Cart" className="footer-icon" />
            </Link>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <div className="footer-info">
              <p>
                &copy; {new Date().getFullYear()} YAGERS. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
