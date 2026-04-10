"use client"

import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
      .filter((item) => item.quantity > 0)
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };



  const subtotal  = cart.reduce(
    (total, item) => total + item.price * item.quantity, 0
  );

  const gst = Math.round(subtotal * 0.18);
  const dilivery = subtotal > 50000 ? 0 : 2000;
  const total = subtotal + gst + dilivery;

    const totalitems = cart.reduce(
    (total, item) => {
      total + item.quantity
    }, 0
  )

  return (
    <CartContext.Provider 
      value={{ cart, addToCart, increaseQty, decreaseQty, removeItem, subtotal,gst, dilivery, total, totalitems }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);