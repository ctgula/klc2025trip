'use client';

import { useDemoMode } from '@/context/DemoModeContext';
import { motion } from 'framer-motion';
import { demoMode as forceDemoMode } from '@/utils/supabase';

export default function DemoModeToggle() {
  const { isDemoMode, toggleDemoMode } = useDemoMode();
  
  return (
    <>
      {/* Status indicator pill */}
      <div className="absolute top-4 right-4 z-10">
        {(forceDemoMode || isDemoMode) ? (
          <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium flex items-center shadow-sm">
            <span className="mr-1">🔍</span> Demo Mode
          </div>
        ) : (
          <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium flex items-center shadow-sm">
            <span className="mr-1">🔎</span> Live (Supabase)
          </div>
        )}
      </div>
      
      {/* Toggle control - only show if not in forced demo mode */}
      {!forceDemoMode && (
        <div className="flex justify-center mb-4">
          <div className="bg-white rounded-full shadow-md p-1 flex items-center">
            <button
              onClick={toggleDemoMode}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                isDemoMode ? 'text-amber-800' : 'text-gray-500'
              }`}
              aria-pressed={isDemoMode}
            >
              <span className="relative z-10 flex items-center">
                <span className="mr-1">🔍</span> Demo
              </span>
              {isDemoMode && (
                <motion.div
                  layoutId="demoModeIndicator"
                  className="absolute inset-0 bg-amber-100 rounded-full"
                  style={{ zIndex: 0 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </button>
            
            <button
              onClick={toggleDemoMode}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                !isDemoMode ? 'text-blue-800' : 'text-gray-500'
              }`}
              aria-pressed={!isDemoMode}
            >
              <span className="relative z-10 flex items-center">
                <span className="mr-1">🔌</span> Live
              </span>
              {!isDemoMode && (
                <motion.div
                  layoutId="demoModeIndicator"
                  className="absolute inset-0 bg-blue-100 rounded-full"
                  style={{ zIndex: 0 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
