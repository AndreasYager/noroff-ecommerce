import React from "react";
import { useCart } from "../CartContext";
import CheckoutForm from "../components/CheckoutForm";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  const calculateTotal = (cartItems) => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  if (cart.length === 0) {
    return <p>Your cart is empty</p>;
  }

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>Price: ${product.price.toFixed(2)}</p>
          <p>Quantity: {product.quantity}</p>
          <button onClick={() => handleRemoveFromCart(product.id)}>
            Remove
          </button>
        </div>
      ))}
      <div>
        <div>
          <h3>Total: ${calculateTotal(cart).toFixed(2)}</h3>
          <CheckoutForm />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
