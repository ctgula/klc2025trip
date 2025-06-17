'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { demoMode as forceDemoMode } from '@/utils/supabase';

type DemoModeContextType = {
  isDemoMode: boolean;
  toggleDemoMode: () => void;
};

const DemoModeContext = createContext<DemoModeContextType | undefined>(undefined);

export function DemoModeProvider({ children }: { children: ReactNode }) {
  const [isDemoMode, setIsDemoMode] = useState(true); // Default to demo mode

  // Check if Supabase credentials are available on mount
  useEffect(() => {
    // If environment variables are missing, force demo mode
    if (forceDemoMode) {
      setIsDemoMode(true);
    } else {
      // If credentials exist, check localStorage for user preference
      const savedMode = localStorage.getItem('demoMode');
      setIsDemoMode(savedMode ? savedMode === 'true' : false);
    }
  }, []);

  const toggleDemoMode = () => {
    // Only allow toggling if not in forced demo mode
    if (!forceDemoMode) {
      const newMode = !isDemoMode;
      setIsDemoMode(newMode);
      localStorage.setItem('demoMode', String(newMode));
    }
  };

  return (
    <DemoModeContext.Provider value={{ isDemoMode, toggleDemoMode }}>
      {children}
    </DemoModeContext.Provider>
  );
}

export function useDemoMode() {
  const context = useContext(DemoModeContext);
  if (context === undefined) {
    throw new Error('useDemoMode must be used within a DemoModeProvider');
  }
  return context;
}
