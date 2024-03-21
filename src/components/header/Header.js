import React from 'react';
import './Header.css'; 
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import CartIcon from '../carticon/CartIcon';

const Header = () => {
    const itemCount = 0;
    return (
      <header>
        <Container>
          <Row className="align-items-center">
            <Col xs="2" className="text-start">
              <div className="logo">
                <Link to="/">E-Commerce</Link> 
              </div>
            </Col>
            <Col xs="8" className="text-center">
              <nav className="nav-bar">
                <Link to="/" className="mx-5">Home</Link>
                <Link to="/products" className="mx-5">Products</Link>
                <Link to="/contact" className="mx-5">Contact</Link>
              </nav>
            </Col>
            <Col xs="2" className="text-end">
              <CartIcon itemCount={itemCount} />
            </Col>
          </Row>
        </Container>
      </header>
    );
  };

export default Header;