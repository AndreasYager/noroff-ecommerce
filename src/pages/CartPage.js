import React from "react";
import { useCart } from "../context/CartContext";
import CheckoutForm from "../components/CheckoutForm";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
} from "reactstrap";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  const calculateTotal = (cartItems) => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  if (cart.length === 0) {
    return (
      <Container>
        <Col className="text-center">
          <p>Your cart is empty</p>
        </Col>
      </Container>
    );
  }

  return (
    <Container>
      <Row>
        <Col>
          <h2>Your Cart</h2>
          {cart.map((product) => (
            <Card key={product.id} className="mb-3">
              <Row noGutters>
                <Col md="2" className="p-2">
                  {" "}
                  <CardImg
                    top
                    src={product.image.url}
                    alt={product.image.alt}
                    style={{ width: "100%", height: "auto" }}
                  />
                </Col>
                <Col md="8">
                  <CardBody>
                    <CardTitle tag="h5">{product.title}</CardTitle>
                    <CardText>Price: ${product.price.toFixed(2)}</CardText>
                    <CardText>Quantity: {product.quantity}</CardText>
                    <Button
                      color="danger"
                      onClick={() => handleRemoveFromCart(product.id)}
                    >
                      Remove
                    </Button>
                  </CardBody>
                </Col>
              </Row>
            </Card>
          ))}
          <div>
            <h3>Total: ${calculateTotal(cart).toFixed(2)}</h3>
            <CheckoutForm />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
