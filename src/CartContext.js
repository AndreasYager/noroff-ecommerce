import React, { createContext, useState, useContext } from "react";

// Creating a cart context
const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((currentCart) => {
      // Check if the product is already in the cart
      const productExists = currentCart.find((item) => item.id === product.id);
      let newCart;
      if (productExists) {
        // Increase the quantity if it's already there
        newCart = currentCart.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        // Add the new product with a quantity of 1
        newCart = [...currentCart, { ...product, quantity: 1 }];
      }
      alert(`${product.title} has been added to your cart.`);
      return newCart;
    });
  };

  // Function to remove items from the cart
  const removeFromCart = (productId) => {
    setCart((currentCart) => {
      return currentCart.filter((item) => item.id !== productId);
    });
  };

  // Function to clear the cart
  const clearCart = () => {
    setCart([]);
  };

  // Providing cart, addToCart, removeFromCart, and clearCart through context
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
