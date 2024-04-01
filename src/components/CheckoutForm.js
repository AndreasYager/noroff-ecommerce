import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
  Form,
  FormFeedback,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import { useCart } from "../CartContext";

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { clearCart } = useCart();

  const validateForm = () => {
    let tempErrors = {};
    tempErrors.name =
      formData.name.length > 2 ? "" : "Name must have at least 3 characters.";
    tempErrors.email = /^\S+@\S+\.\S+$/.test(formData.email)
      ? ""
      : "Email must be a valid email address.";
    tempErrors.address = formData.address ? "" : "Address is required.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Checkout Data:", formData);
      clearCart();
      navigate("/checkout-success");
    }
  };

  return (
    <Container>
      <Row>
        <Col md={{ size: 6, offset: 3 }}>
          <h2>Checkout</h2>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                invalid={!!errors.name}
              />
              <FormFeedback>{errors.name}</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                invalid={!!errors.email}
              />
              <FormFeedback>{errors.email}</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label for="address">Address</Label>
              <Input
                type="address"
                name="address"
                id="address"
                value={formData.address}
                onChange={handleChange}
                invalid={!!errors.address}
              />
              <FormFeedback>{errors.address}</FormFeedback>
            </FormGroup>
            <Button color="primary" type="submit">
              Checkout
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutForm;
