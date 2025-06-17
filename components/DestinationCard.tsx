'use client';

import { ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ImageFallback from './ImageFallback';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface DestinationCardProps {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  children?: ReactNode;
  emoji?: string;
}

const DestinationCard = ({ 
  title, 
  description, 
  imageSrc, 
  imageAlt = "Destination image",
  children,
  emoji = "🏙️"
}: DestinationCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Default placeholder image if none provided or if the image fails to load
  // Using direct placeholder URLs for better reliability
  const fallbackImage = `https://placehold.co/600x400/e2e8f0/64748b?text=${encodeURIComponent(title)}`;
  
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md overflow-hidden mb-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      layout
    >
      {/* Card Header - Always visible */}
      <div 
        className="flex items-center cursor-pointer p-4 border-b border-gray-100"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 mr-3 flex-shrink-0">
          <span className="text-xl">{emoji}</span>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-600 line-clamp-1">{description}</p>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          className="text-blue-500 flex-shrink-0"
        >
          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </motion.div>
      </div>
      
      {/* Card Content - Collapsible */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {imageSrc && (
              <div className="relative h-48 w-full">
                <ImageFallback 
                  src={imageSrc}
                  fallbackSrc={fallbackImage}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            
            <div className="p-4">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default DestinationCard;
