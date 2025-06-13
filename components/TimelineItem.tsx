'use client';

import { ReactNode } from &apos;react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  time: string;
  title: string;
  description?: string;
  icon: ReactNode;
  emoji: string; // Added emoji property
  isLast?: boolean;
}

const TimelineItem = ({ time, title, description, icon, emoji, isLast = false }: TimelineItemProps) => {
  return (
    <motion.div 
      className="flex gap-2 sm:gap-4 w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Timeline line and icon */}
      <div className="flex flex-col items-center">
        <motion.div 
          className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-100 text-blue-600 z-10 shadow-md"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          initial={{ rotate: -5 }}
          animate={{ rotate: 0 }}
        >
          <div className="text-xl sm:text-2xl">{emoji}</div>
        </motion.div>
        {!isLast && (
          <motion.div 
            className="w-1 bg-gradient-to-b from-blue-400 to-blue-200 h-full mt-2"
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        )}
      </div>
      
      {/* Content */}
      <motion.div 
        className={`pb-6 sm:pb-8 ${isLast ? '' : 'mb-2'} bg-white rounded-lg p-3 sm:p-4 shadow-sm flex-1 border-l-4 border-blue-400`}
        whileHover={{ x: 5 }}
        layout
      >
        <div className="flex items-center mb-1">
          <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">{time}</span>
        </div>
        <h3 className="text-base sm:text-lg font-medium text-gray-800 mb-1">{title}</h3>
        {description && (
          <motion.p 
            className="text-sm sm:text-base text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {description}
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  );
};

export default TimelineItem;
