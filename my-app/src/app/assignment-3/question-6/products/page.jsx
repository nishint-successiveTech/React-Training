"use client";
import Link from "next/link";

const products = [
  { id: "1", name: "iPhone 15 Pro" },
  { id: "2", name: "MacBook Air M3" },
  { id: "3", name: "Apple Watch Ultra 2" },
];

export default function ProductsPage() {
  return (
    <div style={{ padding: "20px" }}>
      <center>
        <h1>Product List</h1>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <Link href={`products/${product.id}`}>{product.name}</Link>
            </li>
          ))}
        </ul>
      </center>
    </div>
  );
}

