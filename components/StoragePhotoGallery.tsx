'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { createClient } from '@supabase/supabase-js';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { useDemoMode } from '@/context/DemoModeContext';

// Types
interface Photo {
  id: string;
  name: string;
  url: string;
  createdAt: string;
}

interface FileObject {
  id: string;
  name: string;
  created_at: string;
}

// Demo photos for demo mode
const DEMO_PHOTOS = [
  {
    id: 'demo-1',
    name: 'lancaster-amish-country.jpg',
    url: 'https://images.unsplash.com/photo-1605806616949-1e87b487fc2f',
    createdAt: new Date(2025, 5, 20).toISOString(),
  },
  {
    id: 'demo-2',
    name: 'lancaster-downtown.jpg',
    url: 'https://images.unsplash.com/photo-1595356700395-6f14b5ea4fce',
    createdAt: new Date(2025, 5, 21).toISOString(),
  },
  {
    id: 'demo-3',
    name: 'lancaster-farm.jpg',
    url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef',
    createdAt: new Date(2025, 5, 22).toISOString(),
  },
];

// Error types for better type safety
interface StorageError {
  message: string;
  status?: number;
}

// Placeholder SVG path for when images fail to load
const placeholderSvgPath = "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z";

const StoragePhotoGallery = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { isDemoMode } = useDemoMode();
  
  // Initialize Supabase client
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
  const supabase = createClient(supabaseUrl, supabaseKey);
  
  // Fetch photos from Supabase storage
  const fetchPhotos = useCallback(async () => {
    if (isDemoMode) {
      setPhotos(DEMO_PHOTOS);
      setIsLoading(false);
      return;
    }
    
    setIsLoading(true);
    
    try {
      // List files in the bucket with retry logic
      let attempts = 0;
      const maxAttempts = 3;
      let data = null;
      let error = null;
      
      while (attempts < maxAttempts && !data && !error) {
        attempts++;
        
        const result = await supabase.storage
          .from('photo-wall-uploads')
          .list();
        
        if (result.error) {
          error = result.error;
          // Wait before retrying
          await new Promise(resolve => setTimeout(resolve, 1000));
        } else {
          data = result.data;
        }
      }
      
      if (error) throw error;
      if (!data) throw new Error('Failed to fetch photos');
      
      // Transform file objects to photo objects
      const photoPromises = data.map(async (file: FileObject) => {
        // Add cache-busting parameter to prevent caching issues
        const cacheBuster = `?t=${new Date().getTime()}`;
        
        // Get public URL with retry logic
        let attempts = 0;
        const maxAttempts = 3;
        let publicUrl = '';
        
        while (attempts < maxAttempts && !publicUrl) {
          attempts++;
          
          try {
            const { data } = supabase.storage
              .from('photo-wall-uploads')
              .getPublicUrl(file.name);
            
            publicUrl = data.publicUrl + cacheBuster;
          } catch (error) {
            if (attempts >= maxAttempts) throw error;
            // Wait before retrying
            await new Promise(resolve => setTimeout(resolve, 1000));
          }
        }
        
        return {
          id: file.id,
          name: file.name,
          url: publicUrl,
          createdAt: file.created_at,
        };
      });
      
      const photoResults = await Promise.all(photoPromises);
      
      // Sort by creation date (newest first)
      const sortedPhotos = photoResults.sort((a, b) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      
      setPhotos(sortedPhotos);
    } catch (error: unknown) {
      console.error('Error fetching photos:', error);
      toast.error(`Failed to load photos: ${(error as StorageError).message || 'Unknown error'}`);
      setPhotos([]);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  }, [isDemoMode, supabase]);
  
  // Refresh photos
  const handleRefresh = () => {
    setIsRefreshing(true);
    fetchPhotos();
  };
  
  // Delete a photo
  const handleDelete = async (photo: Photo) => {
    if (isDemoMode) {
      toast.success('Demo mode: Photo would be deleted in live mode');
      // Remove from local state in demo mode
      setPhotos(photos.filter(p => p.id !== photo.id));
      return;
    }
    
    // Show confirmation dialog
    if (!window.confirm('Are you sure you want to delete this photo?')) {
      return;
    }
    
    try {
      const { error } = await supabase.storage
        .from('photo-wall-uploads')
        .remove([photo.name]);
      
      if (error) throw error;
      
      toast.success('Photo deleted successfully');
      
      // Remove from local state
      setPhotos(photos.filter(p => p.id !== photo.id));
    } catch (error: unknown) {
      console.error('Error deleting photo:', error);
      toast.error(`Failed to delete photo: ${(error as StorageError).message || 'Unknown error'}`);
    }
  };
  
  // Copy photo URL to clipboard
  const handleCopyLink = (photo: Photo) => {
    navigator.clipboard.writeText(photo.url)
      .then(() => toast.success('Photo link copied to clipboard'))
      .catch(err => toast.error('Failed to copy link'));
  };
  
  // Load photos on component mount and when demo mode changes
  useEffect(() => {
    fetchPhotos();
  }, [isDemoMode, fetchPhotos]);
  
  return (
    <div className="mb-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Photo Gallery</h2>
        <button
          onClick={handleRefresh}
          disabled={isLoading || isRefreshing}
          className="flex items-center px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
        >
          <svg
            className={`w-4 h-4 mr-1 ${isRefreshing ? 'animate-spin' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            ></path>
          </svg>
          {isRefreshing ? 'Refreshing...' : 'Refresh'}
        </button>
      </div>
      
      {isLoading && !isRefreshing ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
        </div>
      ) : photos.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            ></path>
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">No photos yet</h3>
          <p className="mt-1 text-sm text-gray-500">
            Upload your first photo to get started!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="relative bg-white rounded-lg shadow-md overflow-hidden group"
            >
              <div className="aspect-w-1 aspect-h-1 w-full">
                <Image
                  src={photo.url}
                  alt={photo.name}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    // Replace with placeholder on error
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.appendChild(
                      document.createElement('div')
                    ).outerHTML = '<div class="absolute inset-0"><div class="bg-gray-200 rounded-lg flex items-center justify-center h-full w-full"><svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></div></div>';
                  }}
                />
              </div>
              
              {/* Photo actions */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleCopyLink(photo)}
                    className="p-2 bg-white rounded-full hover:bg-gray-100"
                    title="Copy link"
                  >
                    <svg
                      className="w-5 h-5 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                      ></path>
                    </svg>
                  </button>
                  <button
                    onClick={() => handleDelete(photo)}
                    className="p-2 bg-white rounded-full hover:bg-gray-100"
                    title="Delete photo"
                  >
                    <svg
                      className="w-5 h-5 text-red-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="p-2 text-xs text-gray-500 truncate">
                {new Date(photo.createdAt).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StoragePhotoGallery;
