'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  size?: &apos;small' | 'medium' | 'large';
}

const Logo = ({ className = '', showTagline = true, size = 'medium' }: LogoProps) => {
  // Size classes mapping
  const sizeClasses = {
    small: {
      main: &apos;text-base',
      secondary: &apos;text-xs',
      tagline: &apos;text-xs'
    },
    medium: {
      main: &apos;text-lg',
      secondary: &apos;text-xs',
      tagline: &apos;text-sm'
    },
    large: {
      main: &apos;text-2xl md:text-3xl',
      secondary: &apos;text-sm md:text-base',
      tagline: &apos;text-base md:text-lg'
    }
  };
  
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <motion.div 
        className="flex flex-col" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
      >
        <div className={`font-bold leading-tight ${sizeClasses[size].main}`}>
          <span className="text-blue-700">LIVING WORD</span>
        </div>
        <div className={`font-medium tracking-wider text-blue-500 ${sizeClasses[size].secondary}`}>
          INTERNATIONAL CHRISTIAN CHURCH
        </div>
      </motion.div>
      {showTagline && (
        <motion.div 
          className={`ml-3 pl-3 border-l border-gray-300 font-medium text-gray-600 ${sizeClasses[size].tagline}`}
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Lancaster Trip 2025
        </motion.div>
      )}
    </Link>
  );
};

export default Logo;
