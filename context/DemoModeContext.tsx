'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the context type
type DemoModeContextType = {
  isDemoMode: boolean;
  toggleDemoMode: () => void;
};

// Create the context with default values
const DemoModeContext = createContext<DemoModeContextType>({
  isDemoMode: false,
  toggleDemoMode: () => {},
});

// Custom hook to use the demo mode context
export const useDemoMode = () => useContext(DemoModeContext);

// Provider component
export const DemoModeProvider = ({ children }: { children: ReactNode }) => {
  const [isDemoMode, setIsDemoMode] = useState(false);

  const toggleDemoMode = () => {
    setIsDemoMode((prev) => !prev);
  };

  return (
    <DemoModeContext.Provider value={{ isDemoMode, toggleDemoMode }}>
      {children}
    </DemoModeContext.Provider>
  );
};
