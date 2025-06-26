'use client';

import React from 'react';
import { Toaster } from 'react-hot-toast';
import { useDemoMode } from '../../context/DemoModeContext';
import DemoModeToggle from '../../components/DemoModeToggle';
import StoragePhotoGallery from '../../components/StoragePhotoGallery';
import PhotoUploader from '../../components/PhotoUploader';

export default function PhotoWallPage() {
  // Use the demo mode context to ensure the hook is used
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

      {/* Photo Uploader Component */}
      <PhotoUploader />

      {/* Photo Gallery Component */}
      <StoragePhotoGallery />
    </div>
  );
}
