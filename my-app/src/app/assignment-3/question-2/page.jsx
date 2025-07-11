import ChildComponent from "@/components/Assignment3/ChildComponent";
import ChildComponent2 from "@/components/Assignment3/ChildComponent2";
import { AuthProvider } from "@/components/Assignment3/context/AuthContext";
import { ThemeProvider } from "@/components/Assignment3/context/ThemeContext";
import React from "react";

const page = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <ChildComponent2 />
      </ThemeProvider>
    </AuthProvider>
  );
};

export default page;

