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
} from "reactstrap";
import { useCart } from "../context/CartContext";

const ProductPage = () => {
  const [product, setProduct] = useState(null);
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
      addToCart(product);
    }
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  const renderDiscount = (price, discountedPrice) => {
    if (discountedPrice < price) {
      const discount = ((price - discountedPrice) / price) * 100;
      return <CardText>Discount: {discount.toFixed(2)}% off</CardText>;
    }
    return null;
  };

  return (
    <Container>
      <Row>
        <Col md="6">
          <Card>
            <CardImg
              top
              width="100%"
              src={product.image?.url}
              alt={product.image?.alt || "Product Image"}
            />
          </Card>
        </Col>
        <Col md="6">
          <Card>
            <CardBody>
              <CardTitle tag="h1">{product.title}</CardTitle>
              <CardText>{product.description}</CardText>
              <CardText>Price: ${product.price.toFixed(2)}</CardText>
              {product.discountedPrice && (
                <CardText>
                  Discounted Price: ${product.discountedPrice.toFixed(2)}
                </CardText>
              )}
              {renderDiscount(product.price, product.discountedPrice)}
              <Button color="primary" onClick={handleAddToCart}>
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
