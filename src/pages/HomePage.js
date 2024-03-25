import React, { useState, useEffect } from 'react';
import Product from '../components/product/Product';
import { Container, Row, Col, Input, FormGroup } from 'reactstrap';

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [searchInput, setSearchInput] = useState('');

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

    const handleSearchChange = (event) => {
        setSearchInput(event.target.value);
    };

    const filteredProducts = searchInput
      ? products.filter(product =>
          product.title.toLowerCase().includes(searchInput.toLowerCase()))
      : products;

    return (
        <Container>
            <FormGroup>
                <Input
                    type="search"
                    value={searchInput}
                    onChange={handleSearchChange}
                    placeholder="Search Products"
                />
            </FormGroup>
            <h1>Our Products</h1>
            <Row>
                {Array.isArray(filteredProducts) && filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <Col sm="6" md="4" lg="3" key={product.id}>
                            <Product product={product} />
                        </Col>
                    ))
                ) : (
                    <Col>
                        <p>No products available.</p>
                    </Col>
                )}
            </Row>
        </Container>
    );
};

export default HomePage;
