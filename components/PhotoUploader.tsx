'use client';

import React, { useState, useRef } from 'react';
import { createClient } from '@supabase/supabase-js';
import toast from 'react-hot-toast';
import { useDemoMode } from '@/context/DemoModeContext';

// Types
// Note: FileObject interface is used for type consistency with StoragePhotoGallery
interface FileObject {
  name: string;
  size: number;
  type: string;
}

// Error type for better type safety
interface UploadError {
  message: string;
  status?: number;
}

const PhotoUploader = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { isDemoMode } = useDemoMode();
  
  // Initialize Supabase client
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
  const supabase = createClient(supabaseUrl, supabaseKey);
  
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    
    const file = files[0];
    
    // Validate file type
    if (!['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {
      toast.error('Please upload a JPG or PNG image');
      return;
    }
    
    // Validate file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      toast.error('File size must be less than 5MB');
      return;
    }
    
    // If in demo mode, just show a success message without uploading
    if (isDemoMode) {
      toast.success('Demo mode: Photo would be uploaded in live mode');
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }
    
    // Upload the file
    await uploadFile(file);
  };
  
  const uploadFile = async (file: File) => {
    setIsUploading(true);
    setUploadProgress(0);
    
    // Create a unique file name
    const timestamp = new Date().getTime();
    const fileExt = file.name.split('.').pop();
    const fileName = `${timestamp}-${Math.random().toString(36).substring(2, 15)}.${fileExt}`;
    
    try {
      // Upload with retry logic
      let attempts = 0;
      const maxAttempts = 3;
      let success = false;
      
      while (attempts < maxAttempts && !success) {
        attempts++;
        
        try {
          const { error } = await supabase.storage
            .from('photo-wall-uploads')
            .upload(fileName, file, {
              cacheControl: '3600',
              upsert: false,
            });
          
          if (error) throw error;
          success = true;
        } catch (err) {
          if (attempts >= maxAttempts) throw err;
          // Wait before retrying
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
        
        // Simulate upload progress
        const progress = Math.min(100, (attempts / maxAttempts) * 100);
        setUploadProgress(progress);
      }
      
      toast.success('Photo uploaded successfully!');
      
      // Reset the file input
      if (fileInputRef.current) fileInputRef.current.value = '';
      
    } catch (error: unknown) {
      const uploadError = error as UploadError;
      console.error('Error uploading file:', error);
      toast.error(`Upload failed: ${uploadError.message || 'Unknown error'}`);
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  };
  
  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  
  return (
    <div className="mb-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-center">Share Your Photos</h2>
      
      <div className="flex flex-col items-center">
        <input
          type="file"
          accept=".jpg,.jpeg,.png"
          onChange={handleFileChange}
          ref={fileInputRef}
          className="hidden"
          disabled={isUploading || isDemoMode}
        />
        
        <button
          onClick={handleButtonClick}
          disabled={isUploading}
          className={`px-6 py-3 rounded-md text-white font-medium transition-colors ${
            isUploading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
          }`}
        >
          {isUploading ? 'Uploading...' : 'Upload a Photo'}
        </button>
        
        {isUploading && (
          <div className="w-full max-w-md mt-4">
            <div className="bg-gray-200 rounded-full h-2.5 mt-2">
              <div
                className="bg-indigo-600 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-500 text-center mt-1">
              {uploadProgress}% complete
            </p>
          </div>
        )}
        
        <p className="text-sm text-gray-500 mt-4">
          JPG or PNG format, max 5MB
        </p>
      </div>
    </div>
  );
};

export default PhotoUploader;
