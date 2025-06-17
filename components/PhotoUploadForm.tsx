'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useSupabase } from '@/hooks/useSupabase';
import { useDemoMode } from '@/context/DemoModeContext';

interface PhotoUploadFormProps {
  onClose: () => void;
  onUploadSuccess: () => void;
}

export default function PhotoUploadForm({ onClose, onUploadSuccess }: PhotoUploadFormProps) {
  const [file, setFile] = useState<File | null>(null);
  const [caption, setCaption] = useState('');
  const [name, setName] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { isDemoMode } = useDemoMode();

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    
    if (!selectedFile) {
      return;
    }
    
    // Validate file type
    const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!validTypes.includes(selectedFile.type)) {
      setError('Please select a JPG, PNG, or WebP image.');
      return;
    }
    
    // Validate file size (5MB max)
    if (selectedFile.size > 5 * 1024 * 1024) {
      setError('File size must be less than 5MB.');
      return;
    }
    
    setFile(selectedFile);
    setError('');
  };

  // Get the uploadPhoto function from our custom hook
  const { uploadPhoto } = useSupabase();

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!file) {
      setError('Please select an image to upload.');
      return;
    }
    
    if (!caption.trim()) {
      setError('Please enter a caption for your photo.');
      return;
    }
    
    if (caption.length > 60) {
      setError('Caption must be 60 characters or less.');
      return;
    }
    
    try {
      setIsUploading(true);
      
      // Use the uploadPhoto function from our custom hook
      const result = await uploadPhoto(file, caption, name);
      
      if (!result.success) {
        throw new Error(result.error || 'Failed to upload photo');
      }
      
      // Reset form and notify parent component
      setFile(null);
      setCaption('');
      setName('');
      onUploadSuccess();
      
    } catch (error) {
      console.error('Error uploading photo:', error);
      setError('Failed to upload photo. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-xl shadow-xl max-w-md w-full p-6"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Share a Memory</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            disabled={isUploading}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          {/* File Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Photo
            </label>
            <div 
              className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50 transition"
              onClick={() => fileInputRef.current?.click()}
            >
              {file ? (
                <div className="flex flex-col items-center">
                  <div className="relative w-full h-48 mb-2">
                    <Image 
                      src={URL.createObjectURL(file)} 
                      alt="Preview" 
                      className="object-contain rounded-md"
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                  <p className="text-sm text-gray-600">{file.name}</p>
                </div>
              ) : (
                <div className="py-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-gray-500">Click to select a photo</p>
                  <p className="text-xs text-gray-400 mt-1">JPG, PNG, WebP (max 5MB)</p>
                </div>
              )}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept=".jpg,.jpeg,.png,.webp"
                className="hidden"
              />
            </div>
          </div>
          
          {/* Caption Input */}
          <div className="mb-4">
            <label htmlFor="caption" className="block text-sm font-medium text-gray-700 mb-1">
              Caption <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="caption"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              maxLength={60}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Describe your memory (max 60 chars)"
              required
            />
            <div className="text-xs text-gray-500 mt-1 text-right">
              {caption.length}/60
            </div>
          </div>
          
          {/* Name Input (Optional) */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Your Name <span className="text-gray-400">(optional)</span>
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Who shared this memory?"
            />
          </div>
          
          {/* Error Message */}
          {error && (
            <div className="mb-4 p-2 bg-red-50 text-red-600 text-sm rounded">
              {error}
            </div>
          )}
          
          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="btn btn-secondary mr-2"
              disabled={isUploading}
            >
              Cancel
            </button>
            {isDemoMode ? (
              <div className="relative group">
                <button
                  type="button"
                  className="btn bg-gray-400 text-white cursor-not-allowed"
                  disabled
                >
                  Upload Photo
                </button>
                <div className="absolute bottom-full mb-2 right-0 bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Uploads disabled in demo mode
                </div>
              </div>
            ) : (
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isUploading}
              >
                {isUploading ? (
                  <>
                    <span className="animate-spin inline-block h-4 w-4 border-t-2 border-b-2 border-white rounded-full mr-2"></span>
                    Uploading...
                  </>
                ) : 'Upload Photo'}
              </button>
            )}
          </div>
        </form>
      </motion.div>
    </div>
  );
}
