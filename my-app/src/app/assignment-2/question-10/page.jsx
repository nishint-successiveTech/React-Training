import LanguageSwitcher from "@/components/Assignment2/LanguageSwitcher";
import { LanguageProvider } from "@/context/LanguageContext";
import React from "react";

const page = () => {
  return (
    <center>
      <LanguageProvider>
        <LanguageSwitcher />
      </LanguageProvider>
    </center>
  );
};

export default page;
