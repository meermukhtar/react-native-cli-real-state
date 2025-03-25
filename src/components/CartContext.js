import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    setCartItems((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + product.quantity,
              total: (item.quantity + product.quantity) * item.price,
            }
          : item
      );
  
      const isExisting = updatedCart.some((item) => item.id === product.id); // Check on updatedCart
  
      if (!isExisting) {
        updatedCart.push({ ...product, total: product.quantity * product.price });
      }
  
      return [...updatedCart]; // Return updated cart properly
    });
  };
  
  
  // Remove item from cart
  const removeFromCart = (id) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Update item quantity manually
  const updateQuantity = (id, newQuantity) => {
    setCartItems((prevCart) => 
      prevCart.map((item) => 
        item.id === id 
          ? { ...item, quantity: newQuantity, total: newQuantity * item.price }
          : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
