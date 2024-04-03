import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Col,
  Button,
  Input,
} from "reactstrap";
import { useCart } from "../../context/CartContext";
import "./ProductPage.css";

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://v2.api.noroff.dev/online-shop/${id}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProduct(data.data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
    }
  };

  const renderDiscount = (price, discountedPrice) => {
    if (discountedPrice < price) {
      const discount = ((price - discountedPrice) / price) * 100;
      return <CardText>Discount: {discount.toFixed(2)}% off</CardText>;
    }
    return null;
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <Row>
        <Col md="6" className="d-flex">
          <Card className="flex-grow-1">
            <CardImg
              top
              width="100%"
              src={product.image?.url}
              alt={product.image?.alt || "Product Image"}
              className="img-fluid"
              style={{ maxHeight: "400px" }}
            />
          </Card>
        </Col>
        <Col md="6" className="d-flex">
          <Card className="flex-grow-1" style={{ maxHeight: "400px" }}>
            <CardBody className="d-flex flex-column">
              <CardTitle tag="h1">{product.title}</CardTitle>
              <CardText>{product.description}</CardText>
              <CardText>Price: ${product.price.toFixed(2)}</CardText>
              {product.discountedPrice && (
                <CardText>
                  Discounted Price: ${product.discountedPrice.toFixed(2)}
                </CardText>
              )}
              {renderDiscount(product.price, product.discountedPrice)}
              <Input
                type="select"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
              >
                {[...Array(10).keys()].map((n) => (
                  <option key={n + 1} value={n + 1}>
                    {n + 1}
                  </option>
                ))}
              </Input>
              <Button
                color="primary"
                onClick={handleAddToCart}
                className="mt-auto"
              >
                Add to Cart
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
