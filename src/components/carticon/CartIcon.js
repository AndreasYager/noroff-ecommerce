import React from "react";
import { useCart } from "../../CartContext";
import "./CartIcon.css";
import { Link } from "react-router-dom";
import cartlogo from "../../images/ecom-cart.png";

const CartIcon = () => {
  const { cart } = useCart();
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-icon">
      <Link to="/cart">
        <img
          src={cartlogo}
          alt="Cart"
          style={{ maxWidth: "70px", height: "auto" }}
        />
      </Link>
      {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
    </div>
  );
};

export default CartIcon;
