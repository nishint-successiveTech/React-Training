"use client";
import { CartContext } from "@/context/CartContext";
import React, { useContext } from "react";

const products = [
  { id: 1, name: "Apple", price: 2 },
  { id: 2, name: "Banana", price: 1 },
  { id: 3, name: "Orange", price: 3 },
];

const ProductList = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <h3>Products</h3>
      {products.map((product) => (
        <div key={product.id}>
          {product.name} - ${product.price}{" "}
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
