import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Input } from 'reactstrap';
import CartIcon from '../carticon/CartIcon';
import logo from '../../images/ecom-logo.png';

const Header = () => {
  const itemCount = 0;


  return (
    <header>
      <Container>
        <Row className="align-items-center justify-content-between top-header">
          <Col xs="3" md="3" lg="2" className="logo-container">
            <Link to="/">
              <img src={logo} alt="E-Commerce Logo" className="logo" />
            </Link>
          </Col>
          <Col xs="5" md="5" lg="7" className="search-bar">
            <Form onSubmit={handleSearchSubmit} className="search-form">
              <Input
                type="search"
                name="search"
                id="searchInput"
                placeholder="Search Anything"
                value={searchInput}
                onChange={handleSearchChange}
                className="search-input"
              />
            </Form>
          </Col>
          <Col xs="2" md="2" lg="2" className="nav-link-container">
            <Link to="/about" className="nav-link">About</Link>
          </Col>
          <Col xs="2" md="2" lg="1" className="cart-container">
            <CartIcon itemCount={itemCount} />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
