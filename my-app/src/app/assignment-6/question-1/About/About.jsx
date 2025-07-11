"use client";

import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  return (
    <div>
      <p>This is and About Page, </p>
      <button onClick={() => router.push("/assignment-6/question-1")}>
        Go back
      </button>
    </div>
  );
};
export default About;
