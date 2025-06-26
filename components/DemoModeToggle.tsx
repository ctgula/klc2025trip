'use client';

import React from 'react';
import { useDemoMode } from '@/context/DemoModeContext';

const DemoModeToggle = () => {
  const { isDemoMode, toggleDemoMode } = useDemoMode();

  return (
    <div className="flex items-center justify-center space-x-2 mb-4">
      <span className="text-sm text-gray-600">
        {isDemoMode ? 'Demo Mode: On' : 'Demo Mode: Off'}
      </span>
      <button
        onClick={toggleDemoMode}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
          isDemoMode ? 'bg-indigo-600' : 'bg-gray-200'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            isDemoMode ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
      <span className="text-xs text-gray-500">
        {isDemoMode ? 'Using sample data' : 'Using live data'}
      </span>
    </div>
  );
};

export default DemoModeToggle;
