"use client"
import { LanguageContext } from '@/context/LanguageContext';
import React, { useContext } from 'react';


const LanguageSwitcher = () => {
  const { language, switchToEnglish, switchToSpanish } = useContext(LanguageContext);

  const content = {
    en: {
      greeting: 'Hello!',
      message: 'Welcome to our application.',
    },
    es: {
      greeting: '¡Hola!',
      message: 'Bienvenido a nuestra aplicación.',
    },
  };

  return (
    <div>
      <h2>{content[language].greeting}</h2>
      <p>{content[language].message}</p>
      <button onClick={switchToEnglish}>English</button>
      <button onClick={switchToSpanish}>Español</button>
    </div>
  );
};

export default LanguageSwitcher;
