'use client';

// Removed unused useState import
import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaPhone, 
  FaQuestionCircle, 
  FaExclamationTriangle,
  FaUserFriends
} from 'react-icons/fa';
import AccordionItem from '../../components/AccordionItem';

const ContactPage = () => {
  // FAQ data
  const faqs = [
    {
      question: "What time should I arrive for check-in?",
      answer: "Please arrive by 7:30 AM at the Burtonsville Park-and-Ride. Check-in will close at 7:50 AM, and buses will depart promptly at 8:00 AM."
    },
    {
      question: "What should I bring on the trip?",
      answer: "We recommend bringing a light jacket (theaters can be cool), comfortable walking shoes, any necessary medications, a small amount of spending money, and a positive attitude! Water and light snacks for the bus ride are also recommended."
    },
    {
      question: "Is lunch included in the trip cost?",
      answer: "Yes, lunch at Miller's Smorgasbord is included in your trip registration fee. The buffet offers a wide variety of Pennsylvania Dutch specialties and traditional American favorites."
    },
    {
      question: "Can I bring children on this trip?",
      answer: "Yes, children are welcome! However, please note that this is a full-day event with significant walking. Children must be supervised by their parents or guardians at all times."
    },
    {
      question: "What if I need to cancel my registration?",
      answer: "If you need to cancel, please contact the trip organizers as soon as possible. Refunds may be available depending on when you cancel and if we can fill your spot from the waiting list."
    },
    {
      question: "Will there be restroom breaks during the bus ride?",
      answer: "The buses are equipped with onboard restrooms. Additionally, we will have brief stops at each destination where restroom facilities will be available."
    },
    {
      question: "Is there Wi-Fi on the bus?",
      answer: "The buses are equipped with Wi-Fi, but connectivity may be limited in some areas during the journey. Please don't rely on it for important work or communications."
    },
    {
      question: "What if I have dietary restrictions?",
      answer: "Miller's Smorgasbord offers a variety of options that can accommodate most dietary needs. If you have severe allergies or very specific dietary requirements, please contact us in advance so we can make appropriate arrangements."
    }
  ];

  // Organizer data
  const organizers = [
    {
      name: "Pastor John Thompson",
      role: "Trip Coordinator",
      email: "pastor.john@kingdomlifechurch.org",
      phone: "(301) 555-7890"
    },
    {
      name: "Andrea Thompson",
      role: "Assistant Coordinator",
      email: "andrea.t@kingdomlifechurch.org",
      phone: "(301) 555-7891"
    },
    {
      name: "Michael Williams",
      role: "Bus 1 Captain",
      email: "michael.w@kingdomlifechurch.org",
      phone: "(301) 555-7892"
    },
    {
      name: "Sarah Johnson",
      role: "Bus 2 Captain",
      email: "sarah.j@kingdomlifechurch.org",
      phone: "(301) 555-7893"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions about the Lancaster trip? Reach out to our organizers or check our frequently asked questions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Organizer Contact Information */}
          <motion.div 
            className="bg-white rounded-xl shadow-md overflow-hidden lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaUserFriends className="text-blue-600 text-xl" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">Trip Organizers</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {organizers.map((organizer, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-medium text-gray-800 text-lg mb-1">{organizer.name}</h3>
                    <p className="text-blue-600 text-sm mb-3">{organizer.role}</p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <FaEnvelope className="text-gray-500 mr-2" />
                        <a href={`mailto:${organizer.email}`} className="text-gray-700 hover:text-blue-600 transition-colors">
                          {organizer.email}
                        </a>
                      </div>
                      
                      <div className="flex items-center">
                        <FaPhone className="text-gray-500 mr-2" />
                        <a href={`tel:${organizer.phone}`} className="text-gray-700 hover:text-blue-600 transition-colors">
                          {organizer.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
                <p className="text-gray-700">
                  For general inquiries about the trip, please email <a href="mailto:lancaster2025@kingdomlifechurch.org" className="text-blue-600 font-medium">lancaster2025@kingdomlifechurch.org</a>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Emergency Contact */}
          <motion.div 
            className="bg-white rounded-xl shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <FaExclamationTriangle className="text-red-600 text-xl" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">Emergency Contact</h2>
              </div>
              
              <div className="bg-red-50 border border-red-100 rounded-lg p-4 mb-4">
                <h3 className="font-medium text-red-800 mb-2">During the Trip</h3>
                <p className="text-gray-700 mb-3">
                  If you need immediate assistance during the trip, please contact:
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <FaPhone className="text-red-600 mr-2" />
                    <a href="tel:+13015559999" className="text-gray-800 font-medium">
                      Emergency Line: (301) 555-9999
                    </a>
                  </div>
                  
                  <p className="text-sm text-gray-600">
                    This number will be monitored throughout the trip by our coordinators.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium text-gray-800">In Case of Medical Emergency</h3>
                <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                  <li>Call 911 if it&apos;s a life-threatening situation</li>
                  <li>Notify your bus captain immediately</li>
                  <li>If separated from the group, call the emergency line</li>
                </ol>
                
                <p className="text-sm text-gray-600 mt-4">
                  Our trip leaders are trained in basic first aid, and we will have first aid kits available on each bus.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* FAQ Accordion */}
        <motion.div 
          className="bg-white rounded-xl shadow-md overflow-hidden mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="p-6">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaQuestionCircle className="text-blue-600 text-xl" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Frequently Asked Questions</h2>
            </div>
            
            <div className="divide-y divide-gray-200">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  title={faq.question}
                  isInitiallyOpen={index === 0}
                >
                  <p>{faq.answer}</p>
                </AccordionItem>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Church Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="bg-white rounded-xl shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Kingdom Life Community Church</h3>
              <div className="space-y-3 text-gray-700">
                <p>10301 Harmony Place<br />Burtonsville, MD 20866</p>
                <p>Sunday Service: 10:30 AM</p>
                <p>
                  <a href="https://www.kingdomlifechurch.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    www.kingdomlifechurch.org
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-xl shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Living Word International Church</h3>
              <div className="space-y-3 text-gray-700">
                <p>15520 Good Hope Road<br />Silver Spring, MD 20905</p>
                <p>Sunday Service: 10:00 AM</p>
                <p>
                  <a href="https://www.livingwordinternational.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    www.livingwordinternational.org
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
