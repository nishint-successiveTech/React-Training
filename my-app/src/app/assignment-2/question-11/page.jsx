import Cart from "@/components/Assignment2/Cart";
import ProductList from "@/components/Assignment2/ProductList";
import { CartProvider } from "@/context/CartContext";
import React from "react";

const page = () => {
  return (
    <center>
      <CartProvider>
        <h2>Shopping Cart App</h2>
        <ProductList />
        <Cart />
      </CartProvider>
    </center>
  );
};

export default page;
