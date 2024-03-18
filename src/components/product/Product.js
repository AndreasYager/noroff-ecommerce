import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'; 


const Product = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.image.url} alt={product.image.alt} />
            <h2>{product.title}</h2>
            <p>Price: ${product.price.toFixed(2)}</p>
                            {product.discountedPrice < product.price && (
                                <p>Discounted Price: ${product.discountedPrice.toFixed(2)} (You save ${product.price - product.discountedPrice})</p>
                            )}
            {/* Add more product details if needed */}
            <Link to={`/product/${product.id}`}>View Product</Link>
        </div>
    );
};

export default Product;
