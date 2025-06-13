'use client';

import { ReactNode, useState } from &apos;react';
import { motion, AnimatePresence } from 'framer-motion';
import ImageFallback from './ImageFallback';
import { FaChevronDown, FaChevronUp } from &apos;react-icons/fa';

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
  imageAlt = &quot;Destination image&quot;,
  children,
  emoji = &quot;🏙️&quot;
}: DestinationCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Default placeholder image if none provided or if the image fails to load
  const fallbackImage = &quot;https://placehold.co/600x400/e2e8f0/64748b?text=&quot; + encodeURIComponent(title);
  
  return (
    <motion.div 
      className=&quot;bg-white rounded-xl shadow-md overflow-hidden mb-4&quot;
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      layout
    >
      {/* Card Header - Always visible */}
      <div 
        className=&quot;flex items-center cursor-pointer p-4 border-b border-gray-100&quot;
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className=&quot;flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 mr-3 flex-shrink-0&quot;>
          <span className=&quot;text-xl&quot;>{emoji}</span>
        </div>
        <div className=&quot;flex-1&quot;>
          <h3 className=&quot;text-xl font-semibold text-gray-800&quot;>{title}</h3>
          <p className=&quot;text-sm text-gray-600 line-clamp-1&quot;>{description}</p>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          className=&quot;text-blue-500 flex-shrink-0&quot;
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
            className=&quot;overflow-hidden&quot;
          >
            {imageSrc && (
              <div className=&quot;relative h-48 w-full&quot;>
                <ImageFallback 
                  src={imageSrc}
                  fallbackSrc={fallbackImage}
                  alt={imageAlt}
                  fill
                  className=&quot;object-cover&quot;
                />
              </div>
            )}
            
            <div className=&quot;p-4&quot;>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default DestinationCard;
