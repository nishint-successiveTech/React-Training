import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <center>
        <h1>Welcome to the Home Page</h1>
        <Link href="question-5/dashboard">Go to Dashboard</Link>
      </center>
    </div>
  );
}

