'use client';

// Removed unused useState import
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaClock, FaUtensils, FaTheaterMasks, FaQuestion } from 'react-icons/fa';
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
      name: "Anna's Gifts",
      description: "Handmade quilts, dolls, and home decor items crafted by local Amish artisans.",
      specialty: "Quilts and handmade crafts"
    },
    {
      name: "Ruthie's",
      description: "Traditional Amish foods including jams, jellies, pickles, and baked goods.",
      specialty: "Homemade jams and preserves"
    },
    {
      name: "Locally Made Shop",
      description: "Variety of Amish-made furniture, wooden toys, and kitchen accessories.",
      specialty: "Wooden furniture and crafts"
    }
  ];

  // Theatre FAQs
  const theatreFaqs = [
    {
      question: "What is the parking situation?",
      answer: "Free parking is available in the Sight &amp; Sound Theatre parking lot. Accessible parking spaces are available near the entrance."
    },
    {
      question: "Is the theatre accessible?",
      answer: "Yes, the theatre is fully accessible with wheelchair seating, accessible restrooms, and elevators."
    },
    {
      question: "Is there a dress code?",
      answer: "There is no formal dress code. Casual, comfortable attire is recommended."
    },
    {
      question: "What is the bag policy?",
      answer: "Small bags and purses are permitted. Large bags and backpacks are subject to search."
    }
  ];

  // Tanger Outlets top stores
  const topStores = ['Nike', 'Coach', 'H&M', 'UGG', 'Under Armour', 'Polo Ralph Lauren', 'Kate Spade', 'Adidas', 'Columbia', 'Levi\'s'];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Destinations</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore the wonderful places we&apos;ll visit during our trip to Lancaster, Pennsylvania.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Tanger Outlets */}
          <DestinationCard
            title="Tanger Outlets"
            description="Shop at over 60 brand name outlet stores with great savings on designer fashions."
            imageSrc="https://placehold.co/800x400/e2e8f0/4a6fa5?text=Tanger+Outlets"
            imageAlt="Tanger Outlets Lancaster"
            emoji="🛍️"
          >
            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                <p className="text-gray-700">
                  <span className="font-medium">Address:</span> 311 Stanley K. Tanger Blvd, Lancaster, PA 17602
                </p>
              </div>
              
              <div className="flex items-start">
                <FaClock className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                <p className="text-gray-700">
                  <span className="font-medium">Hours:</span> 10:00 AM - 9:00 PM
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Top Stores:</h4>
                <div className="flex flex-wrap gap-2">
                  {topStores.map((store, index) => (
                    <span 
                      key={index}
                      className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
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
            title="Miller's Smorgasbord"
            description="Enjoy authentic Pennsylvania Dutch cooking at this famous Lancaster County restaurant."
            imageSrc="https://placehold.co/800x400/e2e8f0/4a6fa5?text=Miller's+Smorgasbord"
            imageAlt="Miller's Smorgasbord Restaurant"
            emoji="🍽️"
          >
            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                <p className="text-gray-700">
                  <span className="font-medium">Address:</span> 2811 Lincoln Hwy East, Ronks, PA 17572
                </p>
              </div>
              
              <div className="flex items-start">
                <FaUtensils className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Menu Highlights:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {menuSections.slice(0, 4).map((section, index) => (
                      <div key={index}>
                        <h5 className="font-medium text-blue-800 mb-1">{section.title}</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Amish Shops */}
          <DestinationCard
            title="Amish Shops"
            description="Experience authentic Amish culture and craftsmanship at these local shops."
            imageSrc="https://placehold.co/800x400/e2e8f0/4a6fa5?text=Amish+Shops"
            imageAlt="Amish Shops"
            emoji="🏪"
          >
            <div className="space-y-4">
              {amishShops.map((shop, index) => (
                <div key={index} className="border-b border-gray-100 pb-3 last:border-0">
                  <h4 className="font-medium text-gray-800">{shop.name}</h4>
                  <p className="text-sm text-gray-600 mb-1">{shop.description}</p>
                  <p className="text-sm text-blue-700">
                    <span className="font-medium">Specialty:</span> {shop.specialty}
                  </p>
                </div>
              ))}
            </div>
          </DestinationCard>

          {/* Sight &amp; Sound Theatre */}
          <DestinationCard
            title="Sight &amp; Sound Theatre"
            description="Experience the spectacular 'NOAH' show at this renowned theatre known for bringing Bible stories to life."
            imageSrc="https://placehold.co/800x400/e2e8f0/4a6fa5?text=Sight+%26+Sound+Theatre"
            imageAlt="Sight &amp; Sound Theatre"
            emoji="🎭"
          >
            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                <p className="text-gray-700">
                  <span className="font-medium">Address:</span> 300 Hartman Bridge Rd, Ronks, PA 17572
                </p>
              </div>
              
              <div className="flex items-start">
                <FaTheaterMasks className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Show: &quot;NOAH&quot;</h4>
                  <p className="text-sm text-gray-600">
                    Experience the timeless story of Noah&apos;s Ark brought to life with stunning sets, 
                    special effects, and live animals on stage and in the aisles.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FaQuestion className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Theatre FAQ:</h4>
                  <div className="space-y-3">
                    {theatreFaqs.map((faq, index) => (
                      <div key={index}>
                        <h5 className="font-medium text-gray-700 text-sm">{faq.question}</h5>
                        <p className="text-sm text-gray-600">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </DestinationCard>
        </div>

        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
          <h3 className="text-xl font-semibold mb-4 text-blue-800">Additional Information</h3>
          <p className="text-gray-700 mb-4">
            All destinations are within a short driving distance of each other in Lancaster County. 
            Our bus will transport you to each location according to the schedule.
          </p>
          <p className="text-gray-700">
            Please note that times at each location are approximate and may be adjusted slightly 
            based on traffic and group needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DestinationsPage;
