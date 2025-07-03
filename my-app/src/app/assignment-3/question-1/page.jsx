import ChildComponent from "@/components/Assignment3/ChildComponent";
import { AuthProvider } from "@/components/Assignment3/context/AuthContext";
import React from "react";

const page = () => {
  return (
    <AuthProvider>
      <center>
        <ChildComponent />
      </center>
    </AuthProvider>
  );
};

export default page;
