'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaHome, FaCalendarAlt, FaMapMarkedAlt, FaInfoCircle } from &apos;react-icons/fa';

const BottomNavigation = () => {
  const pathname = usePathname();

  const navItems = [
    {
      name: 'Home',
      href: '/',
      icon: <FaHome className="w-5 h-5" />,
    },
    {
      name: 'Itinerary',
      href: '/itinerary',
      icon: <FaCalendarAlt className="w-5 h-5" />,
    },
    {
      name: 'Destinations',
      href: '/destinations',
      icon: <FaMapMarkedAlt className="w-5 h-5" />,
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: <FaInfoCircle className="w-5 h-5" />,
    },
  ];

  return (
    <>
      {/* Spacer to prevent content from being hidden behind the navigation */}
      <div className="h-16 md:h-0" />
      
      {/* Bottom Navigation */}
      <motion.nav 
        className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg md:hidden z-50"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            
            return (
              <Link 
                key={item.name} 
                href={item.href}
                className="relative flex flex-col items-center justify-center w-full h-full"
              >
                <motion.div
                  className={`flex flex-col items-center justify-center ${
                    isActive ? &apos;text-blue-600' : &apos;text-gray-500'
                  }`}
                  whileTap={{ scale: 0.9 }}
                >
                  {item.icon}
                  <span className="text-xs mt-1">{item.name}</span>
                  
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-0 w-12 h-1 bg-blue-600 rounded-t-full"
                      layoutId="bottomNavIndicator"
                      transition={{ type: &apos;spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.div>
              </Link>
            );
          })}
        </div>
      </motion.nav>
    </>
  );
};

export default BottomNavigation;
