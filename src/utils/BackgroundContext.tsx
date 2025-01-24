import React, { createContext, useContext, useState } from "react";

// Create Context
const BackgroundContext = createContext<any>(null);

// Provider Component
export const BackgroundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bgColor, setBgColor] = useState("bg-transparent");

  return (
    <BackgroundContext.Provider value={{ bgColor, setBgColor }}>
      {children}
    </BackgroundContext.Provider>
  );
};

// Hook to use Context
export const useBackground = () => {
  const context = useContext(BackgroundContext);
  if (!context) {
    throw new Error("useBackground must be used within a BackgroundProvider");
  }
  return context;
};