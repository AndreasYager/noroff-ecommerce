import React from "react";
import "./CheckoutSuccess.css";
import logo from "../../images/ecom-logo.png";
import { Container, Row, Col } from "reactstrap";

const CheckoutSuccessPage = () => {
  return (
    <Container className="text-center">
      <Row>
        <Col className="success">
          <img
            src={logo}
            alt="E-Commerce Logo"
            style={{ width: "150px", height: "auto" }}
          />
          <h2 className="mt-3">Thank You for Your Purchase!</h2>
          <p>
            Your order has been successfully processed. We hope you enjoy your
            products!
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutSuccessPage;
