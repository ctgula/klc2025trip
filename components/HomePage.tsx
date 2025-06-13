'use client';

import Image from "next/image";
import Link from "next/link";
import CountdownTimer from "./CountdownTimer";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function HomePage() {
  // Set the trip date to a future date
  const tripDate = "2025-08-15"; // August 15, 2025

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-50 py-20 md:py-32">
        <div className="container-custom">
          <div className="flex flex-col items-center text-center">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md mb-8 flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-700">Kingdom Life Community Church &amp; Living Word International Christian Church</h2>
                <p className="text-gray-600 text-sm mt-2">Present</p>
              </div>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Lancaster Trip Hub 2025
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
                This trip is hosted by Kingdom Life Community Church (KLCC) and Living Word International Christian Church (LWICC).
              </p>
              <p className="text-gray-700 mb-4">
                We have planned a day filled with shopping, delicious food, and an amazing theatrical experience at the Sight &amp; Sound Theatre.
              </p>
              <p className="text-gray-700 mb-4">
                We look forward to sharing this special day with you!
              </p>
              <p className="text-gray-700 font-medium">
                Blessings,<br />
                Kingdom Life Community Church &amp; Living Word International Christian Church
              </p>
            </div>
            
            <div className="mb-10">
              <CountdownTimer targetDate={tripDate} />
            </div>
            
            <Link 
              href="/itinerary" 
              className="btn btn-primary text-lg fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 shadow-lg flex items-center gap-2"
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
              <p className="text-gray-600 mb-4">Explore the places we&apos;ll visit, including Tanger Outlets, Miller&apos;s Smorgasbord, Amish shops, and Sight &amp; Sound Theatre.</p>
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
    </div>
  );
}
