"use client"

import { ThemeContext } from '@/context/ThemeContext';
import React, { useContext } from 'react';


const ThemedComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const styles = {
    light: {
      backgroundColor: '#fff',
      color: '#000',
      padding: '20px',
    },
    dark: {
      backgroundColor: '#222',
      color: '#fff',
      padding: '20px',
    },
  };

  return (
    <div style={styles[theme]}>
      <h2>Current Theme: {theme}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemedComponent;
