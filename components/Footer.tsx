import Link from 'next/link';
import { FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container-custom py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white tracking-wide border-b-2 border-blue-400 pb-2 inline-block">Kingdom Life Community Church</h3>
            </div>
            <p className="text-gray-300 mb-4">
              A one-day group trip to Lancaster, Pennsylvania, hosted by Kingdom Life Community Church (KLCC).
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/itinerary" className="text-gray-300 hover:text-white transition-colors">
                  Itinerary
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-gray-300 hover:text-white transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/transportation" className="text-gray-300 hover:text-white transition-colors">
                  Transportation
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-white mb-2">Kingdom Life Community Church (KLCC)</h4>
                <p className="flex items-center text-gray-300">
                  <FaEnvelope className="mr-2" />
                  <a href="mailto:mykingdomlifecommunitychurch@gmail.com" className="hover:text-white transition-colors">
                    mykingdomlifecommunitychurch@gmail.com
                  </a>
                </p>
                <p className="text-gray-300 mt-2">
                  Join us for Sunday worship at Bel Pre Elementary School<br />
                  13801 Rippling Brook Dr<br />
                  Silver Spring, MD
                </p>
                <p className="text-gray-300 mt-1 italic">
                  Come grow with us!
                </p>
              </div>
              

            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© {currentYear} Lancaster Trip Hub. All rights reserved.</p>
          <p className="mt-2 text-sm">
            An event by Kingdom Life Community Church (KLCC)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
