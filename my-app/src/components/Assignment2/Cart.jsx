"use client";
import { CartContext } from "@/context/CartContext";
import React, { useContext } from "react";

const Cart = () => {
  const { cart, removeFromCart, total } = useContext(CartContext);

  return (
    <div>
      <h3>Shopping Cart</h3>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            {item.name} - ${item.price}{" "}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
      <h4>Total: ${total}</h4>
    </div>
  );
};

export default Cart;

