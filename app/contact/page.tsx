'use client';

import { useState } from &apos;react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaPhone, 
  FaQuestionCircle, 
  FaExclamationTriangle,
  FaUserFriends
} from &apos;react-icons/fa';
import AccordionItem from '../../components/AccordionItem';

const ContactPage = () => {
  // FAQ data
  const faqs = [
    {
      question: &quot;What time should I arrive for check-in?&quot;,
      answer: &quot;Please arrive by 7:30 AM at the Burtonsville Park-and-Ride. Check-in will close at 7:50 AM, and buses will depart promptly at 8:00 AM.&quot;
    },
    {
      question: &quot;What should I bring on the trip?&quot;,
      answer: &quot;We recommend bringing a light jacket (theaters can be cool), comfortable walking shoes, any necessary medications, a small amount of spending money, and a positive attitude! Water and light snacks for the bus ride are also recommended.&quot;
    },
    {
      question: &quot;Is lunch included in the trip cost?&quot;,
      answer: &quot;Yes, lunch at Miller&apos;s Smorgasbord is included in your trip registration fee. The buffet offers a wide variety of Pennsylvania Dutch specialties and traditional American favorites.&quot;
    },
    {
      question: &quot;Can I bring children on this trip?&quot;,
      answer: &quot;Yes, children are welcome! However, please note that this is a full-day event with significant walking. Children must be supervised by their parents or guardians at all times.&quot;
    },
    {
      question: &quot;What if I need to cancel my registration?&quot;,
      answer: &quot;If you need to cancel, please contact the trip organizers as soon as possible. Refunds may be available depending on when you cancel and if we can fill your spot from the waiting list.&quot;
    },
    {
      question: &quot;Will there be restroom breaks during the bus ride?&quot;,
      answer: &quot;The buses are equipped with onboard restrooms. Additionally, we will have brief stops at each destination where restroom facilities will be available.&quot;
    },
    {
      question: &quot;Is there Wi-Fi on the bus?&quot;,
      answer: &quot;The buses are equipped with Wi-Fi, but connectivity may be limited in some areas during the journey. Please don&apos;t rely on it for important work or communications.&quot;
    },
    {
      question: &quot;What if I have dietary restrictions?&quot;,
      answer: &quot;Miller&apos;s Smorgasbord offers a variety of options that can accommodate most dietary needs. If you have severe allergies or very specific dietary requirements, please contact us in advance so we can make appropriate arrangements.&quot;
    }
  ];

  // Organizer data
  const organizers = [
    {
      name: &quot;Pastor John Thompson&quot;,
      role: &quot;Trip Coordinator&quot;,
      email: &quot;pastor.john@kingdomlifechurch.org&quot;,
      phone: &quot;(301) 555-7890&quot;
    },
    {
      name: &quot;Andrea Thompson&quot;,
      role: &quot;Assistant Coordinator&quot;,
      email: &quot;andrea.t@kingdomlifechurch.org&quot;,
      phone: &quot;(301) 555-7891&quot;
    },
    {
      name: &quot;Michael Williams&quot;,
      role: &quot;Bus 1 Captain&quot;,
      email: &quot;michael.w@kingdomlifechurch.org&quot;,
      phone: &quot;(301) 555-7892&quot;
    },
    {
      name: &quot;Sarah Johnson&quot;,
      role: &quot;Bus 2 Captain&quot;,
      email: &quot;sarah.j@kingdomlifechurch.org&quot;,
      phone: &quot;(301) 555-7893&quot;
    }
  ];

  return (
    <div className=&quot;min-h-screen bg-gray-50 py-16&quot;>
      <div className=&quot;container-custom&quot;>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=&quot;mb-10 text-center&quot;
        >
          <h1 className=&quot;text-3xl md:text-4xl font-bold text-gray-800 mb-4&quot;>Contact Us</h1>
          <p className=&quot;text-lg text-gray-600 max-w-3xl mx-auto&quot;>
            Have questions about the Lancaster trip? Reach out to our organizers or check our frequently asked questions.
          </p>
        </motion.div>

        <div className=&quot;grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12&quot;>
          {/* Organizer Contact Information */}
          <motion.div 
            className=&quot;bg-white rounded-xl shadow-md overflow-hidden lg:col-span-2&quot;
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className=&quot;p-6&quot;>
              <div className=&quot;flex items-center mb-6&quot;>
                <div className=&quot;bg-blue-100 p-3 rounded-full mr-4&quot;>
                  <FaUserFriends className=&quot;text-blue-600 text-xl&quot; />
                </div>
                <h2 className=&quot;text-2xl font-semibold text-gray-800&quot;>Trip Organizers</h2>
              </div>
              
              <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;>
                {organizers.map((organizer, index) => (
                  <div key={index} className=&quot;bg-gray-50 rounded-lg p-4&quot;>
                    <h3 className=&quot;font-medium text-gray-800 text-lg mb-1&quot;>{organizer.name}</h3>
                    <p className=&quot;text-blue-600 text-sm mb-3&quot;>{organizer.role}</p>
                    
                    <div className=&quot;space-y-2&quot;>
                      <div className=&quot;flex items-center&quot;>
                        <FaEnvelope className=&quot;text-gray-500 mr-2&quot; />
                        <a href={`mailto:${organizer.email}`} className=&quot;text-gray-700 hover:text-blue-600 transition-colors&quot;>
                          {organizer.email}
                        </a>
                      </div>
                      
                      <div className=&quot;flex items-center&quot;>
                        <FaPhone className=&quot;text-gray-500 mr-2&quot; />
                        <a href={`tel:${organizer.phone}`} className=&quot;text-gray-700 hover:text-blue-600 transition-colors&quot;>
                          {organizer.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className=&quot;mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100&quot;>
                <p className=&quot;text-gray-700&quot;>
                  For general inquiries about the trip, please email <a href=&quot;mailto:lancaster2025@kingdomlifechurch.org&quot; className=&quot;text-blue-600 font-medium&quot;>lancaster2025@kingdomlifechurch.org</a>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Emergency Contact */}
          <motion.div 
            className=&quot;bg-white rounded-xl shadow-md overflow-hidden&quot;
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className=&quot;p-6&quot;>
              <div className=&quot;flex items-center mb-4&quot;>
                <div className=&quot;bg-red-100 p-3 rounded-full mr-4&quot;>
                  <FaExclamationTriangle className=&quot;text-red-600 text-xl&quot; />
                </div>
                <h2 className=&quot;text-xl font-semibold text-gray-800&quot;>Emergency Contact</h2>
              </div>
              
              <div className=&quot;bg-red-50 border border-red-100 rounded-lg p-4 mb-4&quot;>
                <h3 className=&quot;font-medium text-red-800 mb-2&quot;>During the Trip</h3>
                <p className=&quot;text-gray-700 mb-3&quot;>
                  If you need immediate assistance during the trip, please contact:
                </p>
                
                <div className=&quot;space-y-3&quot;>
                  <div className=&quot;flex items-center&quot;>
                    <FaPhone className=&quot;text-red-600 mr-2&quot; />
                    <a href=&quot;tel:+13015559999&quot; className=&quot;text-gray-800 font-medium&quot;>
                      Emergency Line: (301) 555-9999
                    </a>
                  </div>
                  
                  <p className=&quot;text-sm text-gray-600&quot;>
                    This number will be monitored throughout the trip by our coordinators.
                  </p>
                </div>
              </div>
              
              <div className=&quot;space-y-4&quot;>
                <h3 className=&quot;font-medium text-gray-800&quot;>In Case of Medical Emergency</h3>
                <ol className=&quot;list-decimal pl-5 space-y-2 text-gray-700&quot;>
                  <li>Call 911 if it&apos;s a life-threatening situation</li>
                  <li>Notify your bus captain immediately</li>
                  <li>If separated from the group, call the emergency line</li>
                </ol>
                
                <p className=&quot;text-sm text-gray-600 mt-4&quot;>
                  Our trip leaders are trained in basic first aid, and we will have first aid kits available on each bus.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* FAQ Accordion */}
        <motion.div 
          className=&quot;bg-white rounded-xl shadow-md overflow-hidden mb-12&quot;
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className=&quot;p-6&quot;>
            <div className=&quot;flex items-center mb-6&quot;>
              <div className=&quot;bg-blue-100 p-3 rounded-full mr-4&quot;>
                <FaQuestionCircle className=&quot;text-blue-600 text-xl&quot; />
              </div>
              <h2 className=&quot;text-2xl font-semibold text-gray-800&quot;>Frequently Asked Questions</h2>
            </div>
            
            <div className=&quot;divide-y divide-gray-200&quot;>
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
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
          <motion.div 
            className=&quot;bg-white rounded-xl shadow-md overflow-hidden&quot;
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className=&quot;p-6&quot;>
              <h3 className=&quot;text-xl font-semibold text-gray-800 mb-4&quot;>Kingdom Life Community Church</h3>
              <div className=&quot;space-y-3 text-gray-700&quot;>
                <p>10301 Harmony Place<br />Burtonsville, MD 20866</p>
                <p>Sunday Service: 10:30 AM</p>
                <p>
                  <a href=&quot;https://www.kingdomlifechurch.org&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; className=&quot;text-blue-600 hover:underline&quot;>
                    www.kingdomlifechurch.org
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className=&quot;bg-white rounded-xl shadow-md overflow-hidden&quot;
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className=&quot;p-6&quot;>
              <h3 className=&quot;text-xl font-semibold text-gray-800 mb-4&quot;>Living Word International Church</h3>
              <div className=&quot;space-y-3 text-gray-700&quot;>
                <p>15520 Good Hope Road<br />Silver Spring, MD 20905</p>
                <p>Sunday Service: 10:00 AM</p>
                <p>
                  <a href=&quot;https://www.livingwordinternational.org&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; className=&quot;text-blue-600 hover:underline&quot;>
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
