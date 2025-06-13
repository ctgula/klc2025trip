'use client';

import { useState } from &apos;react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaClock, FaUtensils, FaShoppingBag, FaTheaterMasks, FaQuestion } from &apos;react-icons/fa';
import DestinationCard from '../../components/DestinationCard';

const DestinationsPage = () => {
  // Menu sections for Miller&apos;s Smorgasbord
  const menuSections = [
    {
      title: 'Appetizers',
      items: [
        'Fresh Baked Breads',
        'Apple Butter',
        'Chow Chow',
        'Pepper Cabbage',
        'Fresh Fruit'
      ]
    },
    {
      title: 'Soup Station',
      items: [
        'Chicken Corn Soup',
        'Beef Vegetable Soup',
        'Chilled Fruit Soup (seasonal)'
      ]
    },
    {
      title: 'Carving Station',
      items: [
        'Roast Beef',
        'Baked Ham',
        'Roasted Turkey'
      ]
    },
    {
      title: 'Hot Entrees',
      items: [
        'Fried Chicken',
        'Baked Fish',
        'Meatloaf',
        'Chicken Pot Pie',
        'Pork and Sauerkraut'
      ]
    },
    {
      title: 'Desserts',
      items: [
        'Shoofly Pie',
        'Apple Pie',
        'Chocolate Cake',
        'Rice Pudding',
        'Ice Cream'
      ]
    },
    {
      title: 'Beverages',
      items: [
        'Coffee',
        'Hot Tea',
        'Iced Tea',
        'Lemonade',
        'Soda'
      ]
    }
  ];

  // Amish shops information
  const amishShops = [
    {
      name: &quot;Anna&apos;s Gifts&quot;,
      description: &quot;Handmade quilts, dolls, and home decor items crafted by local Amish artisans.&quot;,
      specialty: &quot;Quilts and handmade crafts&quot;
    },
    {
      name: &quot;Ruthie&apos;s&quot;,
      description: &quot;Traditional Amish foods including jams, jellies, pickles, and baked goods.&quot;,
      specialty: &quot;Homemade jams and preserves&quot;
    },
    {
      name: &quot;Locally Made Shop&quot;,
      description: &quot;Variety of Amish-made furniture, wooden toys, and kitchen accessories.&quot;,
      specialty: &quot;Wooden furniture and crafts&quot;
    }
  ];

  // Theatre FAQs
  const theatreFaqs = [
    {
      question: &quot;What is the parking situation?&quot;,
      answer: &quot;Free parking is available in the Sight &amp; Sound Theatre parking lot. Accessible parking spaces are available near the entrance.&quot;
    },
    {
      question: &quot;Is the theatre accessible?&quot;,
      answer: &quot;Yes, the theatre is fully accessible with wheelchair seating, accessible restrooms, and elevators.&quot;
    },
    {
      question: &quot;Is there a dress code?&quot;,
      answer: &quot;There is no formal dress code. Casual, comfortable attire is recommended.&quot;
    },
    {
      question: &quot;What is the bag policy?&quot;,
      answer: &quot;Small bags and purses are permitted. Large bags and backpacks are subject to search.&quot;
    }
  ];

  // Tanger Outlets top stores
  const topStores = ['Nike', 'Coach', 'H&M', 'UGG', 'Under Armour', 'Polo Ralph Lauren', 'Kate Spade', 'Adidas', 'Columbia', 'Levi\&apos;s'];

  return (
    <div className=&quot;min-h-screen bg-gray-50 py-16&quot;>
      <div className=&quot;container-custom&quot;>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=&quot;mb-10 text-center&quot;
        >
          <h1 className=&quot;text-3xl md:text-4xl font-bold text-gray-800 mb-4&quot;>Our Destinations</h1>
          <p className=&quot;text-lg text-gray-600 max-w-3xl mx-auto&quot;>
            Explore the wonderful places we&apos;ll visit during our trip to Lancaster, Pennsylvania.
          </p>
        </motion.div>

        <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8 mb-12&quot;>
          {/* Tanger Outlets */}
          <DestinationCard
            title=&quot;Tanger Outlets&quot;
            description=&quot;Shop at over 60 brand name outlet stores with great savings on designer fashions.&quot;
            imageSrc=&quot;https://placehold.co/800x400/e2e8f0/4a6fa5?text=Tanger+Outlets&quot;
            imageAlt=&quot;Tanger Outlets Lancaster&quot;
            emoji=&quot;🛍️&quot;
          >
            <div className=&quot;space-y-4&quot;>
              <div className=&quot;flex items-start&quot;>
                <FaMapMarkerAlt className=&quot;text-blue-600 mt-1 mr-2 flex-shrink-0&quot; />
                <p className=&quot;text-gray-700&quot;>
                  <span className=&quot;font-medium&quot;>Address:</span> 311 Stanley K. Tanger Blvd, Lancaster, PA 17602
                </p>
              </div>
              
              <div className=&quot;flex items-start&quot;>
                <FaClock className=&quot;text-blue-600 mt-1 mr-2 flex-shrink-0&quot; />
                <p className=&quot;text-gray-700&quot;>
                  <span className=&quot;font-medium&quot;>Hours:</span> 10:00 AM - 9:00 PM
                </p>
              </div>
              
              <div>
                <h4 className=&quot;font-medium text-gray-800 mb-2&quot;>Top Stores:</h4>
                <div className=&quot;flex flex-wrap gap-2&quot;>
                  {topStores.map((store, index) => (
                    <span 
                      key={index}
                      className=&quot;bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm&quot;
                    >
                      {store}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </DestinationCard>

          {/* Miller&apos;s Smorgasbord */}
          <DestinationCard
            title=&quot;Miller&apos;s Smorgasbord&quot;
            description=&quot;Enjoy authentic Pennsylvania Dutch cooking at this famous Lancaster County restaurant.&quot;
            imageSrc=&quot;https://placehold.co/800x400/e2e8f0/4a6fa5?text=Miller&apos;s+Smorgasbord&quot;
            imageAlt=&quot;Miller&apos;s Smorgasbord Restaurant&quot;
            emoji=&quot;🍽️&quot;
          >
            <div className=&quot;space-y-4&quot;>
              <div className=&quot;flex items-start&quot;>
                <FaMapMarkerAlt className=&quot;text-blue-600 mt-1 mr-2 flex-shrink-0&quot; />
                <p className=&quot;text-gray-700&quot;>
                  <span className=&quot;font-medium&quot;>Address:</span> 2811 Lincoln Hwy East, Ronks, PA 17572
                </p>
              </div>
              
              <div className=&quot;flex items-start&quot;>
                <FaUtensils className=&quot;text-blue-600 mt-1 mr-2 flex-shrink-0&quot; />
                <div>
                  <h4 className=&quot;font-medium text-gray-800 mb-2&quot;>Menu Highlights:</h4>
                  <div className=&quot;grid grid-cols-1 sm:grid-cols-2 gap-4&quot;>
                    {menuSections.slice(0, 4).map((section, index) => (
                      <div key={index}>
                        <h5 className=&quot;font-medium text-blue-800 mb-1&quot;>{section.title}</h5>
                        <ul className=&quot;text-sm text-gray-600 space-y-1&quot;>
                          {section.items.slice(0, 3).map((item, idx) => (
                            <li key={idx}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </DestinationCard>
        </div>

        <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8 mb-12&quot;>
          {/* Amish Shops */}
          <DestinationCard
            title=&quot;Amish Shops&quot;
            description=&quot;Experience authentic Amish culture and craftsmanship at these local shops.&quot;
            imageSrc=&quot;https://placehold.co/800x400/e2e8f0/4a6fa5?text=Amish+Shops&quot;
            imageAlt=&quot;Amish Shops&quot;
            emoji=&quot;🏪&quot;
          >
            <div className=&quot;space-y-4&quot;>
              {amishShops.map((shop, index) => (
                <div key={index} className=&quot;border-b border-gray-100 pb-3 last:border-0&quot;>
                  <h4 className=&quot;font-medium text-gray-800&quot;>{shop.name}</h4>
                  <p className=&quot;text-sm text-gray-600 mb-1&quot;>{shop.description}</p>
                  <p className=&quot;text-sm text-blue-700&quot;>
                    <span className=&quot;font-medium&quot;>Specialty:</span> {shop.specialty}
                  </p>
                </div>
              ))}
            </div>
          </DestinationCard>

          {/* Sight &amp; Sound Theatre */}
          <DestinationCard
            title=&quot;Sight &amp; Sound Theatre&quot;
            description=&quot;Experience the spectacular 'NOAH' show at this renowned theatre known for bringing Bible stories to life.&quot;
            imageSrc=&quot;https://placehold.co/800x400/e2e8f0/4a6fa5?text=Sight+%26+Sound+Theatre&quot;
            imageAlt=&quot;Sight &amp; Sound Theatre&quot;
            emoji=&quot;🎭&quot;
          >
            <div className=&quot;space-y-4&quot;>
              <div className=&quot;flex items-start&quot;>
                <FaMapMarkerAlt className=&quot;text-blue-600 mt-1 mr-2 flex-shrink-0&quot; />
                <p className=&quot;text-gray-700&quot;>
                  <span className=&quot;font-medium&quot;>Address:</span> 300 Hartman Bridge Rd, Ronks, PA 17572
                </p>
              </div>
              
              <div className=&quot;flex items-start&quot;>
                <FaTheaterMasks className=&quot;text-blue-600 mt-1 mr-2 flex-shrink-0&quot; />
                <div>
                  <h4 className=&quot;font-medium text-gray-800 mb-1&quot;>Show: &quot;NOAH&quot;</h4>
                  <p className=&quot;text-sm text-gray-600&quot;>
                    Experience the timeless story of Noah&apos;s Ark brought to life with stunning sets, 
                    special effects, and live animals on stage and in the aisles.
                  </p>
                </div>
              </div>
              
              <div className=&quot;flex items-start&quot;>
                <FaQuestion className=&quot;text-blue-600 mt-1 mr-2 flex-shrink-0&quot; />
                <div>
                  <h4 className=&quot;font-medium text-gray-800 mb-2&quot;>Theatre FAQ:</h4>
                  <div className=&quot;space-y-3&quot;>
                    {theatreFaqs.map((faq, index) => (
                      <div key={index}>
                        <h5 className=&quot;font-medium text-gray-700 text-sm&quot;>{faq.question}</h5>
                        <p className=&quot;text-sm text-gray-600&quot;>{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </DestinationCard>
        </div>

        <div className=&quot;bg-blue-50 rounded-xl p-6 border border-blue-100&quot;>
          <h3 className=&quot;text-xl font-semibold mb-4 text-blue-800&quot;>Additional Information</h3>
          <p className=&quot;text-gray-700 mb-4&quot;>
            All destinations are within a short driving distance of each other in Lancaster County. 
            Our bus will transport you to each location according to the schedule.
          </p>
          <p className=&quot;text-gray-700&quot;>
            Please note that times at each location are approximate and may be adjusted slightly 
            based on traffic and group needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DestinationsPage;
