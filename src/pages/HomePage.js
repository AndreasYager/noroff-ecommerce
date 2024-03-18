import React, { useState, useEffect } from 'react';
import Product from '../components/product/Product'; 

const HomePage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://v2.api.noroff.dev/online-shop');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const json = await response.json();
                setProducts(json.data);
            } catch (error) {
                console.error('Failed to fetch products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Our Products</h1>
            <div>
                {Array.isArray(products) && products.length > 0 ? (
                    products.map(product => (
                        <Product key={product.id} product={product} />
                    ))
                ) : (
                    <p>No products available.</p>
                )}
            </div>
        </div>
    );
};


export default HomePage;
