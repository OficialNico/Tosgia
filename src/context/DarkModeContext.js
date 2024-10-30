import React, { createContext, useState } from 'react';

// Crear el contexto
export const DarkModeContext = createContext();

// Proveedor del modo oscuro
export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const resetDarkMode = () => {
    setIsDarkMode(false);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode, resetDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
