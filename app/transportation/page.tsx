'use client';

import { motion } from 'framer-motion';
import { FaBus, FaParking, FaClock, FaClipboardCheck, FaExclamationTriangle } from 'react-icons/fa';

const TransportationPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Transportation</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Information about our bus transportation, check-in procedures, and parking instructions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Check-in Location */}
          <motion.div 
            className="bg-white rounded-xl shadow-md overflow-hidden lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaClipboardCheck className="text-blue-600 text-xl" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">Check-in Location</h2>
              </div>
              
              <p className="text-gray-700 mb-4">
                Our trip will depart from and return to the Burtonsville Park-and-Ride.
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h3 className="font-medium text-gray-800 mb-2">Burtonsville Park-and-Ride</h3>
                <p className="text-gray-700">15810 Old Columbia Pike, Burtonsville, MD 20866</p>
              </div>
              
              {/* Google Map Embed */}
              <div className="relative h-80 w-full rounded-lg overflow-hidden mb-4">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3095.7382565096394!2d-76.93499492346763!3d39.11126197152941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7dd3a0fda4e0d%3A0x9f3d1a5c44a1b932!2sBurtonsville%20Park%20%26%20Ride!5e0!3m2!1sen!2sus!4v1686676291234!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              
              <div className="flex items-center text-gray-700 mb-2">
                <FaClock className="mr-2 text-blue-600" />
                <p><span className="font-medium">Bus 1 Check-in Time:</span> 7:30 AM - 7:50 AM</p>
              </div>
              <div className="flex items-center text-gray-700">
                <FaClock className="mr-2 text-blue-600" />
                <p><span className="font-medium">Bus 2 Check-in Time:</span> 8:30 AM - 8:50 AM</p>
              </div>
            </div>
          </motion.div>

          {/* Parking Instructions */}
          <motion.div 
            className="bg-white rounded-xl shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaParking className="text-blue-600 text-xl" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">Parking Instructions</h2>
              </div>
              
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-700 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-2 mt-0.5">1</span>
                  <p>Park your vehicle in the designated Park-and-Ride lot.</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-700 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-2 mt-0.5">2</span>
                  <p>Make sure to lock your vehicle and take all valuables with you.</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-700 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-2 mt-0.5">3</span>
                  <p>Note your parking spot location for easy return.</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-700 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-2 mt-0.5">4</span>
                  <p>Proceed to the check-in table near the buses.</p>
                </li>
              </ul>
              
              <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 mt-6">
                <div className="flex items-start">
                  <FaExclamationTriangle className="text-amber-500 mt-1 mr-2 flex-shrink-0" />
                  <p className="text-sm text-amber-800">
                    The Park-and-Ride lot is a public facility. We are not responsible for any damage 
                    to or theft from vehicles. Please take appropriate precautions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bus Transportation Overview */}
        <motion.div 
          className="bg-white rounded-xl shadow-md overflow-hidden mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="p-6">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FaBus className="text-blue-600 text-xl" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Bus Transportation Overview</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Bus Amenities</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="bg-blue-100 rounded-full w-2 h-2 mr-2"></span>
                    Air-conditioned coach buses
                  </li>
                  <li className="flex items-center">
                    <span className="bg-blue-100 rounded-full w-2 h-2 mr-2"></span>
                    Comfortable reclining seats
                  </li>
                  <li className="flex items-center">
                    <span className="bg-blue-100 rounded-full w-2 h-2 mr-2"></span>
                    Restroom on board
                  </li>
                  <li className="flex items-center">
                    <span className="bg-blue-100 rounded-full w-2 h-2 mr-2"></span>
                    Wi-Fi availability (may be limited)
                  </li>
                  <li className="flex items-center">
                    <span className="bg-blue-100 rounded-full w-2 h-2 mr-2"></span>
                    Storage space for personal items
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Bus Rules</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="bg-blue-100 rounded-full w-2 h-2 mr-2"></span>
                    Keep your seat belt fastened while the bus is in motion
                  </li>
                  <li className="flex items-center">
                    <span className="bg-blue-100 rounded-full w-2 h-2 mr-2"></span>
                    No food or drinks except water (closed containers)
                  </li>
                  <li className="flex items-center">
                    <span className="bg-blue-100 rounded-full w-2 h-2 mr-2"></span>
                    Keep the bus clean and dispose of trash properly
                  </li>
                  <li className="flex items-center">
                    <span className="bg-blue-100 rounded-full w-2 h-2 mr-2"></span>
                    Be respectful of other passengers and the driver
                  </li>
                  <li className="flex items-center">
                    <span className="bg-blue-100 rounded-full w-2 h-2 mr-2"></span>
                    Return to the bus at the designated meeting times
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Check-in Procedures */}
        <motion.div 
          className="bg-white rounded-xl shadow-md overflow-hidden mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Check-in Procedures</h2>
            
            <ol className="space-y-4">
              <li className="flex">
                <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-medium mr-3 mt-0.5 flex-shrink-0">1</div>
                <div>
                  <h3 className="font-medium text-gray-800">Arrival</h3>
                  <p className="text-gray-700">
                    Arrive at the Burtonsville Park-and-Ride by 7:30 AM to allow sufficient time for check-in.
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-medium mr-3 mt-0.5 flex-shrink-0">2</div>
                <div>
                  <h3 className="font-medium text-gray-800">Check-in Table</h3>
                  <p className="text-gray-700">
                    Proceed to the check-in table where volunteers will verify your registration and assign your bus.
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-medium mr-3 mt-0.5 flex-shrink-0">3</div>
                <div>
                  <h3 className="font-medium text-gray-800">Bus Assignment</h3>
                  <p className="text-gray-700">
                    You will be directed to either Bus 1 or Bus 2. Please board only the bus you are assigned to.
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-medium mr-3 mt-0.5 flex-shrink-0">4</div>
                <div>
                  <h3 className="font-medium text-gray-800">Boarding</h3>
                  <p className="text-gray-700">
                    Board the bus and find a seat. Families and groups will be seated together when possible.
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-medium mr-3 mt-0.5 flex-shrink-0">5</div>
                <div>
                  <h3 className="font-medium text-gray-800">Departure</h3>
                  <p className="text-gray-700">
                    Bus 1 will depart promptly at 8:00 AM. Bus 2 will depart promptly at 9:00 AM. Please be on time as we cannot wait for late arrivals.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </motion.div>

        {/* Important Notes */}
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
          <h3 className="text-xl font-semibold mb-4 text-blue-800">Important Notes</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Each bus has a designated bus captain who will take attendance and provide information throughout the day.</li>
            <li>In case of emergency during the trip, contact your bus captain or one of the drivers.</li>
            <li>If you need to cancel your participation, please notify the organizers as soon as possible.</li>
            <li>Refunds are not transferable.</li>
            <li>The buses will return to the Burtonsville Park-and-Ride at approximately 6:00 PM.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TransportationPage;
