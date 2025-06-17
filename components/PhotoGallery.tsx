'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Photo } from './MemoriesPage';

interface PhotoGalleryProps {
  photos: Photo[];
}

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
  // State to track liked photos (client-side only)
  const [likedPhotos, setLikedPhotos] = useState<Record<string, boolean>>({});

  // Toggle like status for a photo
  const toggleLike = (id: string) => {
    setLikedPhotos(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Animation variants for gallery items
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="grid grid-cols-2 sm:grid-cols-3 gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {photos.slice(1).map((photo) => (
        <motion.div 
          key={photo.id}
          className="bg-white rounded-xl shadow overflow-hidden"
          variants={itemVariants}
          transition={{ duration: 0.3 }}
        >
          {/* Photo */}
          <div className="aspect-square relative overflow-hidden">
            <img 
              src={photo.url} 
              alt={photo.caption}
              className="w-full h-full object-cover rounded-t-xl"
              loading="lazy"
            />
          </div>
          
          {/* Caption and Like Button */}
          <div className="p-3">
            <p className="text-gray-800 font-medium truncate">{photo.caption}</p>
            
            {photo.name && (
              <p className="text-sm text-gray-500 mt-1">Shared by {photo.name}</p>
            )}
            
            <div className="flex justify-end mt-2">
              <button 
                onClick={() => toggleLike(photo.id)}
                className="flex items-center text-sm text-gray-500 hover:text-red-500 transition"
                aria-label={likedPhotos[photo.id] ? "Unlike" : "Like"}
              >
                {likedPhotos[photo.id] ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
