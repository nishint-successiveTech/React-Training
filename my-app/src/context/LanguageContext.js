"use client";

import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const switchToEnglish = () => setLanguage("en");
  const switchToSpanish = () => setLanguage("es");

  return (
    <LanguageContext.Provider
      value={{ language, switchToEnglish, switchToSpanish }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

