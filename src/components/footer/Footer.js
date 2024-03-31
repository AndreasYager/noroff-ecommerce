import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <footer className="footer mt-4">
      <Container>
        <Row>
          <Col className="text-center">
            <nav className="footer-nav">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/#search" className="nav-link">
                Search
              </Link>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </nav>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <div className="footer-info">
              <p>
                &copy; {new Date().getFullYear()} Noroff E-Commerce. All rights
                reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
