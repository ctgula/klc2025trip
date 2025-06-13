'use client';

import { useState, ReactNode } from &apos;react';
import { motion, AnimatePresence } from 'framer-motion';

interface TabProps {
  title: string;
  children: ReactNode;
}

interface TabsProps {
  tabs: TabProps[];
  defaultTab?: number;
}

const TabComponent = ({ tabs, defaultTab = 0 }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div className=&quot;w-full&quot;>
      <div className=&quot;flex overflow-x-auto scrollbar-hide border-b border-gray-200 mb-6&quot;>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`py-3 px-4 sm:px-6 font-medium text-sm md:text-base transition-colors whitespace-nowrap relative flex-shrink-0 ${
              activeTab === index
                ? &apos;text-blue-600'
                : &apos;text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.title}
            {activeTab === index && (
              <motion.div 
                className=&quot;absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-blue-600 rounded-t-full&quot;
                layoutId=&quot;activeTabIndicator&quot;
                transition={{ type: &apos;spring', stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
      <AnimatePresence mode=&quot;wait&quot;>
        <motion.div 
          key={activeTab}
          className=&quot;tab-content&quot;
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {tabs[activeTab] && tabs[activeTab].children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TabComponent;
