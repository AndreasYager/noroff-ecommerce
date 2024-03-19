import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams(); 

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProduct(data.data);
            } catch (error) {
                console.error('Failed to fetch product:', error);
            }
        };

        fetchProduct();
    }, [id]); 
    if (!product) {
        return <p>Loading...</p>; 
    }

    return (
        <div>
            <h1>{product.title}</h1>
            <img src={product.image.url} alt={product.image.alt} />
            <p>{product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            {product.discountedPrice < product.price && (
                <p>Discounted Price: ${product.discountedPrice.toFixed(2)}</p>
            )}
        </div>
    );
};

export default ProductPage;
