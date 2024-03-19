import React from 'react';
import './Header.css'; 
import { Link } from 'react-router-dom';
import CartIcon from '../carticon/CartIcon';

const Header = () => {
    const itemCount = 0;
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">E-Commerce</Link> 
            </div>
            <nav className="nav-bar">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/contact">Contact</Link>
            </nav>
            <CartIcon itemCount={itemCount} />
        </header>
    );
};

export default Header;