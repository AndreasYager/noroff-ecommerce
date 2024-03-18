import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            <nav className="footer-nav">
                {/* Footer navigation links */}
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/contact">Contact</Link>
                {/* Add other links as needed */}
            </nav>
            <div className="footer-info">
                <p>&copy; {new Date().getFullYear()} Noroff E-Commerce. All rights reserved.</p>
                {/* Add any additional info you want here */}
            </div>
        </footer>
    );
};

export default Footer;
