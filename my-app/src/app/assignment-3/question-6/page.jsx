'use client';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div style={{ padding: '20px' }}>
        <center>
      <h1>Welcome to Product App</h1>
      <Link href="question-6/products">
        <button style={{ marginTop: '10px' }}>Go to Products</button>
      </Link>
      </center>
    </div>
  );
}
