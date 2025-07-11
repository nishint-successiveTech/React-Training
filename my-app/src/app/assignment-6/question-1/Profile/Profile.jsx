"use client";

import { useRouter } from "next/navigation";

const Profile = () => {
  const router = useRouter();
  return (
    <div>
      <p>This is and Profile Page</p>
      <button onClick={()=>router.push("/assignment-6/question-1")}>Go back</button>
    </div>
  );
};
export default Profile;
