"use client";
import { useParams } from "next/navigation";
import Link from "next/link";

const products = [
  {
    id: "1",
    name: "iPhone 15 Pro",
    description: "Powerful and fast with A17 Pro.",
  },
  {
    id: "2",
    name: "MacBook Air M3",
    description: "Slim and efficient with M3 chip.",
  },
  {
    id: "3",
    name: "Apple Watch Ultra 2",
    description: "Adventure smartwatch.",
  },
];

export default function ProductDetail() {
  const { id } = useParams();

  const product = products.find((p) => p.id === id);

  if (!product) return <p>Product not found</p>;

  return (
    <div style={{ padding: "20px" }}>
      <center>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <Link href="/assignment-3/question-6/products">
          <button style={{ marginTop: "10px" }}>Go Back</button>
        </Link>
      </center>
    </div>
  );
}
