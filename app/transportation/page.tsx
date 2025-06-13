'use client';

import { motion } from 'framer-motion';
import { FaBus, FaParking, FaClock, FaClipboardCheck, FaExclamationTriangle } from &apos;react-icons/fa';

const TransportationPage = () => {
  return (
    <div className=&quot;min-h-screen bg-gray-50 py-16&quot;>
      <div className=&quot;container-custom&quot;>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=&quot;mb-10 text-center&quot;
        >
          <h1 className=&quot;text-3xl md:text-4xl font-bold text-gray-800 mb-4&quot;>Transportation</h1>
          <p className=&quot;text-lg text-gray-600 max-w-3xl mx-auto&quot;>
            Information about our bus transportation, check-in procedures, and parking instructions.
          </p>
        </motion.div>

        <div className=&quot;grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12&quot;>
          {/* Check-in Location */}
          <motion.div 
            className=&quot;bg-white rounded-xl shadow-md overflow-hidden lg:col-span-2&quot;
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className=&quot;p-6&quot;>
              <div className=&quot;flex items-center mb-4&quot;>
                <div className=&quot;bg-blue-100 p-3 rounded-full mr-4&quot;>
                  <FaClipboardCheck className=&quot;text-blue-600 text-xl&quot; />
                </div>
                <h2 className=&quot;text-2xl font-semibold text-gray-800&quot;>Check-in Location</h2>
              </div>
              
              <p className=&quot;text-gray-700 mb-4&quot;>
                Our trip will depart from and return to the Burtonsville Park-and-Ride.
              </p>
              
              <div className=&quot;bg-gray-50 p-4 rounded-lg mb-6&quot;>
                <h3 className=&quot;font-medium text-gray-800 mb-2&quot;>Burtonsville Park-and-Ride</h3>
                <p className=&quot;text-gray-700&quot;>15810 Old Columbia Pike, Burtonsville, MD 20866</p>
              </div>
              
              {/* Google Map Embed */}
              <div className=&quot;relative h-80 w-full rounded-lg overflow-hidden mb-4&quot;>
                <iframe 
                  src=&quot;https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3095.7382565096394!2d-76.93499492346763!3d39.11126197152941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7dd3a0fda4e0d%3A0x9f3d1a5c44a1b932!2sBurtonsville%20Park%20%26%20Ride!5e0!3m2!1sen!2sus!4v1686676291234!5m2!1sen!2sus&quot; 
                  width=&quot;100%&quot; 
                  height=&quot;100%&quot; 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading=&quot;lazy&quot; 
                  referrerPolicy=&quot;no-referrer-when-downgrade&quot;
                ></iframe>
              </div>
              
              <div className=&quot;flex items-center text-gray-700&quot;>
                <FaClock className=&quot;mr-2 text-blue-600&quot; />
                <p><span className=&quot;font-medium&quot;>Check-in Time:</span> 7:30 AM - 7:50 AM</p>
              </div>
            </div>
          </motion.div>

          {/* Parking Instructions */}
          <motion.div 
            className=&quot;bg-white rounded-xl shadow-md overflow-hidden&quot;
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className=&quot;p-6&quot;>
              <div className=&quot;flex items-center mb-4&quot;>
                <div className=&quot;bg-blue-100 p-3 rounded-full mr-4&quot;>
                  <FaParking className=&quot;text-blue-600 text-xl&quot; />
                </div>
                <h2 className=&quot;text-xl font-semibold text-gray-800&quot;>Parking Instructions</h2>
              </div>
              
              <ul className=&quot;space-y-3 text-gray-700&quot;>
                <li className=&quot;flex items-start&quot;>
                  <span className=&quot;bg-blue-100 text-blue-700 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-2 mt-0.5&quot;>1</span>
                  <p>Park your vehicle in the designated Park-and-Ride lot.</p>
                </li>
                <li className=&quot;flex items-start&quot;>
                  <span className=&quot;bg-blue-100 text-blue-700 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-2 mt-0.5&quot;>2</span>
                  <p>Make sure to lock your vehicle and take all valuables with you.</p>
                </li>
                <li className=&quot;flex items-start&quot;>
                  <span className=&quot;bg-blue-100 text-blue-700 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-2 mt-0.5&quot;>3</span>
                  <p>Note your parking spot location for easy return.</p>
                </li>
                <li className=&quot;flex items-start&quot;>
                  <span className=&quot;bg-blue-100 text-blue-700 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-2 mt-0.5&quot;>4</span>
                  <p>Proceed to the check-in table near the buses.</p>
                </li>
              </ul>
              
              <div className=&quot;bg-amber-50 border border-amber-100 rounded-lg p-4 mt-6&quot;>
                <div className=&quot;flex items-start&quot;>
                  <FaExclamationTriangle className=&quot;text-amber-500 mt-1 mr-2 flex-shrink-0&quot; />
                  <p className=&quot;text-sm text-amber-800&quot;>
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
          className=&quot;bg-white rounded-xl shadow-md overflow-hidden mb-12&quot;
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className=&quot;p-6&quot;>
            <div className=&quot;flex items-center mb-6&quot;>
              <div className=&quot;bg-blue-100 p-3 rounded-full mr-4&quot;>
                <FaBus className=&quot;text-blue-600 text-xl&quot; />
              </div>
              <h2 className=&quot;text-2xl font-semibold text-gray-800&quot;>Bus Transportation Overview</h2>
            </div>
            
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;>
              <div>
                <h3 className=&quot;text-lg font-medium text-gray-800 mb-3&quot;>Bus Amenities</h3>
                <ul className=&quot;space-y-2 text-gray-700&quot;>
                  <li className=&quot;flex items-center&quot;>
                    <span className=&quot;bg-blue-100 rounded-full w-2 h-2 mr-2&quot;></span>
                    Air-conditioned coach buses
                  </li>
                  <li className=&quot;flex items-center&quot;>
                    <span className=&quot;bg-blue-100 rounded-full w-2 h-2 mr-2&quot;></span>
                    Comfortable reclining seats
                  </li>
                  <li className=&quot;flex items-center&quot;>
                    <span className=&quot;bg-blue-100 rounded-full w-2 h-2 mr-2&quot;></span>
                    Restroom on board
                  </li>
                  <li className=&quot;flex items-center&quot;>
                    <span className=&quot;bg-blue-100 rounded-full w-2 h-2 mr-2&quot;></span>
                    Wi-Fi availability (may be limited)
                  </li>
                  <li className=&quot;flex items-center&quot;>
                    <span className=&quot;bg-blue-100 rounded-full w-2 h-2 mr-2&quot;></span>
                    Storage space for personal items
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className=&quot;text-lg font-medium text-gray-800 mb-3&quot;>Bus Rules</h3>
                <ul className=&quot;space-y-2 text-gray-700&quot;>
                  <li className=&quot;flex items-center&quot;>
                    <span className=&quot;bg-blue-100 rounded-full w-2 h-2 mr-2&quot;></span>
                    Keep your seat belt fastened while the bus is in motion
                  </li>
                  <li className=&quot;flex items-center&quot;>
                    <span className=&quot;bg-blue-100 rounded-full w-2 h-2 mr-2&quot;></span>
                    No food or drinks except water (closed containers)
                  </li>
                  <li className=&quot;flex items-center&quot;>
                    <span className=&quot;bg-blue-100 rounded-full w-2 h-2 mr-2&quot;></span>
                    Keep the bus clean and dispose of trash properly
                  </li>
                  <li className=&quot;flex items-center&quot;>
                    <span className=&quot;bg-blue-100 rounded-full w-2 h-2 mr-2&quot;></span>
                    Be respectful of other passengers and the driver
                  </li>
                  <li className=&quot;flex items-center&quot;>
                    <span className=&quot;bg-blue-100 rounded-full w-2 h-2 mr-2&quot;></span>
                    Return to the bus at the designated meeting times
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Check-in Procedures */}
        <motion.div 
          className=&quot;bg-white rounded-xl shadow-md overflow-hidden mb-12&quot;
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className=&quot;p-6&quot;>
            <h2 className=&quot;text-xl font-semibold text-gray-800 mb-4&quot;>Check-in Procedures</h2>
            
            <ol className=&quot;space-y-4&quot;>
              <li className=&quot;flex&quot;>
                <div className=&quot;bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-medium mr-3 mt-0.5 flex-shrink-0&quot;>1</div>
                <div>
                  <h3 className=&quot;font-medium text-gray-800&quot;>Arrival</h3>
                  <p className=&quot;text-gray-700&quot;>
                    Arrive at the Burtonsville Park-and-Ride by 7:30 AM to allow sufficient time for check-in.
                  </p>
                </div>
              </li>
              
              <li className=&quot;flex&quot;>
                <div className=&quot;bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-medium mr-3 mt-0.5 flex-shrink-0&quot;>2</div>
                <div>
                  <h3 className=&quot;font-medium text-gray-800&quot;>Check-in Table</h3>
                  <p className=&quot;text-gray-700&quot;>
                    Proceed to the check-in table where volunteers will verify your registration and assign your bus.
                  </p>
                </div>
              </li>
              
              <li className=&quot;flex&quot;>
                <div className=&quot;bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-medium mr-3 mt-0.5 flex-shrink-0&quot;>3</div>
                <div>
                  <h3 className=&quot;font-medium text-gray-800&quot;>Bus Assignment</h3>
                  <p className=&quot;text-gray-700&quot;>
                    You will be directed to either Bus 1 or Bus 2. Please board only the bus you are assigned to.
                  </p>
                </div>
              </li>
              
              <li className=&quot;flex&quot;>
                <div className=&quot;bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-medium mr-3 mt-0.5 flex-shrink-0&quot;>4</div>
                <div>
                  <h3 className=&quot;font-medium text-gray-800&quot;>Boarding</h3>
                  <p className=&quot;text-gray-700&quot;>
                    Board the bus and find a seat. Families and groups will be seated together when possible.
                  </p>
                </div>
              </li>
              
              <li className=&quot;flex&quot;>
                <div className=&quot;bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-medium mr-3 mt-0.5 flex-shrink-0&quot;>5</div>
                <div>
                  <h3 className=&quot;font-medium text-gray-800&quot;>Departure</h3>
                  <p className=&quot;text-gray-700&quot;>
                    Buses will depart promptly at 8:00 AM. Please be on time as we cannot wait for late arrivals.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </motion.div>

        {/* Important Notes */}
        <div className=&quot;bg-blue-50 rounded-xl p-6 border border-blue-100&quot;>
          <h3 className=&quot;text-xl font-semibold mb-4 text-blue-800&quot;>Important Notes</h3>
          <ul className=&quot;list-disc pl-5 space-y-2 text-gray-700&quot;>
            <li>Each bus has a designated bus captain who will take attendance and provide information throughout the day.</li>
            <li>In case of emergency during the trip, contact your bus captain or one of the drivers.</li>
            <li>If you need to cancel your participation, please notify the organizers as soon as possible.</li>
            <li>The buses will return to the Burtonsville Park-and-Ride at approximately 6:00 PM.</li>
            <li>In case of inclement weather, updates will be provided via email and text message.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TransportationPage;
