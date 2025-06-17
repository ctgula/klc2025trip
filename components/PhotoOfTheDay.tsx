'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Photo } from './MemoriesPage';

interface PhotoOfTheDayProps {
  photo: Photo;
}

export default function PhotoOfTheDay({ photo }: PhotoOfTheDayProps) {
  const [isLiked, setIsLiked] = useState(false);

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };

  return (
    <motion.div 
      className="col-span-full mb-8 bg-white rounded-xl shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="md:flex">
        <div className="md:w-1/2 relative">
          {/* Pulse animation around the image */}
          <div className="absolute inset-0 rounded-xl pulse-animation"></div>
          
          <img 
            src={photo.url} 
            alt={photo.caption}
            className="w-full h-64 md:h-full object-cover"
          />
        </div>
        
        <div className="p-6 md:w-1/2 flex flex-col">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">Photo of the Day</h3>
              <p className="text-sm text-gray-500 mb-4">{formatDate(photo.created_at)}</p>
            </div>
            
            <button 
              onClick={() => setIsLiked(!isLiked)}
              className="text-gray-500 hover:text-red-500 transition"
              aria-label={isLiked ? "Unlike" : "Like"}
            >
              {isLiked ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              )}
            </button>
          </div>
          
          <p className="text-gray-800 text-lg font-medium mb-2">{photo.caption}</p>
          
          {photo.name && (
            <p className="text-gray-600">Shared by {photo.name}</p>
          )}
          
          <div className="mt-auto">
            <div className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
              Latest Memory
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
