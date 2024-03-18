import React from 'react';
import './Header.css'; 
import { Link } from 'react-router-dom';
import CartIcon from '../carticon/CartIcon';

const Header = () => {
    const itemCount = 0;
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">E-Commerce</Link> {/* Replace with your logo or store name */}
            </div>
            <nav className="nav-bar">
                {/* Navigation items, can be replaced with React Router Links if using React Router */}
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/contact">Contact</Link>
                {/* More navigation items as needed */}
            </nav>
            <CartIcon itemCount={itemCount} />
        </header>
    );
};

export default Header;