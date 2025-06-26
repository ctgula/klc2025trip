'use client';

import React from 'react';
import { Toaster } from 'react-hot-toast';
import { useDemoMode } from '@/context/DemoModeContext';
import DemoModeToggle from './DemoModeToggle';

export default function SimplePhotoWall() {
  const { isDemoMode } = useDemoMode();
  
  return (
    <div className="container-custom py-10">
      <Toaster position="top-center" />
      
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Trip Memories</h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Share and browse photos from our Lancaster trip. Capture the moments that made this journey special!
        </p>
        
        {/* Demo Mode Toggle */}
        <DemoModeToggle />
      </div>

      {/* Upload Button */}
      <div className="flex justify-center mb-8">
        <button
          className="btn btn-primary flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Share a Memory
        </button>
      </div>

      {/* Simple Photo Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isDemoMode && (
          <>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Demo Image 1</p>
              </div>
              <div className="p-4">
                <p className="font-medium">Beautiful Amish countryside in Lancaster County</p>
                <p className="text-sm text-gray-500 mt-1">Shared by Sarah Johnson</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Demo Image 2</p>
              </div>
              <div className="p-4">
                <p className="font-medium">Amazing performance at Sight & Sound Theatre!</p>
                <p className="text-sm text-gray-500 mt-1">Shared by Michael Brown</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Demo Image 3</p>
              </div>
              <div className="p-4">
                <p className="font-medium">Shopping at the Tanger Outlets with friends</p>
              </div>
            </div>
          </>
        )}
        
        {!isDemoMode && (
          <div className="col-span-full text-center py-16 bg-gray-50 rounded-xl shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No photos yet</h3>
            <p className="text-gray-500 mb-6">Be the first to share a memory from our trip!</p>
            <button className="btn btn-primary">
              Share a Photo
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
