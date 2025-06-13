'use client';

import Link from &quot;next/link&quot;;
import CountdownTimer from &quot;./CountdownTimer&quot;;
import { FaArrowRight } from &quot;react-icons/fa&quot;;
import { motion } from &quot;framer-motion&quot;;

export default function ClientHomePage() {
  // Set the trip date to a future date
  const tripDate = &quot;2025-08-15&quot;; // August 15, 2025

  return (
    <div className=&quot;flex flex-col min-h-screen&quot;>
      {/* Hero Section */}
      <section className=&quot;relative bg-blue-50 py-16 md:py-28&quot;>
        <div className=&quot;container-custom&quot;>
          <div className=&quot;flex flex-col items-center text-center&quot;>
            <motion.div 
              className=&quot;bg-white p-5 rounded-lg shadow-sm mb-6 w-full max-w-3xl -mt-4&quot;
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className=&quot;text-center&quot;>
                <div className=&quot;flex justify-center items-center gap-4 mb-3&quot;>
                  <div className=&quot;w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center&quot;>
                    <span className=&quot;text-blue-700 font-bold&quot;>KLCC</span>
                  </div>
                  <div className=&quot;w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center&quot;>
                    <span className=&quot;text-blue-700 font-bold&quot;>LWICC</span>
                  </div>
                </div>
                <h2 className=&quot;text-xl md:text-2xl font-bold text-blue-700&quot;>Kingdom Life Community Church &amp; Living Word International Christian Church</h2>
                <p className=&quot;text-gray-600 text-sm mt-1&quot;>Present</p>
              </div>
            </motion.div>
            
            <h1 className=&quot;text-4xl md:text-5xl font-bold text-gray-800 mb-4&quot;>
              Lancaster Trip Hub 2025
            </h1>
            
            <p className=&quot;text-xl text-gray-600 max-w-2xl mb-8&quot;>
              Join us for a memorable one-day trip to Lancaster, Pennsylvania
            </p>
            
            <div className=&quot;bg-white rounded-xl shadow-lg p-6 mb-10 max-w-3xl w-full&quot;>
              <h2 className=&quot;text-2xl font-semibold mb-4&quot;>Welcome Message</h2>
              <p className=&quot;text-gray-700 mb-4&quot;>
                Dear Friends and Family,
              </p>
              <p className=&quot;text-gray-700 mb-4&quot;>
                We are excited to invite you to join us for a wonderful day trip to Lancaster, Pennsylvania. 
                This trip is hosted by Kingdom Life Community Church (KLCC) and Living Word International Christian Church (LWICC).
              </p>
              <p className=&quot;text-gray-700 mb-4&quot;>
                We have planned a day filled with shopping, delicious food, and an amazing theatrical experience at the Sight &amp; Sound Theatre.
              </p>
              <p className=&quot;text-gray-700 mb-4&quot;>
                We look forward to sharing this special day with you!
              </p>
              <p className=&quot;text-gray-700 font-medium&quot;>
                Blessings,<br />
                Pastor John &amp; Andrea Thompson<br />
                Kingdom Life Community Church &amp; Living Word International Christian Church
              </p>
            </div>
            
            <div className=&quot;mb-10&quot;>
              <CountdownTimer targetDate={tripDate} />
            </div>
            
            <Link 
              href=&quot;/itinerary&quot; 
              className=&quot;btn btn-primary text-lg fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 shadow-lg flex items-center gap-2&quot;
            >
              Start Here <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Quick Info Section */}
      <section className=&quot;py-16 bg-white&quot;>
        <div className=&quot;container-custom&quot;>
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
            <div className=&quot;card p-6&quot;>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Itinerary</h3>
              <p className=&quot;text-gray-600 mb-4&quot;>View our detailed schedule for the day, including departure times, activities, and return information.</p>
              <Link href=&quot;/itinerary&quot; className=&quot;text-blue-600 hover:underline flex items-center gap-1&quot;>
                View Schedule <FaArrowRight size={12} />
              </Link>
            </div>
            
            <div className=&quot;card p-6&quot;>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Destinations</h3>
              <p className=&quot;text-gray-600 mb-4&quot;>Explore the places we&apos;ll visit, including Tanger Outlets, Miller&apos;s Smorgasbord, Amish shops, and Sight &amp; Sound Theatre.</p>
              <Link href=&quot;/destinations&quot; className=&quot;text-blue-600 hover:underline flex items-center gap-1&quot;>
                Explore Destinations <FaArrowRight size={12} />
              </Link>
            </div>
            
            <div className=&quot;card p-6&quot;>
              <h3 className=&quot;text-xl font-semibold mb-3&quot;>Transportation</h3>
              <p className=&quot;text-gray-600 mb-4&quot;>Get details about our bus transportation, including check-in location, parking information, and bus assignments.</p>
              <Link href=&quot;/transportation&quot; className=&quot;text-blue-600 hover:underline flex items-center gap-1&quot;>
                Transportation Info <FaArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
