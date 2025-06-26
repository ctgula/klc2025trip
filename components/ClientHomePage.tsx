'use client';

import Link from "next/link";
import Image from "next/image";
import CountdownTimer from "./CountdownTimer";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ClientHomePage() {
  // Set the trip date to a future date
  const tripDate = "2025-07-12"; // July 12, 2025

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-50 py-16 md:py-28">
        <div className="container-custom">
          <div className="flex flex-col items-center text-center">
            <motion.div 
              className="bg-white p-5 rounded-lg shadow-sm mb-6 w-full max-w-3xl -mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center">
                <div className="flex justify-center items-center mb-5">
                  <div className="w-32 h-32 md:w-36 md:h-36 bg-gradient-to-b from-blue-50 to-white rounded-full flex items-center justify-center p-2 shadow-lg border border-blue-100 transform hover:scale-105 transition-transform duration-300">
                    <Image src="/klc logo.jpeg" alt="Kingdom Life Community Church logo" width={120} height={120} className="object-contain rounded-full" priority />
                  </div>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-blue-700">Kingdom Life Community Church</h2>
                <p className="text-gray-600 text-sm mt-1">Present</p>
              </div>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Lancaster Summer Family Trip
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mb-8">
              Join us for a memorable one-day trip to Lancaster, Pennsylvania
            </p>
            
            <div className="bg-white rounded-xl shadow-lg p-6 mb-10 max-w-3xl w-full">
              <h2 className="text-2xl font-semibold mb-4">Welcome Message</h2>
              <p className="text-gray-700 mb-4">
                Dear Friends and Family,
              </p>
              <p className="text-gray-700 mb-4">
                We are excited to invite you to join us for a wonderful day trip to Lancaster, Pennsylvania. 
                This trip is hosted by Kingdom Life Community Church (KLCC).
              </p>
              <p className="text-gray-700 mb-4">
                We have planned a day filled with shopping, delicious food, and an amazing theatrical experience at the Sight &amp; Sound Theatre.
              </p>
              <p className="text-gray-700 mb-4">
                We look forward to sharing this special day with you!
              </p>
              <p className="text-gray-700 font-medium">
                Blessings,<br />
                Pastor John &amp; Andrea Thompson<br />
                Kingdom Life Community Church
              </p>
            </div>
            
            <div className="relative mb-5 mx-auto max-w-xs sm:max-w-sm w-full transform transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl blur opacity-30"></div>
              <div className="bg-white border border-blue-100 shadow-xl rounded-xl py-6 px-6 sm:px-10 relative z-10 flex flex-col items-center">
                <div className="text-sm sm:text-base uppercase tracking-wide text-blue-700 font-semibold mb-2">Save The Date</div>
                <div className="text-3xl sm:text-4xl font-bold text-gray-800">July 12, 2025</div>
                <div className="text-gray-500 mt-1 font-medium">Saturday</div>
              </div>
            </div>
            
            <div className="mb-10 w-full max-w-md mx-auto">
              <CountdownTimer targetDate={tripDate} />
            </div>
            
            <Link 
              href="/itinerary" 
              className="btn btn-primary text-lg fixed bottom-12 left-1/2 transform -translate-x-1/2 z-50 shadow-xl flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-white/40"
            >
              Start Here <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Quick Info Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3">Itinerary</h3>
              <p className="text-gray-600 mb-4">View our detailed schedule for the day, including departure times, activities, and return information.</p>
              <Link href="/itinerary" className="text-blue-600 hover:underline flex items-center gap-1">
                View Schedule <FaArrowRight size={12} />
              </Link>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3">Destinations</h3>
              <p className="text-gray-600 mb-4">Explore the places we&apos;ll visit, including Tanger Outlets, Miller&apos;s Smorgasbord, Amish shops, and Sight & Sound Theatre.</p>
              <Link href="/destinations" className="text-blue-600 hover:underline flex items-center gap-1">
                Explore Destinations <FaArrowRight size={12} />
              </Link>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-3">Transportation</h3>
              <p className="text-gray-600 mb-4">Get details about our bus transportation, including check-in location, parking information, and bus assignments.</p>
              <Link href="/transportation" className="text-blue-600 hover:underline flex items-center gap-1">
                Transportation Info <FaArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* End of Quick Info Section */}
    </div>
  );
}
