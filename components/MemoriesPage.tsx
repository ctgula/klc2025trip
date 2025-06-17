'use client';

import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';
import { useSupabase } from '@/hooks/useSupabase';
import { useDemoMode } from '@/context/DemoModeContext';
import PhotoUploadForm from './PhotoUploadForm';
import PhotoGallery from './PhotoGallery';
import PhotoOfTheDay from './PhotoOfTheDay';
import DemoModeToggle from './DemoModeToggle';

// Define the Photo type
export type Photo = {
  id: string;
  url: string;
  caption: string;
  name?: string;
  created_at: string;
};

export default function MemoriesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Use our custom hooks for Supabase interactions and demo mode
  const { isLoading, photos, error } = useSupabase();
  const { isDemoMode } = useDemoMode();
  
  // Show appropriate toast messages on component mount
  useEffect(() => {
    if (isDemoMode) {
      toast("Demo mode — uploads disabled", { 
        icon: '🔍', 
        duration: 4000,
        style: {
          background: '#EFF6FF',
          color: '#1E40AF',
          border: '1px solid #BFDBFE'
        }
      });
    }
  }, [isDemoMode]);
  
  // Show error toast if there's an error from the hook
  if (error) {
    toast.error(error);
  }

  // Handle successful upload
  const handleUploadSuccess = () => {
    setIsModalOpen(false);
    toast.success('Photo uploaded successfully!');
    // No need to call fetchPhotos() as it's handled in the uploadPhoto function
  };

  return (
    <div className="container-custom py-10">
      <Toaster position="top-center" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Trip Memories</h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Share and browse photos from our Lancaster trip. Capture the moments that made this journey special!
        </p>
        
        {/* Demo Mode Toggle */}
        <DemoModeToggle />
      </motion.div>

      {/* Upload Button */}
      <div className="flex justify-center mb-8">
        <button
          onClick={() => setIsModalOpen(true)}
          className="btn btn-primary flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Share a Memory
        </button>
      </div>

      {/* Photo of the Day */}
      {photos.length > 0 && <PhotoOfTheDay photo={photos[0]} />}

      {/* Photo Gallery */}
      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : photos.length > 0 ? (
        <PhotoGallery photos={photos} />
      ) : (
        <div className="text-center py-16 bg-gray-50 rounded-xl shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No photos yet</h3>
          <p className="text-gray-500 mb-6">Be the first to share a memory from our trip!</p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn btn-primary"
          >
            Share a Photo
          </button>
        </div>
      )}

      {/* Upload Modal */}
      {isModalOpen && (
        <PhotoUploadForm
          onClose={() => setIsModalOpen(false)}
          onUploadSuccess={handleUploadSuccess}
        />
      )}
    </div>
  );
}
