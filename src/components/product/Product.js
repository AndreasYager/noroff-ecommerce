import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";
import "./Product.css";

const Product = ({ product }) => {
  return (
    <Card className="product-card">
      <CardImg
        top
        width="100%"
        src={product.image.url}
        alt={product.image.alt}
      />
      <CardBody>
        <CardTitle tag="h5">{product.title}</CardTitle>
        {product.discountedPrice < product.price ? (
          <CardText>
            <span className="original-price">${product.price.toFixed(2)}</span>{" "}
            <span className="discounted-price">
              ${product.discountedPrice.toFixed(2)}
            </span>
          </CardText>
        ) : (
          <CardText>Price: ${product.price.toFixed(2)}</CardText>
        )}
        <Button color="primary" tag={Link} to={`/product/${product.id}`}>
          View Product
        </Button>
      </CardBody>
    </Card>
  );
};

export default Product;
