import React from 'react';
import './CartIcon.css'; 
import { Link } from 'react-router-dom';
import cartlogo from '../../images/ecom-cart.png'


const CartIcon = ({ itemCount }) => {
    return (
        <div className="cart-icon">
            <Link to="/cart">
                <img src={cartlogo} alt="Cart" style={{ maxWidth: '70px', height: 'auto' }} />
            </Link>      
            {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
        </div>
    );
};

export default CartIcon;
