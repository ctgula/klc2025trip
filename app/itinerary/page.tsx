'use client';

// Removed unused useState import
import { 
  FaBus, 
  FaShoppingBag, 
  FaUtensils, 
  FaStore, 
  FaTheaterMasks, 
  FaHome
} from 'react-icons/fa';
import TabComponent from '../../components/TabComponent';
import TimelineItem from '../../components/TimelineItem';
import { motion } from 'framer-motion';

const ItineraryPage = () => {
  // Tab state is managed internally by TabComponent

  // Bus 1 Timeline Data - Tanger / Miller's / S&S
  const bus1Timeline = [
    { 
      time: '8:00 AM', 
      title: 'Depart Burtonsville', 
      description: 'Depart Burtonsville Park & Ride', 
      icon: <FaBus size={18} />,
      emoji: '🚌'
    },
    { 
      time: '10:00 AM', 
      title: 'Tanger Outlets', 
      description: 'Arrive at Tanger Outlets', 
      icon: <FaShoppingBag size={18} />,
      emoji: '🛒'
    },
    { 
      time: '12:00 PM', 
      title: 'Depart Tanger', 
      description: 'Leave Tanger Outlets for lunch', 
      icon: <FaBus size={18} />,
      emoji: '🚌'
    },
    { 
      time: '12:30 PM', 
      title: 'Miller\'s Smorgasbord', 
      description: 'Lunch at Miller\'s Smorgasbord', 
      icon: <FaUtensils size={18} />,
      emoji: '🍽️'
    },
    { 
      time: '1:15 PM', 
      title: 'Amish Shopping', 
      description: 'Visit local Amish shops', 
      icon: <FaStore size={18} />,
      emoji: '🛍️'
    },
    { 
      time: '2:00 PM', 
      title: 'Depart for Sight & Sound', 
      description: 'Leave for the theater show', 
      icon: <FaBus size={18} />,
      emoji: '🚌'
    },
    { 
      time: '3:00 PM', 
      title: 'NOAH Show', 
      description: 'Experience the "NOAH" show at Sight & Sound Theatre', 
      icon: <FaTheaterMasks size={18} />,
      emoji: '🎭'
    },
    { 
      time: '6:00 PM', 
      title: 'Return', 
      description: 'Return to Burtonsville Park & Ride', 
      icon: <FaHome size={18} />,
      emoji: '🚌',
      isLast: true
    }
  ];

  // Bus 2 Timeline Data - Miller's / S&S
  const bus2Timeline = [
    { 
      time: '9:00 AM', 
      title: 'Depart Burtonsville', 
      description: 'Depart Burtonsville Park & Ride', 
      icon: <FaBus size={18} />,
      emoji: '🚌'
    },
    { 
      time: '11:30 AM', 
      title: 'Miller\'s Smorgasbord', 
      description: 'Lunch at Miller\'s Smorgasbord', 
      icon: <FaUtensils size={18} />,
      emoji: '🍽️'
    },
    { 
      time: '12:30 PM', 
      title: 'Amish Shopping', 
      description: 'Visit local Amish shops', 
      icon: <FaStore size={18} />,
      emoji: '🛍️'
    },
    { 
      time: '2:00 PM', 
      title: 'Depart for Sight & Sound', 
      description: 'Leave for the theater show', 
      icon: <FaBus size={18} />,
      emoji: '🚌'
    },
    { 
      time: '3:00 PM', 
      title: 'NOAH Show', 
      description: 'Experience the "NOAH" show at Sight & Sound Theatre', 
      icon: <FaTheaterMasks size={18} />,
      emoji: '🎭'
    },
    { 
      time: '6:00 PM', 
      title: 'Return', 
      description: 'Return to Burtonsville Park & Ride', 
      icon: <FaHome size={18} />,
      emoji: '🚌',
      isLast: true
    }
  ];

  // No drivers information needed

  const tabs = [
    {
      title: 'Bus 1',
      children: (
        <div className="py-4">
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <span className="mr-2 text-2xl">🚌</span> Bus 1 Schedule - Tanger / Miller's / S&S
          </h3>
          <div className="pl-2 sm:pl-4">
            {bus1Timeline.map((item, index) => (
              <TimelineItem
                key={index}
                time={item.time}
                title={item.title}
                description={item.description}
                icon={item.icon}
                emoji={item.emoji}
                isLast={item.isLast}
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: 'Bus 2',
      children: (
        <div className="py-4">
          <h3 className="text-xl font-semibold mb-6 flex items-center">
            <span className="mr-2 text-2xl">🚌</span> Bus 2 Schedule - Miller's / S&S
          </h3>
          <div className="pl-2 sm:pl-4">
            {bus2Timeline.map((item, index) => (
              <TimelineItem
                key={index}
                time={item.time}
                title={item.title}
                description={item.description}
                icon={item.icon}
                emoji={item.emoji}
                isLast={item.isLast}
              />
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Trip Itinerary</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our day in Lancaster is packed with shopping, dining, and entertainment.
            Below is the detailed schedule for each bus.
          </p>
        </motion.div>

        <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 mb-8">
          <TabComponent tabs={tabs} />
        </div>

        <motion.div 
          className="bg-blue-50 rounded-xl p-4 sm:p-6 border border-blue-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-blue-800 flex items-center">
            <span className="mr-2 text-2xl">📝</span> Important Notes
          </h3>
          <ul className="list-none space-y-3 text-gray-700">
            {[
              'Please arrive 30 minutes before departure time for check-in',
              'Bring comfortable walking shoes',
              'The bus will depart promptly at the scheduled time',
              'Each person is responsible for being at the meeting points on time',
              'In case of emergency, contact your bus captain or driver'
            ].map((note, index) => (
              <motion.li 
                key={index} 
                className="flex items-start p-2 border-l-4 border-blue-300 pl-3 bg-white rounded-r-lg shadow-sm"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <span className="text-blue-600 mr-2">•</span> {note}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default ItineraryPage;
