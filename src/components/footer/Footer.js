import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Footer.css";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
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
    <footer className="footer mt-4">
      <Container>
        <Row>
          <Col className="text-center">
            <nav className="footer-nav">
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
