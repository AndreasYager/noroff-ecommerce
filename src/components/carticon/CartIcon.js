import React from 'react';
import './CartIcon.css'; 
import { Link } from 'react-router-dom';


const CartIcon = ({ itemCount }) => {
    return (
        <div className="cart-icon">
            <Link to="/cart">Cart</Link>      
            <span className="cart-count">{itemCount}</span>
        </div>
    );
};

export default CartIcon;
