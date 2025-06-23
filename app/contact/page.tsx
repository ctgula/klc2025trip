'use client';

// Removed unused useState import
import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaPhone, 
  FaQuestionCircle, 
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
      question: "What if I have dietary restrictions?",
      answer: "Miller's Smorgasbord offers a variety of options that can accommodate most dietary needs. If you have severe allergies or very specific dietary requirements, please contact us in advance so we can make appropriate arrangements."
    }
  ];

  // Organizer data
  const organizers = [
    {
      name: "Andrea Thompson",
      role: "Trip Organizer",
      email: "mykingdomlifecommunitychurch@gmail.com",
      phone: "(240) 483-8373"
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
                <h2 className="text-2xl font-semibold text-gray-800">Trip Organizer</h2>
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
                  For general inquiries about the trip, please email <a href="mailto:mykingdomlifecommunitychurch@gmail.com" className="text-blue-600 font-medium">mykingdomlifecommunitychurch@gmail.com</a>
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
                  title={faq.question || ""}
                  isInitiallyOpen={index === 0}
                >
                  <p>{faq.answer}</p>
                </AccordionItem>
              ))}
            </div>
          </div>
        </motion.div>


      </div>
    </div>
  );
};

export default ContactPage;
