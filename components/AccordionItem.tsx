'use client';

import { useState } from &apos;react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from &apos;react-icons/fa';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isInitiallyOpen?: boolean;
}

const AccordionItem = ({ title, children, isInitiallyOpen = false }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(isInitiallyOpen);

  return (
    <div className=&quot;border-b border-gray-200 last:border-b-0&quot;>
      <button
        className=&quot;flex justify-between items-center w-full py-4 px-1 text-left&quot;
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className=&quot;text-lg font-medium text-gray-800&quot;>{title}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaChevronDown className=&quot;text-blue-600&quot; />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className=&quot;overflow-hidden&quot;
          >
            <div className=&quot;pb-4 px-1 text-gray-700&quot;>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionItem;
